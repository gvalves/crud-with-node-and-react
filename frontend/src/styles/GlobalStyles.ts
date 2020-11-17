import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, button, input {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
  }

  html, body, #root {
    min-height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .15);
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, .1);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button:focus,
  input:focus,
  textarea:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
  }

  .hide {
    display: none;
  }

  :root {
    --black3: rgba(0, 0, 0, .03);
    --black13: rgba(0, 0, 0, .13);
    --black: #000;
    --white10: rgba(255, 255, 255, .1);
    --white50: rgba(255, 255, 255, .5);
    --white80: rgba(255, 255, 255, .8);
    --white: #fff;
    --green: #28a745;
    --gray: #495057;
    --dark-gray: #343a40;
    --blue: #007bff;
    --red: #dc3545;
  }
`;
