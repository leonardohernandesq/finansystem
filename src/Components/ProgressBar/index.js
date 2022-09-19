import React from 'react';
import * as S from './style';

export default function ProgressBar({ completed, category }) {
    return (
        <S.ContainerStyles>
            <p>{category}</p>
            <S.FillerStyles>
                <S.LabelStyles completed={completed}>{`${completed}%`}</S.LabelStyles>
            </S.FillerStyles>

        </S.ContainerStyles>
    );
}