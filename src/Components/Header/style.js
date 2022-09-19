import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

export const Container = styled.section`
    width: 100%;
    max-width: 1280px;

    >header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        padding: 8px 0;
        color: var(--light-100);
    }

    nav a:not(:last-child){
        margin-right: 30px;
    }

    nav a:hover:not(:last-child){
        color: var(--green);
        transition: all .5s;
    }

    nav a span{
        border: 1px solid var(--light-100);
        color: var(--light-100);
        padding: 8px 40px;
        border-radius: 50rem;
    }

    nav a span:hover{
        border: 1px solid var(--green);
        transition: all .5s;
        color: var(--green);
    }

    @media screen and (max-width:787px) {
        header{
            display:flex;
            flex-direction: column;
        }
        header img{
            margin-bottom: 30px;
            margin-top: 10px;
        }
    }   
`

