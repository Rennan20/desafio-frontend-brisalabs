import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

    @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

    @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

    @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  :root {
    --color-primary: #ffcb05;
    --color-alert-danger: #ff3326;
    --color-alert-success: #45b572;
    --color-alert-warning: #7f55f6;

    --color-grey-500: #1e1e1f;
    --color-grey-400: #4b4b4d;
    --color-grey-300: #7d7e80;
    --color-grey-200: #d2d4d6;
    --color-grey-100: #f5f7fa;
    --color-white: #ffffff;
  }

  body {
    font-family: 'Poppins', Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export default GlobalStyle;
