import { db, ref, set, onValue, runTransaction, update } from './firebase-config.js';

// Éléments du DOM
const loginScreen = document.getElementById('login-screen');
const gameScreen = document.getElementById('game-screen');
const pseudoInput = document.getElementById('pseudo-input');
const emojiSelect = document.getElementById('emoji-select'); // Nouveau !
const btnValider = document.getElementById('btn-valider');
const buzzerBtn = document.getElementById('buzzer-btn');
const statusMsg = document.getElementById('status-msg');
const displayName = document.getElementById('display-name');

let monPseudo = "";

// 1. Gestion du Login
btnValider.addEventListener('click', () => {
    const pseudo = pseudoInput.value.trim().toUpperCase();
    const avatar = emojiSelect.value; // On récupère l'emoji

    if (!pseudo) return alert("Mets un pseudo !");

    monPseudo = pseudo;
    displayName.innerText = `${avatar} ${monPseudo}`; // On affiche l'emoji en bas

    // On enregistre le joueur dans la DB
    const updates = {};
    updates['/joueurs/' + monPseudo] = {
        score: 0,
        avatar: avatar
    };
    update(ref(db), updates);

    loginScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
});

// Fonction pour remettre le buzzer à zéro (ROUGE et CLIQUABLE)
function resetBuzzerState() {
    buzzerBtn.className = ""; // Enlève 'winner', 'disabled'
    buzzerBtn.disabled = false;
    buzzerBtn.innerText = "BUZZ !";
    
    // CORRECTION ICI : On supprime le style forcé pour laisser le CSS gérer
    buzzerBtn.style.removeProperty('background-color'); 
    buzzerBtn.style.removeProperty('color');
    
    statusMsg.innerText = "À TOI DE JOUER !";
    statusMsg.style.color = "white";
}

// 2. Écouter l'état du jeu
const jeuRef = ref(db, 'etat_jeu');

onValue(jeuRef, (snapshot) => {
    const data = snapshot.val();
    
    // Si pas de données ou si on est en ATTENTE, on reset tout
    if (!data || data.phase === 'ATTENTE') {
        resetBuzzerState();
    } 
    else if (data.phase === 'BUZZ') {
        // Le jeu est bloqué
        buzzerBtn.disabled = true; 
        
        if (data.buzz_par === monPseudo) {
            // C'est GAGNÉ pour moi
            statusMsg.innerText = "TU AS LA MAIN !";
            statusMsg.style.color = "#2ecc71"; // Vert
            buzzerBtn.classList.add('winner');
            buzzerBtn.innerText = "PARLE !"; // En attendant le timer
        } else {
            // C'est PERDU pour moi
            statusMsg.innerText = data.buzz_par + " a buzzé !";
            statusMsg.style.color = "orange";
            buzzerBtn.classList.add('disabled');
            buzzerBtn.innerText = "TROP TARD";
        }
    }
    else if (data.phase === 'TIMES_UP') {
        // Le temps est écoulé, on fige tout le monde
        buzzerBtn.disabled = true;
        
        // On rend le bouton gris/neutre pour tout le monde
        buzzerBtn.className = "disabled"; // Assure-toi d'avoir le style .disabled dans le CSS
        buzzerBtn.style.removeProperty('background-color'); // On vire le rouge/vert
        
        buzzerBtn.innerText = "⏳"; // Petit sablier
        statusMsg.innerText = "Validation en cours...";
        statusMsg.style.color = "orange";
    }
});

// 3. L'action de BUZZER
buzzerBtn.addEventListener('click', () => {
    // Petit effet vibratoire sur mobile
    if (navigator.vibrate) navigator.vibrate(200);

    const buzzRef = ref(db, 'etat_jeu');

    // Dans la transaction du bouton buzzer
runTransaction(buzzRef, (etatActuel) => {
    // On autorise le buzz si on est en phase QUESTION (et plus ATTENTE)
    if (!etatActuel || etatActuel.phase !== 'QUESTION') {
        return; 
    }

    if (etatActuel.phase === 'QUESTION') {
        etatActuel.phase = 'BUZZ';
        etatActuel.buzz_par = monPseudo;
        etatActuel.timestamp_buzz = Date.now(); // IMPORTANT pour le bonus < 3s
        return etatActuel;
    }
    });
});