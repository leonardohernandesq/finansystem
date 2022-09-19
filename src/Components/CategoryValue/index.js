import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import * as S from './style'

export default function CategoryValue({ valor, category }) {

    valor = parseFloat(valor).toLocaleString('de-DE', { currency: 'EUR', style: 'currency', minimumFractionDigits: 2 })

    return (
        <S.DivValue>
            <div className={category === 'Despesa' ? 'valueDespesa' : 'valueLucro'}>

                {category === 'Despesa' ? <FaChevronDown /> : <FaChevronUp />}

                <p>{category}</p>
            </div>
            <span>
                <h3>{valor}</h3>
            </span>
        </S.DivValue>
    );
}