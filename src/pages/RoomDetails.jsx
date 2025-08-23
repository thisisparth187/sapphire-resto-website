import React, { useState } from "react";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/RoomDetails.module.css"; // import css file
import bgImage from "../assets/images/roombg.png";
import roomImg from "../assets/images/room-details/room.jpg";
import { FaUserFriends, FaWifi, FaCoffee, FaBed, FaDumbbell, FaCheck } from "react-icons/fa";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

const RoomDetails = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles['hero-content']}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles['hero-title']}
          >
            Room Details
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles['hero-breadcrumb']}
          >
            <span className={styles['breadcrumb-highlight']}>Room</span> &gt; Room details
          </motion.p>
        </div>
      </motion.section>

      {/* Booking Section */}
      <RoomBooking />

      {/* Room Info Section */}
      <RoomInfo />

      {/* Children & Extra Beds Section */}
      <ChildrenExtraBeds />
    </div>
  );
};

// Booking Component
const RoomBooking = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleIncrease = (setter, value) => setter(value + 1);
  const handleDecrease = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  return (
    <div className={styles['room-booking']}>
      {/* Left Section - Image */}
      <div className={styles['room-image']}>
        <img src={roomImg} alt="Luxury Room" />
      </div>

      {/* Right Section - Booking Form */}
      <div className={styles['booking-form']}>
        <h2>Booking</h2>
        <form>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles['form-group']}>
        <label>Check In</label>
        <DatePicker
          value={checkIn}
          onChange={(newValue) => setCheckIn(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </div>

      <div className={styles['form-group']}>
        <label>Check Out</label>
        <DatePicker
          value={checkOut}
          onChange={(newValue) => setCheckOut(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </div>
    </LocalizationProvider>

          {/* Adults Counter */}
          <div className={styles['form-group']}>
            <label>Adults</label>
            <div className={styles.counter}>
              <button type="button" onClick={() => handleDecrease(setAdults, adults)}>-</button>
              <span>{adults}</span>
              <button type="button" onClick={() => handleIncrease(setAdults, adults)}>+</button>
            </div>
          </div>

          {/* Children Counter */}
          <div className={styles['form-group']}>
            <label>Children</label>
            <div className={styles.counter}>
              <button type="button" onClick={() => handleDecrease(setChildren, children)}>-</button>
              <span>{children}</span>
              <button type="button" onClick={() => handleIncrease(setChildren, children)}>+</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
};

// Room Info Component
const RoomInfo = () => {
  return (
    <div className={styles['room-info']}>
      {/* Left Content */}
      <div className={styles['info-left']}>
        <p className={styles.subtitle}>LUXURY ROOM</p>
        <h1 className={styles.title}>Delux Family Rooms</h1>
        <p className={styles.description}>
          Conveniently fashion pandemic potentialities for team driven technologies. 
          Proactively orchestrate robust systems rather than user-centric vortals. 
          Distinctively seize top-line e-commerce with premier intellectual capital. 
          Efficiently strategize goal-oriented.
        </p>

        {/* Check In / Out */}
        <div className={styles['check-container']}>
          <div>
            <h3 className={styles['check-title']}>↩ Check In</h3>
            <ul className={styles.list}>
              <li>Check-in from 9:00 AM - anytime</li>
              <li>Early check-in subject to availability</li>
            </ul>
          </div>
          <div>
            <h3 className={styles['check-title']}>↩ Check Out</h3>
            <ul className={styles.list}>
              <li>Check-out before noon</li>
              <li>Check-out from 9:00 AM - anytime</li>
            </ul>
          </div>
        </div>

        {/* House Rules */}
        <div className={styles['house-rules']}>
          <h2>House Rules</h2>
          <p>
            Professionally deliver fully researched scenarios with turnkey communities. 
            Competently unleash empowered applications without seamless data. 
            Uniquely underwhelm quality outsourcing before transparent relationships. 
            Efficiently enhance diverse relationships whereas leveraged.
          </p>
        </div>
      </div>
      
      {/* Right Content - Amenities */}
      <div className={styles['info-right']}>
        <h2>Amenities</h2>
        <ul className={styles['amenities-list']}>
          <li><FaUserFriends className={styles.icon} /> 2 - 5 Persons</li>
          <li><FaWifi className={styles.icon} /> Free WiFi Available</li>
          <li><FaCoffee className={styles.icon} /> Breakfast</li>
          <li><FaBed className={styles.icon} /> 250 SQFT Rooms</li>
          <li><FaDumbbell className={styles.icon} /> Gym facilities</li>
        </ul>
      </div>
    </div>
  );
};

// Children & Extra Beds Component
const ChildrenExtraBeds = () => {
  return (
    <div className={styles['extra-beds']}>
      <h2>Children & Extra Beds</h2>
      <p>
        Applications without seamless data. Uniquely underwhelm quality outsourcing 
        before transparent relationships. Efficiently enhance diverse relationships 
        whereas leveraged new house cafe.
      </p>
      <ul>
        <li><FaCheck className={styles['check-icon']} /> Quickly generate bricks-and-clicks</li>
        <li><FaCheck className={styles['check-icon']} /> Interactively cultivate visionary platforms</li>
        <li><FaCheck className={styles['check-icon']} /> Energistically envisioner resource</li>
        <li><FaCheck className={styles['check-icon']} /> Uniquely restore turnkey paradigms</li>
      </ul>
    </div>
  );
};

export default RoomDetails;
