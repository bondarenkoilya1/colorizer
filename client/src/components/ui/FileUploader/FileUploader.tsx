import { ChangeEvent, useState } from "react";
import { UploadStatus } from "../../../types";
import axios from "axios";
import { GrUpload as UploadIcon } from "react-icons/gr";
import { convertBytesToMegaBytes } from "../../../utils";
import { API_URL } from "../../../config";

export const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [colorizedImage, setColorizedImage] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!file) return;

    setStatus("uploading");
    setUploadProgress(0);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(`${API_URL}/colorize`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.total
            ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
            : 0;

          setUploadProgress(progress);
        }
      });

      setColorizedImage(response.data.colorizedImage);
      setStatus("success");
      setUploadProgress(100);
    } catch (error) {
      setStatus("error");
      setUploadProgress(0);
      console.error("Upload failed:", error);
    }
  };

  return (
    <>
      <label
        htmlFor="input-upload"
        style={{ display: "flex", alignItems: "center", cursor: "pointer", width: "fit-content" }}>
        <p style={{ marginRight: "20px" }}>Click and upload!</p>
        <UploadIcon size={20} />
      </label>
      <input
        id="input-upload"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
        style={{ display: "none" }}
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
      {status === "uploading" && (
        <>
          <div
            style={{
              maxWidth: "300px",
              padding: "5px 0",
              width: `${uploadProgress}%`,
              backgroundColor: "#fff",
              borderRadius: "32px",
              transition: "all .3s ease-in-out"
            }}></div>
          <p>{uploadProgress}% uploaded</p>
        </>
      )}

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
