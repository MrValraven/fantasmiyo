import React from "react";
import DefaultButton from "../DefaultButton/DefaultButton";

import CustomCat from "../../assets/magiccat.png";
import Work2 from "../../assets/work/work12.png";
import Work3 from "../../assets/work/work10.png";
import Work4 from "../../assets/work/work4.png";

import "./styles.scss";

const CustomOrder = () => {
  return (
    <div className="customOrder">
      <div className="customOrderText">
        <h1>Custom Orders</h1>
        <p>
          Something something wild creativity, something amazing cats, cute
          drawing, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Numquam, voluptatem dolorem saepe ipsam
          sint praesentium libero veritatis qui magnam quas.
        </p>
        <div className="imagesContainer">
          <img src={Work2} alt="image1" />
          <img src={Work3} alt="image2" />
          <img src={Work4} alt="image3" />
        </div>
        <DefaultButton buttonText={"Order now"} style={{ width: "50%" }} />
      </div>
    </div>
  );
};

export default CustomOrder;
