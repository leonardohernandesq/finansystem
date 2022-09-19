import styled from "styled-components";

export const DivValue = styled.div`
        background-color: var(--light-60);
        padding: 15px;
        border-radius: 10px;
        margin: 5px;
        color: var(--dark-100);

    .valueLucro{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 10px;
        background-color: var(--green);
        color: var(--light-80);
        padding: 10px;
    }

    .valueDespesa{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 10px;
        background-color: var(--red);
        color: var(--light-80);
        padding: 10px;
    }

    .divValue{
        background-color: var(--light-60);
        padding: 15px;
        border-radius: 10px;
        margin: 5px;
        
    }

    .valueLucro svg{
        margin-right: 5px;
    }

    .valueLucro p{
        font-size: 16px;
    }

    .valueDespesa svg{
        margin-right: 5px;
    }

    .valueDespesa p{
        font-size: 16px;
    }
`;
