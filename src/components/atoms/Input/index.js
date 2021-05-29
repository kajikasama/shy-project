import React from "react";
import "./input.scss";

const Input = ({label, ...rest}) => {
  return (
    <div className="form-wrapper">
      <label className="label">{label}</label>
      <input className="input-text" {...rest} />
    </div>
  );
};

export default Input;
