import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import bgImage from '../assets/images/roombg.png';
const Contact = () => {
  return (
    <div>
      
    <motion.section
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "150px 0",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div
          style={{
            padding: "80px 20px",
            display: "flex",
          }}
          className="flex-col content-center items-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: "3rem", fontWeight: "bold" }}
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} style={{ fontSize: "1.1rem" }} className="flex items-center gap-2">
            <span style={{ color: "#c29d69" }}>Home</span> &gt; Contact
          </motion.p>
        </div>
      </motion.section>
      
     <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="contact-section mx-[10rem] my-[5rem]">
      {/* Left Info Section */}
      <div className="contact-info">
        <h4 className="contact-subtitle">CONTACT US</h4>
        <h1 className="contact-title">CONTACT WITH US</h1>
        <p className="contact-description">
          Rapidiously myocordinate cross-platform intellectual capital after 
          the model. Appropriately create interactive infrastructures after 
          maintenance Holisticly facilitate stand-alone.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <span className="icon">📞</span>
            <div>
              <h4>Call Us Now</h4>
              <p>+980 123 (4567) 890</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon">✉️</span>
            <div>
              <h4>Send Email</h4>
              <p>sapphire@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon">📍</span>
            <div>
              <h4>Our Location</h4>
              <p>New Elephant Road, Dhanmondi <br /> Dhaka - 1212</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="contact-form">
        <h2>GET IN TOUCH</h2>
        <form>
          <div className="textInputWrapper">
            <input type="text" placeholder="Your Name" className="textInput" />
          </div>
          <div className="textInputWrapper">
            <input type="email" placeholder="Your Email" className="textInput" />
          </div>
          <select className="form-input">
            <option>Select Services</option>
            <option>Booking Inquiry</option>
            <option>General Support</option>
            <option>Feedback</option>
          </select>
          <div className="textInputWrapper">
            <textarea placeholder="Message" className="textInput textarea"></textarea>
          </div>
          <button type="submit" className="btn">SEND MESSAGE</button>
        </form>
      </div>
    </motion.div>
    </div>
  );
};

export default Contact;