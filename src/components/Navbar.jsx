import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css'
import logo from '../assets/images/logo-only-nobg.png'
const Navbar = () => {
    const linkClass = ({ isActive }) =>
        `duration-200 ${isActive ? 'text-[#C29D69]' : 'hover:text-[#A27B5C]'}`;
    return (
        <div className='navbar flex'>
            <div className="logo w-20 text-2xl text-white font-bold">
                <NavLink to="/" className="flex content-center items-center">
                    <img src={logo} alt="logo" className='p-4' />
                    <span>
                        SAPPHIRE
                    </span>
                </NavLink>
            </div>
            <ul className="nav-items flex list-none gap-30 text-white font-bold">
                <li>
                    <NavLink to="/" className={linkClass}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={linkClass}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={linkClass}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
