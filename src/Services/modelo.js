// trocar o nome desse arquivo para firebaseConnection.js e preencher os dados abaixo

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "************************************",
    authDomain: "************************************",
    projectId: "************************************",
    storageBucket: "************************************",
    messagingSenderId: "************************************",
    appId: "************************************",
    measurementId: "************************************",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);
const storage = getStorage(firebase)

export { db, auth, storage }