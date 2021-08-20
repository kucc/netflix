import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR', 'sans-serif';
    font-size: 16px;
    font-weight: 400;
    font-display: block;
    box-sizing : border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
  }
  
  body {
    width: 100%;
    margin: 0;
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
