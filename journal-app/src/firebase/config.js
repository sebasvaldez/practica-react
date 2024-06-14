// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHdJxFlfvX88h_vOpYuNRku0gWIbLfCOM",
  authDomain: "react-curso-a6ba4.firebaseapp.com",
  projectId: "react-curso-a6ba4",
  storageBucket: "react-curso-a6ba4.appspot.com",
  messagingSenderId: "589965652767",
  appId: "1:589965652767:web:d0acee45d9f5666917b62a"
};

// Initialize Firebase
export const FirebasApp = initializeApp(firebaseConfig);

export const firebaseAuth= getAuth(FirebasApp);
export const FirebaseDB= getFirestore(FirebasApp);