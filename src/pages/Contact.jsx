import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = document.getElementById("contactname").value;
    const email = document.getElementById("contactemail").value;
    const message = document.getElementById("contactmessage").value;

    try {
      const res = await fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      alert(data.message);

      // Optional: Clear fields after sending
      if (data.success) {
        document.getElementById("contactname").value = "";
        document.getElementById("contactemail").value = "";
        document.getElementById("contactmessage").value = "";
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="scroll-container">
      <div className="feedback animate-feedback">
        <div className="message animate-message">
          <h1 className="message1">Want to get in touch?</h1>
          Email us right away!
        </div>
        <form className="form animate-form" onSubmit={handleSubmit}>
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