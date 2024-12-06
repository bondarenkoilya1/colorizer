import { css } from "@emotion/react";

export const LinkStyles = css`
  transition: all 0.3s ease-in-out;
  outline: 2px solid transparent;
  outline-offset: 12px;
  border-radius: 6px;

  &:focus-visible,
  &:hover,
  &:active {
    transition: all 0.3s ease-in-out;
  }

  &:focus-visible {
    outline-color: #ecdfcc;
  }

  &:hover {
    //  svg > path selects all of them, not just first
    & svg path:first-child {
      fill: #ecdfcc;
    }
  }

  &:active {
    & svg path:first-child {
      color: #ac9d88;
    }
  }
`;
