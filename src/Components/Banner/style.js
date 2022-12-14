import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    img{
        height: 100%;
        max-width: 100%;    
        z-index: 9;
    }
    >.banner{
        position: relative;
    }
    .banner h1{
        font-size: 45px;
        font-weight: normal;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        position: absolute;
        color: var(--light-100);
        bottom: 0;
        top: 0;
        right: 0;
        left: 0;
        z-index: 3;
    }
`;