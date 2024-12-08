import { ChangeEvent, useState } from "react";
import { UploadStatus } from "@types";
import axios from "axios";
import { API_URL } from "@config";
import {
  AdditionalTextStyled,
  ButtonProcessStyles,
  ErrorBlockStyles,
  UploaderContainerStyled
} from "./styled";
import { Button, Error, Image, Input } from "../ui";
import styled from "@emotion/styled";
// import { convertBytesToMegaBytes } from "@utils";

const ButtonProcessStyled = styled(Button)(ButtonProcessStyles);
const ErrorBlockStyled = styled(Error)(ErrorBlockStyles);

const headers = {
  "Content-Type": "multipart/form-data"
};

export const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [colorizedImage, setColorizedImage] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!file) return;

    setStatus("uploading");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(`${API_URL}/colorize`, formData, {
        headers
      });

      setColorizedImage(response.data.colorizedImage);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      console.error("Upload failed: ", error);
    }
  };

  return (
    <>
      <UploaderContainerStyled>
        <Input
          type="image-upload"
          id="input-image-upload"
          inputText="Click and upload!"
          onChange={handleFileChange}
        />

        <ButtonProcessStyled
          onClick={handleFileUpload}
          variant="secondary"
          disabled={status === "uploading"}>
          Colorize
        </ButtonProcessStyled>
      </UploaderContainerStyled>

      <AdditionalTextStyled>* Less than 2MB. Support .jpg, .jpeg or .png</AdditionalTextStyled>

      {status === "error" && (
        <ErrorBlockStyled
          iconSize={24}
          unspecifiedErrorMessage="File wasn't uploaded. Check restrictions and try again."
        />
      )}

      {colorizedImage && (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "30px" }}>Your image:</h3>
          <Image src={colorizedImage} alt="Colorized image" />
        </div>
      )}
    </>
  );
};
