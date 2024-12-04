import { ButtonVariants } from "@types";

import styled from "@emotion/styled";

export const ButtonStyled = styled.button<ButtonVariants>`
  cursor: pointer;
  background-color: #fff;
  border-radius: 6px;
  border: none;
  font-size: 18px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;
  outline: 2px solid transparent;
  outline-offset: 2px;

  &:focus {
    outline-color: #697565;
  }

  &:hover {
    background-color: #ecdfcc;
    transition: all 0.3s ease-in-out;
  }

  &:active {
    background-color: #d6c6ae;
  }

  ${({ variant }) =>
    variant === "primary" &&
    `
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    `
    `}

    ${({ variant }) =>
    variant === "tertiary" &&
    `
    `}
`;
