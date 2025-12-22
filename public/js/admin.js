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
const btnSkip = document.getElementById('btn-skip'); 
const btnStop = document.getElementById('btn-stop-game'); 
const btnHardReset = document.getElementById('btn-hard-reset'); 

const checkboxAleatoire = document.getElementById('mode-aleatoire');
const checkboxAuto = document.getElementById('mode-auto'); 
const checkboxEquipe = document.getElementById('mode-equipe'); 

const compteurEl = document.getElementById('compteur-q');
const previewEl = document.getElementById('preview-q');

let questionsDispo = [];
let currentQuestionData = null;
let joueurQuiABuzze = "";
let isAutoRunning = false; 
let autoLaunchTimeout = null;
let isModeEquipe = false; 

// INIT
function initQuestions() {
    questionsDispo = [...questions];
    updateCompteur();
}
function updateCompteur() {
    if(compteurEl) compteurEl.innerText = `Questions : ${questionsDispo.length} / ${questions.length}`;
}

// MODE ÉQUIPE
checkboxEquipe.addEventListener('change', () => {
    isModeEquipe = checkboxEquipe.checked;
    update(ref(db, 'etat_jeu'), { mode: isModeEquipe ? 'EQUIPE' : 'SOLO' });
    if(isModeEquipe) {
        update(ref(db, 'equipes'), { ROUGE: 0, BLEU: 0, VERT: 0, JAUNE: 0 });
        alert("Mode ÉQUIPE activé !");
    } else {
        remove(ref(db, 'equipes'));
        alert("Retour au mode SOLO.");
    }
});

// NAVIGATION
btnNext.addEventListener('click', () => { lancerProchaineQuestion(); });

function lancerProchaineQuestion() {
    if(autoLaunchTimeout) clearTimeout(autoLaunchTimeout);

    if (questionsDispo.length === 0) {
        if(confirm("Plus de questions ! Finir ?")) finirPartie();
        return;
    }

    btnNext.style.display = 'none';
    btnSkip.style.display = 'block'; 
    
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

// CORRECTION BOUTON PASSER
btnSkip.addEventListener('click', () => {
    // Force la fin du temps, ce qui affiche la réponse sur la TV
    update(ref(db, 'etat_jeu'), { phase: 'TIMES_UP' });
    
    // Si personne n'a buzzé, on cache le bouton skip et on réaffiche le bouton suivant
    // Le host s'occupe d'afficher la réponse
    setTimeout(() => {
        if(isAutoRunning && checkboxAuto.checked) {
           // Si auto, le host va relancer
        } else {
           btnSkip.style.display = 'none';
           btnNext.style.display = 'block';
        }
    }, 1000);
});

btnReveal.addEventListener('click', () => { update(ref(db, 'etat_jeu'), { phase: 'TIMES_UP' }); });

btnStop.addEventListener('click', () => { if(confirm("Lancer le podium final ?")) finirPartie(); });

function finirPartie() {
    isAutoRunning = false;
    if(autoLaunchTimeout) clearTimeout(autoLaunchTimeout);
    btnNext.style.display = 'block';
    btnSkip.style.display = 'none';
    update(ref(db, 'etat_jeu'), { phase: 'PODIUM' });
}

btnHardReset.addEventListener('click', () => {
    if(confirm("TOUT EFFACER ?")) {
        set(ref(db, 'etat_jeu'), { phase: 'ATTENTE', buzz_par: '', question_data: null, mode: 'SOLO' });
        remove(ref(db, 'joueurs'));
        remove(ref(db, 'equipes'));
        window.location.reload();
    }
});

// ÉCOUTE
onValue(ref(db, 'etat_jeu'), (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    if (data.question_data) currentQuestionData = data.question_data;
    
    if (data.mode === 'EQUIPE') {
        isModeEquipe = true;
        if(!checkboxEquipe.checked) checkboxEquipe.checked = true;
    } else {
        isModeEquipe = false;
        if(checkboxEquipe.checked) checkboxEquipe.checked = false;
    }

    // PODIUM
    if (data.phase === 'PODIUM') {
        dashboard.style.display = 'none';
        zoneValidation.style.display = 'none';
        restartScreen.style.display = 'flex'; 
        return; 
    } else {
        dashboard.style.display = 'flex';
        restartScreen.style.display = 'none';
    }

    // GESTION BOUTONS
    if(data.phase === 'ATTENTE') {
        btnNext.style.display = 'block';
        btnSkip.style.display = 'none';
    }

    // VALIDATION
    if ((data.phase === 'BUZZ' || data.phase === 'TIMES_UP') && data.buzz_par) {
        joueurQuiABuzze = data.buzz_par;
        jugeJoueur.innerText = joueurQuiABuzze;
        jugeJoueur.style.color = getTeamColor(joueurQuiABuzze);
        zoneValidation.style.display = 'flex'; 
    } else {
        zoneValidation.style.display = 'none';
    }

    // AUTO
    if (data.phase === 'ATTENTE' && checkboxAuto.checked && isAutoRunning) {
        if(autoLaunchTimeout) clearTimeout(autoLaunchTimeout);
        autoLaunchTimeout = setTimeout(() => {
            if(checkboxAuto.checked && isAutoRunning) lancerProchaineQuestion();
        }, 3000);
    }
});

// VALIDATION
const handleValidation = (points) => {
    if (!joueurQuiABuzze) return;
    let path = ['ROUGE', 'BLEU', 'VERT', 'JAUNE'].includes(joueurQuiABuzze) 
        ? 'equipes/' + joueurQuiABuzze 
        : 'joueurs/' + joueurQuiABuzze + '/score';

    runTransaction(ref(db, path), (sc) => (sc || 0) + points).then(() => {
        isAutoRunning = true; 
        update(ref(db, 'etat_jeu'), { phase: 'ATTENTE', buzz_par: '', question_data: null });
    });
};

btnVrai.addEventListener('click', () => { handleValidation(currentQuestionData ? (currentQuestionData.points || 1) : 1); });
btnFaux.addEventListener('click', () => { handleValidation(currentQuestionData && currentQuestionData.malus ? currentQuestionData.malus : 0); });

function getTeamColor(nom) {
    if(nom === 'ROUGE') return '#e74c3c';
    if(nom === 'BLEU') return '#3498db';
    if(nom === 'VERT') return '#2ecc71';
    if(nom === 'JAUNE') return '#f1c40f';
    return '#f1c40f';
}

document.getElementById('btn-reset').addEventListener('click', () => {
    isAutoRunning = false;
    if(autoLaunchTimeout) clearTimeout(autoLaunchTimeout);
    btnNext.style.display = 'block';
    btnSkip.style.display = 'none';
    update(ref(db, 'etat_jeu'), { phase: 'ATTENTE', buzz_par: '', question_data: null });
});

document.getElementById('btn-kick-all').addEventListener('click', () => {
    if(confirm("Virer tout le monde ?")) remove(ref(db, 'joueurs'));
});

initQuestions();