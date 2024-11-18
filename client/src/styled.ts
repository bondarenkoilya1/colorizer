import emotionReset from "emotion-reset";

import { css } from "@emotion/react";

import styled from "@emotion/styled";

import { connectFonts } from "./fonts";

export const GlobalStyle = css`
  ${emotionReset}
  ${connectFonts}

  html {
    box-sizing: border-box;
    background-color: #181c14;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  #root {
    font-family: "Ro", sans-serif;
    color: #fff;
    line-height: 120%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const ContainerStyled = styled.div`
  max-width: 1410px;
  margin: 0 auto;
`;
