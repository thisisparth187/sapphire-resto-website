import React from 'react'
import "../styles/Home.css";
import Card from '../components/Card';
const Home = () => {
  return (
    <div className='main'>
      <div className="hero">
        <div className="hero-img">
          <p>LUXURY HOTELS AND RESORTS</p>
          <h1>The Best Luxury Hotels <br /> in PUNE</h1>
        </div>
        <div className="other flex justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Home
