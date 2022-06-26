import React from "react";

import CustomCat from "../../assets/magiccat.png";

import "./styles.scss";

const CustomOrder = () => {
  return (
    <div className="customOrder">
      <div className="customOrderText">
        <h1>Custom Orders</h1>
        <p>
          Something something wild creativity, something amazing cats, cute
          drawing, Lorem ipsum dolor sit amet.
        </p>
        <button>Order now</button>
      </div>
      <img src={CustomCat} alt="lighting cat" />
    </div>
  );
};

export default CustomOrder;
