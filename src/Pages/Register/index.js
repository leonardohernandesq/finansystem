import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Components/Input';

import Banner from '../../Components/Banner';

import * as S from "./style";

export default function Register() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [loadingRegister, setLoadingRegister] = useState(false)

    async function handleRegister(e) {
        e.preventDefault()
        setLoadingRegister(true)

        setTimeout(() => { setLoadingRegister(false) }, 700)

    }

    return (
        <S.Wrapper>
            <div>
                <Banner imagem={require('../../Imgs/banner.jpg')} title={'Registrando usuário'} />
            </div>
            <S.Container>
                <form onSubmit={handleRegister}>
                    <Input
                        value={nome}
                        onchange={setNome}
                        placeholder='Nome: '
                        type="text"
                    />

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

                    <Input
                        value={confirmarSenha}
                        onchange={setConfirmarSenha}
                        placeholder='Confirme sua senha'
                        type="password"
                    />

                    <button type='submit'>
                        {loadingRegister ? 'Carregando...' : 'Registrar Conta'}
                    </button>

                    <Link to='/'>Você já possui uma conta?</Link>
                </form>
            </S.Container>
        </S.Wrapper>
    );
}