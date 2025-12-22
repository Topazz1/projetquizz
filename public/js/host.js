import { db, ref, onValue, update } from './firebase-config.js';

// --- CONFIGURATION AUDIO ---
const audioPlayer = document.getElementById('audio-player-principal');
let isAudioUnlocked = false;

// --- DOM ELEMENTS ---
const statusText = document.getElementById('status-text');
const playersGrid = document.getElementById('players-grid');
const qrContainer = document.getElementById('qr-container');
const questionText = document.getElementById('question-text');
const progressBarContainer = document.getElementById('progress-bar-container');
const progressBar = document.getElementById('progress-bar');
const btnUnlock = document.getElementById('btn-unlock-audio');

let timerBuzzInterval = null;
let timerQuestionInterval = null;

// --- GESTION DU DÉBLOCAGE AUDIO ---
if(btnUnlock) {
    btnUnlock.addEventListener('click', async () => {
        console.log("🔓 Déblocage audio...");
        
        // On utilise ton fichier local qui marche
        audioPlayer.src = "assets/audio/silence.mp3";
        audioPlayer.volume = 0.5;
        
        try {
            await audioPlayer.play();
            console.log("✅ Audio système OK !");
            isAudioUnlocked = true;
            
            btnUnlock.innerText = "🔊 SON ACTIVÉ";
            btnUnlock.style.backgroundColor = "#2ecc71";
            btnUnlock.style.borderColor = "#2ecc71";
            setTimeout(() => { btnUnlock.style.display = 'none'; }, 1000);

        } catch (err) {
            console.error("❌ ERREUR DÉBLOCAGE :", err);
            alert("Erreur : Vérifie que 'silence.mp3' est bien dans assets/audio !");
        }
    });
}

// --- LOGIQUE JEU (Firebase) ---
const jeuRef = ref(db, 'etat_jeu');

onValue(jeuRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    if (data.phase === 'ATTENTE') {
        stopperTout();
        resetVisuelNeutre();
        if(statusText) {
            statusText.style.display = 'block';
            statusText.innerText = "SCANNEZ POUR REJOINDRE";
        }
        if(qrContainer) qrContainer.classList.remove('hidden');
        cacherElementsQuestion();
    } 
    else if (data.phase === 'QUESTION') {
        stopperTousLesTimers();
        if(qrContainer) qrContainer.classList.add('hidden');
        if(statusText) statusText.style.display = 'none';

        const q = data.question_data;
        if (q) {
            afficherLaQuestion(q);
            lancerBarreDeTemps(data.timestamp_start, q.duree);
            
            // Gestion Audio
            // ... dans le bloc if (data.phase === 'QUESTION') ...

            // Gestion Audio INTELLIGENTE (Fichier Local OU Recherche Auto)
            if (q.type === 'audio') {
                
                // CAS 1 : Tu as mis un fichier précis (ex: "ding.mp3" ou un lien direct)
                if (q.audioFile) {
                    lancerMusique(q.audioFile, q.startAt || 0);
                } 
                
                // CAS 2 : Tu as mis une recherche (ex: "Daft Punk Get Lucky")
                else if (q.searchQuery) {
                    // Le script va chercher le lien tout seul !
                    trouverLienItunes(q.searchQuery).then(lienTrouve => {
                        if (lienTrouve) {
                            lancerMusique(lienTrouve, 0);
                        } else {
                            // Si iTunes ne trouve rien, on ne plante pas le jeu
                            console.log("Pas de musique trouvée, tant pis !");
                        }
                    });
                }
            }
        }
    }
    else if (data.phase === 'BUZZ') {
        clearInterval(timerQuestionInterval);
        mettreMusiqueEnPause();
        cacherElementsQuestion();
        if(qrContainer) qrContainer.classList.add('hidden');
        if(statusText) statusText.style.display = 'block';
        
        if (statusText && !statusText.innerHTML.includes("BUZZ DE")) {
            lancerCompteAreboursBuzz(data.buzz_par);
        }
    }
    else if (data.phase === 'TIMES_UP') {
        stopperTout();
        cacherElementsQuestion();
        if(qrContainer) qrContainer.classList.add('hidden');
        if(statusText) {
            statusText.style.display = 'block';
            statusText.className = "mode-timesup";
            const laReponse = data.question_data ? data.question_data.reponse : "...";
            statusText.innerHTML = `RÉPONSE :<br><span style="color:#f1c40f; font-size: 0.8em">${laReponse}</span>`;
        }
    }
});

// --- FONCTIONS ---

function stopperTout() {
    stopperTousLesTimers();
    arreterMusique();
}

function stopperTousLesTimers() {
    if(timerBuzzInterval) clearInterval(timerBuzzInterval);
    if(timerQuestionInterval) clearInterval(timerQuestionInterval);
}

function resetVisuelNeutre() {
    if(statusText) {
        statusText.className = ""; 
        statusText.style.color = "";
    }
}

function cacherElementsQuestion() {
    if(questionText) questionText.style.display = 'none';
    if(progressBarContainer) progressBarContainer.style.display = 'none';
}

