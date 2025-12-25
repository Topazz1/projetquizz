import { db, ref, update, onValue, runTransaction } from './firebase-config.js';

// DOM
const loginScreen = document.getElementById('login-screen');
const teamSelectScreen = document.getElementById('team-select-screen');
const gameScreen = document.getElementById('game-screen');
const pseudoInput = document.getElementById('pseudo-input');
const emojiSelect = document.getElementById('emoji-select');
const btnValider = document.getElementById('btn-valider');
const buzzerBtn = document.getElementById('buzzer-btn');
const statusMsg = document.getElementById('status-msg');
const displayName = document.getElementById('display-name');

const teamBtns = document.querySelectorAll('.btn-team');

let monPseudo = "";
let monEquipe = ""; 
let isTeamMode = false;

const dingSound = new Audio("https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg"); 

// DÉTECTION MODE
onValue(ref(db, 'etat_jeu/mode'), (snapshot) => {
    const mode = snapshot.val();
    if (!monPseudo && !monEquipe) {
        if (mode === 'EQUIPE') {
            loginScreen.style.display = 'none';
            teamSelectScreen.style.display = 'flex';
            isTeamMode = true;
        } else {
            loginScreen.style.display = 'block';
            teamSelectScreen.style.display = 'none';
            isTeamMode = false;
        }
    }
});

// LOGIN
btnValider.addEventListener('click', () => {
    const pseudo = pseudoInput.value.trim().toUpperCase();
    const avatar = emojiSelect.value;
    if (!pseudo) return alert("Pseudo ?");
    monPseudo = pseudo;
    displayName.innerText = `${avatar} ${monPseudo}`;
    update(ref(db, 'joueurs/' + monPseudo), { score: 0, avatar: avatar });
    loginScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
});

teamBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const couleur = btn.getAttribute('data-color');
        monEquipe = couleur;
        monPseudo = couleur; 
        let bg = btn.style.background;
        buzzerBtn.style.setProperty('background-color', bg, 'important');
        displayName.innerText = `ÉQUIPE ${couleur}`;
        teamSelectScreen.style.display = 'none';
        gameScreen.style.display = 'flex';
    });
});

// RESET
function resetBuzzerState() {
    buzzerBtn.className = ""; 
    buzzerBtn.disabled = false;
    buzzerBtn.innerText = "BUZZ !";
    statusMsg.innerText = "PRÊT ?";
    statusMsg.style.color = "white";
    if (!monEquipe) buzzerBtn.style.removeProperty('background-color');
}

// ETAT DU JEU
onValue(ref(db, 'etat_jeu'), (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    // Phase ATTENTE
    if (data.phase === 'ATTENTE') {
        resetBuzzerState();
    }
    // Phase LECTURE (Nouveau) - BLOQUÉ
    else if (data.phase === 'READING') {
        buzzerBtn.disabled = true;
        buzzerBtn.className = "disabled";
        buzzerBtn.innerText = "⏳";
        statusMsg.innerText = "LISEZ...";
        statusMsg.style.color = "#f1c40f";
    }
    // Phase QUESTION - DÉBLOQUÉ
    else if (data.phase === 'QUESTION') {
        resetBuzzerState(); // C'est ici qu'on libère la bête !
        statusMsg.innerText = "À TOI !";
    }
    // Phase BUZZ
    else if (data.phase === 'BUZZ') {
        buzzerBtn.disabled = true; 
        if (data.buzz_par === monPseudo || data.buzz_par === monEquipe) {
            statusMsg.innerText = "PARLEZ !";
            statusMsg.style.color = "#2ecc71";
            buzzerBtn.classList.add('winner');
            buzzerBtn.innerText = "🎤";
            if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
            dingSound.play().catch(e => console.log("Son bloqué"));
        } else {
            statusMsg.innerText = data.buzz_par + " a buzzé";
            statusMsg.style.color = "orange";
            buzzerBtn.classList.add('disabled');
            buzzerBtn.innerText = "🔒";
        }
    }
    else if (data.phase === 'TIMES_UP') {
        buzzerBtn.disabled = true;
        buzzerBtn.className = "disabled";
        buzzerBtn.innerText = "⏳";
        statusMsg.innerText = "Terminé";
    }
});

// ACTION
buzzerBtn.addEventListener('click', () => {
    if (navigator.vibrate) navigator.vibrate(50);
    const buzzerName = monEquipe ? monEquipe : monPseudo;
    runTransaction(ref(db, 'etat_jeu'), (etat) => {
        if (etat && etat.phase === 'QUESTION') {
            etat.phase = 'BUZZ';
            etat.buzz_par = buzzerName;
            etat.timestamp_buzz = Date.now();
            return etat;
        }
    });
});