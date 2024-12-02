// import { ImageCompareSlider } from "../components";
// import { REPRESENTATIVE_IMAGE } from "../constants";
import { ContainerStyled } from "@styled";
import { FileUploader } from "@components";

export const Main = () => {
  return (
    <ContainerStyled>
      {/*<div*/}
      {/*  style={{*/}
      {/*    width: "30%",*/}
      {/*    marginLeft: "auto"*/}
      {/*  }}>*/}
      {/*  <ImageCompareSlider image={REPRESENTATIVE_IMAGE} />*/}
      {/*</div>*/}
      <FileUploader />
    </ContainerStyled>
  );
};
