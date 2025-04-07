import React, { useState, useRef, useEffect } from 'react';
import { FaShoppingCart, FaSearch, FaPhoneAlt, FaEnvelope, FaBars, FaMinus } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import logo from '../../assets/logo.png';
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../redux/slice/languageSlice.js'
import translations from '../translater/translations.js';
import { ChevronDown } from "lucide-react";



const Header = () => {

    const options = [
        { value: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
        { value: "hi", label: "Hindi", flag: "https://flagcdn.com/w40/in.png" },
        { value: "fr", label: "Franch", flag: "https://flagcdn.com/w40/fr.png" },
        { value: "ru", label: "Russian", flag: "https://flagcdn.com/w40/ru.png" },
        { value: "ko", label: "Korean", flag: "https://flagcdn.com/w40/kr.png" },
        { value: "es", label: "Spanish", flag: "https://flagcdn.com/w40/es.png" }
    ];
    const [selected, setSelected] = useState(options[0]);
    const [isOpe, setIsOpe] = useState(false);

    const language = useSelector((state) => state.language.language); // Corrected Redux reference
    const dispatch = useDispatch();

    const handleLanguageChange = (selectedLanguage) => {
        dispatch(setLanguage(selectedLanguage));
    };

    const currentTranslations = translations[language] || translations.en

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

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [subhoveredIndex, setSubhoveredIndex] = useState(null);

    const menuItems = [
        {
            label: "Pharmaceuticals",
            link: "/products/category1",
            submenu: [
                { label: "category1", link: "/products/category1/" },
                { label: "category2", link: "/products/category1/" },
                { label: "category3", link: "/products/category1/" },
            ]
        },
        {
            label: "Nutraceuticals",
            link: "/products/category2",
            submenu: [
                { label: "category1", link: "/products/category2/" },
                { label: "category2", link: "/products/category2/" },
            ]
        },
        { label: "Speciality chemicals", link: "/products/" },
        { label: "Lab Chemicals", link: "/products/" },
        { label: "Analytical Reagent", link: "/products/" },
        {
            label: "Amino Acid",
            link: "/products/category6",
            // submenu: [
            //     { label: "category1", link: "/products/category6/essential" },
            //     { label: "category2", link: "/products/category6/non-essential" },
            // ]
        },
        { label: "API/Intermediates", link: "/products/category7" },
        { label: "Food Additives", link: "/products/category8" },
        { label: "Excipients", link: "/products/category9" },
        { label: "Other Products", link: "/products/category10" },
    ];

    return (
        <>
            <div className='bg-[#773135] h-full flex flex-col'>
                <nav className='bg-white py-4 px-4 md:py-6 md:px-6 flex justify-between items-center rounded-2xl mx-4 md:mx-6 lg:mx-8 my-4 md:my-6'>
                    {/* ----------- Logo Section -----------*/}
                    <div className='flex items-center '>
                        <Link to="/">
                            <img src={logo} alt="Logo" className="h-14 w-auto cursor-pointer pl-3 " />
                        </Link>
                    </div>

                    {/* ---------Navigation ---------- */}
                    <div className="flex items-center space-x-4 flex-grow justify-center">
                        {/* Desktop Navigation Menu */}
                        <ul className="hidden md:flex items-center text-[12px] font-bold font-['Raleway',sans-serif] text-gray-700">
                            <li className='px-4 py-2'>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `cursor-pointer hover:text-[#773135] font-semibold ${isActive ? "text-[#773135]" : "text-black"
                                        }`
                                    }
                                >
                                    {currentTranslations.HOME}
                                </NavLink>
                            </li>


                            <li className='px-4 py-2'>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `cursor-pointer  hover:text-[#773135] font-semibold ${isActive ? "text-[#773135]" : "text-black"
                                        }`
                                    }
                                >
                                    {currentTranslations.ABOUT_US}
                                </NavLink>
                            </li>


                            <li className="relative group cursor-pointer flex items-center space-x-2 font-['Raleway',sans-serif]">
                                {/* Dropdown Toggle */}
                                <span className="px-4 py-2 rounded-md text-black hover:text-[#773135] font-semibold transition">
                                    {currentTranslations.PRODUCTS}
                                </span>

                                {/* Dropdown Content */}
                                <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-2xl shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <ul className="py-2">
                                        {menuItems.map((item, index) => (
                                            <li
                                                key={index}
                                                className="relative px-6 py-3 text-gray-800 flex items-center justify-between hover:bg-gray-100 transition-all duration-300 ease-in-out group"
                                                onMouseEnter={() => setHoveredIndex(index)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                            >
                                                <NavLink
                                                    to={item.link}
                                                    className={({ isActive }) =>
                                                        `cursor-pointer hover:text-[#773135] hover:pl-5 text-[14px] flex items-center gap-2 transition-all duration-300 ease-in-out ${isActive ? "text-[#773135]" : "text-black"
                                                        }`
                                                    }
                                                >
                                                    {hoveredIndex === index && <FaMinus />}
                                                    {item.label}
                                                </NavLink>


                                                {/* Submenu Dropdown */}
                                                {item.submenu && hoveredIndex === index && (
                                                    <div className="absolute top-0 left-full w-52 bg-white border border-gray-200 rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                                        <ul className="py-2">
                                                            {item.submenu.map((subItem, subIndex) => (
                                                                <li
                                                                    key={subIndex}
                                                                    className="px-4 py-3 hover:bg-gray-100 transition flex items-center"
                                                                    onMouseEnter={() => setSubhoveredIndex(subIndex)} // Track submenu hover
                                                                    onMouseLeave={() => setSubhoveredIndex(null)}
                                                                >
                                                                    <NavLink
                                                                        to={subItem.link}
                                                                        className={({ isActive }) =>
                                                                            `cursor-pointer hover:text-[#773135] hover:pl-5 text-[14px] flex items-center gap-2 transition-all duration-300 ease-in-out ${isActive ? "text-[#773135]" : "text-black"
                                                                            }`
                                                                        }
                                                                    >
                                                                        {subhoveredIndex === subIndex && <FaMinus />}
                                                                        {subItem.label}
                                                                    </NavLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>


                            <li className='px-4 py-2'>
                                <NavLink
                                    to="/blogs"
                                    className={({ isActive }) =>
                                        `cursor-pointer hover:text-[#773135] font-semibold ${isActive ? "text-[#773135]" : "text-black"
                                        }`
                                    }
                                >
                                    {currentTranslations.BLOGS}
                                </NavLink>
                            </li>


                            <li className='px-4 py-2'>
                                <NavLink
                                    to="/career"
                                    className={({ isActive }) =>
                                        `cursor-pointer hover:text-[#773135] font-semibold ${isActive ? "text-[#773135]" : "text-black"
                                        }`
                                    }
                                >
                                    {currentTranslations.CAREER}
                                </NavLink>
                            </li>


                            <li className='px-4 py-2'>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `cursor-pointer hover:text-[#773135] font-semibold ${isActive ? "text-[#773135]" : "text-black"
                                        }`
                                    }
                                >
                                    {currentTranslations.CONTACT_US}
                                </NavLink>
                            </li>
                            <li className='px-4 py-2'>
                                <NavLink
                                    to="/simple"
                                    className={({ isActive }) =>
                                        `cursor-pointer hover:text-[#773135] font-semibold ${isActive ? "text-[#773135]" : "text-black"
                                        }`
                                    }
                                >
                                    sample
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
                                className="absolute inset-0 bg-white w-auto h-[900px] rounded-[50px] z-50 px-10 py-5 flex flex-col space-y-6 text-xl">
                                <button className="self-end" onClick={() => setIsMobileMenuOpen(false)}>
                                    <IoClose className="text-3xl" />
                                </button>
                                <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</NavLink>
                                <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</NavLink>
                                <div>
                                    <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="w-full text-left">PRODUCTS</button>
                                    {isProductsOpen && (
                                        <div className="pl-4">
                                            <NavLink to="/products/category1" onClick={() => setIsMobileMenuOpen(false)}>Pharmaceuticals</NavLink><br /><hr />
                                            <NavLink to="/products/category4" onClick={() => setIsMobileMenuOpen(false)}>Nutraceuticals</NavLink><br /><hr />
                                            <NavLink to="/products/category5" onClick={() => setIsMobileMenuOpen(false)}>Speciality chemicals</NavLink><br /><hr />
                                            <NavLink to="/products/category5" onClick={() => setIsMobileMenuOpen(false)}>Lab Chemicals</NavLink><br /><hr />
                                            <NavLink to="/products/category5" onClick={() => setIsMobileMenuOpen(false)}>Analytical Reagent</NavLink><br /><hr />
                                            <NavLink to="/products/category5" onClick={() => setIsMobileMenuOpen(false)}>Amino Acid</NavLink><br /><hr />
                                            <NavLink to="/products/category5" onClick={() => setIsMobileMenuOpen(false)}>API/Intermediates</NavLink><br /><hr />
                                            <NavLink to="/products/category5" onClick={() => setIsMobileMenuOpen(false)}>Food Additives</NavLink><br /><hr />
                                            <NavLink to="/products/category5" onClick={() => setIsMobileMenuOpen(false)}>Excipients</NavLink><br /><hr />
                                            <NavLink to="/products/category5" onClick={() => setIsMobileMenuOpen(false)}>Other Products</NavLink><br /><hr />
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
                        <div className="flex items-center space-x-2 bg-[#773135] p-3 rounded-full">
                            <FaPhoneAlt className="text-white transition duration-300 text-2xl" />
                        </div>

                        {/*------------ Search Icon Section ---------- */}

                        <div>
                            {/* Search Icon Button */}
                            <div
                                className="flex items-center space-x-3 bg-[#773135] p-3 rounded-full cursor-pointer"
                                onClick={() => setIsTap(true)}
                            >
                                <IoMdSearch className="text-white transition duration-300 text-2xl" />
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
                        {/*----------- Language Selector -------------*/}

                        <div className="relative w-40">
                            <button
                                onClick={() => setIsOpe(!isOpe)}
                                className="bg-[#773135] w-full h-12 rounded-full text-sm font-semibold text-white flex justify-between items-center px-4 border border-gray-300 focus:ring-2 focus:ring-blue-300"
                            >
                                <div className="flex items-center gap-2">
                                    <img src={selected.flag} alt={selected.label} className="w-5 h-5 rounded-full" />
                                    {selected.label}
                                </div>
                                <ChevronDown className="h-4 w-4" />
                            </button>
                            {isOpe && (
                                <ul className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden z-50">
                                    {options.map((option) => (
                                        <li
                                            key={option.value}
                                            onClick={() => {
                                                handleLanguageChange(option.value);
                                                setSelected(option);
                                                setIsOpe(false);
                                            }}
                                            className="flex items-center gap-2 p-3 text-gray-700 hover:bg-blue-200 cursor-pointer font-semibold"
                                        >
                                            <img src={option.flag} alt={option.label} className="w-5 h-5 rounded-full" />
                                            {option.label}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>



                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;




// import React, { useState, useRef, useEffect } from 'react';
// import { FaShoppingCart, FaSearch, FaPhoneAlt, FaEnvelope, FaBars, FaMinus } from "react-icons/fa";
// import { IoMdSearch } from "react-icons/io";
// import { Link, NavLink } from "react-router-dom";
// import { FiSearch, FiX } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { IoClose } from "react-icons/io5";
// import logo from '../../assets/logo.png';
// const phoneNumber = "+912223770100";

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isTap, setIsTap] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isProductsOpen, setIsProductsOpen] = useState(false);

//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         }
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     useEffect(() => {
//         document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
//     }, [isMobileMenuOpen]);

//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     const menuItems = [
//         { label: "Pharmaceuticals", link: "/products/category1", subMenu: [
//             { label: "Subcategory 1", link: "/products/subcategory1" },
//             { label: "Subcategory 2", link: "/products/subcategory2" },
//             { label: "Subcategory 3", link: "/products/subcategory3" },
//         ]},
//         { label: "Nutraceuticals", link: "/products/category2" },
//         { label: "Speciality chemicals", link: "/products/category3" },
//         { label: "Lab Chemicals", link: "/products/category4" },
//         { label: "Analytical Reagent", link: "/products/category5" },
//         { label: "Amino Acid", link: "/products/category6" },
//         { label: "API/Intermediates", link: "/products/category7" },
//         { label: "Food Additives", link: "/products/category8" },
//         { label: "Excipients", link: "/products/category9" },
//         { label: "Other Products", link: "/products/category10" },
//     ];

//     return (
//         <div className='bg-[#773135] h-full flex flex-col'>
//             <nav className='bg-white py-4 px-4 md:py-6 md:px-6 flex justify-between items-center rounded-2xl mx-4 md:mx-6 lg:mx-8 my-4 md:my-6'>
//                 {/* ----------- Logo Section -----------*/}
//                 <div className='flex items-center'>
//                     <Link to="/">
//                         <img src={logo} alt="Logo" className="h-14 w-auto cursor-pointer " />
//                     </Link>
//                 </div>

//                 {/* Navigation */}
//                 <div className="flex items-center space-x-4 flex-grow justify-center">
//                     {/* Desktop Navigation Menu */}
//                     <ul className="hidden md:flex items-center text-[12px] font-bold font-['Raleway',sans-serif] text-gray-700">
//                         <li className='px-4 py-2'>
//                             <NavLink
//                                 to="/"
//                                 className={({ isActive }) =>
//                                     `cursor-pointer hover:text-[#773135] font-semibold ${isActive ? "text-[#773135]" : "text-black"
//                                     }`
//                                 }
//                             >
//                                 HOME
//                             </NavLink>
//                         </li>
//                         <li className='px-4 py-2'>
//                             <NavLink
//                                 to="/about"
//                                 className={({ isActive }) =>
//                                     `cursor-pointer  hover:text-[#773135] font-semibold ${isActive ? "text-[#773135]" : "text-black"
//                                     }`
//                                 }
//                             >
//                                 ABOUT US
//                             </NavLink>
//                         </li>

//                         <li className="relative group cursor-pointer flex items-center space-x-2 font-['Raleway',sans-serif]">
//                             {/* Dropdown Toggle */}
//                             <span className="px-4 py-2 rounded-md text-black hover:text-[#773135] font-semibold transition">
//                                 PRODUCTS
//                             </span>

//                             {/* Dropdown Content */}
//                             <div
//                                 className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-2xl shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
//                             >
//                                 <ul className="py-2">
//                                     {menuItems.map((item, index) => (
//                                         <li
//                                             key={index}
//                                             className="relative px-6 py-3 text-gray-800 flex items-center hover:bg-gray-100 transition-all duration-300 ease-in-out"
//                                             onMouseEnter={() => setHoveredIndex(index)}
//                                             onMouseLeave={() => setHoveredIndex(null)}
//                                         >
//                                             <NavLink
//                                                 to={item.link}
//                                                 className={({ isActive }) =>
//                                                     `cursor-pointer hover:text-[#773135] hover:pl-5 text-[14px] flex items-center gap-2 transition-all duration-300 ease-in-out ${isActive ? "text-[#773135]" : "text-black"
//                                                     }`
//                                                 }
//                                             >
//                                                 {item.label}
//                                             </NavLink>

//                                             {/* Submenu for Pharmaceuticals */}
//                                             {item.subMenu && (
//                                                 <div className="absolute left-full top-0 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                                                     <ul className="py-2">
//                                                         {item.subMenu.map((subItem, subIndex) => (
//                                                             <li key={subIndex} className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition-all duration-300 ease-in-out">
//                                                                 <NavLink
//                                                                     to={subItem.link}
//                                                                     className={({ isActive }) =>
//                                                                         `cursor-pointer hover:text-[#773135] text-[14px] transition-all duration-300 ease-in-out ${isActive ? "text-[#773135]" : "text-black"
//                                                                         }`
//                                                                     }
//                                                                 >
//                                                                     {subItem.label}
//                                                                 </NavLink>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>
//                                             )}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </li>

//                         <li className='px-4 py-2'>
//                             <NavLink
//                                 to="/blogs"
//                                 className={({ isActive }) =>
//                                     `cursor-pointer hover:text-[#773135] font-semibold ${isActive ? "text-[#773135]" : "text-black"
//                                     }`
//                                 }
//                             >
//                                 BLOGS
//                             </NavLink>
//                         </li>

//                         <li className='px-4 py-2'>
//                             <NavLink
//                                 to="/career"
//                                 className={({ isActive }) =>
//                                     `cursor-pointer hover:text-[#773135] font-semibold ${isActive ? "text-[#773135]" : "text-black"
//                                     }`
//                                 }
//                             >
//                                 CAREER
//                             </NavLink>
//                         </li>

//                         <li className='px-4 py-2'>
//                             <NavLink
//                                 to="/contact"
//                                 className={({ isActive }) =>
//                                     `cursor-pointer hover:text-[#773135] font-semibold ${isActive ? "text-[#773135]" : "text-black"
//                                     }`
//                                 }
//                             >
//                                 CONTACT US
//                             </NavLink>
//                         </li>
//                     </ul>

//                     {/* Mobile Menu Button */}
//                     <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                         {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FaBars className="text-2xl" />}
//                     </button>

//                     {/* Mobile Menu */}
//                     {isMobileMenuOpen && (
//                         <motion.div
//                             initial={{ x: "100%" }}
//                             animate={{ x: 0 }}
//                             exit={{ x: "100%" }}
//                             transition={{ duration: 0.4, delay: 0.2 }}
//                             className="absolute inset-0 bg-white w-auto h-[900px] rounded-[50px] z-50 px-10 py-5 flex flex-col space-y-6 text-xl">
//                             <button className="self-end" onClick={() => setIsMobileMenuOpen(false)}>
//                                 <IoClose className="text-3xl" />
//                             </button>
//                             <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</NavLink>
//                             <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</NavLink>
//                             <div>
//                                 <button onClick={() => setIsProductsOpen(!isProductsOpen)}
//                                  className="w-full text-left">PRODUCTS</button>
//                                 {isProductsOpen && (
//                                     <div className="pl-4">
//                                         <NavLink to="/products/category1" onClick={() => setIsMobileMenuOpen(false)}>Pharmaceuticals</NavLink><br /><hr />
//                                         {/* Nested Products */}
//                                         <NavLink to="/products/subcategory1" onClick={() => setIsMobileMenuOpen(false)}>Subcategory 1</NavLink><br /><hr />
//                                         <NavLink to="/products/subcategory2" onClick={() => setIsMobileMenuOpen(false)}>Subcategory 2</NavLink><br /><hr />
//                                         <NavLink to="/products/subcategory3" onClick={() => setIsMobileMenuOpen(false)}>Subcategory 3</NavLink><br /><hr />
//                                     </div>
//                                 )}
//                             </div>
//                             <NavLink to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>BLOGS</NavLink>
//                             <NavLink to="/career" onClick={() => setIsMobileMenuOpen(false)}>CAREER</NavLink>
//                             <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</NavLink>
//                         </motion.div>
//                     )}
//                 </div>

//                 {/* Contact Section (Phone & Email Aligned to Right) */}
//                 <div className="hidden md:flex items-center space-x-6 ml-auto">
//                     {/*-------------- Phone Section --------------- */}
//                     <div className="flex items-center space-x-2 bg-blue-100 p-3 rounded-full">
//                         <FaPhoneAlt className="text-[#773135] hover:text-black transition duration-300 text-2xl" />
//                     </div>
//                     <h1 className="font-semibold text-gray-700 hover:text-[#773135]">
//                         <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
//                     </h1>

//                     {/*------------ Search Icon Section ---------- */}

//                     <div>
//                         {/* Search Icon Button */}
//                         <div
//                             className="flex items-center space-x-3 bg-blue-100 p-3 rounded-full cursor-pointer"
//                             onClick={() => setIsTap(true)}
//                         >
//                             <IoMdSearch className="text-[#773135] hover:text-black transition duration-300 text-2xl" />
//                         </div>

//                         {/* Search Popup */}
//                         {isTap && (
//                             <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 min-h-20">
//                                 <div className="relative w-full max-w-2xl px-6 h-[40vh] min-h-[250px] flex flex-col justify-center">
//                                     {/* Close Button */}
//                                     <button
//                                         className="absolute top-5 right-5 text-white text-3xl"
//                                         onClick={() => setIsTap(false)}
//                                     >
//                                         <IoClose />
//                                     </button>

//                                     {/* Search Box */}
//                                     <div className="bg-transparent border-b border-gray-300 text-white text-2xl p-4 flex items-center w-full">
//                                         <input
//                                             type="text"
//                                             placeholder="Search ..."
//                                             className="bg-transparent border-none outline-none w-full placeholder-gray-300"
//                                         />
//                                         <IoMdSearch className="text-white text-3xl cursor-pointer" />
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/*---------- Email Section -------------- */}
//                     <div className="flex items-center space-x-2 bg-blue-100 p-3 rounded-full">
//                         <FaEnvelope className="text-[#773135] hover:text-black transition duration-300 text-2xl" />
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Header;

