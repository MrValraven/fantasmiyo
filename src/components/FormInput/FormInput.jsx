import React, { useRef } from "react";
import "./styles.scss";

const FormInput = ({
  label,
  name,
  type = "text",
  handleInput,
  max = 0,
  placeholder = "",
  isRequired = false,
}) => {
  const inputRef = useRef(null);

  return (
    <div className="formInput">
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        placeholder={placeholder}
        max={max}
        ref={inputRef}
        type={type}
        name={name}
        onChange={(e) => handleInput(e)}
        required={isRequired}
      />
    </div>
  );
};

export default FormInput;
