import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { FC } from "react";
import { ImageCompareSliderProps } from "../../../types";
import { StyledCompareSlider } from "./styled";
import styled from "@emotion/styled";

const StyledReactCompareSlider = styled(ReactCompareSlider)(StyledCompareSlider);

export const ImageCompareSlider: FC<ImageCompareSliderProps> = ({ image }) => {
  return (
    <StyledReactCompareSlider
      itemOne={<ReactCompareSliderImage src={image.darkVersion.src} alt={image.darkVersion.alt} />}
      itemTwo={
        <ReactCompareSliderImage src={image.normalVersion.src} alt={image.normalVersion.alt} />
      }
    />
  );
};
