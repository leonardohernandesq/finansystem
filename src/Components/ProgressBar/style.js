import styled from "styled-components";

export const ContainerStyles = styled.div`
    margin: 15px 10px;

    p{
        color: var(--dark-100);
        margin-bottom: 5px;
        width: 200px;
        font-size: 20px;
    }
`

export const FillerStyles = styled.div`
    width: 100%;
    display: flex;
    border-radius: 50px;
    flex-direction: row;
    align-items: center;
    background-color: var(--light-60);
    

`

export const LabelStyles = styled.span`
    height: 20px;
    min-width: 9%;
    max-width: 100%;
    width: ${(props) => (`${props.completed}%`)};
    background-color: var(--green);
    border-radius: 50px;

    display: flex;
    align-items: center;
    padding-left: 10px;
    text-align: center;
    color: var(--white-100);
    animation: progress 1500ms ease-in 1;

    @keyframes progress {
        from {
            width: 0;
        }
    }
`
