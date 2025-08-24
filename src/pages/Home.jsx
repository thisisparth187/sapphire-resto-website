import React from 'react'
import styles from "../styles/Home.module.css";
import HotelShowcase from '../components/HotelShowcase';
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import image from "../assets/images/home-page/image.jpg"
import Facilities from './../components/Facilities.jsx';
const Home = () => {
  return (

    <div className={styles.main}>

      <div className={styles.hero}>

        <div className={styles['hero-img']}>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex gap-2 ${styles.stars}`}
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
            transition={{ duration: 0.8 }}>LUXURY HOTELS AND RESORTS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl"
          >The Best Luxury Hotels <br /> in PUNE
          </motion.h1>

        </div>

        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className='bg-white'>
          <HotelShowcase
            subtitle={"LUXURY HOTEL AND RESORT"}
            heading={"LUXURY BEST HOTEL IN CITY CALIFORNTA, USA"}
            description={"Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe. \nRapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after"}
            address={"102 B, Dream Street, New Elephant Road, Resote Dhanmondi, Dhaka - 1212"}
            badge={"Award Winning Hotel"}
            image={image}
          />
        </div>

        <div>
          <Facilities />
        </div>
      </div>
    </div>
  )
}

export default Home
