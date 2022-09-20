import React from 'react';
import * as S from './style';
import { FiCalendar, FiHome, FiMonitor, FiPlusSquare, FiTrendingUp, FiBriefcase, FiZap } from 'react-icons/fi';

export default function RadioModelLucro({ category }) {

    function checkIcon() {
        if (category === 'Serviços') {
            return (<FiBriefcase size={30} />)
        } else if (category === 'Mensal') {
            return (<FiCalendar size={30} />)
        } else if (category === 'Dividendo') {
            return (<FiTrendingUp size={30} />)
        } else if (category === 'Aluguel') {
            return (<FiHome size={30} />)
        } else if (category === 'Jogos') {
            return (<FiMonitor size={30} />)
        } else if (category === 'Extras') {
            return (<FiPlusSquare size={30} />)
        } else {
            return (<FiZap size={30} />)
        }
    }

    return (
        <S.RadioContainer value={category}>
            <div>
                <input type='radio' id={category} name='radio' value={category} defaultChecked={category === 'Serviços'} />
                <label className='labelRadio' htmlFor={category}>
                    {checkIcon()}
                </label>
            </div>
            <label htmlFor={category}>{category}</label>
        </S.RadioContainer>
    );
}