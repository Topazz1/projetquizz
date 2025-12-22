import { questions } from './questions.js';
import { db, ref, set, update, runTransaction, onValue, remove } from './firebase-config.js';

// --- ÉLÉMENTS DOM ---
const zoneValidation = document.getElementById('zone-validation');
const jugeJoueur = document.getElementById('juge-joueur');
const btnVrai = document.getElementById('btn-vrai');
const btnFaux = document.getElementById('btn-faux');

// Nouveaux éléments simplifiés
const btnNext = document.getElementById('btn-next-question');
const checkboxAleatoire = document.getElementById('mode-aleatoire');
const compteurEl = document.getElementById('compteur-q');
const previewEl = document.getElementById('preview-q');

// Boutons maintenance
const btnReset = document.getElementById('btn-reset');
const btnKickAll = document.getElementById('btn-kick-all');

// --- VARIABLES D'ÉTAT ---
let questionsDispo = []; // Notre "paquet de cartes"
let currentQuestionData = null;
let joueurQuiABuzze = "";

// --- 1. INITIALISATION DU "PAQUET" ---
function initQuestions() {
    // On fait une copie propre du fichier questions.js
    questionsDispo = [...questions];
    updateCompteur();
}

function updateCompteur() {
    if(compteurEl) {
        compteurEl.innerText = `Questions restantes : ${questionsDispo.length} / ${questions.length}`;
    }
    
    if (questionsDispo.length === 0) {
        btnNext.innerText = "🏁 FIN DE LA PARTIE (Relancer ?)";
        btnNext.classList.remove('btn-vert');
        btnNext.classList.add('btn-gris');
    }
}

// --- 2. LE GROS BOUTON "QUESTION SUIVANTE" ---
btnNext.addEventListener('click', () => {
    // Sécurité : Si plus de questions
    if (questionsDispo.length === 0) {
        if(confirm("Toutes les questions sont passées ! Veux-tu recharger le paquet ?")) {
            initQuestions();
            btnNext.innerText = "🚀 LANCER LA PROCHAINE QUESTION";
            btnNext.classList.add('btn-vert');
            btnNext.classList.remove('btn-gris');
        }
        return;
    }

    let indexChoisi = 0;

    // A. Mode Aléatoire
    if (checkboxAleatoire.checked) {
        // On tire un nombre au hasard entre 0 et le nombre de questions restantes
        indexChoisi = Math.floor(Math.random() * questionsDispo.length);
    } 
    // B. Mode Ordre (Normal)
    else {
        indexChoisi = 0; // On prend toujours la première du paquet
    }

    // --- LA MAGIE : On récupère la question et ON L'ENLÈVE du paquet ---
    const q = questionsDispo[indexChoisi];
    questionsDispo.splice(indexChoisi, 1); // Hop, poubelle ! Elle ne reviendra plus.
    
    updateCompteur(); // On met à jour le texte "49/50"

    // Affichage pour l'admin (juste pour info)
    let titre = q.searchQuery || q.question;
    previewEl.innerText = `En cours : ${titre} (${q.type})`;

    // --- ENVOI À FIREBASE (Lancement réel) ---
    update(ref(db, 'etat_jeu'), {
        phase: 'QUESTION',
        question_data: q,
        timestamp_start: Date.now(),
        buzz_par: ''
    });
});


// --- 3. ÉCOUTE ET VALIDATION (Reste identique à avant) ---
onValue(ref(db, 'etat_jeu'), (snapshot) => {
    const data = snapshot.val();
    if (data) {
        if (data.question_data) currentQuestionData = data.question_data;

        // Affichage Overlay Juge seulement si buzz
        if ((data.phase === 'BUZZ' || data.phase === 'TIMES_UP') && data.buzz_par) {
            joueurQuiABuzze = data.buzz_par;
            if(jugeJoueur) jugeJoueur.innerText = joueurQuiABuzze;
            if(zoneValidation) zoneValidation.style.display = 'flex'; 
        } else {
            if(zoneValidation) zoneValidation.style.display = 'none';
            joueurQuiABuzze = "";
        }
    }
});

// Validation VRAI
btnVrai.addEventListener('click', () => {
    if (!joueurQuiABuzze) return;
    const points = currentQuestionData ? (currentQuestionData.points || 1) : 1;
    
    runTransaction(ref(db, 'joueurs/' + joueurQuiABuzze + '/score'), (score) => (score || 0) + points);
    resetJeu();
});

// Validation FAUX
btnFaux.addEventListener('click', () => {
    if (!joueurQuiABuzze) return;
    if (currentQuestionData && currentQuestionData.malus) {
        runTransaction(ref(db, 'joueurs/' + joueurQuiABuzze + '/score'), (score) => (score || 0) + currentQuestionData.malus);
    }
    resetJeu();
});

// Fonctions Reset / Kick
btnReset.addEventListener('click', () => {
    resetJeu();
    if(zoneValidation) zoneValidation.style.display = 'none';
});

btnKickAll.addEventListener('click', () => {
    if(confirm("Virer tout le monde ?")) {
        remove(ref(db, 'joueurs'));
        resetJeu();
    }
});

function resetJeu() {
    set(ref(db, 'etat_jeu'), {
        phase: 'ATTENTE',
        buzz_par: '',
        question_data: null
    });
}

// Lancement au chargement de la page
initQuestions();