import React from 'react';
import * as S from './style'

export default function Input({ value, onchange, placeholder, type }) {
    return (
        <S.StyleInput
            value={value}
            onChange={(e) => onchange(e.target.value)}
            placeholder={placeholder}
            type={type}
        />
    );
}