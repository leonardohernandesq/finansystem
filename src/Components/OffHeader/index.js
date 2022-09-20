import { Link } from "react-router-dom";
import * as S from "./style";

export default function OffHeader() {
    return (
        <S.Wrapper>
            <S.Container>
                <header>
                    <img src={require('../../Imgs/Logo.png')} alt="Logo da empresa composto por uma nota de dolar escrito embaixo o nome da empresa FinanSystem" />
                    <nav>
                        <Link to='/signin'>Login</Link>
                        <Link to='/register'>Criar uma conta</Link>
                        <Link to='/suporte'>Suporte</Link>
                    </nav>
                </header>
            </S.Container>
        </S.Wrapper>
    );
}