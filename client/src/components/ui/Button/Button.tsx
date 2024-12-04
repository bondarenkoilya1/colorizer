import { FC } from "react";
import { ButtonProps } from "@types";
import { ButtonStyled } from "./styled.ts";

// TODO: Create three variants of button
// ClassName is here, so I can apply emotion styles for this component outside the file
export const Button: FC<ButtonProps> = ({
  variant,
  children,
  type = "button",
  disabled,
  onClick,
  className
}) => {
  return (
    <ButtonStyled
      variant={variant}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}>
      {children}
    </ButtonStyled>
  );
};
