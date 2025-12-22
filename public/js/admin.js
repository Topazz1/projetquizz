import { questions } from './questions.js';
import { db, ref, set, update, runTransaction, onValue, remove } from './firebase-config.js';

// DOM Elements
const dashboard = document.getElementById('main-dashboard');
const restartScreen = document.getElementById('restart-screen');
const zoneValidation = document.getElementById('zone-validation');
const jugeJoueur = document.getElementById('juge-joueur');

const btnVrai = document.getElementById('btn-vrai');
const btnFaux = document.getElementById('btn-faux');
const btnReveal = document.getElementById('btn-reveal'); 

const btnNext = document.getElementById('btn-next-question');
// SUPPRIMÉ : const btnSkip ...
const btnStop = document.getElementById('btn-stop-game'); 
const btnHardReset = document.getElementById('btn-hard-reset'); 

const checkboxAleatoire = document.getElementById('mode-aleatoire');
const checkboxAuto = document.getElementById('mode-auto'); 
const compteurEl = document.getElementById('compteur-q');
const previewEl = document.getElementById('preview-q');

// Variables
let questionsDispo = [];
let currentQuestionData = null;
let joueurQuiABuzze = "";
let isAutoRunning = false; 
let autoLaunchTimeout = null;

// INIT
function initQuestions() {
    questionsDispo = [...questions];
    updateCompteur();
}
function updateCompteur() {
    if(compteurEl) compteurEl.innerText = `Questions : ${questionsDispo.length} / ${questions.length}`;
}

// --- BOUTON LANCER ---
btnNext.addEventListener('click', () => { lancerProchaineQuestion(); });

function lancerProchaineQuestion() {
    if(autoLaunchTimeout) clearTimeout(autoLaunchTimeout);

    if (questionsDispo.length === 0) {
        if(confirm("Plus de questions ! Finir ?")) finirPartie();
        return;
    }

    btnNext.style.display = 'none';
    // SUPPRIMÉ : btnSkip.style.display = 'block';
    
    let index = 0;
    if (checkboxAleatoire.checked) index = Math.floor(Math.random() * questionsDispo.length);
    
    const q = questionsDispo[index];
    questionsDispo.splice(index, 1);
    updateCompteur();
    
    previewEl.innerText = `En cours : ${q.searchQuery || q.question}`;

    update(ref(db, 'etat_jeu'), {
        phase: 'QUESTION',
        question_data: q,
        timestamp_start: Date.now(),
        buzz_par: ''
    });
}

// SUPPRIMÉ : btnSkip listener ...

// --- BOUTON RÉPONSE ---
btnReveal.addEventListener('click', () => {
    console.log("👀 Demande d'affichage de la réponse...");
    update(ref(db, 'etat_jeu'), { phase: 'TIMES_UP' });
});

// --- FINIR PARTIE & PODIUM ---
btnStop.addEventListener('click', () => {
    if(confirm("Lancer le podium final ?")) finirPartie();
});

function finirPartie() {
    isAutoRunning = false;
    if(autoLaunchTimeout) clearTimeout(autoLaunchTimeout);
    
    btnNext.style.display = 'block';
    // SUPPRIMÉ : btnSkip.style.display = 'none';
    
    update(ref(db, 'etat_jeu'), { phase: 'PODIUM' });
}

// --- HARD RESET ---
btnHardReset.addEventListener('click', () => {
    if(confirm("ATTENTION : Cela va effacer les joueurs et recharger le jeu. Sûr ?")) {
        set(ref(db, 'etat_jeu'), { phase: 'ATTENTE', buzz_par: '', question_data: null });
        remove(ref(db, 'joueurs')).then(() => {
            window.location.reload();
        });
    }
});


// --- ÉCOUTE DE L'ÉTAT DU JEU ---
onValue(ref(db, 'etat_jeu'), (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    if (data.question_data) currentQuestionData = data.question_data;

    // 1. Cas PODIUM
    if (data.phase === 'PODIUM') {
        dashboard.style.display = 'none';
        zoneValidation.style.display = 'none';
        restartScreen.style.display = 'flex'; 
        return; 
    } else {
        dashboard.style.display = 'flex';
        restartScreen.style.display = 'none';
    }

    // 2. Cas VALIDATION
    if ((data.phase === 'BUZZ' || data.phase === 'TIMES_UP') && data.buzz_par) {
        joueurQuiABuzze = data.buzz_par;
        if(jugeJoueur) jugeJoueur.innerText = joueurQuiABuzze;
        if(zoneValidation) zoneValidation.style.display = 'flex'; 
    } else {
        if(zoneValidation) zoneValidation.style.display = 'none';
    }

    // 3. Mode AUTO
    if (data.phase === 'ATTENTE' && checkboxAuto.checked && isAutoRunning) {
        if(autoLaunchTimeout) clearTimeout(autoLaunchTimeout);
        console.log("⏳ Mode Auto...");
        autoLaunchTimeout = setTimeout(() => {
            if(checkboxAuto.checked && isAutoRunning) lancerProchaineQuestion();
        }, 3000);
    }
});

// --- VALIDATION POINTS ---
const handleValidation = (points) => {
    if (!joueurQuiABuzze) return;
    runTransaction(ref(db, 'joueurs/' + joueurQuiABuzze + '/score'), (score) => (score || 0) + points)
    .then(() => {
        isAutoRunning = true; 
        set(ref(db, 'etat_jeu'), { phase: 'ATTENTE', buzz_par: '', question_data: null });
    });
};

btnVrai.addEventListener('click', () => {
    const pts = currentQuestionData ? (currentQuestionData.points || 1) : 1;
    handleValidation(pts);
});

btnFaux.addEventListener('click', () => {
    let pts = 0;
    if (currentQuestionData && currentQuestionData.malus) pts = currentQuestionData.malus;
    handleValidation(pts);
});

// Reset manuel
document.getElementById('btn-reset').addEventListener('click', () => {
    isAutoRunning = false;
    if(autoLaunchTimeout) clearTimeout(autoLaunchTimeout);
    btnNext.style.display = 'block';
    // SUPPRIMÉ : btnSkip.style.display = 'none';
    set(ref(db, 'etat_jeu'), { phase: 'ATTENTE', buzz_par: '', question_data: null });
});

document.getElementById('btn-kick-all').addEventListener('click', () => {
    if(confirm("Virer tout le monde ?")) remove(ref(db, 'joueurs'));
});

// Démarrage
initQuestions();