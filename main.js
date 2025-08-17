import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const statusEl = document.getElementById('status');

document.getElementById('registerBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const uid = userCredential.user.uid;
            set(ref(db, 'users/' + uid), {
                email: email,
                approved: false,
                prepayment_status: "pending"
            });
            statusEl.textContent = "Registration successful! Waiting for admin approval.";
            statusEl.style.color = "green";
        })
        .catch(error => {
            statusEl.textContent = "Registration error: " + error.message;
            statusEl.style.color = "red";
        });
});

document.getElementById('loginBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const uid = userCredential.user.uid;
            get(child(ref(db), 'users/' + uid)).then(snapshot => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    if (userData.approved && userData.prepayment_status === "approved") {
                        window.location.href = "https://skillshop.exceedlms.com/student/activity/11601-youtube-asset-monetization?sid=0874d4a4-2bad-449c-8c0e-37569fb3455b&si";
                    } else {
                        statusEl.textContent = "Account not approved or prepayment pending.";
                        statusEl.style.color = "red";
                    }
                } else {
                    statusEl.textContent = "No user data found.";
                    statusEl.style.color = "red";
                }
            });
        })
        .catch(error => {
            statusEl.textContent = "Login error: " + error.message;
            statusEl.style.color = "red";
        });
});
