import React, { useState, useEffect } from "react";
import DefaultButton from "../DefaultButton/DefaultButton";

import workImages from "../../static/work";

import "./styles.scss";

const Work = () => {
  const [work, setWork] = useState([]);
  const [showAllWork, setShowAllWork] = useState(false);

  useEffect(() => {
    setWork(workImages.slice(0, Math.ceil(workImages.length / 2)));
  }, []);

  useEffect(() => {
    if (!showAllWork)
      setWork(workImages.slice(0, Math.ceil(workImages.length / 2)));
    else setWork(workImages);
  }, [showAllWork]);

  return (
    <div className="work">
      <h1>Check out my work!</h1>
      <div className="work-grid">
        {work.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </div>
      {!showAllWork ? (
        <DefaultButton
          onClick={() => setShowAllWork(true)}
          buttonText="Show more +"
          style={{ width: "50%" }}
        />
      ) : null}
    </div>
  );
};

export default Work;
