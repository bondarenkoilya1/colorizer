import { FC } from "react";
import { ErrorProps, UnspecifiedErrorProps } from "@types";
import {
  ErrorContainerStyled,
  ErrorTitleStyled,
  ErrorSupportMessageStyled,
  ErrorCodeStyled,
  TransferLinkStyles,
  UnspecifiedErrorBlockStyled,
  UnspecifiedErrorMessageStyled
} from "./styled";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { GrStatusWarning as ErrorIcon } from "react-icons/gr";

const TransferLinkStyled = styled(Link)(TransferLinkStyles);

// ClassName is here, so I can apply emotion styles for this component outside the file
// I use function declaration because I can place such functions below my component one
export const Error: FC<ErrorProps> = ({
  errorCode,
  iconSize,
  unspecifiedErrorMessage,
  className
}) => {
  return errorCode ? (
    <ErrorContainerStyled>{errorCode === "404" && render404Error()}</ErrorContainerStyled>
  ) : (
    renderUnspecifiedError({ iconSize, unspecifiedErrorMessage, className })
  );
};

function renderBasicSupportMessage() {
  return (
    <ErrorSupportMessageStyled>
      Try to return to the <TransferLinkStyled to="/">main page</TransferLinkStyled>
    </ErrorSupportMessageStyled>
  );
}

function renderUnspecifiedError({
  iconSize = 24,
  unspecifiedErrorMessage = "Unexpected error occurred. Try again",
  className
}: UnspecifiedErrorProps) {
  return (
    <UnspecifiedErrorBlockStyled className={className}>
      <ErrorIcon size={iconSize} color="#cd1818" />
      <UnspecifiedErrorMessageStyled>{unspecifiedErrorMessage}</UnspecifiedErrorMessageStyled>
    </UnspecifiedErrorBlockStyled>
  );
}

function render404Error() {
  return (
    <>
      <ErrorCodeStyled>404</ErrorCodeStyled>
      <ErrorTitleStyled>This page was not found</ErrorTitleStyled>
      {renderBasicSupportMessage()}
    </>
  );
}
