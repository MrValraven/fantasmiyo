import React from "react";
import "./styles.scss";

const Header = ({ switchTheme }) => {
  return (
    <header>
      <button onClick={switchTheme}>switch theme</button>
    </header>
  );
};

export default Header;
