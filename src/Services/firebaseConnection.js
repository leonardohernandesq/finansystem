import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "**************************************",
    authDomain: "**************************************",
    projectId: "**************************************",
    storageBucket: "**************************************",
    messagingSenderId: "**************************************",
    appId: "**************************************",
    measurementId: "**************************************"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }
