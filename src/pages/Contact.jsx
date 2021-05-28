import "./Contact.css";
import Footer from "./Footer";
import contact from "../images/contact.svg";
import gmail from "../images/gmail.png";
import phone from "../images/phone.png";
// import React, { useState } from "react";

const Contact = () => {
  return (
    <div className="wrapper" id="contact">
      <img src={contact} alt="Loading.." />
      <div className="contact-details">
        <div className="mail">
          <img src={gmail} alt="Loading.." />
          <h2 style={{ paddingRight: "50px" }}>zsoltd.com@gmail.com</h2>
        </div>
        <div className="phone">
          <img src={phone} alt="Loading.." />
          <h2>0770480551</h2>
        </div>
      </div>
      <form className="contact-section">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Email" />
        <textarea className="textarea" placeholder="Message me" />
        <button type="submit">Send</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
