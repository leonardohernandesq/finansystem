import React from 'react';
import * as S from './style';

import Banner from '../../Components/Banner';
import { Link } from 'react-router-dom';

export default function Profile() {
    return (
        <div>
            <S.Wrapper>
                <div>
                    <Banner imagem={require('../../Imgs/banner.jpg')} title={'Meu Perfil'} />
                </div>
                <S.Container>

                    <img src={require('../../Imgs/user.png')} alt={'Imagem do rosto do Leonardo'} />

                    <h2>Leonardo Hernandes</h2>

                    <button>Registrar Gastos</button>

                    <Link to='/signin'>Sair da Conta</Link>



                </S.Container>
            </S.Wrapper>
        </div>
    );
}