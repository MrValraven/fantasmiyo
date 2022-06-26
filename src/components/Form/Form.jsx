import React, { useState } from "react";
import DefaultButton from "../DefaultButton/DefaultButton";
import FormInput from "../FormInput/FormInput";

import "./styles.scss";

const Form = ({ email }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: email || "",
    subject: "",
    message: "",
  });

  const handleInputChange = (element) => {
    setFormData((previousState) => ({
      ...previousState,
      [element.target.name]: element.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === ""
    )
      return;

    console.log("sending message");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FormInput
        label="Name"
        name="Name"
        handleInput={handleInputChange}
        isRequired="required"
        placeholder="Your name"
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={email}
        handleInput={handleInputChange}
        isRequired="required"
        placeholder="Your E-mail"
      />
      <FormInput
        label="Subject"
        name="subject"
        type="text"
        handleInput={handleInputChange}
        isRequired="required"
        placeholder="Message subject"
      />
      <label htmlFor="">Message</label>
      <textarea placeholder="Your message" required />
      <DefaultButton
        className="formButton"
        buttonText="Send message"
        clickEvent={handleSubmit}
        style={{
          marginTop: "35px",
          alignSelf: "center",
          width: "70%",
          borderRadius: "12px",
        }}
      />
    </form>
  );
};

export default Form;
