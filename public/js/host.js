import { db, ref, onValue, update } from './firebase-config.js';

// --- CONFIG AUDIO ---
const audioPlayer = document.getElementById('audio-player-principal');
let isAudioUnlocked = false;

// --- DOM ELEMENTS ---
const statusText = document.getElementById('status-text');
const playersGrid = document.getElementById('players-grid');
const qrContainer = document.getElementById('qr-container');
const questionText = document.getElementById('question-text');
const questionHeader = document.getElementById('question-header'); // Return 4
const progressBarContainer = document.getElementById('progress-bar-container');
const progressBar = document.getElementById('progress-bar');
const btnUnlock = document.getElementById('btn-unlock-audio');
const gameContainer = document.getElementById('game-container');
const podiumScreen = document.getElementById('podium-screen');
const podiumContainer = document.getElementById('podium-container');

let timerBuzzInterval = null;
let timerQuestionInterval = null;

// --- DÉBLOCAGE AUDIO ---
if(btnUnlock) {
    btnUnlock.addEventListener('click', async () => {
        audioPlayer.src = "assets/audio/silence.mp3";
        audioPlayer.volume = 0.5;
        try {
            await audioPlayer.play();
            btnUnlock.innerText = "🔊 SON OK";
            btnUnlock.style.backgroundColor = "#2ecc71";
            setTimeout(() => { btnUnlock.style.display = 'none'; }, 1000);
        } catch (err) { alert("Erreur audio (vérifie assets/audio/silence.mp3)"); }
    });
}

// --- LOGIQUE JEU ---
onValue(ref(db, 'etat_jeu'), (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    // A. ATTENTE
    if (data.phase === 'ATTENTE') {
        stopperTout();
        modeJeu(); // Affiche écran jeu, cache podium
        resetVisuelNeutre();
        if(statusText) {
            statusText.style.display = 'block';
            statusText.innerText = "PRÊTS ?";
            statusText.style.fontSize = "4rem";
        }
        if(qrContainer) qrContainer.classList.add('hidden'); // On cache le QR code quand ça joue
        cacherElementsQuestion();
    } 
    // B. QUESTION
    else if (data.phase === 'QUESTION') {
        stopperTousLesTimers();
        modeJeu();
        if(qrContainer) qrContainer.classList.add('hidden');
        if(statusText) statusText.style.display = 'none';

        const q = data.question_data;
        if (q) {
            afficherLaQuestion(q);
            lancerBarreDeTemps(data.timestamp_start, q.duree);
            
            // Audio
            if (q.type === 'audio') {
                if (q.audioFile) lancerMusique(q.audioFile, q.startAt || 0);
                else if (q.searchQuery) {
                    trouverLienItunes(q.searchQuery).then(lien => { if(lien) lancerMusique(lien, 0); });
                }
            }
        }
    }
    // C. BUZZ
    else if (data.phase === 'BUZZ') {
        clearInterval(timerQuestionInterval);
        mettreMusiqueEnPause();
        cacherElementsQuestion();
        if(statusText) {
            statusText.style.display = 'block';
            // Return 2 : Nom en GROS géré par CSS .mode-buzz
            if (!statusText.classList.contains('mode-buzz')) lancerCompteAreboursBuzz(data.buzz_par);
        }
    }
    // D. FIN / TIMES_UP
    else if (data.phase === 'TIMES_UP') {
        stopperTout();
        cacherElementsQuestion();
        if(statusText) {
            statusText.style.display = 'block';
            statusText.className = "mode-timesup";
            statusText.style.fontSize = "3rem";
            const laReponse = data.question_data ? data.question_data.reponse : "...";
            statusText.innerHTML = `RÉPONSE :<br><span style="color:#f1c40f; font-size: 1.2em">${laReponse}</span>`;
        }
    }
    // E. PODIUM (Return 7)
    else if (data.phase === 'PODIUM') {
        stopperTout();
        lancerPodium();
    }
});

// --- AFFICHAGE QUESTION (Return 4 & 5) ---
function afficherLaQuestion(q) {
    questionText.style.display = 'block';
    
    // Header Info
    const pts = q.points || 1;
    const cat = q.categorie || "QUESTION";
    const typeLabel = (q.type === 'vrai_faux') ? "VRAI / FAUX" : (q.type === 'audio' ? "BLIND TEST" : "QUIZ");
    questionHeader.style.display = 'flex';
    questionHeader.innerHTML = `
        <span class="header-cat">${cat}</span>
        <span class="header-sub">${typeLabel} • ${pts} PTS</span>
    `;

    // Contenu
    let texte = q.question;
    let taille = "3rem";

    if (q.type === 'audio') texte = "🎶 ÉCOUTEZ BIEN...";
    else if (q.type === 'emoji') {
        taille = "6rem";
        // On peut ajouter le thème dans le texte si besoin, mais c'est déjà dans le header
    }
    else if (q.type === 'vrai_faux') {
        texte = "⚡ " + q.question;
        questionText.style.color = "#ff7675";
    }

    questionText.style.fontSize = taille;
    questionText.innerText = texte;
    progressBarContainer.style.display = 'block';
}

