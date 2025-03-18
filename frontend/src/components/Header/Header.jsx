import React, { useState, useRef, useEffect } from 'react';
import { FaShoppingCart, FaSearch, FaPhoneAlt, FaEnvelope, FaBars, FaMinus } from "react-icons/fa";
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

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

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    }, [isMobileMenuOpen]);

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

    return (
        <div className='bg-[#ecf2ff] h-full flex flex-col'>
            <nav className='bg-white py-4 px-4 md:py-6 md:px-6 flex justify-between items-center rounded-2xl mx-4 md:mx-6 lg:mx-8 my-4 md:my-6'>
                {/* ----------- Logo Section -----------*/}
                <div className='flex items-center'>
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-14 w-auto cursor-pointer " />
                    </Link>
                </div>

                {/* Navigation  */}
                <div className="flex items-center space-x-4 flex-grow justify-center">
                    {/* Desktop Navigation Menu */}
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
                        {/* <li className='px-4 py-2'>
                            <NavLink
                                to="/homes"
                                className={({ isActive }) =>
                                    `cursor-pointer hover:text-yellow-900 font-semibold ${isActive ? "text-yellow-900" : "text-black"
                                    }`
                                }
                            >
                                HOME
                            </NavLink>
                        </li> */}
                        {/*   */}

                        <li className='px-4 py-2'>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `cursor-pointer  hover:text-yellow-900 font-semibold ${isActive ? "text-yellow-900" : "text-black"
                                    }`
                                }
                            >
                                ABOUT US
                            </NavLink>
                        </li>


                        <li className="relative group cursor-pointer flex items-center space-x-2 font-['Raleway',sans-serif]">
                            {/* Dropdown Toggle Button */}
                            <span className="px-4 py-2 rounded-md text-black hover:text-yellow-900 font-semibold transition">
                                PRODUCTS
                            </span>

                            {/* Dropdown Content (Appears on Hover) */}
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <ul className="py-2 ">
                                    <li
                                        className="px-6 py-3 text-gray-800 flex items-center"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <NavLink
                                            to="/products/category1"
                                            className={({ isActive }) =>
                                                `cursor-pointer hover:text-yellow-900 hover:pl-5 font-semibold flex items-center gap-2 ${isActive ? "text-yellow-900" : "text-black"
                                                }`
                                            }
                                        >
                                            {isHovered && <FaMinus />}
                                            Shale Gas Hydraulic Fracturing Chemicals
                                        </NavLink>
                                    </li>

                                    <li
                                        className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition delay-50 duration-30 flex items-center"
                                        onMouseEnter={() => setIsHovered1(true)}
                                        onMouseLeave={() => setIsHovered1(false)}
                                    >
                                        <NavLink
                                            to="/products/category1"
                                            className={({ isActive }) =>
                                                `cursor-pointer hover:text-yellow-900 hover:pl-5 font-semibold flex items-center gap-2 ${isActive ? "text-yellow-900" : "text-black"
                                                }`
                                            }
                                        >
                                            {isHovered1 && <FaMinus />}
                                            IP, BP, EP, Ph Eur, USP NF, JP, FCC Food</NavLink>
                                    </li>
                                    <li
                                        className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition delay-50 duration-30 flex items-center"
                                        onMouseEnter={() => setIsHovered2(true)}
                                        onMouseLeave={() => setIsHovered2(false)}
                                    >
                                        <NavLink
                                            to="/products/category1"
                                            className={({ isActive }) =>
                                                `cursor-pointer hover:text-yellow-900 hover:pl-5 font-semibold flex items-center gap-2 ${isActive ? "text-yellow-900" : "text-black"
                                                }`
                                            }
                                        >
                                            {isHovered2 && <FaMinus />}
                                            IP, BP, EP, Ph Eur, USP NF, JP, FCC Food
                                        </NavLink>
                                    </li>
                                    <li
                                        className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition delay-50 duration-30 flex items-center"
                                        onMouseEnter={() => setIsHovered3(true)}
                                        onMouseLeave={() => setIsHovered3(false)}
                                    >
                                        <NavLink
                                            to="/products/category1"
                                            className={({ isActive }) =>
                                                `cursor-pointer hover:text-yellow-900 hover:pl-5 font-semibold flex items-center gap-2 ${isActive ? "text-yellow-900" : "text-black"
                                                }`
                                            }
                                        >
                                            {isHovered3 && <FaMinus />}
                                            Essential Oils
                                        </NavLink>
                                    </li>
                                    <li
                                        className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition delay-50 duration-30 flex items-center"
                                        onMouseEnter={() => setIsHovered4(true)}
                                        onMouseLeave={() => setIsHovered4(false)}
                                    >
                                        <NavLink
                                            to="/products/category1"
                                            className={({ isActive }) =>
                                                `cursor-pointer hover:text-yellow-900 hover:pl-5 font-semibold flex items-center gap-2 ${isActive ? "text-yellow-900" : "text-black"
                                                }`
                                            }
                                        >
                                            {isHovered4 && <FaMinus />}
                                            Other Best Seller Products
                                        </NavLink>
                                    </li>
                                    <li
                                        className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition delay-50 duration-30 flex items-center"
                                        onMouseEnter={() => setIsHovered5(true)}
                                        onMouseLeave={() => setIsHovered5(false)}
                                    >
                                        <NavLink
                                            to="/products/category1"
                                            className={({ isActive }) =>
                                                `cursor-pointer hover:text-yellow-900 hover:pl-5 font-semibold flex items-center gap-2 ${isActive ? "text-yellow-900" : "text-black"
                                                }`
                                            }
                                        >
                                            {isHovered5 && <FaMinus />}
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

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>


                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="absolute inset-0 bg-white w-auto h-[400px] rounded-[50px] z-50 px-10 py-5 flex flex-col space-y-6 text-xl">
                            <button className="self-end" onClick={() => setIsMobileMenuOpen(false)}>
                                <IoClose className="text-3xl" />
                            </button>
                            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</NavLink>
                            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</NavLink>
                            <div>
                                <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="w-full text-left">PRODUCTS</button>
                                {isProductsOpen && (
                                    <div className="pl-4">
                                        <NavLink to="/products/category1" onClick={() => setIsMobileMenuOpen(false)}>Shale Gas Chemicals</NavLink><br /><hr />
                                        <NavLink to="/products/category4" onClick={() => setIsMobileMenuOpen(false)}>Essential Oils</NavLink><br /><hr />
                                        <NavLink to="/products/category5" onClick={() => setIsMobileMenuOpen(false)}>Best Sellers</NavLink><br /><hr />
                                    </div>
                                )}
                            </div>
                            <NavLink to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>BLOGS</NavLink>
                            <NavLink to="/career" onClick={() => setIsMobileMenuOpen(false)}>CAREER</NavLink>
                            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</NavLink>
                        </motion.div>
                    )}
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
