import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables};

  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&family=Poppins:wght@300;400&display=swap');

  h1 {
    color: white;
    text-align: center;
    font-family: Poppins;
    font-weight: 300;

  }
  
  body {
    background: linear-gradient(var(--primary) 0%, var(--secondary) 100%) no-repeat;
    height: 100vw;
  }

`;

export default GlobalStyle;
