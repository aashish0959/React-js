import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaATewbS6R6a5JQ-NpULfdbIbM11TF6cM",
  authDomain: "fir-pr-2ccf1.firebaseapp.com",
  projectId: "fir-pr-2ccf1",
  storageBucket: "fir-pr-2ccf1.firebasestorage.app",
  messagingSenderId: "674999801675",
  appId: "1:674999801675:web:4a4b15fe8da941ef9e3ace"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db,auth};