import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  font-family: 'Nunito', sans-serif, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  section {
    padding: 72px 0;
    @media ${theme.media.tablet} {
      padding: 40px 0;
    }
  }

  section:first-of-type {
    padding-top: 0;
  }

  section:last-of-type {
    padding-bottom: 0;
  }

  header, section, footer {
    background-color: ${theme.colors.background};
  }

  p {
    font-size: 18px;
    line-height: 150%;
    color: ${theme.colors.fontSecondary};
  }
`