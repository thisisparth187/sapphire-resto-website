import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    alert(`Room: ${roomType}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nFacilities: ${facilities.join(', ') || 'None'}`);
  };

  const rooms = [
    {name:'Deluxe Room', price:'₹3,500', desc:'Spacious, modern design, AC, free Wi-Fi.', img:'src/assets/images/find-room-img/dulex_room.jpg'},
    {name:'Super Deluxe Room', price:'₹4,800', desc:'Luxury decor, balcony, minibar.', img:'src/assets/images/find-room-img/super-deluxe-room.jpg'},
    {name:'Executive Suite', price:'₹7,200', desc:'Private lounge, king-size bed.', img:'src/assets/images/find-room-img/executive-suite-room.jpg'},
    {name:'Presidential Suite', price:'₹15,000', desc:'Private pool & butler service.', img:'src/assets/images/find-room-img/presidential-suite.jpg'},
    {name:'Family Room', price:'₹6,000', desc:'Extra beds, kitchenette.', img:'src/assets/images/find-room-img/family-room.jpg'},
    {name:'Honeymoon Suite', price:'₹9,000', desc:'Jacuzzi, romantic package.', img:'src/assets/images/find-room-img/honeymoon-suite.jpg'},
    {name:'Standard Room', price:'₹2,800', desc:'Comfortable, budget-friendly.', img:'src/assets/images/find-room-img/standard-room.jpg'},
    {name:'Luxury Room', price:'₹8,500', desc:'High-end bedding, spa access.', img:'src/assets/images/find-room-img/luxury-room.jpg'},
    {name:'Sea View Room', price:'₹9,500', desc:'Balcony & breakfast.', img:'src/assets/images/find-room-img/sea-view-room.jpg'},
    {name:'Garden View Room', price:'₹5,200', desc:'Patio & peaceful views.', img:'src/assets/images/find-room-img/Garden-view-room.jpg'},
  ];

  const facilitiesList = ['AC','Wi-Fi','Balcony','TV','Mini Bar','Room Service','Kitchenette','Hot Water','Pool','Gym'];

  return (
    <div style={{ background: '#fff', padding: 24 }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Sapphire Hotel — Check Availability</h1>

        <div style={{ borderRadius: 8, padding: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #e6e6e6' }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ minWidth: 200 }}>
              <label htmlFor="checkin">Check-in</label>
              <input id="checkin" type="date" style={{ width: '100%', padding: 8, marginTop: 6 }} />
            </div>
            <div style={{ minWidth: 200 }}>
              <label htmlFor="checkout">Check-out</label>
              <input id="checkout" type="date" style={{ width: '100%', padding: 8, marginTop: 6 }} />
            </div>
            <div style={{ minWidth: 220 }}>
              <label htmlFor="room-type">Room Type</label>
              <select id="room-type" style={{ width: '100%', padding: 8, marginTop: 6 }}>
                {rooms.map(r => <option key={r.name}>{r.name}</option>)}
              </select>
            </div>
            <div style={{ alignSelf: 'end', minWidth: 120 }}>
              <button 
                type="button" 
                onClick={handleCheck} 
                style={{ padding: '10px 12px', background:'#111', color:'#fff', borderRadius:6 }}
              >
                BOOK NOW
              </button>
            </div>
          </div>

          {/* Facilities with gold-colored custom checkboxes */}
          <div style={{ marginTop: 12 }}>
            <label style={{ display: 'block', marginBottom: 6, fontWeight: '600' }}>Facilities</label>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              {facilitiesList.map(f => (
                <label 
                  key={f} 
                  style={{ display:'flex', alignItems:'center', gap:6, cursor:'pointer', userSelect:'none' }}
                >
                  <input 
                    name="facility" 
                    type="checkbox" 
                    value={f} 
                    style={{ 
                      width: 20, 
                      height: 20, 
                      accentColor: '#d4af37',  // gold color
                      cursor: 'pointer',
                      border: '2px solid #d4af37',
                      borderRadius: 4,
                    }} 
                  />
                  <span>{f}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Room details */}
        <h2 style={{ marginTop:18 }}>Room Details</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:12 }}>
          {rooms.map((r, idx) => {
            const isSelected = selectedRoom === r.name;
            return (
              <motion.div
                key={r.name}
                onClick={() => setSelectedRoom(r.name)}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  background: isSelected ? '#fff8dc' : '#fafafa',
                  color: "#333",
                  padding: "20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border: isSelected ? '3px solid #d4af37' : '1px solid #e6e6e6',
                  boxShadow: isSelected ? "0 0 15px #d4af37" : "none",
                  userSelect: "none",
                  display: "flex",
                  flexDirection: "column",
                }}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedRoom(r.name);
                }}
              >
                <img src={r.img} alt={r.name} style={{ width: "100%", borderRadius: 6, marginBottom: 12 }} />
                <h4 style={{ margin: '0 0 6px 0' }}>{r.name}</h4>
                <p style={{ margin: 0, color: '#444' }}>
                  {r.desc}
                  <strong style={{ display: 'block', marginTop: 8 }}>{r.price}/night</strong>
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
