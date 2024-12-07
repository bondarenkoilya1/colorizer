import { UnspecifiedErrorProps } from "@types";
import { UnspecifiedErrorBlockStyled, UnspecifiedErrorMessageStyled } from "../styled";
import { GrStatusWarning as ErrorIcon } from "react-icons/gr";
import { FC } from "react";

export const UnspecifiedError: FC<UnspecifiedErrorProps> = ({
  iconSize = 24,
  unspecifiedErrorMessage = "Unexpected error occurred. Try again",
  className
}) => {
  return (
    <UnspecifiedErrorBlockStyled className={className}>
      <ErrorIcon size={iconSize} color="#cd1818" />
      <UnspecifiedErrorMessageStyled>{unspecifiedErrorMessage}</UnspecifiedErrorMessageStyled>
    </UnspecifiedErrorBlockStyled>
  );
};
