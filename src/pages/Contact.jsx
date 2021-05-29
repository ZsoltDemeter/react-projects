import "./Contact.css";
import Footer from "./Footer";
import contact from "../images/contact.svg";
import emailIcon from "../images/gmail.png";
import phoneIcon from "../images/phone.png";
import React, { useState } from "react";

const Contact = () => {
  const [clicked, setClicked] = useState(false);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onClick = () => {
    setClicked(true);
  };
  return (
    <div className="wrapper" id="contact">
      <img src={contact} alt="Loading.." />
      <div className="contact-details">
        <div className="mail">
          <img src={emailIcon} alt="Loading.." />
          <h2>zsoltd.com@gmail.com</h2>
        </div>
        <div className="phone">
          <img src={phoneIcon} alt="Loading.." />
          <h2>0770480551</h2>
        </div>
      </div>
      <form className="contact-section">
        <input
          className={!name && clicked ? "error" : ""}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={!phoneNumber && clicked ? "error" : ""}
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          className={!email && clicked ? "error" : ""}
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className={!message && clicked ? "textarea error" : "textarea"}
          placeholder="Message me"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="button" onClick={onClick}>
          Send
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default Contact;
