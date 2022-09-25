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

    img{
        height: 200px;
        width: 200px;
        border-radius: 125px;
        object-fit: cover;    
    }

    h2{
        font-size: 2.4rem;
        margin: 20px 0;
        font-weight: normal;
    }

        .buttonRegister{
        cursor: pointer;

        padding: 10px 20px;
        border-radius: 5px;
        background-color: var(--green);
        color: var(--light-100);

        transition: all .7s;
    }

    .buttonRegister:hover{
        background-color: var(--greenplus);
    }

    a{
        margin-top: 20px;
        margin-bottom: 20px;
    }   

    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    form input{
        display: none;
    }

    .div-photo{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        transition: all 0.2s;
    }

    .div-photo:active{
        opacity: 0.7;
    }

    .div-photo #plusSpan{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        width: 200px;
        font-size: 50px;
        color: var(--green);
        opacity: 0.6;
        position: absolute;
        padding: 0px;
        margin: 0px;
    }


    `