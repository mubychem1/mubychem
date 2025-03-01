import React, { useState } from 'react';
import { FaShoppingCart, FaSearch, FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import dot from "../../assets/dot_img.jpg";
import logo from '../../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='bg-[#ecf2ff] h-full flex flex-col'>
            <nav className='bg-white py-4 px-4 md:py-6 md:px-6 flex justify-between items-center rounded-2xl mx-4 md:mx-6 lg:mx-8 my-4 md:my-6 relative'>
                {/* Logo Section */}
                <div className='flex items-center'>
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-10 w-auto cursor-pointer rounded-full" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className='md:hidden flex items-center'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-gray-700 focus:outline-none'>
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Navigation Menu */}
                <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none rounded-lg md:rounded-none px-4 md:px-0 transition-transform duration-300 ease-in-out md:flex md:items-center md:space-x-6 ${isMenuOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 text-[14px] font-bold font-['Raleway',sans-serif] text-gray-700">
                        {[
                            { name: "HOME", path: "/" },
                            { name: "ABOUT US", path: "/about" },
                            { name: "PRODUCTS", path: "/products" },
                            { name: "VISION", path: "/vision" },
                            { name: "EVENT", path: "/event" },
                            { name: "CAREER", path: "/career" },
                            { name: "CONTACT US", path: "/contact" }
                        ].map((item, index) => (
                            <React.Fragment key={index}>
                                <li className="cursor-pointer hover:text-blue-500 py-2 md:py-0">
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                                {index < 6 && <img src={dot} alt="Separator" className="w-2 h-2 hidden md:block" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

                {/* Search Bar */}
                <div className="relative hidden md:block">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[180px] md:w-[220px] h-10 rounded-full border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:border-2 focus:border-blue-500"
                    />
                    <IoMdSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 right-3 text-lg" />
                </div>

                {/* Contact Section */}
                <div className='hidden md:flex items-center space-x-6'>
                    <div className='flex items-center space-x-2 bg-blue-100 p-2 rounded-full'>
                        <FaPhoneAlt className="text-blue-600 hover:text-black transition duration-300" />
                    </div>
                    <div className='flex items-center space-x-2 bg-blue-100 p-2 rounded-full'>
                        <FaEnvelope className="text-blue-600 hover:text-black transition duration-300" />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;




{/* <div className="relative group hidden sm:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-[180px] sm:w-[200px] md:w-[250px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-black px-4 py-2 focus:outline-none focus:border-2 focus:border-blue-500 dark:border-gray-500 dark:bg-gray-800"
                        />
                        <IoMdSearch className="text-gray-500 group-hover:text-blue-500 absolute top-1/2 -translate-y-1/2 right-3" />
                    </div> */}
