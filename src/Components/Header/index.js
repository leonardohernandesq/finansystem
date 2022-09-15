import { Link } from "react-router-dom";
import * as S from "./style";

export default function Header() {
    return (
        <S.Wrapper>
            <S.Container>
                <header>
                    <img src={require('../../Imgs/Logo.png')} alt="Logo da empresa composto por uma nota de dolar escrito embaixo o nome da empresa FinanSystem" />
                    <nav>
                        <Link to='#'>Home</Link>
                        <Link to='#'>Perfil</Link>
                        <Link to='#'>Registrar</Link>
                        <Link to='#'>Suporte</Link>
                        <Link to='#'>
                            <span>Sair</span>
                        </Link>
                    </nav>
                </header>
            </S.Container>
        </S.Wrapper>
    );
}