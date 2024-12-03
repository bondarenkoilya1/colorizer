import { ChangeEvent, useState } from "react";
import { UploadStatus } from "@types";
import axios from "axios";
import { GrUpload as UploadIcon } from "react-icons/gr";
import { convertBytesToMegaBytes } from "@utils";
import { API_URL } from "@config";
import {
  InputButtonStyled,
  InputTextStyled,
  InputUploadLabelStyled,
  InputUploadStyled
} from "./styled.ts";

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
      console.error("Upload failed:", error);
    }
  };

  return (
    <>
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
      {file && (
        <>
          <p>File name: {file.name}</p>
          <p>File type: {file.type.slice(6)} </p>
          <p>File size: {convertBytesToMegaBytes(file.size)} MB</p>
        </>
      )}
      {file && status !== "uploading" && <button onClick={handleFileUpload}>Upload</button>}
      {status === "success" && <p>File uploaded successfully</p>}
      {status === "error" && <p>File wasn't uploaded. Try again</p>}

      {colorizedImage && (
        <div>
          <h3>Colorized Image:</h3>
          <img
            src={colorizedImage}
            alt="Colorized image"
            style={{ width: "400px", height: "400px" }}
          />
        </div>
      )}
    </>
  );
};
