import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC7UHaQ9ndrf58hQVr8LRpPGkQiYwUdUcU",
  authDomain: "nxusdxb.firebaseapp.com",
  projectId: "nxusdxb",
  storageBucket: "nxusdxb.firebasestorage.app",
  messagingSenderId: "518385929367",
  appId: "1:518385929367:web:c3bf8f1937b9e23443add2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
