
// Firebase configuration and initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiivzpIEsKhfOe2EMY3m3OxBmXjdAL8pQ",
  authDomain: "zowi-9f8e8.firebaseapp.com",
  databaseURL: "https://zowi-9f8e8-default-rtdb.firebaseio.com",
  projectId: "zowi-9f8e8",
  storageBucket: "zowi-9f8e8.firebasestorage.app",
  messagingSenderId: "581091477130",
  appId: "1:581091477130:web:462d677514a86f7d06cf73",
  measurementId: "G-TCJQ1L7BGZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
