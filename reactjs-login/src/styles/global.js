import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 90vw;
    height: 90vh;
    background-color: #yellow
    font-family: Arial, Helvetica, sans-serif
  }
`;

export default GlobalStyle;