// --- PODIUM (Return 7) ---
function lancerPodium() {
    gameContainer.style.display = 'none';
    podiumScreen.style.display = 'flex';
    podiumContainer.innerHTML = "";

    // On récupère les joueurs une dernière fois
    onValue(ref(db, 'joueurs'), (snapshot) => {
        const joueurs = snapshot.val();
        if(!joueurs) return;

        // Tri décroissant
        const classement = Object.keys(joueurs)
            .map(pseudo => ({ pseudo, ...joueurs[pseudo] }))
            .sort((a,b) => b.score - a.score);

        // On affiche du dernier au premier
        let delay = 0;
        // On inverse pour l'animation (afficher le dernier en premier)
        const ordreApparition = [...classement].reverse();

        ordreApparition.forEach((j, index) => {
            const rang = classement.length - index; // Calcul du vrai rang (1er, 2e...)
            
            const div = document.createElement('div');
            div.className = "podium-row";
            if(rang === 1) div.classList.add('winner'); // Le premier

            div.innerHTML = `
                <div style="display:flex; align-items:center; gap:15px;">
                    <span style="font-size:1.5em; color:#7f8c8d;">#${rang}</span>
                    <span>${j.avatar} ${j.pseudo}</span>
                </div>
                <span>${j.score} PTS</span>
            `;
            podiumContainer.prepend(div); // On ajoute en haut de la liste (donc le 1er sera tout en haut)

            // Animation
            setTimeout(() => {
                div.classList.add('reveal');
                if(rang === 1) {
                    // Confettis pour le premier !
                    const myCanvas = document.createElement('canvas');
                    document.body.appendChild(myCanvas);
                    myCanvas.style.position = "fixed";
                    myCanvas.style.top = "0";
                    myCanvas.style.left = "0";
                    myCanvas.style.width = "100%";
                    myCanvas.style.height = "100%";
                    myCanvas.style.pointerEvents = "none";
                    myCanvas.style.zIndex = "999";
                    
                    var myConfetti = confetti.create(myCanvas, { resize: true });
                    myConfetti({ particleCount: 200, spread: 160 });
                }
            }, delay);
            delay += 1500; // 1.5s entre chaque joueur
        });
    }, { onlyOnce: true });
}

function modeJeu() {
    gameContainer.style.display = 'flex';
    podiumScreen.style.display = 'none';
    questionHeader.style.display = 'none';
}

// --- UTILITAIRES ---
function stopperTout() {
    clearInterval(timerBuzzInterval);
    clearInterval(timerQuestionInterval);
    arreterMusique();
}
function stopperTousLesTimers() {
    clearInterval(timerBuzzInterval);
    clearInterval(timerQuestionInterval);
}
function resetVisuelNeutre() {
    statusText.className = ""; 
    statusText.style.color = "";
    questionText.style.color = "white";
}
function cacherElementsQuestion() {
    if(questionText) questionText.style.display = 'none';
    if(progressBarContainer) progressBarContainer.style.display = 'none';
    if(questionHeader) questionHeader.style.display = 'none';
}

// --- AUDIO & TIMERS (Garde ton code précédent, il est bon) ---
// (J'ai repris les fonctions essentielles pour que tu aies le fichier complet)
async function lancerMusique(source, startAt = 0) {
    let chemin = source;
    if (!source.startsWith('http') && !source.startsWith('data:')) chemin = `assets/audio/${source}`;
    if (!audioPlayer.paused && audioPlayer.src.includes(encodeURI(source))) return;
    try {
        audioPlayer.src = chemin;
        audioPlayer.currentTime = startAt;
        await audioPlayer.play();
    } catch (e) { console.log(e); }
}
function arreterMusique() { audioPlayer.pause(); }
function mettreMusiqueEnPause() { audioPlayer.pause(); }

// Recherche iTunes
async function trouverLienItunes(recherche) {
    try {
        const r = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(recherche)}&media=music&limit=1`);
        const d = await r.json();
        return (d.results && d.results.length > 0) ? d.results[0].previewUrl : null;
    } catch (e) { return null; }
}

function lancerBarreDeTemps(debut, duree) {
    progressBar.style.width = "100%";
    progressBar.style.background = "#f1c40f";
    timerQuestionInterval = setInterval(() => {
        const p = 100 - ((Date.now() - debut) / 1000 / duree * 100);
        if (p > 0) {
            progressBar.style.width = p + "%";
            if(p < 30) progressBar.style.background = "#e74c3c";
        } else {
            clearInterval(timerQuestionInterval);
            update(ref(db, 'etat_jeu'), { phase: 'TIMES_UP' });
        }
    }, 100);
}

function lancerCompteAreboursBuzz(pseudo) {
    let sec = 10;
    statusText.className = "mode-buzz"; 
    const draw = (t) => statusText.innerHTML = `BUZZ DE<br><div style="margin-top:20px">${pseudo}</div><span class="timer-big" style="font-size:4rem; margin-top:20px">${t}</span>`;
    draw(sec);
    stopperTousLesTimers(); 
    timerBuzzInterval = setInterval(() => {
        sec--;
        if (sec > 0) draw(sec);
        else {
            clearInterval(timerBuzzInterval);
            statusText.className = "mode-timesup";
            statusText.innerHTML = "TROP TARD !";
            update(ref(db, 'etat_jeu'), { phase: 'TIMES_UP' });
        }
    }, 1000);
}

// Liste Joueurs
onValue(ref(db, 'joueurs'), (snapshot) => {
    if(!playersGrid) return;
    playersGrid.innerHTML = ""; 
    const joueurs = snapshot.val();
    if (joueurs) {
        Object.keys(joueurs)
            .sort((a,b) => joueurs[b].score - joueurs[a].score)
            .forEach(pseudo => {
                const p = joueurs[pseudo];
                const div = document.createElement('div');
                div.className = "player-card";
                div.innerHTML = `<span class="player-avatar">${p.avatar}</span><span class="player-name">${pseudo}</span><span class="player-score">${p.score}</span>`;
                playersGrid.appendChild(div);
            });
    }
});