import React from 'react';

import { Container } from './style';

export default function Banner({ imagem, title }) {
    return (
        <Container>
            <img src={`${imagem}`} alt={`Banner da página ${title}`} />
            <h1>{title}</h1>
        </Container>
    );
}