import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: HeirofLightOTFRegular;
}

body {
  width: 100vw;
  height: 100vh;
  background-image: url('/img/background/background.jpeg');
  background-size: cover;
  background-position: center center;
  position: relative;
}

body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.55); 
}
`;

export default GlobalStyles;
