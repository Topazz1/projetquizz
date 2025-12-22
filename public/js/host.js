import { db, ref, onValue, update } from './firebase-config.js';

// --- CONFIG AUDIO ---
const audioPlayer = document.getElementById('audio-player-principal');
let isAudioUnlocked = false;

// --- DOM ELEMENTS ---
const statusText = document.getElementById('status-text');
const playersGrid = document.getElementById('players-grid');
const qrContainer = document.getElementById('qr-container');
const questionText = document.getElementById('question-text');
const questionHeader = document.getElementById('question-header'); 
const progressBarContainer = document.getElementById('progress-bar-container');
const progressBar = document.getElementById('progress-bar');
const btnUnlock = document.getElementById('btn-unlock-audio');
const gameContainer = document.getElementById('game-container');
const podiumScreen = document.getElementById('podium-screen');
const podiumContainer = document.getElementById('podium-container');

let timerBuzzInterval = null;
let timerQuestionInterval = null;
let gameStarted = false; // Pour savoir si on cache le QR code définitivement

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
        } catch (err) { alert("Erreur audio"); }
    });
}

// --- LOGIQUE JEU ---
const jeuRef = ref(db, 'etat_jeu');

onValue(jeuRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    // A. ATTENTE
    if (data.phase === 'ATTENTE') {
        stopperTout();
        modeJeu(); 
        resetVisuelNeutre();
        
        statusText.style.display = 'block';
        
        // CORRECTION ICI : Si le jeu a commencé, on ne montre plus le QR code
        if (gameStarted) {
            statusText.innerText = "PRÉPAREZ-VOUS...";
            statusText.style.fontSize = "4rem";
            qrContainer.classList.add('hidden');
        } else {
            statusText.innerText = "SCANNEZ POUR REJOINDRE";
            qrContainer.classList.remove('hidden');
        }
        
        cacherElementsQuestion();
    } 
    // B. QUESTION
    else if (data.phase === 'QUESTION') {
        gameStarted = true; // C'est parti !
        stopperTousLesTimers();
        modeJeu();
        qrContainer.classList.add('hidden');
        statusText.style.display = 'none';

        const q = data.question_data;
        if (q) {
            afficherLaQuestion(q);
            lancerBarreDeTemps(data.timestamp_start, q.duree);
            
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
        // On cache la question pour éviter l'overlap
        questionText.style.display = 'none'; 
        
        if(statusText) {
            statusText.style.display = 'block';
            if (!statusText.classList.contains('mode-buzz')) lancerCompteAreboursBuzz(data.buzz_par);
        }
    }
    // D. FIN / TIMES_UP
    else if (data.phase === 'TIMES_UP') {
        stopperTout();
        questionText.style.display = 'none'; // On cache la question
        
        if(statusText) {
            statusText.style.display = 'block';
            statusText.className = "mode-timesup";
            statusText.style.fontSize = "3rem";
            const laReponse = data.question_data ? data.question_data.reponse : "...";
            statusText.innerHTML = `RÉPONSE :<br><span style="color:#f1c40f; font-size: 1.2em">${laReponse}</span>`;
        }
    }
    // E. PODIUM
    else if (data.phase === 'PODIUM') {
        stopperTout();
        lancerPodium();
    }
});

// --- AFFICHAGE SCOREBOARD ---
let currentMode = 'SOLO';
onValue(ref(db, 'etat_jeu/mode'), (snap) => { currentMode = snap.val() || 'SOLO'; renderScoreboard(); });
let lastJoueurs = null;
onValue(ref(db, 'joueurs'), (snap) => { lastJoueurs = snap.val(); renderScoreboard(); });
let lastEquipes = null;
onValue(ref(db, 'equipes'), (snap) => { lastEquipes = snap.val(); renderScoreboard(); });

function renderScoreboard() {
    if(!playersGrid) return;
    playersGrid.innerHTML = "";

    if(currentMode === 'EQUIPE') {
        if (lastEquipes) {
            ['ROUGE', 'BLEU', 'VERT', 'JAUNE'].forEach(couleur => {
                const score = lastEquipes[couleur] || 0;
                const div = document.createElement('div');
                div.className = "team-card-score";
                div.style.background = getTeamColor(couleur);
                div.innerHTML = `<div class="team-name">${couleur}</div><div class="team-score">${score}</div>`;
                playersGrid.appendChild(div);
            });
        }
    } else {
        if (lastJoueurs) {
            Object.keys(lastJoueurs)
                .sort((a,b) => lastJoueurs[b].score - lastJoueurs[a].score)
                .forEach(pseudo => {
                    const p = lastJoueurs[pseudo];
                    const div = document.createElement('div');
                    div.className = "player-card";
                    div.innerHTML = `<span class="player-avatar">${p.avatar || "😎"}</span><span class="player-name">${pseudo}</span><span class="player-score">${p.score}</span>`;
                    playersGrid.appendChild(div);
                });
        }
    }
}

// --- UTILITAIRES ---
function getTeamColor(nom) {
    if(nom === 'ROUGE') return '#e74c3c';
    if(nom === 'BLEU') return '#3498db';
    if(nom === 'VERT') return '#2ecc71';
    if(nom === 'JAUNE') return '#f1c40f';
    return '#7f8c8d';
}

