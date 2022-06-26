import React from "react";

import "./styles.scss";

import twitterIcon from "../../assets/socials/twitter.svg";
import instagramIcon from "../../assets/socials/instagram.svg";
import catIcon from "../../assets/cat.svg";

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <a
          href="https://twitter.com/fantasmiyo"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <img src={twitterIcon} alt="twitter" />
        </a>
        <a
          href="https://www.instagram.com/fantasmiyo/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <img src={instagramIcon} alt="instagram" />
        </a>
      </div>
      <p>Fantasmiyo 2022 | All rights reserved</p>
      <p>
        Made with <img className="cats" src={catIcon} alt="cat icon" />
        's by&nbsp;{" "}
        <a
          href="https://tiagocostadev.com"
          target="_blank"
          rel="noopenner noreferrer"
        >
          {" "}
          Tiago Costa
        </a>
      </p>
    </footer>
  );
};

export default Footer;
