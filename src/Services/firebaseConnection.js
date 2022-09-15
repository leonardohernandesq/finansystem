import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyAxjeIWIsalPPdFsKublM-aN_-XgIN6anU",
    authDomain: "finansystem-e5034.firebaseapp.com",
    projectId: "finansystem-e5034",
    storageBucket: "finansystem-e5034.appspot.com",
    messagingSenderId: "131661957709",
    appId: "1:131661957709:web:c6396897c934a8ea76aa04",
    measurementId: "G-X2JKKT0C8C"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth }