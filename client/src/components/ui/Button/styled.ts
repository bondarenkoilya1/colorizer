import { ButtonVariants } from "@types";

import styled from "@emotion/styled";

export const ButtonStyled = styled.button<ButtonVariants>`
  cursor: pointer;
  border-radius: 12px;
  font-size: 18px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;
  outline: 2px solid transparent;
  outline-offset: 2px;
  user-select: none;

  &:focus,
  &:hover,
  &:active {
    transition: all 0.3s ease-in-out;
  }

  &[disabled],
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  ${({ variant }) =>
    variant === "primary" &&
    `
      background-color: #fff;
      color: #000;

      &:focus-visible:enabled {
        outline-color: #697565;
      }
      
      &:hover:enabled {
        background-color: #d6c6ae;
      }
      
      &:active:enabled {
        background-color: #ac9d88;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    `
      background-color: transparent;
      border: 2px solid #fff;
      color: #fff;
      outline: none;
      outline-offset: 0px;
      
      &:focus-visible:enabled {
        border-color: #697565;
      }
      
      &:hover:enabled {
        background-color: #fff;
        color: #000;
      }
      
      &:active:enabled {
        background-color: #d6c6ae;
      }
    `} 

  ${({ variant }) =>
    variant === "tertiary" &&
    `
      background-color: transparent;
      border: none;
      color: #fff;
      border-bottom: 2px solid transparent;
      border-radius: 0;
      display: inline-block;
      padding: 0;
      height: fit-content;
      
      &:focus-visible:enabled {
        color: #d6c6ae;
      }
      
      &:hover:enabled {
        border-color: #fff;
      }
      
      &:active:enabled {
        color: #ac9d88;
      }
    `}
`;
