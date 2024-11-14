import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBuZ1_v3KIQsEeEfDF39uCjD_Dil6IPLAs",
  authDomain: "fir-49829.firebaseapp.com",
  projectId: "fir-49829",
  storageBucket: "fir-49829.appspot.com",
  messagingSenderId: "553475875983",
  appId: "1:553475875983:web:d598ef192acc7c1caafcfa",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db}