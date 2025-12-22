// js/firebase-config.js

// 1. On ajoute 'runTransaction' dans la liste des imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, onValue, update, runTransaction, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// TA CONFIGURATION (Ne change pas tes clés, elles sont bonnes)
const firebaseConfig = {
  apiKey: "AIzaSyC3UQcmtkWCdmWnG3d3FZYLNHzOBA7Zaok",
  authDomain: "quizzroomhome.firebaseapp.com",
  databaseURL: "https://quizzroomhome-default-rtdb.firebaseio.com/",
  projectId: "quizzroomhome",
  storageBucket: "quizzroomhome.firebasestorage.app",
  messagingSenderId: "996744798598",
  appId: "1:996744798598:web:3c9fdac114c1411a64cc07"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 2. IMPORTANT : On exporte 'runTransaction' ici aussi
export { db, ref, set, onValue, update, runTransaction, remove };