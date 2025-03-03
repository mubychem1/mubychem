import React, { useState } from 'react'
// import Image1 from '../../assets/hero-section1.png'
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay, FaArrowLeft } from 'react-icons/fa';
import { IoMdFlask, IoIosArrowForward } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import microscopeImage from '../../assets/microscope.png';
// import lab from '../../assets/lab-research.png';
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { motion } from "framer-motion";




const features = [
  "Sample Collection",
  "Covid 19 Vaccine",
  "Genetics Research",
  "Virus Detection",
  "Blood Cell Research",
];

const services = [
  {
    title: "Artificial Intelligence",
    description: "Our clinical pathologists are available seven days a week to...",
    icon: "🤖",
    bgImage: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/demo1-slider.jpg"
  },
  {
    title: "Healthcare Labs",
    description: "Our clinical pathologists are available seven days a week to...",
    icon: "🧠",
    bgImage: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-415x530.jpg"
  },
  {
    title: "Diabetes Testing",
    description: "Our clinical pathologists are available seven days a week to...",
    icon: "⚛",
    bgImage: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-04-415x530.jpg"
  },
  {
    title: "Elemental Analysis",
    description: "Our clinical pathologists are available seven days a week to...",
    icon: "🧬",
    bgImage: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-05-415x530.jpg"
  },
];


