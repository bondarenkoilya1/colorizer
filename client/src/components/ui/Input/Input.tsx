import { InputImageUpload } from "./InputUpload";
import { InputProps } from "@types";
import { FC } from "react";

export const Input: FC<InputProps> = ({ type, id, inputText, onChange }) => {
  switch (type) {
    case "image-upload":
      return <InputImageUpload id={id} inputText={inputText} onChange={onChange} />;
    default:
      return null;
  }
};
