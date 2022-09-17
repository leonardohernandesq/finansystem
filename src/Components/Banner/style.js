import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    img{
        width: 100%;
        z-index: 9;
    }
    >.banner{
        position: relative;
    }
    .banner h1{
        font-size: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        position: absolute;
        bottom: 0;
        top: 0;
        right: 0;
        left: 0;
        z-index: 3;
    }
`;