// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Fonts
// import Roboto from '../fonts/Roboto-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
    ${reset}
    
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    html, button {
        font-family: 'Ubuntu', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    a {
       text-decoration: none;
       color: black;
    }
`;
