import React from 'react';
import * as S from './style';

import Banner from '../../Components/Banner';

export default function Profile() {
    return (
        <div>
            <S.Wrapper>
                <div>
                    <Banner imagem={require('../../Imgs/banner.jpg')} title={'Meu Perfil'} />
                </div>
                <S.Container>
                    <h1>Profile</h1>

                </S.Container>
            </S.Wrapper>
        </div>
    );
}