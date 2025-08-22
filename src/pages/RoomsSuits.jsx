import React from "react";
import "../styles/RoomsSuites.css";

const RoomsSuits = () => {
  const rooms = [
    {
      name: "Deluxe Room",
      price: "₹4,500 / night",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Luxury Suite",
      price: "₹7,800 / night",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Presidential Suite",
      price: "₹12,500 / night",
      img: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="rooms-container">
      <h1 className="title">Rooms & Suites</h1>
      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.img} alt={room.name} className="room-img" />
            <h2 className="room-name">{room.name}</h2>
            <p className="room-price">{room.price}</p>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsSuits;
