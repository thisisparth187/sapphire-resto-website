import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css'
import logo from '../assets/images/logo-only-nobg.png'
const Navbar = () => {
    const [opacity, setOpacity] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight - windowHeight;

            const scrollPercent = (scrollTop / docHeight) * 100;

            // Smooth opacity based on position
            if (scrollPercent < 10) {
                setOpacity(0); // Transparent
            } else {
                setOpacity(1); // Fully solid
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run once initially
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);
    const linkClass = ({ isActive }) =>
        `duration-200 relative ${isActive ? 'active-link text-[#C29D69]' : 'hover:text-[#A27B5C]'}`;


    return (
        <div className="navbar flex" style={{ backgroundColor: `rgba(38, 38, 38,${opacity})` }}>
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
                        Rooms ▾
                    </button>

                    {/* Dropdown */}
                    <ul className="rounded-md cursor-pointer absolute left-0 top-full mt-0 w-48 bg-[#EEEEEE] text-[#1E1E1E] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <NavLink to="/findroom">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal rounded-md m-2 hover:text-[#A27B5C] duration-200">Find Rooms</li>
                        </NavLink>
                        <NavLink to="/roomssuits">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal rounded-md m-2 hover:text-[#A27B5C] duration-200">Rooms & Suites</li>
                        </NavLink>
                        <NavLink to="/roomdetails">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal rounded-md m-2 hover:text-[#A27B5C] duration-200">Room Details</li>
                        </NavLink>
                    </ul>
                </li>
                <li className="relative group">
                    <button className="hover:text-[#C29D69] duration-200 cursor-pointer">
                        Dine ▾
                    </button>

                    {/* Dropdown */}
                    <ul className="rounded-md cursor-pointer absolute left-0 top-full mt-0 w-48 bg-[#EEEEEE] text-[#1E1E1E] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <NavLink to="/starters">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal rounded-md m-2 hover:text-[#A27B5C] duration-200">Starters</li>
                        </NavLink>
                        <NavLink to="/lunch">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal rounded-md m-2 hover:text-[#A27B5C] duration-200">Lunch</li>
                        </NavLink>
                        <NavLink to="/dinner">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal rounded-md m-2 hover:text-[#A27B5C] duration-200">Dinner</li>
                        </NavLink>
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
