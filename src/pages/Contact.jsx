import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Contact.module.css";
import bgImage from "../assets/images/roombg.png";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const res = await fetch("https://sapphire-resto-website.onrender.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    try {
      // simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setPopup({ type: "success", message: "Your booking request was sent!\nCheck Email for further information." });
    } catch (err) {
      setPopup({ type: "error", message: "Something went wrong, try again." });
    } finally {
      setLoading(false);
    }

  };

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
            transition={{ duration: 0.8 }}
            style={{ fontSize: "1.1rem" }}
            className="flex items-center gap-2"
          >
            <span style={{ color: "#c29d69" }}>Home</span> &gt; Contact
          </motion.p>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`${styles["contact-section"]} mx-[10rem] my-[5rem]`}
      >
        {/* Left Info Section */}
        <div className={styles["contact-info"]}>
          <h4 className={styles["contact-subtitle"]}>CONTACT US</h4>
          <h1 className={styles["contact-title"]}>CONTACT WITH US</h1>
          <p className={styles["contact-description"]}>
            Rapidiously myocordinate cross-platform intellectual capital after
            the model. Appropriately create interactive infrastructures after
            maintenance Holisticly facilitate stand-alone.
          </p>

          <div className={styles["contact-details"]}>
            <div className={styles["contact-item"]}>
              <span className={styles.icon}>📞</span>
              <div>
                <h4>Call Us Now</h4>
                <p>+980 123 (4567) 890</p>
              </div>
            </div>

            <div className={styles["contact-item"]}>
              <span className={styles.icon}>✉️</span>
              <div>
                <h4>Send Email</h4>
                <p>sapphire@gmail.com</p>
              </div>
            </div>

            <div className={styles["contact-item"]}>
              <span className={styles.icon}>📍</span>
              <div>
                <h4>Our Location</h4>
                <p>
                  New Elephant Road, Dhanmondi <br /> Dhaka - 1212
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className={styles["contact-form"]}>
          <h2>GET IN TOUCH</h2>
          <form onSubmit={handleSubmit}>
            <div className="textInputWrapper">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="textInput"
                required
              />
            </div>
            <div className="textInputWrapper">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="textInput"
                required
              />
            </div>

            <select
              className={styles["form-input"]}
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Services</option>
              <option value="Booking Inquiry">Booking Inquiry</option>
              <option value="General Support">General Support</option>
              <option value="Feedback">Feedback</option>
            </select>


            <div className="textInputWrapper">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className={`textInput ${styles.textarea}`}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </motion.div>
      {popup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>{popup.type === "success" ? "✅ Success!" : "❌ Error"}</h2>
            <p>{popup.message}</p>
            <button onClick={() => setPopup(null)}>Close</button>
          </div>
        </div>
      )}
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}

    </div>
  );
};

export default Contact;
