import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import bgImage from '../assets/images/roombg.png';

const Contact = () => {
  return (
    <div>
      
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
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
            display: "inline-block",
          }}
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: "3rem", fontWeight: "bold" }}
          >
            About Us
          </motion.h1>
          <p style={{ fontSize: "1.1rem" }}>
            <span style={{ color: "#c29d69" }}>Home</span> › About Us
          </p>
        </div>
      </motion.section>
      
     <div className="contact-section mx-[10rem] my-[5rem]">
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
              <p>example@gmail.com</p>
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
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="email" placeholder="Your Email" className="form-input" />
          <select className="form-input">
            <option>Select Services</option>
            <option>Booking Inquiry</option>
            <option>General Support</option>
            <option>Feedback</option>
          </select>
          <textarea placeholder="Message" className="form-input textarea"></textarea>
          <button type="submit" className="submit-btn">SEND MESSAGE</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;