import styled from "styled-components";

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

    main{
        display: flex;

    }

    >main .sectionHome{
        display: flex;
        flex-direction: column;
        width: 500px;
        border-radius: 10px;
        margin: 10px;
        background-color: var(--light-80);
        padding: 30px;
    }

    main .sectionHome h2{
        margin-bottom: 10px;
        color: var(--dark-100);
        text-align: center;
        font-weight: 600;
    }

    main .sectionHome h3{
        font-size: 24px;
        font-weight: 400;
        text-align: center;
    }
    main .sectionHome .valueText{
        color: var(--dark-100);
        font-size: 32px;
    }

    main .sectionHome .divHiddenButton{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }

    main .sectionHome .hiddenButton{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        width: 40px;
        height: 40px;
    }
`

export const WrapperSection = styled.div`
    display: flex;
    flex-direction: column;
`