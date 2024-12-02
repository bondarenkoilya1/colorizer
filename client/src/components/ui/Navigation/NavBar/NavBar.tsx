import { Logo } from "../../Logo";
import { PAGES } from "@constants";
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
        {PAGES &&
          PAGES.map(({ text, href }) => (
            <NavItem key={text} href={`/${href}`}>
              {text}
            </NavItem>
          ))}
      </NavList>
    </NavBarStyled>
  );
};
