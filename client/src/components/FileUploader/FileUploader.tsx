import { ChangeEvent, useState } from "react";
import { UploadStatus } from "@types";
import axios from "axios";
import { GrUpload as UploadIcon } from "react-icons/gr";
import { API_URL } from "@config";
import {
  AdditionalTextStyled,
  ErrorMessageStyled,
  InputButtonStyled,
  InputTextStyled,
  InputUploadLabelStyled,
  InputUploadStyled,
  ButtonProcessStyles
} from "./styled";
import { Button } from "../ui";
import styled from "@emotion/styled";
// import { convertBytesToMegaBytes } from "@utils";

const ButtonProcessStyled = styled(Button)(ButtonProcessStyles);

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
      <div style={{ display: "flex" }}>
        <InputUploadLabelStyled htmlFor="input-upload">
          <InputTextStyled>Click and upload!</InputTextStyled>
          <InputButtonStyled>
            <UploadIcon size={20} color={"#000"} />
          </InputButtonStyled>
        </InputUploadLabelStyled>
        <InputUploadStyled
          id="input-upload"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
        />
        {/* TODO: Add parameter "disabled" to button component and set disabled={status === "uploading"} */}
        <ButtonProcessStyled onClick={handleFileUpload} variant="secondary">
          Colorize
        </ButtonProcessStyled>
      </div>

      <AdditionalTextStyled>* Less than 2MB. Support .jpg, .jpeg or .png</AdditionalTextStyled>

      {/* TODO: Show later as a tooltip for image */}
      {/*{file && (*/}
      {/*  <ul>*/}
      {/*    <li>File name: {file.name}</li>*/}
      {/*    <li>File format: {file.type.slice(6)} </li>*/}
      {/*    <li>File size: {convertBytesToMegaBytes(file.size)} MB</li>*/}
      {/*  </ul>*/}
      {/*)}*/}

      {status === "error" && (
        <ErrorMessageStyled>
          File wasn't uploaded. Check restrictions and try again.
        </ErrorMessageStyled>
      )}

      {colorizedImage && (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "30px" }}>Your image:</h3>
          <img
            src={colorizedImage}
            alt="Colorized image"
            style={{
              width: "400px",
              height: "400px",
              outline: "3px dashed #fff",
              outlineOffset: "10px",
              marginLeft: "10px"
            }}
          />
        </div>
      )}
    </>
  );
};
