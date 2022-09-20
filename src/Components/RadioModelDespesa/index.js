import React from 'react';
import * as S from './style';
import { FiCoffee, FiGift, FiShoppingCart, FiCreditCard, FiFilePlus, FiBriefcase, FiZap } from 'react-icons/fi';

export default function RadioModelDespesa({ category }) {

    function checkIcon() {
        if (category === 'Comida') {
            return (<FiCoffee size={30} />)
        } else if (category === 'Remédio') {
            return (<FiFilePlus size={30} />)
        } else if (category === 'Lazer') {
            return (<FiGift size={30} />)
        } else if (category === 'Mercado') {
            return (<FiShoppingCart size={30} />)
        } else if (category === 'Contas') {
            return (<FiCreditCard size={30} />)
        } else if (category === 'Viagens') {
            return (<FiBriefcase size={30} />)
        } else {
            return (<FiZap size={30} />)
        }

    }

    return (
        <S.RadioContainer value={category}>
            <div>
                <input type='radio' id={category} name='radio' value={category} defaultChecked={category === 'Comida'} />
                <label className='labelRadio' htmlFor={category}>
                    {checkIcon()}
                </label>
            </div>
            <label htmlFor={category}>{category}</label>
        </S.RadioContainer>
    );
}