function afficherLaQuestion(q) {
    if(!questionText) return;
    questionText.style.display = 'block';
    
    // Taille par défaut
    let fontSize = "3rem";
    let texteAffiche = q.question;

    // GESTION DES TYPES
    if (q.type === 'emoji') {
        fontSize = "6rem";
    } 
    else if (q.type === 'audio') {
        texteAffiche = "🎶 ÉCOUTEZ BIEN...";
    }
    else if (q.type === 'vrai_faux') {
        fontSize = "3.5rem"; // Un peu plus gros
        // On ajoute un préfixe visuel pour mettre la pression
        texteAffiche = "⚡ VRAI OU FAUX ?\n" + q.question;
        questionText.style.color = "#ff7675"; // Petit effet rouge (optionnel)
    } else {
        // Reset couleur pour les questions normales
        questionText.style.color = "white";
    }
    
    questionText.style.fontSize = fontSize;
    questionText.innerText = texteAffiche;
    
    if(progressBarContainer) progressBarContainer.style.display = 'block';
}

// --- LECTEUR AUDIO (SIMPLE & EFFICACE) ---
async function lancerMusique(source, startAt = 0) {
    let chemin = source;
    
    // Détection fichier local
    if (!source.startsWith('http') && !source.startsWith('data:')) {
        chemin = `assets/audio/${source}`;
    }

    console.log("🎵 Lecture :", chemin);

    // Si c'est déjà le même son, on ne fait rien
    if (!audioPlayer.paused && audioPlayer.src.includes(encodeURI(source))) return;

    try {
        audioPlayer.src = chemin;
        audioPlayer.currentTime = startAt;
        
        // Petite pause technique pour laisser le temps au navigateur de comprendre
        await audioPlayer.play();
        console.log("🔊 Ça joue !");
        
    } catch (error) {
        // On ignore les erreurs d'interruption (si on buzze trop vite)
        if (error.name !== "AbortError") {
            console.error("❌ Erreur Audio :", error);
            // Si c'est encore NotSupported, c'est que le lien est vraiment mort
            if(error.name === "NotSupportedError") {
                console.warn("⚠️ Le lien audio semble invalide ou expiré.");
            }
        }
    }
}

function arreterMusique() {
    audioPlayer.pause();
    try { audioPlayer.currentTime = 0; } catch(e) {}
}

function mettreMusiqueEnPause() {
    audioPlayer.pause();
}

// --- BARRES & TIMERS ---
function lancerBarreDeTemps(debutTimestamp, dureeTotalSecondes) {
    if (!progressBar) return;
    progressBar.style.width = "100%";
    progressBar.style.background = "#f1c40f";

    timerQuestionInterval = setInterval(() => {
        const maintenant = Date.now();
        const tempsEcoule = (maintenant - debutTimestamp) / 1000;
        const pourcentageRestant = 100 - (tempsEcoule / dureeTotalSecondes * 100);

        if (pourcentageRestant > 0) {
            progressBar.style.width = pourcentageRestant + "%";
            if(pourcentageRestant < 30) progressBar.style.background = "#e74c3c";
        } else {
            progressBar.style.width = "0%";
            clearInterval(timerQuestionInterval);
            update(ref(db, 'etat_jeu'), { phase: 'TIMES_UP' });
        }
    }, 100);
}

function lancerCompteAreboursBuzz(pseudoJoueur) {
    let secondesRestantes = 10;
    if(statusText) statusText.className = "mode-buzz"; 
    
    const dessinerChrono = (t) => {
        if(statusText) statusText.innerHTML = `<div style="font-size: 1.5rem; margin-bottom:10px;">BUZZ DE ${pseudoJoueur}</div><span class="timer-big">${t}</span>`;
    };
    dessinerChrono(secondesRestantes);
    stopperTousLesTimers(); 

    timerBuzzInterval = setInterval(() => {
        secondesRestantes--;
        if (secondesRestantes > 0) {
            dessinerChrono(secondesRestantes);
        } else {
            clearInterval(timerBuzzInterval);
            if(statusText) {
                statusText.className = "mode-timesup";
                statusText.innerHTML = `TROP TARD !<br><div style="font-size:2rem">${pseudoJoueur}</div>`;
            }
            update(ref(db, 'etat_jeu'), { phase: 'TIMES_UP' });
        }
    }, 1000);
}

// --- JOUEURS ---
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
                div.innerHTML = `
                    <span class="player-avatar">${p.avatar || "😎"}</span>
                    <span class="player-name">${pseudo}</span>
                    <span class="player-score">${p.score} PTS</span>
                `;
                playersGrid.appendChild(div);
            });
    }
});

async function trouverLienItunes(recherche) {
    try {
        console.log("🔍 Recherche automatique iTunes pour :", recherche);
        
        // 1. On interroge l'API (comme tu l'as fait manuellement)
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(recherche)}&media=music&limit=1`;
        const response = await fetch(url);
        const data = await response.json();
        
        // 2. On vérifie si on a trouvé quelque chose
        if (data.results && data.results.length > 0) {
            const lien = data.results[0].previewUrl;
            console.log("🎯 Lien trouvé :", lien);
            return lien; // C'est ici qu'on récupère le .m4a !
        } else {
            console.warn("⚠️ Aucun résultat trouvé sur iTunes pour :", recherche);
            return null;
        }
    } catch (err) {
        console.error("❌ Erreur de recherche iTunes :", err);
        return null;
    }
}