import { FC } from "react";
import { ErrorProps } from "@types";
import { ErrorContainerStyled, ErrorSupportMessageStyled, TransferLinkStyles } from "./styled";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Error404 } from "./Error404";
import { UnspecifiedError } from "./UnspecifiedError";

const TransferLinkStyled = styled(Link)(TransferLinkStyles);

// ClassName is here, so I can apply emotion styles for this component outside the file
export const Error: FC<ErrorProps> = ({
  errorCode,
  iconSize,
  unspecifiedErrorMessage,
  className
}) => {
  switch (errorCode) {
    case "404":
      return (
        <ErrorContainerStyled>
          <Error404 />
        </ErrorContainerStyled>
      );
    default:
      return (
        <UnspecifiedError
          iconSize={iconSize}
          unspecifiedErrorMessage={unspecifiedErrorMessage}
          className={className}
        />
      );
  }
};

export const renderBasicSupportMessage = () => (
  <ErrorSupportMessageStyled>
    Try to return to the <TransferLinkStyled to="/">main page</TransferLinkStyled>
  </ErrorSupportMessageStyled>
);
