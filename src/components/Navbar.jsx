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
            <ul className="nav-items flex list-none gap-20 text-white font-bold">
                <li>
                    <NavLink to="/" className={linkClass}>
                        Home
                    </NavLink>
                </li>
                <li className="relative group">
                    <button className="hover:text-[#C29D69] duration-200 cursor-pointer">
                        ROOMS ▾
                    </button>

                    {/* Dropdown */}
                    <ul className="rounded-md cursor-pointer absolute left-0 top-full mt-0 w-48 bg-[#EEEEEE] text-[#1E1E1E] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal rounded-md m-2">FIND ROOMS</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal rounded-md m-2">ROOMS & SUITES</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal rounded-md m-2">ROOM DETAILS</li>
                    </ul>
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
