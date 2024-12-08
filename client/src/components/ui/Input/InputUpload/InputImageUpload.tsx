import { GrUpload as UploadIcon } from "react-icons/gr";
import { InputButtonStyled, InputLabelStyled, InputStyled, InputTextStyled } from "./styled";
import { InputImageUploadProps } from "@types";
import { FC } from "react";

export const InputImageUpload: FC<InputImageUploadProps> = ({ id, inputText, onChange }) => {
  return (
    <>
      <InputLabelStyled htmlFor={id}>
        <InputTextStyled>{inputText}</InputTextStyled>
        <InputButtonStyled>
          <UploadIcon size={20} color={"#000"} />
        </InputButtonStyled>
      </InputLabelStyled>
      <InputStyled id={id} type="file" accept="image/png, image/jpeg" onChange={onChange} />
    </>
  );
};
