import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/auth';

import Input from '../../Components/Input';

import Banner from '../../Components/Banner';

import * as S from "./style";

export default function SignIn() {
    const { Logar, loadingAuth } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleLogin(e) {
        e.preventDefault()

        if (email !== '' && senha !== '') {
            Logar(email, senha);
        } else {
            alert('Digite login e senha para logar!!!')
        }

    }

    return (
        <S.Wrapper>
            <div>
                <Banner imagem={require('../../Imgs/banner.jpg')} title={'Faça seu Login'} />
            </div>
            <S.Container>
                <form onSubmit={handleLogin}>

                    <Input
                        value={email}
                        onchange={setEmail}
                        placeholder='E-mail: '
                        type="email"
                    />

                    <Input
                        value={senha}
                        onchange={setSenha}
                        placeholder='Senha'
                        type="password"
                    />

                    <button type='submit'>
                        {loadingAuth ? 'Carregando...' : 'Acessar a Conta'}
                    </button>

                    <Link to='/register'>Ainda não tem uma conta? Registre-se</Link>
                </form>
            </S.Container>
        </S.Wrapper>
    );
}