import { ChildrenType } from "../../../../types";
import { FC } from "react";
import { NavListStyled } from "./styled";

export const NavList: FC<ChildrenType> = ({ children }) => {
  return <NavListStyled>{children}</NavListStyled>;
};
