import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Heir of Light';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/npm/fonts-archive-heiroflight/HeirofLight-Regular.woff2') format('woff2'),
}

@font-face {
    font-family: 'Heir of Light';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/npm/fonts-archive-heiroflight/HeirofLight-Bold.woff2') format('woff2'),
}

* {
    margin: 0;
    padding: 0;
    font-family: 'Heir of Light';
    box-sizing: border-box;
}`;

export default GlobalStyles;
