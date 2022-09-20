import { Link } from "react-router-dom";
import * as S from "./style";

export default function Header() {
    return (
        <S.Wrapper>
            <S.Container>
                <header>
                    <Link to='/'><img src={require('../../Imgs/Logo.png')} alt="Logo da empresa composto por uma nota de dolar escrito embaixo o nome da empresa FinanSystem" /></Link>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/profile'>Perfil</Link>
                        <Link to='/registerfinance'>Registrar</Link>
                        <Link to='/suporte'>Suporte</Link>
                        <Link to='/signin'>
                            <span>Sair</span>
                        </Link>
                    </nav>
                </header>
            </S.Container>
        </S.Wrapper>
    );
}