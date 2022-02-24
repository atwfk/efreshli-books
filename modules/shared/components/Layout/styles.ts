import { SCREENS } from "./../../constants";
import styled, { createGlobalStyle } from "styled-components";

export const StyledMain = styled.main`
  padding: 20px;
  max-width: ${SCREENS.XL};
  margin: auto;
`;

export const GlobalStyle = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
