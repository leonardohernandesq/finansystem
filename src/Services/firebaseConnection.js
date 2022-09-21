import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "**************************************",
    authDomain: "**************************************",
    projectId: "**************************************",
    storageBucket: "**************************************",
    messagingSenderId: "**************************************",
    appId: "**************************************",
    measurementId: "**************************************"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth }
