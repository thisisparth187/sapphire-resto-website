import React from 'react'
import "../styles/Home.css";
const Home = () => {
  return (
    <div className='cards-row'>
      <div className='rooms'>
        <div className="text" id='rooms'>
          Rooms
        </div>
      </div>
      <div className="table">
        <div className="text" id='table'>
          Table
        </div>
      </div>
    </div>
  )
}

export default Home
