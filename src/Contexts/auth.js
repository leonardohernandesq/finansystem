import React, { useState, useEffect, createContext } from "react";

import { auth, db } from '../Services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false)

    async function Logar(email, password) {
        setLoadingAuth(true);
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('Logado')
                setLoadingAuth(false)
            })
            .catch((error) => {
                alert('Erro ao fazer o Login')
                setLoadingAuth(false)
            })
    }

    return (
        <AuthContext.Provider value={{ user, Logar, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider