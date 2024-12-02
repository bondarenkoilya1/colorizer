import { ContainerStyled } from "@styled";
import { NavBar } from "../ui";
import { HeaderStyled } from "./styled";

export const Header = () => {
  return (
    <ContainerStyled>
      <HeaderStyled>
        <NavBar />
      </HeaderStyled>
    </ContainerStyled>
  );
};
