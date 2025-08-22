import React from "react";
import { motion } from "framer-motion";

// use a CSS MODULE like RoomDetails does
import styles from "../styles/RoomsSuites.module.css";

// ✅ use the SAME assets you used in RoomDetails.jsx
import bgImage from "../assets/images/roombg.png";
import roomWebp from "../assets/images/room.webp";
import roomPhoto from "../assets/images/room-details/room.jpg";

import { FaUserFriends, FaWifi, FaCoffee, FaBed } from "react-icons/fa";

const RoomsSuits = () => {
  const rooms = [
    {
      name: "Deluxe Room",
      img: roomWebp,
      desc: "Comfortable deluxe room with modern amenities.",
      price: "₹4,500 / night",
      features: ["2 Guests", "Free WiFi", "Breakfast", "King Bed"],
    },
    {
      name: "Luxury Suite",
      img: roomPhoto,
      desc: "Spacious suite offering premium comfort & privacy.",
      price: "₹7,800 / night",
      features: ["4 Guests", "Free WiFi", "Breakfast", "2 Beds"],
    },
    {
      name: "Family Room",
      img: roomWebp, // reuse existing image if you don't have a third one yet
      desc: "Ideal for families — roomy layout and cozy vibes.",
      price: "₹6,200 / night",
      features: ["4 Guests", "Free WiFi", "Breakfast", "Queen Bed"],
    },
  ];

  return (
    <div>
      {/* === HERO — EXACT same motion & class names as RoomDetails.jsx === */}
      <motion.section
        className={styles.hero}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles["hero-content"]}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles["hero-title"]}
          >
            Rooms & Suites
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles["hero-breadcrumb"]}
          >
            <span className={styles["breadcrumb-highlight"]}>Rooms</span> &gt; All
          </motion.p>
        </div>
      </motion.section>

      {/* === LISTING GRID === */}
      <section className={styles["rooms-section"]}>
        <div className={styles.grid}>
          {rooms.map((r, i) => (
            <motion.article
              key={r.name}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <img src={r.img} alt={r.name} className={styles.image} />

              <div className={styles.content}>
                <h2 className={styles.name}>{r.name}</h2>
                <p className={styles.desc}>{r.desc}</p>

                <ul className={styles.features}>
                  <li><FaUserFriends /> {r.features[0]}</li>
                  <li><FaWifi /> {r.features[1]}</li>
                  <li><FaCoffee /> {r.features[2]}</li>
                  <li><FaBed /> {r.features[3]}</li>
                </ul>

                <div className={styles.footer}>
                  <span className={styles.price}>{r.price}</span>
                  <button className={styles.bookBtn}>Book Now</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoomsSuits;
