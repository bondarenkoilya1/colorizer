import { FC } from "react";
import { ErrorProps } from "@types";
import {
  ErrorContainerStyled,
  ErrorTitleStyled,
  ErrorSupportMessageStyled,
  ErrorCodeStyled,
  TransferLinkStyles
} from "./styled";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const TransferLinkStyled = styled(Link)(TransferLinkStyles);

export const Error: FC<ErrorProps> = ({ errorCode }) => {
  return (
    <ErrorContainerStyled>
      {errorCode === "404" && render404Error()}
      <ErrorSupportMessageStyled>
        Try to return to the <TransferLinkStyled to="/">main page</TransferLinkStyled>
      </ErrorSupportMessageStyled>
    </ErrorContainerStyled>
  );
};

function render404Error() {
  return (
    <>
      <ErrorCodeStyled>404</ErrorCodeStyled>
      <ErrorTitleStyled>This page was not found</ErrorTitleStyled>
    </>
  );
}
