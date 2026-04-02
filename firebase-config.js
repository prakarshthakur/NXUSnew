import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC7UHaQ9ndrf58hQVr8LRpPGkQiYwUdUcU",
    authDomain: "nxusdxb.firebaseapp.com",
    projectId: "nxusdxb",
    storageBucket: "nxusdxb.firebasestorage.app",
    messagingSenderId: "518385929367",
    appId: "1:518385929367:web:c3bf8f1937b9e23443add2",
    measurementId: "G-22P27KCMNZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
