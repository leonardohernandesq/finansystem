import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import * as S from './style';

import Banner from '../../Components/Banner';
import CategoryValue from '../../Components/CategoryValue';
import ProgressBar from '../../Components/ProgressBar';

export default function Home() {
    const [hiddenValue, setHiddenValue] = useState(false)
    const completedArray = [
        {
            completed: 20,
            category: 'Comida'
        },
        {
            completed: 40,
            category: 'Despesas'
        },
        {
            completed: 5,
            category: 'Remedio'
        },
        {
            completed: 15,
            category: 'Outros'
        },
        {
            completed: 20,
            category: 'Viagens'
        },
    ]
    const ValueArray = [
        {
            value: -15,
            category: 'Despesa'
        },
        {
            value: 25,
            category: 'Lucro'
        },
        {
            value: 55,
            category: 'Lucro'
        },
        {
            value: 72,
            category: 'Lucro'
        },
        {
            value: -30,
            category: 'Despesa'
        },

    ]

    // Mostra o valor total para o usuário
    function somarValor() {
        var soma = 1
        for (var i = 0; i < ValueArray.length; i++) {
            soma = soma + ValueArray[i].value
        }
        return parseFloat(soma).toLocaleString('de-DE', { currency: 'EUR', style: 'currency', minimumFractionDigits: 2 })
    }

    return (
        <S.Wrapper>
            <div>
                <Banner imagem={require('../../Imgs/banner.jpg')} title={'Home'} />
            </div>
            <S.Container>
                <main>
                    <section className='sectionHome'>
                        <h2>Últimas movimentações</h2>

                        {ValueArray.map((item, id) => (
                            <CategoryValue key={id} valor={item.value} category={item.category} />

                        ))}
                    </section>
                    <S.WrapperSection>
                        <section className='sectionHome'>
                            <h2>Valor Total</h2>
                            <h3 className='valueText'>{hiddenValue ? `${somarValor()} ` : '------'}</h3>
                            <div className='divHiddenButton'>
                                <button className='hiddenButton' onClick={() => setHiddenValue(!hiddenValue)}>
                                    {hiddenValue ? <FaEye color='#fff' size={30} /> : <FaEyeSlash color='#fff' size={30} />}
                                </button>
                            </div>
                        </section>
                        <section className='sectionHome'>
                            <h2>Gastos Categorizados</h2>
                            {completedArray.map((item, id) => (
                                <ProgressBar key={id} completed={item.completed} category={item.category} />
                            ))}
                        </section>
                    </S.WrapperSection>
                </main>
            </S.Container>
        </S.Wrapper>
    );
}