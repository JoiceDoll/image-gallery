import React from "react";
import Dropzone from "react-dropzone";

export const UploadImages = () => {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps, isFocused, isDragReject }) => (
        <div
          className={`border p-5 cursor-pointer transition-height duration-200 ease ${
            isFocused ? "border-cyan-400" : "#ddd"
          }, ${isDragReject ? "border-red-700" : "#ddd"}`}
        >
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Arraste seus arquivos aqui</p>
          </div>
        </div>
      )}
    </Dropzone>
  );
};
