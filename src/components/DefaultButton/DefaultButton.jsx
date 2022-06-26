import React from "react";

import "./styles.scss";

const DefaultButton = ({ buttonText, onClick, style = {} }) => {
  return (
    <button className="defaultButton" onClick={onClick} style={style}>
      {buttonText}
    </button>
  );
};

export default DefaultButton;
