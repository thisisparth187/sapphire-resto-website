import React from 'react';
import Room1 from '../assets/images/footer-img/1.jpg'
import Room2 from '../assets/images/footer-img/2.jpg'
import Room3 from '../assets/images/footer-img/3.jpg'
import Room4 from '../assets/images/footer-img/4.jpg'
import Room5 from '../assets/images/footer-img/5.jpg'
import Room6 from '../assets/images/footer-img/6.jpg'
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#111',
        color: '#fff',
        fontFamily: 'Georgia, serif',
        padding: '60px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '40px',
          padding: '0 20px',
        }}
      >
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h2 style={{ color: '#fff', fontSize: '24px' }}>
            SAPPHIRE{' '}
          </h2>

          <small style={{ fontSize: '14px', color: '#d2aa6d' }}>
            LUXURY HOTEL
          </small>
          <br />
          <h3
            style={{
              marginTop: '20px',
              fontSize: '18px',
              borderBottom: '2px solid #d2aa6d',
              display: 'inline-block',
              paddingBottom: '5px',
            }}
          >
            Contact Info
          </h3>
          <p style={{ margin: '10px 0' }}>📞 +980 (1234) 567 220</p>
          <p style={{ margin: '10px 0' }}>
            📧{' '}
            <a href="mailto:sapphire@gmail.com" style={{ color: '#ccc' }}>
              sapphire@gmail.com
            </a>
          </p>
          <p style={{ margin: '10px 0' }}>
            📍 102/B New Elephant Rd Dhaka - 1212
          </p>
          <div style={{ marginTop: '15px' }}>
            <a href="#" style={{ marginRight: '10px', color: '#d2aa6d' }}>
              🌐
            </a>
            <a href="#" style={{ marginRight: '10px', color: '#d2aa6d' }}>
              📸
            </a>
            <a href="#" style={{ marginRight: '10px', color: '#d2aa6d' }}>
              📍
            </a>
            <a href="#" style={{ color: '#d2aa6d' }}>📷</a>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '150px' }}>
          <h3
            style={{
              fontSize: '18px',
              borderBottom: '2px solid #d2aa6d',
              display: 'inline-block',
              paddingBottom: '5px',
            }}
          >
            Useful Links
          </h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              marginTop: '10px',
              lineHeight: 1.8,
            }}
          >
            <li>
              <a href="#" style={{ color: '#ccc' }}>
                About Hotel
              </a>
            </li>
            <li>
              <a href="#" style={{ color: '#ccc' }}>
                Rooms & Suites
              </a>
            </li>
            <li>
              <a href="#" style={{ color: '#ccc' }}>
                Reservations
              </a>
            </li>
            <li>
              <a href="#" style={{ color: '#ccc' }}>
                News & Blogs
              </a>
            </li>
            <li>
              <a href="#" style={{ color: '#ccc' }}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3
            style={{
              fontSize: '18px',
              borderBottom: '2px solid #d2aa6d',
              display: 'inline-block',
              paddingBottom: '5px',
            }}
          >
            Gallery
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '5px',
              marginTop: '10px',
            }}

          >
            {[Room1, Room2, Room3, Room4, Room5, Room6].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`gallery${index + 1}`}
                style={{
                  width: '100%',
                  height: '90px',
                  objectFit: 'cover',
                }}

              />
            ))}
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '250px' }}>
          <h3
            style={{
              fontSize: '18px',
              borderBottom: '2px solid #d2aa6d',
              display: 'inline-block',
              paddingBottom: '5px',
            }}
          >
            Newsletter
          </h3>
          <p style={{ marginTop: '10px' }}>Subscribe our Newsletter</p>
          <div className="textInputWrapper">
            <input
            type="email"
            placeholder="Enter your email"
            className='textInput'
          />
          </div>
          <button
            className='btn'
          >
            Subscribe
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <a
          href="#"
          style={{
            backgroundColor: '#d2aa6d',
            color: '#000',
            padding: '10px 15px',
            borderRadius: '50%',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
