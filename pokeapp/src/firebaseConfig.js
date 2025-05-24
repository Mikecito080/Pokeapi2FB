import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6vxDDy7ghdp3LUuRIbz55uIFg33tBeZo",
    authDomain: "pokeapi2-e7676.firebaseapp.com",
    projectId: "pokeapi2-e7676",
    storageBucket: "pokeapi2-e7676.firebasestorage.app",
    messagingSenderId: "565660682526",
    appId: "1:565660682526:web:ca6485893b70a27779e10f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };