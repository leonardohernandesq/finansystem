import styled from 'styled-components'

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
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    form input{
        margin: 10px;
    }
    
    form button {
        margin: 10px 0px 20px 0px;
        height: 50px;
        width: 500px;
        border-radius: 10px;
    }
`