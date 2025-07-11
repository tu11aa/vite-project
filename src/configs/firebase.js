// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-first-project-54bd1.firebaseapp.com",
  projectId: "my-first-project-54bd1",
  storageBucket: "my-first-project-54bd1.firebasestorage.app",
  messagingSenderId: "1060829759691",
  appId: "1:1060829759691:web:9c420845c4b8e83c1d334e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
