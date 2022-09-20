import styled from "styled-components";

export const RadioContainer = styled.div`

    margin-bottom: 30px;

    div{
        background-color: var(--light-80);
        height: 90px;
        width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin: 5px;
        border-radius: 11px;
        margin-top: 12px;
    }

    div input{
        width:0px;
    }

    .labelRadio svg{
        color:var(--dark-100)
    }

    div label{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    input:checked + .labelRadio {
        background-color: var(--green);
        box-shadow: inset 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
    }

    input:checked + .labelRadio svg {
        color: var(--light-100);
    }

    label{
        display: flex;
        justify-content: center;
        text-align: center;
    }


`