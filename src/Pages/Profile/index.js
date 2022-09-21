import React, { useState } from 'react';
import * as S from './style';

import Banner from '../../Components/Banner';
import { Link } from 'react-router-dom';

export default function Profile() {
    const [photo, setPhoto] = useState(require('../../Imgs/user.png'));

    return (
        <div>
            <S.Wrapper>
                <div>
                    <Banner imagem={require('../../Imgs/banner.jpg')} title={'Meu Perfil'} />
                </div>
                <S.Container>

                    <img src={photo} alt={'Imagem do rosto do Leonardo'} />

                    <h2>Leonardo Hernandes</h2>

                    <Link to='/registerfinance' className='buttonRegister'>Registrar Gastos</Link>

                    <Link to='/signin'>Sair da Conta</Link>



                </S.Container>
            </S.Wrapper>
        </div>
    );
}