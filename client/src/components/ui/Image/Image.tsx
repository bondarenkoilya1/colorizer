import { ImageStyled } from "./styled";
import { FC } from "react";
import { ImageProps } from "@types";

export const Image: FC<ImageProps> = ({ src, alt, width, height }) => {
  return (
    <ImageStyled
      src={src || "https://placehold.co/300?text=No+url+specified&font=roboto"}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
