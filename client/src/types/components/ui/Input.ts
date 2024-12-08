import { ChangeEvent } from "react";

export type InputImageUploadProps = {
  id: string;
  inputText: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type InputProps = InputImageUploadProps & {
  type: "image-upload";
};
