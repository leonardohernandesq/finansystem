import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --red: #B00000;
    --green: #009229;
    --greenplus: #017221;

    --dark-100: #000000;
    --dark-80: #171717;
    --dark-60: #707070;
    --dark-40: #C8C8C8;

    --light-100: #ffffff;
    --light-80: #EAEAEA;
    --light-60: #D9D9D9;
    --light-40: #C9C9C9;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: var(--dark-80);
    color: var(--light-100);
    font: 400 1rem 'Roboto', sans-serif;
  }

  input, textarea, button{
    color: var(--light-100);
  }
  
  button{
    cursor: pointer;

    padding: 10px 20px;
    border-radius: 5px;
    background-color: var(--green);
    color: var(--light-100);

    transition: all .7s;

    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }
  }

  button:hover{
    background-color: var(--greenplus);
  }
  
  button, input, textarea {
    border: none;
    outline: 0;
  }
  button, a, input[type="submit"] {
    cursor: pointer;
  }
  a{
    color: inherit;
    text-decoration: none;
  }

  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }
`;
