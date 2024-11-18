import { css } from "@emotion/react";

import ArchivoBlack from "./assets/fonts/ArchivoBlack.woff2";
import RobotoFlex from "./assets/fonts/RobotoFlex.woff2";

export const connectFonts = css`
  @font-face {
    font-family: "Archivo Black";
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${ArchivoBlack}) format("woff2");
  }

  @font-face {
    font-family: "Roboto Flex";
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
    src: url(${RobotoFlex}) format("woff2");
  }
`;
