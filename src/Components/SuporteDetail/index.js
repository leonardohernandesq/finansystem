import React from 'react';
import * as S from './style';

export default function SuporteDetail({ titulo, resposta }) {
    return (
        <S.DetailContainer>
            <details>
                <summary>{titulo}</summary>
                <p>{resposta}</p>
            </details>
        </S.DetailContainer>
    );
}