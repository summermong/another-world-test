import { createGlobalStyle } from 'styled-components';

const resultImgUrl = new URL('../../src/assets/img/background/background.webp', import.meta.url)
  .href;

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Heir of Light'
}

body {
  width: 100vw;
  height: 100vh;
  background-image: url(${resultImgUrl});
  background-size: cover;
  background-repeat: no-repeat;
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
