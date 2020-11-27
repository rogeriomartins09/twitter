import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--white)
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vh;

        height: 100%;
        width: 100%;
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
    } 
    html {
        background: var(--primary);
    }
    :root {
        --primary: #000;
        --secondary: #15181c;
        --search: #201327;
        --white: #d9d9d9;
        --gray: #7a7a7a;
        --outline: #2f3336;
        --retweet: #00c06b;
        --like: #e8265e;
        --twitter: #22a1f2;
        --twitter-dark-hover: #011017;
        --twitter-light-hover: #2c8ed6;
    }
`;