import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div div className="scroll-container">
      <div className="feedback animate-feedback">
        <div className="message animate-message">
          <h1 className="message1">Want to get in touch?</h1>
          Email us right away!
        </div>
        <form className="form animate-form">
          <input
            type="text"
            spellCheck="false"
            name="ContactName"
            id="contactname"
            className="inputbox animate-input input1"
            placeholder="Enter your name"
          />
          <input
            type="email"
            spellCheck="false"
            name="ContactEmail"
            id="contactemail"
            className="inputbox animate-input input2"
            placeholder="Enter your e-mail"
          />
          <textarea
            name="ContactMessage"
            id="contactmessage"
            className="inputbox textarea animate-input input3"
            placeholder="Enter your message here"
          />
          <button className="submit-btn animate-input input4">Submit</button>
        </form>
      </div>

      <div className="socials">
        <a href="http://instagram.com" target="_blank" rel="noreferrer">
          <img
            className="icons"
            src="src/assets/images/instaicon.png"
            alt="Instagram icon"
          />{" "}
          /sapphire_hotels
        </a>
        <a href="http://facebook.com" target="_blank" rel="noreferrer">
          <img
            className="icons"
            src="src/assets/images/facebookicon.png"
            alt="Facebook icon"
          />{" "}
          /Sapphire Hotels
        </a>
        <a href="http://linkedin.com" target="_blank" rel="noreferrer">
          <img
            className="icons"
            src="src/assets/images/linkdinicon.png"
            alt="LinkedIn icon"
          />{" "}
          /Sapphire Agency
        </a>
        <a href="http://x.com" target="_blank" rel="noreferrer">
          <img
            src="src/assets/images/xicon.png"
            alt="X icon"
            className="icons"
          />{" "}
          /@sapphirehotels
        </a>
      </div>
    </div>
  );
};

export default Contact;