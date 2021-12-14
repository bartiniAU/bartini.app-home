import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables};

  h1 {
    color: white;
    text-align: center;
    font-family: manrope;
    font-weight: 800;

  }

  h2 {
    color: white;
    text-align: center;
    font-family: poppins;
    font-weight: 300;
    font-size: 24px;
  }
  
  body {
    background: linear-gradient(var(--primary) 0%, var(--secondary) 100%) no-repeat;
    height: 800px;
  }

  button {
    font-family: poppins;
    cursor: pointer;
  }

`;

export default GlobalStyle;