const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };








  return (
    <>
      {/*------------ Hero Section ------- */}
      <div
        className="flex flex-col md:flex-row items-center bg-[#ecf2ff] p-6 md:p-12  h-auto md:h-[900px] gap-6 md:gap-12 w-full"
        style={{
          fontFamily: "Open Sans, sans-serif",
          fontWeight: "normal",
          fontSize: "15px",
          lineHeight: "1.6",
          letterSpacing: "0",
          color: "#6a7391",
          textTransform: "none",
          fontStyle: "normal",
        }}
      >
        {/* Left Side - Image */}
        <div className="md:w-1/2 h-full flex items-center justify-center relative">
          <img
            src="https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/demo1-slider.jpg"
            alt="Scientist working in lab"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 right-0 bg-[#EAF0FC] px-6 py-3 flex items-center rounded-tl-[50px] rounded-br-xl ">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-500 rounded-full">
              <FaPlay className="text-gray-800" />
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-900">Watch Video</span>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 h-full bg-[#3772ff] text-white p-6 md:p-12 rounded-2xl flex flex-col justify-center">
          <p className="uppercase text-xs font-semibold bg-[#3772ff] text-white px-3 py-1 rounded-full inline-block w-max border ">
            Best Solutions for Laboratory
          </p>
          <h1 className="text-[84px] font-bold leading-[84px] mt-4 whitespace-nowrap">
            Micro Biology
          </h1>
          <h2 className="text-[60px] font-bold leading-[60px] mt-3">
            Research Institution
          </h2>
          <p className="mt-1 text-[18px] leading-[28px]">
            Hire us! We are a professional laboratory offering services.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center w-max transition duration-300 hover:bg-white hover:text-black border border-transparent hover:border-black">
            Our Services <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>

      {/* ------------ServicesCard Section ------------ */}
      <div className="bg-[#ecf2ff] py-10 px-5 md:px-20 flex flex-nowrap overflow-x-auto gap-10 justify-between w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white py-[45px] px-[25px] rounded-[30px] w-80 h-70 flex flex-col items-center text-center relative cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-2 rounded-full text-3xl text-blue-600">{service.icon}</div>
              <h2 className="text-lg font-semibold text-gray-900">{service.title}</h2>
            </div>
            <hr className="mt-3 p-4 border-gray-200 border-t-2 w-full hover:w-full hover:border-gray-400 transition-all duration-100 m-2" />
            <p className="text-gray-600 text-sm ml-auto text-[15px]">{service.description}</p>
            <button className="absolute table text-center bg-white px-[15px] py-[10px] mb-[-20px] bottom-0 right-10 rounded-full border-indigo-50 border-8 transition-all duration-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>

      {/* ----------Research Section  -------------- */}
      <div className="bg-[#ecf2ff] min-h-screen flex flex-col md:flex-row items-center justify-between md:px-20  w-full ">

        {/* Left Side - Image */}
        <motion.div
          className="w-1/2 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={microscopeImage}
            alt="Lab Equipment"
            className="w-full max-w-[647px] h-auto"
            sizes="(max-width: 647px) 100vw, 647px"
          />
        </motion.div>
        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-2/5 text-gray-800 max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Badge */}
          <motion.span
            className="inline-block px-4 py-1 text-[11px] leading-[22px] tracking-[0] text-[#001837] font-[Open_Sans] font-bold border border-[#001837] rounded-full uppercase mb-4 self-start not-italic"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Who We Are
          </motion.span>

          {/* Heading */}
          <motion.h2
            className="font-raleway font-semibold text-[50px] leading-[60px] tracking-[0] text-[#001837] normal-case not-italic mb-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            We'll Ensure You Always Get the Best Results
          </motion.h2>
          {/* Description */}
          <motion.p
            className="font-opensans font-normal text-[15px] leading-[1.6] tracking-[0] text-[#6a7391] normal-case not-italic mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Chemistry Research Documentation Center, a hub for exploration & discovery in the realm of
            uncommon & extraordinary chemical phenomena. Our clinical pathologists are available
            seven days a week to render diagnoses.
          </motion.p>

          {/* Features Section */}
          <motion.div
            className="flex gap-6 mb-6 border-t pt-6 border-gray-400"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {/* Feature 1 */}
            <motion.div
              className="flex items-center space-x-3 p-4 rounded-lg "
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-3 bg-gray-100 rounded-full">
                <IoMdFlask className="text-2xl text-blue-600" />
              </div>
              <div className='pr-1'>
                <h4 className="font-semibold text-gray-900">Medical Research</h4>
                <p className="text-gray-600 text-sm pt-2">Health research, sometimes referred to as medical research.</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex items-center space-x-3 p-4 rounded-lg "
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-3 bg-gray-100 rounded-full">
                <BsCheck2Circle className="text-2xl text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Accurate Analysis</h4>
                <p className="text-gray-600 text-sm pt-2">Accurate Analysis is an absolute testing laboratory.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Button with Hover Animation */}
          <motion.button
            className=" h-14 mt-4 px-6 py-3 text-[#001837] border border-[#001837] font-semibold rounded-full font-['Open_Sans',sans-serif] flex items-center gap-2 hover:bg-blue-600 hover:text-white transition "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>

      {/* --------------Feature Section --------- */}
      <div className="bg-[#ecf2ff] min-h-screen flex flex-col items-center py-12 px-6" >
        <div className="border border-black px-4 py-1 rounded-full text-sm text text-[#001837] uppercase font-openSans leading-4" style={{ fontFamily: "Open Sans, sans-serif" }}>
          WHY CHOOSE US?
        </div>
        <h2 className="text-4xl font-bold text-center mt-4 text-gray-900">
          We Advice to Choose a <br /> Right Decision
        </h2>

        <div className="flex flex-col lg:flex-row items-center mt-8 max-w-7xl w-full">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 space-y-4">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`flex justify-between items-center w-4/5 p-3 rounded-full transition-all duration-300 font- ${index === 0
                  ? "bg-white text-gray-900"
                  : "border border-gray-300 text-gray-900 bg-transparent"
                  }`}
              >

                <span>{feature}</span>
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${index === 0 ? "bg-blue-600 text-white" : "bg-gray-900 text-white"
                    }`}
                >
                  <FaArrowUpRightFromSquare />
                </div>
              </button>
            ))}
          </div>


          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-start mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://xleb-demo.pbminfotech.com/demo1/wp-content/themes/xleb/images/tab.jpg"
              alt="Lab Research"
              className="rounded-3xl w-full max-w-sm"
            />
          </motion.div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 px-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Well Ensure You Always Covid 19 Vaccine.
            </h3>
            <p className="text-[#6a7391] mt-3">
              We help ambitious businesses like yours generate more profits by
              building awareness, driving web traffic, connecting with customers,
              and growing overall sales. Give us a call.
            </p>

            <ul className="mt-4 space-y-2">
              {["Access Expert Advice For A Thriving Life", "Benefits Of Health Conscious Living", "Benefits Of Proactive Health Management", "Countless Benefits Of Prioritizing Health"].map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-900">
                  <span className="text-blue-600 text-lg">&#10003;</span>
                  <span className="ml-2">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* --------------Our Services ------------ */}
      <div className="bg-[#011938] text-white px-10 py-16">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div className="text-left">
            <button className="bg-[#011938] text-white border border-white px-4 py-2 rounded-full text-sm">
              OUR SERVICE
            </button>
            <h2 className="text-4xl font-semibold mt-4">Reliable & High Quality Service</h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-2 bg-white text-black p-2 rounded-full shadow-md">
            <button onClick={prevSlide} className="p-2 rounded-full hover:bg-gray-200 transition">
              <ChevronLeft size={20} />
            </button>
            <div className="border-l border-gray-400 h-5"></div>
            <button onClick={nextSlide} className="p-2 rounded-full hover:bg-gray-200 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Sliding Service Cards Section */}
        <div className="overflow-hidden relative flex items-center mt-10 h-[400px]">
          <motion.div
            className="flex space-x-6"
            animate={{ x: `-${currentIndex * 320}px` }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="group w-[300px] bg-[#011938] p-6 rounded-4xl flex-shrink-0 border border-gray-500 h-[400px] relative overflow-hidden"
              >
                {/* Background image (visible on hover) */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{ backgroundImage: `url(${service.bgImage})` }} // Corrected dynamic background
                // Dynamic Background
                ></div>

                {/* Service icon (disappears on hover) */}
                <div className="absolute top-4 right-4 text-4xl pt-5 pr-5 opacity-100 group-hover:opacity-0 transition duration-300">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="mt-12 text-xl pt-42 font-semibold relative">{service.title}</h3>
                <p className="mt-2 text-sm opacity-75 relative">{service.description}</p>

                {/* Button */}
                <div className="mt-4 relative">
                  <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    ➜
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>



    </>
  )
}

export default Home
