import React from "react";

import "./styles.scss";

const DefaultButton = ({ buttonText, onClick, style = {} }) => {
  return (
    <button onClick={onClick} style={style}>
      {buttonText}
    </button>
  );
};

export default DefaultButton;
