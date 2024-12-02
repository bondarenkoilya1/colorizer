import { Link } from "react-router-dom";
import { FC } from "react";
import { NavItemProps } from "@types";
import { NavItemStyled, NavLinkStyles } from "./styled";
import styled from "@emotion/styled";

const NavLinkStyled = styled(Link)(NavLinkStyles);

export const NavItem: FC<NavItemProps> = ({ href, children }) => {
  return (
    <NavItemStyled>
      <NavLinkStyled to={href}>{children}</NavLinkStyled>
    </NavItemStyled>
  );
};
