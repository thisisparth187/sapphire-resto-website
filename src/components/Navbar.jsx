import React from 'react'
import '../styles/navbar.css'
import logo from '../assets/images/logo-only-nobg.png'
const Navbar = () => {
  return (
    <div className='navbar flex'>
      <div className="logo w-20 flex content-center items-center text-xl text-white font-bold">
        <img src={logo} alt="logo" className='p-4' />
        <span>SAPPHIRE</span>
      </div>
      <ul className="nav-items flex list-none gap-30 text-white font-bold">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
