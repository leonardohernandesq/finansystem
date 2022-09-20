import React from 'react';
import Banner from '../../Components/Banner';
import SuporteDetail from '../../Components/SuporteDetail';
import * as S from './style';

export default function Suporte() {
    return (
        <S.Wrapper>
            <div>
                <Banner imagem={require('../../Imgs/banner.jpg')} title={'Suporte'} />
            </div>
            <S.Container>
                <SuporteDetail
                    titulo="O que consigo fazer com esse site?"
                    resposta="Você pode efetuar os cadastros dos seus lucros e despesas,
                    recebendo assim um relátorio de quais categorias você está efetuando mais os gastos."
                />
                <SuporteDetail
                    titulo="Para que serve esse site?"
                    resposta="O site serve para auxiliar todas as pessoas a descobrir de onde você está
                    fazendo os seus gastos e ter um controle melhor do quanto gastar."
                />
                <SuporteDetail
                    titulo="Alguém consegue visualizar meus dados?"
                    resposta="De forma alguma, somente as pessoas que possuirem o seu login e senha conseguirão
                    visualizar os seus dados em geral."
                />
                <SuporteDetail
                    titulo="O site é completamente gratuito?"
                    resposta="Sim, o site é completamente gratuito, ele foi desenvolvido em questão de aperfeiçoamento dos estudos."
                />
                <SuporteDetail
                    titulo="Deseja fazer uma sujestão, reclamação ou elogio?"
                    resposta="Se deseja solicitar uma sujestão, reclamação ou e elogio entre em contato com o nosso time
                    através do E-mail: leonardo_hernandes@outlook.com.br"
                />
            </S.Container>
        </S.Wrapper>
    );
}