
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDcS68Z9hLwZrVN8hJmlH5tYCW_1JptSE",
  authDomain: "authentication-d7904.firebaseapp.com",
  projectId: "authentication-d7904",
  storageBucket: "authentication-d7904.appspot.com", 
  messagingSenderId: "114882104193",
  appId: "1:114882104193:web:e5e9dd842912f142f0f680",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const provider = new GoogleAuthProvider(); 

export { auth, provider };
