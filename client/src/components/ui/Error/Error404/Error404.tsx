import { ErrorCodeStyled, ErrorTitleStyled } from "../styled";
import { renderBasicSupportMessage } from "@components";

export const Error404 = () => {
  return (
    <>
      <ErrorCodeStyled>404</ErrorCodeStyled>
      <ErrorTitleStyled>This page was not found</ErrorTitleStyled>
      {renderBasicSupportMessage()}
    </>
  );
};
