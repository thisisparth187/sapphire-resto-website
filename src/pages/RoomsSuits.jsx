import React from "react";
import styles from "../styles/RoomsSuits.module.css";
import { motion } from "framer-motion";
import bgImage from '../assets/images/roombg.png';
import { div } from "framer-motion/client";

const RoomsSuits = () => {
  const rooms = [
  {
    name: "Deluxe Room",
    price: "₹4,500 / night",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luxury Suite",
    price: "₹7,800 / night",
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Presidential Suite",
    price: "₹9,900 / night",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Deluxe Room",
    price: "₹4,500 / night",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luxury Suite",
    price: "₹7,800 / night",
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Presidential Suite",
    price: "₹9,900 / night",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
];


  return (

    <div>
      {/* 1. About Us Hero Section */}
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
            Rooms & Suites
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} style={{ fontSize: "1.1rem" }} className="flex items-center gap-2">
            <span style={{ color: "#c29d69" }}>Home</span> &gt; Rooms & Suites
          </motion.p>
        </div>
      </motion.section>

      <div className={styles.roomsContainer}>
        <h1 className={styles.title}>Rooms & Suites</h1>
        <div className={styles.roomsGrid}>
          {rooms.map((room, index) => (
            <div className={styles.roomCard} key={index}>
              <img src={room.img} alt={room.name} className={styles.roomImg} />
              <h2 className={styles.roomName}>{room.name}</h2>
              <p className={styles.roomPrice}>{room.price}</p>
              <button className='btn'>Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsSuits;
