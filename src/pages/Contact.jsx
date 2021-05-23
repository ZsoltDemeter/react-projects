import "./Contact.css";
// import React, { useState } from "react";

const Contact = () => {
  return (
    <form className="contact-section" id="contact">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Phone Number" />
      <input type="text" placeholder="Email" />
      <textarea className="textarea" placeholder="Message me" />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
