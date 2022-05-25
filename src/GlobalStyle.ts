import { createGlobalStyle } from 'styled-components';
import Leixo from 'fonts/LEIXO-DEMO.woff';

export default createGlobalStyle`
  @font-face {
    font-family: LEIXO DEMO;
    src: url(${Leixo});
  }
  body {
    color: whitesmoke;
    margin: 0;
    padding: 0;
    background: #232323;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
