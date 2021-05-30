import "./Contact.css";
import Footer from "./Footer";
import contact from "../images/contact.svg";
import emailIcon from "../images/gmail.png";
import phoneIcon from "../images/phone.png";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [hideMessage, setHideMessage] = useState(true);
  const [errors, setErrors] = useState([]);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const errorCheck = () => {
    const errors = validate(name, phoneNumber, email, message);

    if (errors.length > 0) {
      setErrors(errors);
      return;
    } else {
      setErrors([]);
    }
  };

  const hide = () => {
    setHideMessage(true);
  };

  const SentNotification = () => {
    return (
      <div className="message">
        <span id="X" onClick={hide}>
          &#10005;
        </span>

        {errors.length === 0 ? (
          <h4>Message sent!</h4>
        ) : (
          <ul>
            {errors.map((error) => (
              <li key={error}>Error: {error}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  function validate(name, phoneNumber, email, message) {
    const errors = [];

    if (name.length === 0) {
      errors.push("Name can't be empty");
    }

    if (phoneNumber.length < 6) {
      errors.push("Phone number should contain at least 6 characters");
    }

    if (email.length < 5) {
      errors.push("Email should be at least 5 charcters long");
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
    }

    if (message.length < 8) {
      errors.push(
        "Message should not be empty and contain at least 8 characters"
      );
    }

    return errors;
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setHideMessage(false);
    errorCheck();

    if (errors.length === 0) {
      emailjs
        .sendForm(
          "service_ys0ytkx",
          "template_c8iit8p",
          e.target,
          "user_Lf9pzgJzJyhgsjWVVB3g5"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setName("");
      setPhoneNumber("");
      setEmail("");
      setMessage("");

      e.target.reset();
      return;
    }
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
      <form className="contact-section" onSubmit={sendEmail}>
        <input
          autoComplete="new-name"
          name="name"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          // autoComplete="new-phone"
          name="phoneNumber"
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          autoComplete="new-email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="textarea"
          name="message"
          placeholder="Message me"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" onMouseOver={errorCheck}>
          Send
        </button>
      </form>
      {!hideMessage && <SentNotification />}
      <Footer />
    </div>
  );
};

export default Contact;
