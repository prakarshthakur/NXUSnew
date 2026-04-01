import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    OAuthProvider,
    signInWithPopup,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAWn-vrFZcNQSl0icAp12IOsBxjOxESJw",
    authDomain: "nxus-f0954.firebaseapp.com",
  projectId: "nxus-f0954",
  storageBucket: "nxus-f0954.firebasestorage.app",
  messagingSenderId: "419494261103",
  appId: "1:419494261103:web:6c90fc72db49c125ccb89a",
  measurementId: "G-WSB27VYN43"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if user is already logged in and auto-redirect
onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = 'feed.html';
    }
});

// Providers
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
  display: 'popup'
});

// Elements
const authForm = document.getElementById('authForm');
const googleSignInBtn = document.getElementById('googleSignInBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameInput = document.getElementById('name');
// Determine if we are logging in or signing up based on the active tab UI state
function isSignupMode() {
    return document.getElementById('nameGroup').style.display !== 'none';
}

function handleSuccess(userCredential) {
    console.log("Authentication successful! User:", userCredential.user);
    window.location.href = 'feed.html';
}

function handleError(error) {
    console.error("Error code:", error.code, "Message:", error.message);
    let errorMessage = error.message;
    if (error.code === 'auth/invalid-credential') errorMessage = 'Invalid email or password.';
    if (error.code === 'auth/email-already-in-use') errorMessage = 'This email is already registered.';
    if (error.code === 'auth/weak-password') errorMessage = 'The password is too weak.';
    
    alert(`Authentication Failed: ${errorMessage}`);
}

// Form Submission (Email + Password)
authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    
    try {
        if (isSignupMode()) {
            // Sign Up Path
            // Note: Saving "name" requires an extra step (updateProfile) which we can omit for simplicity
            // or perform after creation, but the critical requirement is saving to the database.
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            handleSuccess(userCredential);
        } else {
            // Login Path
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            handleSuccess(userCredential);
        }
    } catch (error) {
        handleError(error);
    }
});

// Google Login
googleSignInBtn.addEventListener('click', async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        handleSuccess(result);
    } catch (error) {
        handleError(error);
    }
});
