import emotionReset from "emotion-reset";

import { css } from "@emotion/react";

import styled from "@emotion/styled";

import { connectFonts } from "./fonts";

export const GlobalStyle = css`
  ${emotionReset}
  ${connectFonts}
  ${scrollbarStyles()}

  html {
    box-sizing: border-box;
    background-color: #181c14;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  #root {
    font-family: "Roboto Flex", sans-serif;
    color: #fff;
    line-height: 120%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

// Declare with function declaration so I can call it above
function scrollbarStyles() {
  return css`
    ::-webkit-scrollbar-track {
      background: #ecdfcc;
    }

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar:horizontal {
      display: none;
    }

    ::-webkit-scrollbar-thumb {
      background: #697565;
    }
  `;
}

export const ContainerStyled = styled.div`
  max-width: 1410px;
  margin: 0 auto;
`;
