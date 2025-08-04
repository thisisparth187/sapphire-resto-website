import React from "react";
import { motion } from "framer-motion";
import bgImage from '../assets/images/roombg.png'
import tableBg from '../assets/images/tablebg.png'
import {
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
  FaSpa,
  FaBriefcase,
  FaConciergeBell,
  FaShuttleVan,
  FaDumbbell,
} from "react-icons/fa";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      {/* 1. About Us Hero Section */}
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

      {/* 2. Luxury Hotel Intro */}
      <section style={{ display: "flex", flexWrap: "wrap", padding: "60px 5%" }}>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          style={{ flex: "1 1 50%", paddingRight: "20px" }}
        >
          <img
            src={tableBg}
            alt="Luxury Room"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          style={{ flex: "1 1 50%", paddingLeft: "20px" }}
        >
          <h4 style={{ color: "#c29d69", letterSpacing: "2px" }}>
            LUXURY HOTEL AND RESORT
          </h4>
          <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>
            LUXURY BEST HOTEL IN CITY CALIFORNIA, USA
          </h2>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
            Welcome to Sapphire Resto & Suites – the perfect blend of comfort,
            luxury, and fine dining.
          </p>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
            Whether you're here for a romantic escape or a family vacation, we
            ensure a stay filled with memorable moments.
          </p>
          <div
            style={{
              background: "#eeeeee",
              padding: "15px 20px",
              marginTop: "20px",
              borderRadius: "8px",
              fontStyle: "italic",
            }}
          >
            102/B, Dream Street, New Elephant Road, Resort
          </div>
          <a
            href="/contact"
            style={{
              backgroundColor: "#a27b5c",
              color: "#fff",
              padding: "12px 30px",
              display: "inline-block",
              marginTop: "20px",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            CONTACT NOW
          </a>
        </motion.div>
      </section>

      {/* 3. Facilities Section */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        style={{ padding: "60px 5%", textAlign: "center" }}
      >
        <h4 style={{ color: "#c29d69", letterSpacing: "5px" }}>FACILITIES</h4>
        <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>
          Amenities Available at Sapphire
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            { icon: <FaWifi size={30} color="#a27b5c" />, name: "Free Wi-Fi" },
            { icon: <FaSwimmingPool size={30} color="#a27b5c" />, name: "Swimming Pool" },
            { icon: <FaUtensils size={30} color="#a27b5c" />, name: "Fine Dining" },
            { icon: <FaSpa size={30} color="#a27b5c" />, name: "Spa & Wellness" },
            { icon: <FaBriefcase size={30} color="#a27b5c" />, name: "Conference Hall" },
            { icon: <FaConciergeBell size={30} color="#a27b5c" />, name: "24/7 Room Service" },
            { icon: <FaShuttleVan size={30} color="#a27b5c" />, name: "Airport Pickup" },
            { icon: <FaDumbbell size={30} color="#a27b5c" />, name: "Fitness Center" },
          ].map((facility, index) => (
            <div
              key={index}
              style={{
                background: "#f5f5f5",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              {facility.icon}
              <h3 style={{ color: "#a27b5c", marginTop: "10px" }}>
                {facility.name}
              </h3>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. Meet the Team */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        style={{ textAlign: "center", padding: "60px 5%" }}
      >
        <h4 style={{ color: "#c29d69", letterSpacing: "2px" }}>OUR TEAM</h4>
        <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>
          MEET THE EXPERT MEMBERS
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            { name: "John Smith", role: "General Manager", img: "https://randomuser.me/api/portraits/men/75.jpg" },
            { name: "Emma Brown", role: "Head Chef", img: "https://randomuser.me/api/portraits/women/65.jpg" },
            { name: "Michael Lee", role: "Hospitality Manager", img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Sophia Davis", role: "Guest Relations", img: "https://randomuser.me/api/portraits/women/44.jpg" },
          ].map((member, idx) => (
            <motion.div key={idx}>
              <img
                src={member.img}
                alt={member.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 5. Client Feedback */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        style={{
          background: "#2c3930",
          padding: "60px 5%",
          color: "#fff",
        }}
      >
        <h4 style={{ color: "#c29d69", letterSpacing: "2px" }}>
          LUXURY HOTEL AND RESORT
        </h4>
        <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>
          CLIENT FEEDBACK ABOUT SERVICES
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {[
            { text: "Amazing hospitality, great food, and beautiful rooms. Highly recommended!", img: "https://randomuser.me/api/portraits/women/50.jpg" },
            { text: "A luxury experience worth every penny. Will visit again soon!", img: "https://randomuser.me/api/portraits/men/60.jpg" },
            { text: "From the welcome drink to the checkout, everything was perfect!", img: "https://randomuser.me/api/portraits/women/33.jpg" },
            { text: "The pool and spa are world-class. I felt rejuvenated.", img: "https://randomuser.me/api/portraits/men/25.jpg" },
            { text: "Staff was polite, food was delicious, and rooms were spacious.", img: "https://randomuser.me/api/portraits/women/22.jpg" },
          ].map((review, idx) => (
            <motion.div
              key={idx}
              style={{
                background: "#fff",
                color: "#333",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <img
                src={review.img}
                alt="Reviewer"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  marginBottom: "10px",
                }}
              />
              <p>“{review.text}”</p>
              <p style={{ color: "#c29d69" }}>★★★★★</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 6. Stats / Rating Section */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "60px 5%",
          background: "#fff",
          textAlign: "center",
        }}
      >
        {[
          { label: "Luxury Rooms", value: "250 +" },
          { label: "Customer Rating", value: "4.9" },
          { label: "Happy Customers", value: "12k +" },
        ].map((stat, idx) => (
          <motion.div key={idx}>
            <h1 style={{ color: "#a27b5c", fontSize: "2.5rem" }}>
              {stat.value}
            </h1>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default About;
