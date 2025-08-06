import React from 'react'
import "../styles/Home.css";
import Card from '../components/Card';
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className='main'>
      <div className="hero">
        <div className="hero-img">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='flex gap-2 stars'
          >
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                color="#C29D69"
                style={{
                  transform: 'rotate(-20deg)', // tilt angle
                }}
              />
            ))}
          </motion.p>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>LUXURY HOTELS AND RESORTS</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>The Best Luxury Hotels <br /> in PUNE</motion.h1>
        </div>
        <motion.div className="other flex justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}>
          <Card />
          <Card />
          <Card />
          <Card />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
