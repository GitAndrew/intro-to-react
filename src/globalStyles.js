import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background.primary};
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
