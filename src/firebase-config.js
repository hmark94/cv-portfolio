// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoMjRXEuI5lDj-A4Iaf-4aRQuGlnceri0",
  authDomain: "cv-portfolio-87576.firebaseapp.com",
  databaseURL: "https://cv-portfolio-87576-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cv-portfolio-87576",
  storageBucket: "cv-portfolio-87576.appspot.com",
  messagingSenderId: "515413695285",
  appId: "1:515413695285:web:fe6cb29a72f9c6b80a0a7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);