import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Components/Input';

import Banner from '../../Components/Banner';

import * as S from "./style";

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [loadingRegister, setLoadingRegister] = useState(false)

    async function handleRegister(e) {
        e.preventDefault()
        setLoadingRegister(true)

        setTimeout(() => { setLoadingRegister(false) }, 700)

    }

    return (
        <S.Wrapper>
            <div>
                <Banner imagem={require('../../Imgs/banner.jpg')} title={'Faça seu Login'} />
            </div>
            <S.Container>
                <form onSubmit={handleRegister}>

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
                        {loadingRegister ? 'Carregando...' : 'Acessar a Conta'}
                    </button>

                    <Link to='/register'>Ainda não tem uma conta? Registre-se</Link>
                </form>
            </S.Container>
        </S.Wrapper>
    );
}