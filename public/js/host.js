import { db, ref, onValue, update } from './firebase-config.js';

// --- CONFIG ---
const audioPlayer = document.getElementById('audio-player-principal');
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
let gameStarted = false; 
let countdownInterval = null; 

// --- AUDIO ---
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
    
    // B. LECTURE (3 SECONDES)
    else if (data.phase === 'READING') {
        gameStarted = true;
        stopperTousLesTimers();
        modeJeu();
        qrContainer.classList.add('hidden');
        
        const q = data.question_data;
        if (q) afficherLaQuestion(q);

        statusText.style.display = 'block';
        statusText.className = 'countdown-text';
        // On s'assure que le fond est transparent pour le compte à rebours
        statusText.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        lancerCompteAreboursDepart();
    }

    // C. QUESTION
    else if (data.phase === 'QUESTION') {
        clearInterval(countdownInterval);
        statusText.style.display = 'none';
        statusText.className = ""; 

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

    // D. BUZZ (C'EST LÀ QUE ÇA SE PASSE)
    else if (data.phase === 'BUZZ') {
        clearInterval(timerQuestionInterval);
        mettreMusiqueEnPause();
        questionText.style.display = 'none'; 
        
        if(statusText) {
            statusText.style.display = 'block';
            // On lance l'affichage coloré
            if (!statusText.classList.contains('mode-buzz')) lancerCompteAreboursBuzz(data.buzz_par);
        }
    }

    // E. TIMES_UP
    else if (data.phase === 'TIMES_UP') {
        stopperTout();
        questionText.style.display = 'none';
        
        if(statusText) {
            statusText.style.display = 'block';
            statusText.className = "mode-timesup";
            // On remet une couleur neutre (gris foncé) pour la réponse
            statusText.style.backgroundColor = "#2d3436"; 
            statusText.style.fontSize = "3rem";
            
            const laReponse = data.question_data ? data.question_data.reponse : "...";
            statusText.innerHTML = `RÉPONSE :<br><span style="color:#f1c40f; font-size: 1.2em">${laReponse}</span>`;
        }
    }

    // F. PODIUM
    else if (data.phase === 'PODIUM') {
        stopperTout();
        lancerPodium();
    }
});

// --- SCOREBOARD ---
let currentMode = 'SOLO';
let lastJoueurs = null;
let lastEquipes = null;

onValue(ref(db, 'etat_jeu/mode'), (snap) => { currentMode = snap.val() || 'SOLO'; renderScoreboard(); });
onValue(ref(db, 'joueurs'), (snap) => { lastJoueurs = snap.val(); renderScoreboard(); });
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
            Object.keys(lastJoueurs).sort((a,b) => lastJoueurs[b].score - lastJoueurs[a].score).forEach(pseudo => {
                const p = lastJoueurs[pseudo];
                const div = document.createElement('div');
                div.className = "player-card";
                div.innerHTML = `<span class="player-avatar">${p.avatar || "😎"}</span><span class="player-name">${pseudo}</span><span class="player-score">${p.score} PTS</span>`;
                playersGrid.appendChild(div);
            });
        }
    }
}

// --- FONCTION CLÉ : COULEUR DU BUZZ ---
function lancerCompteAreboursBuzz(pseudo) {
    let sec = 10;
    statusText.className = "mode-buzz"; 
    
    // 1. On détermine la couleur
    let buzzColor = "#9b59b6"; // VIOLET par défaut (Solo) pour ne pas confondre avec Rouge
    if(['ROUGE','BLEU','VERT','JAUNE'].includes(pseudo)) {
        buzzColor = getTeamColor(pseudo); // Couleur de l'équipe
    }
    
    // 2. On applique la couleur au bandeau
    statusText.style.backgroundColor = buzzColor;
    // Petit ajustement pour le jaune (texte noir si besoin, ou ombre portée)
    if(pseudo === 'JAUNE') {
        statusText.style.textShadow = "0 0 5px black"; 
    } else {
        statusText.style.textShadow = "";
    }

    const draw = (t) => statusText.innerHTML = `<div style="font-size: 1.5rem; margin-bottom:10px;">BUZZ DE<br>${pseudo}</div><span class="timer-big" style="font-size:4rem; margin-top:20px">${t}</span>`;
    
    draw(sec);
    stopperTousLesTimers(); 
    
    timerBuzzInterval = setInterval(() => {
        sec--;
        if (sec > 0) draw(sec);
        else {
            clearInterval(timerBuzzInterval);
            statusText.className = "mode-timesup";
            statusText.style.backgroundColor = "#2d3436"; // Retour au gris pour "TROP TARD"
            statusText.innerHTML = "TROP TARD !";
            update(ref(db, 'etat_jeu'), { phase: 'TIMES_UP' });
        }
    }, 1000);
}

function resetVisuelNeutre() {
    statusText.className = ""; 
    statusText.style.color = "";
    // On nettoie bien le style inline (la couleur de fond du buzz précédent)
    statusText.style.backgroundColor = ""; 
    statusText.style.textShadow = "";
    
    questionText.style.color = "white";
    questionText.style.opacity = "1";
}

// --- AUTRES FONCTIONS ---
function lancerCompteAreboursDepart() {
    let count = 3;
    statusText.innerText = count;
    statusText.style.fontSize = "8rem";
    statusText.style.color = "#f1c40f"; 
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        count--;
        if(count > 0) statusText.innerText = count;
        else clearInterval(countdownInterval);
    }, 1000);
}

function getTeamColor(nom) {
    if(nom === 'ROUGE') return '#e74c3c';
    if(nom === 'BLEU') return '#3498db';
    if(nom === 'VERT') return '#2ecc71';
    if(nom === 'JAUNE') return '#f1c40f';
    return '#7f8c8d';
}

function afficherLaQuestion(q) {
    questionText.style.display = 'block';
    questionText.style.opacity = "1";
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
    
    if(currentMode === 'EQUIPE' && lastEquipes) {
        const classement = ['ROUGE', 'BLEU', 'VERT', 'JAUNE'].map(c => ({ nom: c, score: lastEquipes[c] || 0 })).sort((a,b) => b.score - a.score);
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
function stopperTout() { stopperTousLesTimers(); arreterMusique(); }
function stopperTousLesTimers() { clearInterval(timerBuzzInterval); clearInterval(timerQuestionInterval); clearInterval(countdownInterval); }
function cacherElementsQuestion() { if(questionText) questionText.style.display = 'none'; if(progressBarContainer) progressBarContainer.style.display = 'none'; if(questionHeader) questionHeader.style.display = 'none'; }
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