import { db, ref, update, onValue, runTransaction } from './firebase-config.js';

// --- CONFIGURATION ---
const loginScreen = document.getElementById('login-screen');
const gameScreen = document.getElementById('game-screen');
const pseudoInput = document.getElementById('pseudo-input');
const emojiSelect = document.getElementById('emoji-select');
const btnValider = document.getElementById('btn-valider');
const buzzerBtn = document.getElementById('buzzer-btn');
const statusMsg = document.getElementById('status-msg');
const displayName = document.getElementById('display-name');

let monPseudo = "";

// Petit son de succès pour le téléphone
const dingSound = new Audio("https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg"); // Son libre de droit léger

// 1. LOGIN
btnValider.addEventListener('click', () => {
    const pseudo = pseudoInput.value.trim().toUpperCase();
    const avatar = emojiSelect.value;
    if (!pseudo) return alert("Mets un pseudo !");
    
    monPseudo = pseudo;
    displayName.innerText = `${avatar} ${monPseudo}`;
    
    update(ref(db, 'joueurs/' + monPseudo), { score: 0, avatar: avatar });
    loginScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
});

function resetBuzzerState() {
    buzzerBtn.className = ""; 
    buzzerBtn.disabled = false;
    buzzerBtn.innerText = "BUZZ !";
    buzzerBtn.style.removeProperty('background-color'); 
    buzzerBtn.style.removeProperty('color');
    statusMsg.innerText = "PRÊT ?";
    statusMsg.style.color = "white";
}

// 2. ÉCOUTE ETAT JEU
onValue(ref(db, 'etat_jeu'), (snapshot) => {
    const data = snapshot.val();
    
    if (!data || data.phase === 'ATTENTE') {
        resetBuzzerState();
    } 
    else if (data.phase === 'BUZZ') {
        buzzerBtn.disabled = true; 
        
        if (data.buzz_par === monPseudo) {
            // C'EST MOI ! (Return 2 : Indicateur Sonore)
            statusMsg.innerText = "C'EST TOI ! PARLE !";
            statusMsg.style.color = "#2ecc71";
            buzzerBtn.classList.add('winner');
            buzzerBtn.innerText = "🎤";
            
            // Vibration + Son
            if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
            dingSound.play().catch(e => console.log("Son bloqué par navigateur mobile"));
            
        } else {
            statusMsg.innerText = data.buzz_par + " parle...";
            statusMsg.style.color = "orange";
            buzzerBtn.classList.add('disabled');
            buzzerBtn.innerText = "🔒";
        }
    }
    else if (data.phase === 'TIMES_UP') {
        buzzerBtn.disabled = true;
        buzzerBtn.className = "disabled";
        buzzerBtn.innerText = "⏳";
        statusMsg.innerText = "Trop tard / Terminé";
    }
    else if (data.phase === 'PODIUM') {
        loginScreen.style.display = 'none';
        gameScreen.style.display = 'none';
        document.body.innerHTML = "<h1 style='color:gold; text-align:center; margin-top:50%;'>REGARDE LA TV ! 🏆</h1>";
    }
});

// 3. ACTION BUZZER
buzzerBtn.addEventListener('click', () => {
    if (navigator.vibrate) navigator.vibrate(50);
    
    runTransaction(ref(db, 'etat_jeu'), (etat) => {
        if (etat && etat.phase === 'QUESTION') {
            etat.phase = 'BUZZ';
            etat.buzz_par = monPseudo;
            etat.timestamp_buzz = Date.now();
            return etat;
        }
    });
});