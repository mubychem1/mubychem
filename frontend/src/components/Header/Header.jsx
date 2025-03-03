import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import dot from "../../assets/dot_img.jpg";
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='bg-[#ecf2ff] h-full flex flex-col'>
            <nav className='bg-white py-4 px-4 md:py-6 md:px-6 flex justify-between items-center rounded-2xl mx-4 md:mx-6 lg:mx-8 my-4 md:my-6'>
                <div className='flex items-center'>
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-10 w-auto cursor-pointer rounded-full" />
                    </Link>
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6 flex-grow justify-center ">
                    <ul className="flex items-center space-x-3 text-[12px] font-bold font-['Raleway',sans-serif] text-gray-700">
                        {['HOME', 'ABOUT US', 'PRODUCTS', 'BLOGS', 'CAREER', 'CONTACT US'].map((item, index) => (
                            <React.Fragment key={item}>
                                <li className="cursor-pointer hover:text-blue-500">
                                    <Link to={`/${item.toLowerCase().replace(/ /g, '')}`}>{item}</Link>
                                </li>
                                {index !== 6 && <img src={dot} alt="Separator" className="w-2 h-2" />}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
                
                {/* Right Section - Search, Phone, Email */}
                <div className='hidden lg:flex items-center space-x-4 ml-auto'>
                    <div className="relative group hidden sm:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full sm:w-[160px] md:w-[170px] lg:w-[200px] xl:w-[220px] group-hover:w-[240px] h-10 transition-all duration-300 rounded-full border border-black px-2 py-1 text-sm focus:outline-none focus:border-2 focus:border-blue-500"
                        />
                        <IoMdSearch className="text-gray-500 group-hover:text-blue-500 absolute top-1/2 -translate-y-1/2 right-2 text-base" />
                    </div>
                    <div className='flex items-center space-x-2 bg-blue-100 p-2 rounded-full'>
                        <FaPhoneAlt className="text-blue-600 hover:text-black transition duration-300" />
                    </div>
                    <div className='flex items-center space-x-2 bg-blue-100 p-2 rounded-full'>
                        <FaEnvelope className="text-blue-600 hover:text-black transition duration-300" />
                    </div>
                </div>
                
                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                        {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
            </nav>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-89 bg-white rounded-2xl mx-4 my-2 p-9 shadow-lg z-50">
                    <ul className="flex flex-col space-y-3 space-x-3 text-[14px] font-bold font-['Raleway',sans-serif] text-gray-700">
                        {['HOME', 'ABOUT US', 'PRODUCTS', 'VISION', 'EVENT', 'CAREER', 'CONTACT US'].map((item) => (
                            <li key={item} className="cursor-pointer hover:text-blue-500 border-b pb-2">
                                <Link to={`/${item.toLowerCase().replace(/ /g, '')}`} onClick={() => setIsMenuOpen(false)}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
