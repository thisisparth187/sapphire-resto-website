import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/FindRoom.css";
import Card from '../components/Card';

export default function FindRoom() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleCheck = () => {
    const checkin = document.getElementById('checkin')?.value;
    const checkout = document.getElementById('checkout')?.value;
    const roomType = document.getElementById('room-type')?.value;
    const facilities = Array.from(document.querySelectorAll('input[name="facility"]:checked')).map(i => i.value);

    if (!checkin || !checkout) {
      alert('Please pick both dates.');
      return;
    }
    if (new Date(checkin) > new Date(checkout)) {
      alert('Check-out must be after check-in.');
      return;
    }
    alert(`Room: ${roomType}\nCheck-in: ${checkin}\nCheck-out: ${checkout}`);
  };

  const rooms = [
    { name: 'Deluxe Room', price: '₹3,500', desc: 'Spacious, modern design, AC, free Wi-Fi.', img: 'src/assets/images/find-room-img/dulex_room.jpg' },
    { name: 'Super Deluxe Room', price: '₹4,800', desc: 'Luxury decor, balcony, minibar.', img: 'src/assets/images/find-room-img/super-deluxe-room.jpg' },
    { name: 'Executive Suite', price: '₹7,200', desc: 'Private lounge, king-size bed.', img: 'src/assets/images/find-room-img/executive-suite-room.jpg' },
    { name: 'Presidential Suite', price: '₹15,000', desc: 'Private pool & butler service.', img: 'src/assets/images/find-room-img/presidential-suite.jpg' },
    { name: 'Family Room', price: '₹6,000', desc: 'Extra beds, kitchenette.', img: 'src/assets/images/find-room-img/family-room.jpg' },
    { name: 'Honeymoon Suite', price: '₹9,000', desc: 'Jacuzzi, romantic package.', img: 'src/assets/images/find-room-img/honeymoon-suite.jpg' },
    { name: 'Standard Room', price: '₹2,800', desc: 'Comfortable, budget-friendly.', img: 'src/assets/images/find-room-img/standard-room.jpg' },
    { name: 'Luxury Room', price: '₹8,500', desc: 'High-end bedding, spa access.', img: 'src/assets/images/find-room-img/luxury-room.jpg' },
    { name: 'Sea View Room', price: '₹9,500', desc: 'Balcony & breakfast.', img: 'src/assets/images/find-room-img/sea-view-room.jpg' },
  ];

  return (
    <div>
      <div className="hero-img">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>Find Rooms
        </motion.h1>

        <motion.p
          className="breadcrumb"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <span className="breadcrumb-home">Home</span> &gt; About Us
        </motion.p>
      </div>

      <div className="findroom-wrapper">

        <div className="findroom-container">
          <h1 className="findroom-title">Sapphire Hotel — Check Availability</h1>

          <div className="booking-box">

            <div className="booking-inputs">
              <div className="input-group">
                <label htmlFor="checkin">Check-in</label>
                <input id="checkin" type="date" />
              </div>
              <div className="input-group">
                <label htmlFor="checkout">Check-out</label>
                <input id="checkout" type="date" />
              </div>
              <div className="input-group">
                <label htmlFor="room-type">Room Type</label>
                <select id="room-type">
                  {rooms.map(r => <option key={r.name} className='text-gray-950'>{r.name}</option>)}
                </select>
              </div>
              <div className="book-btn-wrapper">
                <button type="button" onClick={handleCheck}>BOOK NOW</button>
              </div>
            </div>


          </div>

          <h2 className="room-details-title">Room Details</h2>
          <div className="rooms-grid">
            {rooms.map(r => {
              const isSelected = selectedRoom === r.name;
              return (
                <Card
                  key={r.name}
                  title={r.name}
                  price={r.price}
                  description={r.desc}
                  image={r.img}
                  selected={isSelected}
                  onClick={() => setSelectedRoom(r.name)}
                />
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
