import styled from "styled-components";

export const DetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1px;

    details summary{
        width: 600px;
        background-color: var(--green);
        color: var(--light-100);
        padding: 10px;
        font-size: 24px;
    }   
    details p{
        width: 600px;
        font-size: 16px;
        line-height: 20px;
        padding: 10px;
        border: 1px solid var(--green);
    } 
`