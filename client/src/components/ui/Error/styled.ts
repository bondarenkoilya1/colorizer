import { css } from "@emotion/react";

import styled from "@emotion/styled";

export const ErrorContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 200px;
`;

export const ErrorCodeStyled = styled.h1`
  font-size: 268px;
  font-family: "Archivo Black", sans-serif;
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: #fff;
  color: #191c15;
`;

export const ErrorTitleStyled = styled.p`
  font-size: 56px;
  margin-top: 160px;
  text-transform: uppercase;
`;

export const ErrorSupportMessageStyled = styled.p`
  color: gray;
  margin-top: 64px;
  text-align: left;
  font-size: 22px;
`;

export const TransferLinkStyles = css`
  color: #ecdfcc;
`;
