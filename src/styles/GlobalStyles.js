import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables};
  
  h1 {
    color: var(--secondary);
  }
  
`;

export default GlobalStyle;
