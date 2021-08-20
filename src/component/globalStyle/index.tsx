import { createGlobalStyle } from "styled-components/macro";
import { THEME } from "../../constant";

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
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: overlay;
    ::-webkit-scrollbar {
      width: 4px;
      background: none;
    }
    ::-webkit-scrollbar-thumb {
      width: 4px;
      border-radius: 2px;
      background: ${THEME.kucc};
    }
  }

  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
