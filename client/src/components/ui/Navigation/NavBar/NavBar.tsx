import { Logo } from "../../Logo";
import { pages } from "../../../../constants";
import { NavList } from "../NavList";
import { NavItem } from "../NavItem";
import { LogoStyles, NavBarStyled } from "./styled";
import styled from "@emotion/styled";

const LogoStyled = styled(Logo)(LogoStyles);

// TODO: Bring out from the UI components
export const NavBar = () => {
  return (
    <NavBarStyled>
      <LogoStyled href="/" />

      <NavList>
        {pages &&
          pages.map(({ text, href }) => (
            <NavItem key={text} href={href}>
              {text}
            </NavItem>
          ))}
      </NavList>
    </NavBarStyled>
  );
};
