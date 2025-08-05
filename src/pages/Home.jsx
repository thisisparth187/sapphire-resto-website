import React from 'react'
import "../styles/Home.css";
import Card from '../components/Card';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className='main'>
      <div className="hero">
        <div className="hero-img">
          <motion.p>LUXURY HOTELS AND RESORTS</motion.p>
          <motion.h1>The Best Luxury Hotels <br /> in PUNE</motion.h1>
        </div>
        <motion.div className="other flex justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
