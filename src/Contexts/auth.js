import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import React, { useState, createContext } from "react";
import { db, auth } from '../Services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [signed, setSigned] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(false)

    // Verifica se tem usuário no banco de dados e faz login
    async function Logar(email, password) {
        setLoadingAuth(true);
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid;

                const userProfile = await getDoc(doc(db, "users", uid))

                let data = {
                    uid: uid,
                    nome: userProfile.data().nome,
                    avatarUrl: userProfile.data().avatarUrl,
                    email: value.user.email,
                }

                setUser(data)
                setSigned(true)
                setLoadingAuth(false)
            })
            .catch((error) => {
                console.log(error + 'Erro ao fazer o Login')
                setLoadingAuth(false)
            })
    }

    // Cadastra usuário no banco de dados
    async function SignUp(email, password, nome) {
        setLoadingAuth(true);
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await setDoc(doc(db, "users", uid), {
                    nome: nome,
                    avatarUrl: null,
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email,
                            avatarUrl: null,
                        }

                        setUser(data);
                        setSigned(true);
                        setLoadingAuth(false);
                        console.log('Conta Criada')
                    })
                    .catch((error) => {
                        console.log(error)
                        setLoadingAuth(false)
                    })
            })
            .catch(() => {
                console.log('erro ao criar conta')
                setLoadingAuth(false)
            })

    }

    // O usuário se desloga da sua conta
    async function SignOut() {
        await signOut(auth)
            .then(() => {
                setUser(null);
                setSigned(false);
                console.log('Deslogado');
            })
            .catch(() => {
                console.log('Erro ao deslogar, tente novamente')
            })
    }

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            signed,
            setSigned,
            loadingAuth,
            SignUp,
            Logar,
            SignOut,

        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider