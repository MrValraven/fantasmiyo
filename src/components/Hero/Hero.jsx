import React from "react";

import "./styles.scss";

import HeroImage from "../../assets/hero.jpg";
import DefaultButton from "../DefaultButton/DefaultButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroText">
        <span className="subtitle">Hi there, I'm</span>
        <h1>FANTASMIYO</h1>
        <hr />
        <p>
          I'm a digital artist from Spain who, through bright colors and
          quotidian situations, develops different types of atmospheres,
          sometimes cozy and childish, and others bordering on the surreal and
          visions of their own dreams.
        </p>
        <div className="buttons">
          <DefaultButton buttonText={"See my work"} />
          <DefaultButton buttonText={"Contact me"} />
        </div>
      </div>
      <img src={HeroImage} alt="" />
    </div>
  );
};

export default Hero;
