import React from 'react';
import { FaShoppingCart, FaSearch, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import dot from "../../assets/dot_img.jpg"
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='bg-[#ecf2ff] h-full flex flex-col'>
            <nav className='bg-white py-4 px-4 md:py-6 md:px-6 flex justify-between items-center rounded-2xl mx-4 md:mx-6 lg:mx-8 my-4 md:my-6'>
                {/* Logo Section */}
                <div className='flex items-center'>
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-10 w-auto cursor-pointer rounded-full" />
                    </Link>
                </div>

                {/* Navigation + Search Bar Container */}
                <div className="flex items-center space-x-6 flex-grow justify-center">
                    {/* Navigation Menu */}
                    <ul className="hidden md:flex items-center space-x-6 text-[12px] font-bold font-['Raleway',sans-serif] text-gray-700">
                        <li className="cursor-pointer hover:text-blue-500">
                            <Link to="/">HOME</Link>
                        </li>
                        <img src={dot} alt="Separator" className="w-2 h-2" />

                        <li className="cursor-pointer hover:text-blue-500">
                            <Link to="/about">ABOUT US</Link>
                        </li>
                        <img src={dot} alt="Separator" className="w-2 h-2" />

                        <li className="cursor-pointer hover:text-blue-500">
                            <Link to="/products">PRODUCTS</Link>
                        </li>
                        <img src={dot} alt="Separator" className="w-2 h-2" />

                        <li className="cursor-pointer hover:text-blue-500">
                            <Link to="/event">BLOGS</Link>
                        </li>
                        <img src={dot} alt="Separator" className="w-2 h-2" />

                        <li className="cursor-pointer hover:text-blue-500">
                            <Link to="/career">CAREER</Link>
                        </li>
                        <img src={dot} alt="Separator" className="w-2 h-2" />

                        <li className="cursor-pointer hover:text-blue-500">
                            <Link to="/contact">CONTACT US</Link>
                        </li>
                    </ul>

                    {/* Search Bar */}
                    <div className="relative group hidden sm:block pl-9">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-[160px] sm:w-[160px] md:w-[180px] group-hover:w-[220px] h-10 transition-all duration-300 rounded-full border border-black px-3 py-1 text-sm focus:outline-none focus:border-2 focus:border-blue-500 dark:border-gray-500 dark:bg-gray-800"
                        />
                        <IoMdSearch className="text-gray-500 group-hover:text-blue-500 absolute top-1/2 -translate-y-1/2 right-2 text-base" />
                    </div>
                </div>

                {/* Contact Section (Phone & Email Aligned to Right) */}
                <div className='hidden md:flex items-center space-x-6 ml-auto'>
                    {/* Phone Section */}
                    <div className='flex items-center space-x-2 bg-blue-100 p-2 rounded-full'>
                        <FaPhoneAlt className="text-blue-600 hover:text-black transition duration-300" />
                        {/* <span className='font-semibold text-gray-700'>+1(212)-222-511</span> */}
                    </div>

                    {/* Email Section */}
                    <div className='flex items-center space-x-2 bg-blue-100 p-2 rounded-full'>
                        <FaEnvelope className="text-blue-600 hover:text-black transition duration-300" />
                        {/* <span className='font-semibold text-gray-700'>info@lab.com</span> */}
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
                    </div> */}