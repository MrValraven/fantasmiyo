import React from "react";

import "./styles.scss";
import contactImage from "../../assets/contact.jpg";
import Form from "../Form/Form";

const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Send me a message!</h1>
      <div className="contactForm">
        <img src={contactImage} alt="contact image" />
        <Form />
      </div>
    </div>
  );
};

export default Contacts;
