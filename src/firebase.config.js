// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9MbTqGqGSOmkpWJ9X10j2P74Mg23ein4",
    authDomain: "rolex-movixwebapp.firebaseapp.com",
    projectId: "rolex-movixwebapp",
    storageBucket: "rolex-movixwebapp.appspot.com",
    messagingSenderId: "618441783305",
    appId: "1:618441783305:web:6a4300f9613e74f100a0d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;