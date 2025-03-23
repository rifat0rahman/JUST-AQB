import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPQvQbYAi4rIqgtCPWFov-omXlOHPycDE",
  authDomain: "just-academic-qb.firebaseapp.com",
  projectId: "just-academic-qb",
  storageBucket: "just-academic-qb.firebasestorage.app",
  messagingSenderId: "1018369271120",
  appId: "1:1018369271120:web:45357c46c135248605b855",
  measurementId: "G-M2YT3TQW8Y"
};


// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const firestore = app.firestore();

export { firestore };