# 🎯 projetquizz // Real-Time Distributed Quiz & Buzzer System

> A multi-screen, low-latency live quiz system powered by **Vanilla JavaScript (ES Modules)** and **Firebase Realtime Database**, inspired by television game shows and interactive trivia rooms.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![Firebase](https://img.shields.io/badge/Firebase-Realtime_DB-FFCA28?style=flat-square&logo=firebase&logoColor=black)](#)
[![Hosting](https://img.shields.io/badge/Hosted_on-Firebase_Hosting-039BE5?style=flat-square&logo=firebase&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-Flexbox%20%26%20Keyframes-1572B6?style=flat-square&logo=css3&logoColor=white)](#)

---

## 📌 Overview

**projetquizz** synchronizes three specialized runtime interfaces around a single live game loop:
1. **The TV Presentation Stage (`host.html`):** The central broadcast display showing current questions, animated timers, real-time leaderboard scores, and an automated winner podium.
2. **The Game Master Tablet (`admin.html`):** An administrative control deck to sequence questions, inspect upcoming queries, adjudicate player buzzes, award points or penalties, and trigger audio cues.
3. **The Mobile Player Buzzer (`buzzer.html`):** A lightweight, touch-optimized web client that turns any smartphone into an ultra-low-latency physical buzzer upon scanning an onboarding QR code.

```text
                        ┌─────────────────────────────────┐
                        │   Firebase Realtime Database    │
                        │    (Path: /etat_jeu, /joueurs)   │
                        └───────────────┬─────────────────┘
                                        │
                 Real-Time WebSockets & Atomic Transactions
                                        │
         ┌──────────────────────────────┼──────────────────────────────┐
         ▼                              ▼                              ▼
┌───────────────────┐          ┌───────────────────┐          ┌───────────────────┐
│  Host Display TV  │          │  Admin Dashboard  │          │  Mobile Buzzers   │
│   (`host.html`)   │          │  (`admin.html`)   │          │  (`buzzer.html`)  │
│                   │          │                   │          │                   │
│ • Live Questions  │          │ • Game Director   │          │ • Avatar Selection│
│ • Animated Timers │          │ • Arbitrate Buzz  │          │ • Atomic Buzzer   │
│ • Player Grid     │          │ • Score Injection │          │ • Visual Feedback │
│ • Final Podium    │          │ • Mode Auto/Random│          │ • Lockout State   │
└───────────────────┘          └───────────────────┘          └───────────────────┘

```

---

## ⚡ Key Engineering Features

### 1. Atomic Concurrency & State Machine (`admin.js` & Firebase Realtime DB)

* **Zero Race Conditions on Buzzers:** Uses atomic updates on `/etat_jeu` to capture the exact millisecond a player buzzes (`buzz_par`), automatically transitioning the state to `BUZZ` and locking out competing buzzers simultaneously across all clients.

* **Deterministic State Flow:** Orchestrated around well-defined game lifecycle phases:

$$\text{ATTENTE} \longrightarrow \text{QUESTION} \longrightarrow \text{BUZZ} \longrightarrow \text{TIMES\_UP} \longrightarrow \text{PODIUM}$$


* **Atomic Score Attribution:** Utilizes Firebase `runTransaction` on player scores to prevent conflicting writes during rapid point updates.



### 2. Game Master Command Deck (`admin.html` / `admin.js`)

* **Arbitration Overlay:** Instant pop-up overlay revealing who buzzed, with quick-action validation buttons (True / False / Reveal Answer) linked to dynamic scoring and penalty rules.

* **Automated Progression:** Includes an optional automatic mode (`mode-auto`) that delays and launches subsequent questions without manual intervention.

* **Session Governance:** Real-time controls for random question shuffling, quick question resets, and global room eviction (`kick-all`).



### 3. Broadcaster Presentation Stage (`host.html` / `host.css`)

* **Zero-Friction Onboarding:** Dynamic QR code display (`quizzroomhome.web.app`) allowing participants to jump into the room instantly without app installation.

* **Kinetic UI & Visual Feedback:** Screen-wide shake and pulse animations when a buzzer is hit (`mode-buzz`), CSS linear gradient countdown bars, and synchronized particle confetti upon podium reveal.



### 4. Low-Latency Mobile Client (`buzzer.html` / `buzzer.css`)

* **Mobile-First Touch Ergonomics:** Full-screen responsive viewport eliminating scroll behavior, with a circular haptic-like button changing states from armed (red) to disabled (dark grey lockout) or active-winner (green pulse).

* **Avatar Identity System:** Custom player handle onboarding coupled with expressive emoji identity selection.



---

## 🛠️ Tech Stack

* **Core Frontend:** Semantic HTML5, Modular JavaScript (ES6 Modules)

* **Styles & Transitions:** CSS3 Custom Properties, Keyframe Animations, Viewport Units (`vh`/`vw`), Flexbox/Grid layouts

* **Backend as a Service:** [Firebase Realtime Database](https://firebase.google.com/docs/database) (Real-time synchronization engine & atomic transactions)

* **Hosting Infrastructure:** [Firebase Hosting](https://firebase.google.com/docs/hosting)

* **Libraries:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)


---

## 📂 Project Structure

```text
projetquizz/
├── assets/
│   └── qr-code.png          # Onboarding QR Code for mobile players
├── css/
│   ├── admin.css            # Game Master control deck layout & overlays
│   ├── buzzer.css           # Mobile touch viewport & buzzer animations
│   └── host.css             # TV presentation, timer bar & podium styling
├── js/
│   ├── admin.js             # Game orchestration, transactions & timer logic
│   ├── buzzer.js            # Client buzzer input & socket listeners
│   ├── firebase-config.js   # Firebase app credentials & database references
│   ├── host.js              # Broadcast view updates & podium sequencer
│   └── questions.js         # Question banks, themes, points, and maluses
├── admin.html               # Game Master interface
├── buzzer.html              # Mobile player buzzer client
├── host.html                # Main broadcast TV dashboard
├── 404.html                 # Fallback routing page
└── README.md

```

---

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone [https://github.com/Topazz1/projetquizz.git](https://github.com/Topazz1/projetquizz.git)
cd projetquizz

```

### 2. Configure Firebase

Create or update `js/firebase-config.js` with your Firebase project credentials:

```javascript
import { initializeApp } from "[https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js](https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js)";
import { getDatabase, ref, set, update, runTransaction, onValue, remove } 
  from "[https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js](https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js)";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, update, runTransaction, onValue, remove };

```

### 3. Local Development

Serve the files with any static web server (such as Live Server or Python's HTTP server):

```bash
# Using Python
python3 -m http.server 8080

```

* Open `http://localhost:8080/host.html` on your primary screen.

* Open `http://localhost:8080/admin.html` on the controller device.

* Open `http://localhost:8080/buzzer.html` on participating smartphones.



---

## 👤 Author

**Tom Padovani**

Computer Science & Socio-Technical Systems (Hutech) Engineering Student — **UTC Compiègne**

* LinkedIn: [@tom-padovani](https://www.linkedin.com/in/tom-padovani-2b0b87382/)
* GitHub: [@tomPadovani](https://github.com/Topazz1)
