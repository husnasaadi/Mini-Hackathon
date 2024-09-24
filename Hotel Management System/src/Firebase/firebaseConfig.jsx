// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";
import  { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdN1qNLgjeUalN-WKcritcx9R9QnraV9M",
  authDomain: "react-hackathon-cb0dd.firebaseapp.com",
  projectId: "react-hackathon-cb0dd",
  storageBucket: "react-hackathon-cb0dd.appspot.com",
  messagingSenderId: "504904923755",
  appId: "1:504904923755:web:2fa83f741281fdcd85cf2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {db,auth};