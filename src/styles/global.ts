import { createGlobalStyle } from 'styled-components';
import { colors } from 'styles/colors';

export const GlobalStyles = createGlobalStyle`
    :root {
        --green: ${colors.green};
        --black: ${colors.black};
        --graphite: ${colors.graphite};
        --white: ${colors.white};
        --ligh-gray: ${colors.lightGray};
        --gray: ${colors.gray};
        --dark-gray: ${colors.darkGray};
        --success: ${colors.success};
        --danger: ${colors.danger};
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        color: var(--graphite);
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
