import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Container = styled.section`
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    padding-bottom: 30px;

    form{
        width: 100%;
        max-width: 700px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    form input:not([type="radio"]), form select{
        width: 100%;
        height: 60px;
        padding: 10px 15px;
        margin: 15px;
        font-size: 18px;
        color: var(--dark-100);
        border-radius: 10px;
    }

    .divRadio{
        display: flex;
    }
`