function afficherLaQuestion(q) {
    questionText.style.display = 'block';
    const pts = q.points || 1;
    const cat = q.categorie || "QUESTION";
    const typeLabel = (q.type === 'vrai_faux') ? "VRAI / FAUX" : (q.type === 'audio' ? "BLIND TEST" : "QUIZ");
    questionHeader.style.display = 'flex';
    questionHeader.innerHTML = `<span class="header-cat">${cat}</span><span class="header-sub">${typeLabel} • ${pts} PTS</span>`;

    let texte = q.question;
    let taille = "3rem";
    if (q.type === 'audio') texte = "🎶 ÉCOUTEZ BIEN...";
    else if (q.type === 'emoji') taille = "6rem";
    else if (q.type === 'vrai_faux') {
        texte = "⚡ " + q.question;
        questionText.style.color = "#ff7675";
    } else questionText.style.color = "white";

    questionText.style.fontSize = taille;
    questionText.innerText = texte;
    progressBarContainer.style.display = 'block';
}

function lancerPodium() {
    gameContainer.style.display = 'none';
    podiumScreen.style.display = 'flex';
    podiumContainer.innerHTML = "";
    
    // GESTION PODIUM HYBRIDE
    if(currentMode === 'EQUIPE' && lastEquipes) {
        const classement = ['ROUGE', 'BLEU', 'VERT', 'JAUNE']
            .map(c => ({ nom: c, score: lastEquipes[c] || 0 }))
            .sort((a,b) => b.score - a.score);
        
        let delay = 0;
        [...classement].reverse().forEach((eq, index) => {
            const rang = classement.length - index;
            const div = document.createElement('div');
            div.className = "podium-row";
            if(rang === 1) div.classList.add('winner');
            div.innerHTML = `<div style="display:flex; align-items:center; gap:15px;"><span style="font-size:1.5em; color:${getTeamColor(eq.nom)};">#${rang} ${eq.nom}</span></div><span>${eq.score} PTS</span>`;
            podiumContainer.prepend(div);
            setTimeout(() => { div.classList.add('reveal'); if(rang === 1) lanceConfettis(); }, delay);
            delay += 1000;
        });
    } else if (lastJoueurs) {
        const classement = Object.keys(lastJoueurs).map(pseudo => ({ pseudo, ...lastJoueurs[pseudo] })).sort((a,b) => b.score - a.score);
        let delay = 0;
        [...classement].reverse().forEach((j, index) => {
            const rang = classement.length - index; 
            const div = document.createElement('div');
            div.className = "podium-row";
            if(rang === 1) div.classList.add('winner');
            div.innerHTML = `<div style="display:flex; align-items:center; gap:15px;"><span style="font-size:1.5em; color:#7f8c8d;">#${rang}</span><span>${j.avatar} ${j.pseudo}</span></div><span>${j.score} PTS</span>`;
            podiumContainer.prepend(div);
            setTimeout(() => { div.classList.add('reveal'); if(rang === 1) lanceConfettis(); }, delay);
            delay += 1500;
        });
    }
}

function lanceConfettis() {
    const myCanvas = document.createElement('canvas');
    document.body.appendChild(myCanvas);
    myCanvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:999";
    confetti.create(myCanvas, { resize: true })({ particleCount: 200, spread: 160 });
}

function modeJeu() {
    gameContainer.style.display = 'flex';
    podiumScreen.style.display = 'none';
    questionHeader.style.display = 'none';
}

function stopperTout() {
    stopperTousLesTimers();
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
async function lancerMusique(source, startAt = 0) {
    let chemin = source;
    if (!source.startsWith('http') && !source.startsWith('data:')) chemin = `assets/audio/${source}`;
    if (audioPlayer.src === chemin && !audioPlayer.paused) return;
    try {
        audioPlayer.src = chemin;
        audioPlayer.currentTime = startAt;
        await audioPlayer.play();
    } catch (e) { console.log(e); }
}
function arreterMusique() { audioPlayer.pause(); }
function mettreMusiqueEnPause() { audioPlayer.pause(); }
async function trouverLienItunes(recherche) {
    try {
        const r = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(recherche)}&media=music&limit=1`);
        const d = await r.json();
        return (d.results && d.results.length > 0) ? d.results[0].previewUrl : null;
    } catch (e) { return null; }
}
function lancerBarreDeTemps(debut, duree) {
    if (!progressBar) return;
    progressBar.style.width = "100%";
    progressBar.style.background = "#f1c40f";
    timerQuestionInterval = setInterval(() => {
        const p = 100 - ((Date.now() - debut) / 1000 / duree * 100);
        if (p > 0) {
            progressBar.style.width = p + "%";
            if(p < 30) progressBar.style.background = "#e74c3c";
        } else {
            progressBar.style.width = "0%";
            clearInterval(timerQuestionInterval);
            update(ref(db, 'etat_jeu'), { phase: 'TIMES_UP' });
        }
    }, 100);
}
function lancerCompteAreboursBuzz(pseudo) {
    let sec = 10;
    statusText.className = "mode-buzz"; 
    const draw = (t) => statusText.innerHTML = `<div style="font-size: 1.5rem; margin-bottom:10px;">BUZZ DE ${pseudo}</div><span class="timer-big" style="font-size:4rem; margin-top:20px">${t}</span>`;
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