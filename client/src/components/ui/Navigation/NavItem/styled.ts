import { css } from "@emotion/react";

import styled from "@emotion/styled";

export const NavItemStyled = styled.li`
  margin-right: 42px;

  &:last-child {
    margin-right: 0;
  }
`;

export const NavLinkStyles = css`
  font-size: 26px;
  text-transform: uppercase;
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
    color: #ecdfcc;
  }

  &:active {
    color: #ac9d88;
  }
`;
