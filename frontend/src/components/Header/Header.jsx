import React, { useState, useRef, useEffect } from 'react';
import { FaShoppingCart, FaSearch, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import dot from "../../assets/dot_img.jpg";
import logo from '../../assets/logo.png';
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
const phoneNumber = "+1234567890";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTap, setIsTap] = useState(false);
    
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className='bg-[#ecf2ff] h-full flex flex-col'>
            <nav className='bg-white py-4 px-4 md:py-6 md:px-6 flex justify-between items-center rounded-2xl mx-4 md:mx-6 lg:mx-8 my-4 md:my-6'>
                {/* ----------- Logo Section -----------*/}
                <div className='flex items-center '>
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-14 w-auto cursor-pointer " />
                    </Link>
                </div>

                {/* Navigation  */}
                <div className="flex items-center space-x-4 flex-grow justify-center">
                    {/* Navigation Menu */}
                    <ul className="hidden md:flex items-center text-[12px] font-bold font-['Raleway',sans-serif] text-gray-700">
                        <li className='px-4 py-2'>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `cursor-pointer hover:text-yellow-900 font-semibold ${isActive ? "text-yellow-900" : "text-black"
                                    }`
                                }
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className='px-4 py-2'>
                            <NavLink
                                to="/homes"
                                className={({ isActive }) =>
                                    `cursor-pointer hover:text-yellow-900 font-semibold ${isActive ? "text-yellow-900" : "text-black"
                                    }`
                                }
                            >
                                HOME
                            </NavLink>
                        </li>
                        {/*   */}

                        <li className='px-4 py-2'>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `cursor-pointer hover:text-yellow-900 font-semibold ${isActive ? "text-yellow-900" : "text-black"
                                    }`
                                }
                            >
                                ABOUT US
                            </NavLink>
                        </li>
                         

                        <li className="relative group cursor-pointer flex items-center space-x-2 font-['Raleway',sans-serif]">
                            {/* Dropdown Toggle Button */}
                            <span className="px-4 py-2 rounded-md hover:text-yellow-900 font-semibold transition">
                                PRODUCTS
                            </span>

                            {/* Dropdown Content (Appears on Hover) */}
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <ul className="py-2">
                                    <li className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition">
                                        <NavLink
                                            to="/products/category1"
                                            className={({ isActive }) =>
                                                `cursor-pointer hover:text-yellow-900 font-semibold ${isActive ? "text-yellow-900" : "text-black"
                                                }`
                                            }
                                        >
                                            Shale Gas Hydraulic Fracturing Chemicals
                                        </NavLink>
                                    </li>
                                    <li className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition">
                                        <Link to="/products/category2">IP, BP, EP, Ph Eur, USP NF, JP, FCC Food</Link>
                                    </li>
                                    <li className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition">
                                        <NavLink
                                            to="/products/category2"
                                            className={({ isActive }) =>
                                                `cursor-pointer hover:text-yellow-900 font-semibold ${isActive ? "text-yellow-900" : "text-black"
                                                }`
                                            }
                                        >
                                            IP, BP, EP, Ph Eur, USP NF, JP, FCC Food
                                        </NavLink>
                                    </li>
                                    <li className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition">
                                        <NavLink
                                            to="/products/category4"
                                            className={({ isActive }) =>
                                                `cursor-pointer hover:text-yellow-900 font-semibold ${isActive ? "text-yellow-900" : "text-black"
                                                }`
                                            }
                                        >
                                            Essential Oils
                                        </NavLink>
                                    </li>
                                    <li className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition">
                                        <NavLink
                                            to="/products/category5"
                                            className={({ isActive }) =>
                                                `cursor-pointer hover:text-yellow-900 font-semibold ${isActive ? "text-yellow-900" : "text-black"
                                                }`
                                            }
                                        >
                                            Other Best Seller Products
                                        </NavLink>
                                    </li>
                                    <li className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition">
                                        <NavLink
                                            to="/products/category6"
                                            className={({ isActive }) =>
                                                `cursor-pointer hover:text-yellow-900 font-semibold ${isActive ? "text-yellow-900" : "text-black"
                                                }`
                                            }
                                        >
                                            New R & D Products
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                         

                        <li className='px-4 py-2'>
                            <NavLink
                                to="/blogs"
                                className={({ isActive }) =>
                                    `cursor-pointer hover:text-yellow-900 font-semibold ${isActive ? "text-yellow-900" : "text-black"
                                    }`
                                }
                            >
                                BLOGS
                            </NavLink>
                        </li>
                         

                        <li className='px-4 py-2'>
                            <NavLink
                                to="/career"
                                className={({ isActive }) =>
                                    `cursor-pointer hover:text-yellow-900 font-semibold ${isActive ? "text-yellow-900" : "text-black"
                                    }`
                                }
                            >
                                CAREER
                            </NavLink>
                        </li>
                         

                        <li className='px-4 py-2'>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `cursor-pointer hover:text-yellow-900 font-semibold ${isActive ? "text-yellow-900" : "text-black"
                                    }`
                                }
                            >
                                CONTACT US
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Contact Section (Phone & Email Aligned to Right) */}
                <div className="hidden md:flex items-center space-x-6 ml-auto">
                    {/*-------------- Phone Section --------------- */}
                    <div className="flex items-center space-x-2 bg-blue-100 p-3 rounded-full">
                        <FaPhoneAlt className="text-yellow-900 hover:text-black transition duration-300 text-2xl" />
                    </div>
                    <h1 className="font-semibold text-gray-700 hover:text-yellow-900">
                        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                    </h1>

                    {/*------------ Search Icon Section ---------- */}

                    <div>
                        {/* Search Icon Button */}
                        <div
                            className="flex items-center space-x-3 bg-blue-100 p-3 rounded-full cursor-pointer"
                            onClick={() => setIsTap(true)}
                        >
                            <IoMdSearch className="text-yellow-900 hover:text-black transition duration-300 text-2xl" />
                        </div>

                        {/* Search Popup */}
                        {isTap && (
                            <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 min-h-20">
                                <div className="relative w-full max-w-2xl px-6 h-[40vh] min-h-[250px] flex flex-col justify-center">
                                    {/* Close Button */}
                                    <button
                                        className="absolute top-5 right-5 text-white text-3xl"
                                        onClick={() => setIsTap(false)}
                                    >
                                        <IoClose />
                                    </button>

                                    {/* Search Box */}
                                    <div className="bg-transparent border-b border-gray-300 text-white text-2xl p-4 flex items-center w-full">
                                        <input
                                            type="text"
                                            placeholder="Search ..."
                                            className="bg-transparent border-none outline-none w-full placeholder-gray-300"
                                        />
                                        <IoMdSearch className="text-white text-3xl cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/*---------- Email Section -------------- */}
                    <div className="flex items-center space-x-2 bg-blue-100 p-3 rounded-full">
                        <FaEnvelope className="text-yellow-900 hover:text-black transition duration-300 text-2xl" />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
