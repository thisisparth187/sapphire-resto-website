import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import styles from '../styles/navbar.module.css'
import logo from '../assets/images/logo-only-nobg.png'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [opacity, setOpacity] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        `duration-200 relative ${isActive ? `${styles['active-link']} text-[#C29D69]` : 'hover:text-[#A27B5C]'}`;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`${styles.navbar} flex items-center justify-between px-4 md:px-8`} style={{ backgroundColor: `rgba(38, 38, 38,${opacity})` }}>
            <div className={`${styles.logo} w-20 text-2xl text-white font-bold`}>
                <NavLink to="/" className="flex content-center items-center">
                    <img src={logo} alt="logo" className='p-4' />
                    <span className="hidden md:block">
                        SAPPHIRE
                    </span>
                </NavLink>
            </div>
            <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMobileMenu} data-testid="mobile-menu-button">
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`hidden md:flex list-none gap-8 text-white font-bold items-center`}>

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
                    <ul className="rounded-md cursor-pointer absolute left-0 top-full mt-0 w-48 bg-[#EEEEEE] text-[#1E1E1E] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
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
                <li>
                    <NavLink to="/dine" className={linkClass}>
                        Dine
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
            {isMobileMenuOpen && (
                <ul className="absolute top-16 left-0 w-full bg-[#262626] flex flex-col items-center gap-4 p-4 md:hidden text-white font-bold" data-testid="mobile-menu">
                    <li>
                        <NavLink to="/" className={linkClass} onClick={toggleMobileMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className="relative group w-full text-center">
                        <button className="hover:text-[#C29D69] duration-200 cursor-pointer w-full">
                            Rooms ▾
                        </button>

                        {/* Dropdown */}
                        <ul className="rounded-md cursor-pointer w-full bg-[#EEEEEE] text-[#1E1E1E] shadow-lg">
                            <NavLink to="/findroom" onClick={toggleMobileMenu}>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal rounded-md m-2 hover:text-[#A27B5C] duration-200">Find Rooms</li>
                            </NavLink>
                            <NavLink to="/roomssuits" onClick={toggleMobileMenu}>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal rounded-md m-2 hover:text-[#A27B5C] duration-200">Rooms & Suites</li>
                            </NavLink>
                            <NavLink to="/roomdetails" onClick={toggleMobileMenu}>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-normal rounded-md m-2 hover:text-[#A27B5C] duration-200">Room Details</li>
                            </NavLink>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/dine" className={linkClass} onClick={toggleMobileMenu}>
                            Dine
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={linkClass} onClick={toggleMobileMenu}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={linkClass} onClick={toggleMobileMenu}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Navbar
