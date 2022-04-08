
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvk3oRJGKyEfYHSu0oHr54DCY_33KC_20",
  authDomain: "newbfirebliss.firebaseapp.com",
  projectId: "newbfirebliss",
  storageBucket: "newbfirebliss.appspot.com",
  messagingSenderId: "991043079007",
  appId: "1:991043079007:web:44332de77aeb69684144ea",
  measurementId: "G-XKZ11J1E89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)

export default fireDB;