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
    </div>
  );
};

export default Contact;