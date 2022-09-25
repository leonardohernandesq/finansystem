import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/auth'
import { Link } from "react-router-dom";

import * as S from "./style";

export default function Header() {
    const { SignOut } = useContext(AuthContext)

    return (
        <S.Wrapper>
            <S.Container>
                <header>
                    <Link to='/'><img src={require('../../Imgs/Logo.png')} alt="Logo da empresa composto por uma nota de dolar escrito embaixo o nome da empresa FinanSystem" /></Link>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/profile'>Perfil</Link>
                        <Link to='/registerfinance'>Registrar</Link>
                        <Link to='/suporte'>Suporte</Link>
                        <button onClick={() => SignOut()}>Sair</button>
                    </nav>
                </header>
            </S.Container>
        </S.Wrapper>
    );
}