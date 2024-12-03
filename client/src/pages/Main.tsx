// import { ImageCompareSlider } from "@components";
// import { representativeImages } from "@data";
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
      {/*  <ImageCompareSlider image={representativeImages} />*/}
      {/*</div>*/}
      <FileUploader />
    </ContainerStyled>
  );
};
