import styled from "styled-components";

export const StyleInput = styled.input`
    border: none;
    background: var(--dark-60);
    height: 50px;
    width: 500px;
    padding: 10px;
    border-radius: 10px;
    ::placeholder{
        color: var(--light-100);
        opacity: 0.5;
    }
`