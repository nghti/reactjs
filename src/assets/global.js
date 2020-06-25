import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  .ant-dropdown .ant-dropdown-menu-item {
    min-width: 160px;
  }
`;

export default GlobalStyle;
