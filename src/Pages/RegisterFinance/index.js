import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Contexts/auth'
import * as S from './style';

import { db } from '../../Services/firebaseConnection'
import { collection, addDoc } from 'firebase/firestore'

import Banner from '../../Components/Banner'
import RadioModelDespesa from '../../Components/RadioModelDespesa';
import RadioModelLucro from '../../Components/RadioModelLucro';


export default function RegisterFinance() {
    const { user } = useContext(AuthContext)

    const [valor, setValor] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [radioCategory, setRadioCategory] = useState('');


    // Envia o formulário criando o requerimento
    function handleSubmit(e) {
        e.preventDefault()

        if (status === "" || valor === "" || description === "" || radioCategory === "") {
            alert('Preencha todos os campos')
        } else {
            handleRegisterFinance()
        }
    }

    // Cadastra uma finança no banco de dados
    async function handleRegisterFinance() {
        await addDoc(collection(db, "financas"), {
            Userid: user.uid,
            valor: valor,
            descricao: description,
            status: status,
            categoria: radioCategory,
        })
            .then(() => {
                console.log('Cadastrado com Sucesso!')
            })
            .catch((error) => {
                console.log('Ocorreu um erro')
            })
    }

    return (
        <S.Wrapper>
            <Banner imagem={require('../../Imgs/banner.jpg')} title='Cadastrar Finanças' />
            <S.Container>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Digite o valor:"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />
                    <input
                        placeholder="Digite a descrição:"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)} >
                        <option value='' disabled hidden>Selecione um status válido</option>
                        <option value='Despesa'>Despesa</option>
                        <option value='Lucro'>Lucro</option>
                    </select>

                    {status === 'Despesa' ?
                        <>
                            <h2>Selecione qual a despesa abaixo:</h2>
                            <div className='divRadio' value={radioCategory} onChange={(e) => setRadioCategory(e.target.value)}>
                                <RadioModelDespesa category='Comida' checked={radioCategory} />
                                <RadioModelDespesa category='Remédio' />
                                <RadioModelDespesa category='Lazer' />
                                <RadioModelDespesa category='Mercado' />
                                <RadioModelDespesa category='Contas' />
                                <RadioModelDespesa category='Viagens' />
                                <RadioModelDespesa category='Outros' />
                            </div>
                        </>
                        :
                        <>
                            <h2>Selecione qual a lucro abaixo:</h2>
                            <div className='divRadio' value={radioCategory} onChange={(e) => setRadioCategory(e.target.value)}>
                                <RadioModelLucro category='Serviços' checked={radioCategory} />
                                <RadioModelLucro category='Mensal' />
                                <RadioModelLucro category='Dividendo' />
                                <RadioModelLucro category='Aluguel' />
                                <RadioModelLucro category='Jogos' />
                                <RadioModelLucro category='Extras' />
                                <RadioModelLucro category='Outros' />
                            </div>
                        </>
                    }

                    <button>Cadastrar Finanças</button>
                </form>
            </S.Container>
        </S.Wrapper>
    );
}