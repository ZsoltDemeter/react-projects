import "./Contact.css";
import Footer from "./Footer";
// import React, { useState } from "react";

const Contact = () => {
  return (
    <div className="wrapper" id="contact">
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
