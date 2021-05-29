import React from "react";
import { imgLogin } from "../../../assets";
import "./upload.scss";
const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={imgLogin} alt="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
