import React from 'react';
import Banner from '../../Components/Banner';
import * as S from './style';

export default function Suporte() {
    return (
        <S.Wrapper>
            <div>
                <Banner imagem={require('../../Imgs/banner.jpg')} title={'Suporte'} />
            </div>
            <S.Container>

            </S.Container>
        </S.Wrapper>
    );
}