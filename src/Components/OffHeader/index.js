import { Link } from "react-router-dom";
import * as S from "./style";

export default function OffHeader() {
    return (
        <S.Wrapper>
            <S.Container>
                <header>
                    <Link to='/'><img src={require('../../Imgs/Logo.png')} alt="Logo da empresa composto por uma nota de dolar escrito embaixo o nome da empresa FinanSystem" /></Link>
                    <nav>
                        <Link to='/'>Login</Link>
                        <Link to='/register'>Criar uma conta</Link>
                        <Link to='/suporte'>Suporte</Link>
                    </nav>
                </header>
            </S.Container>
        </S.Wrapper>
    );
}