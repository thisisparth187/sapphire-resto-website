import React from "react";
import { motion } from "framer-motion";
import bgImage from '../assets/images/roombg.png';
import tableBg from '../assets/images/tablebg.png';


import imgGeneralManager from "../assets/images/team-images/general-manager.jpg";
import imgHeadChef from "../assets/images/team-images/Executive Chef.jpg";
import imgHospitalityManager from "../assets/images/team-images/Hospitality Manager.jpeg";
import imgGuestRelations from "../assets/images/team-images/Guest Relations Manager.jpg";


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
          backgroundImage: url(${bgImage}),
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
          <motion.a
            href="/contact"
            style={{
              backgroundColor: "#a27b5c",
              color: "#fff",
              padding: "12px 30px",
              display: "inline-block",
              marginTop: "20px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            }}
            whileHover={{
              boxShadow: "0px 6px 15px rgba(0,0,0,0.35)",
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            CONTACT NOW
          </motion.a>
        </motion.div>
      </section>

     {/* 3. Facilities Section with Hover Effect */}
<motion.section
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  style={{
    padding: "60px 5%",
    textAlign: "center",
    backgroundColor: "#3f4f44",
    color: "#eeeeee",
  }}
>
  <h4 style={{ color: "#c29d69", letterSpacing: "5px" }}>FACILITIES</h4>
  <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>
    Amenities Available at Sapphire
  </h2>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "3rem",
      padding: "2rem"
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
      <motion.div
        key={index}
        whileHover={{
          y: -10,
          scale: 1.05,
          boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          background: "#EEEEEE",
          padding: "20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        className="flex flex-col items-center"
      >
        {facility.icon}
        <h3 style={{ color: "#c29d69", marginTop: "10px" }}>
          {facility.name}
        </h3>
      </motion.div>
    ))}
  </div>
</motion.section>


      {/* 4. Meet the Team */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        style={{ textAlign: "center", padding: "60px 5%" }}
        className="flex flex-col gap-4"
      >
        <div className="">
          <h4 style={{ color: "#c29d69", letterSpacing: "2px" }}>OUR TEAM</h4>
        <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>
          MEET THE EXPERT MEMBERS
        </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            { name: "Sophia Turner", role: "General Manager", img: imgGeneralManager },
            { name: " Richard Williams", role: "Head Chef", img: imgHeadChef },
            { name: "Michael Lee", role: "Hospitality Manager", img: imgHospitalityManager },
            { name: "Daniel Mitchell", role: "Guest Relations", img: imgGuestRelations },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={member.img}
                alt={member.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  marginTop: "10px",
                  color: "#333",
                }}
              >
                {member.name}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#777", marginTop: "4px" }}>
                {member.role}
              </p>
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
    SAPPHIRE LUXURY HOTEL AND RESORT
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
        whileHover={{
          y: -10,
          scale: 1.03,
          boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          background: "#fff",
          color: "#333",
          padding: "20px",
          borderRadius: "8px",
          cursor: "pointer",
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
    flexWrap: "wrap",
    gap: "20px",
  }}
>
  {[
    { label: "Luxury Rooms", value: "250 +" },
    { label: "Customer Rating", value: "4.9" },
    { label: "Happy Customers", value: "12k +" },
  ].map((stat, idx) => (
    <motion.div
      key={idx}
      whileHover={{
        y: -10,
        scale: 1.05,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        background: "#f8f8f8",
        padding: "20px 40px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
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