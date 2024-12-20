import styled from "@emotion/styled";

export const InputStyled = styled.input`
  clip-path: inset(50% 50% 50% 50%);
  position: absolute;
  height: 0;
  width: 0;
  overflow: hidden;
`;

export const InputLabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  border: 3px solid #fff;
  padding-left: 60px;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    border-color: #ecdfcc;

    & > p {
      color: #ecdfcc;
      transition: all 0.3s ease-in-out;
    }

    & > div {
      background-color: #ecdfcc;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const InputTextStyled = styled.p`
  font-size: 24px;
  margin-right: 60px;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
`;

export const InputButtonStyled = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
`;
