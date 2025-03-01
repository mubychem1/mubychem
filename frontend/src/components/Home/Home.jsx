import React, { useState } from 'react'
// import Image1 from '../../assets/hero-section1.png'
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { IoMdFlask } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import { ArrowUpRight } from "lucide-react";
import microscopeImage from '../../assets/microscope.png';
// import lab from '../../assets/lab-research.png';
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { motion } from "framer-motion";


const testimonials = [
  {
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    name: "Parsons William",
    title: "Lab Specialist",
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    text: "I greatly appreciate the communication on the very hard process, what we needed to do in terms of providing good samples.",
    name: "Ariana Green",
    title: "Happy Customer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "The team provided excellent service and ensured we had the best experience possible. Highly recommended!",
    name: "Michael Johnson",
    title: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "Their attention to detail and customer support exceeded my expectations. I will definitely return for future needs.",
    name: "Emily Carter",
    title: "Consultant",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  }
];

const features = [
  "Sample Collection",
  "Covid 19 Vaccine",
  "Genetics Research",
  "Virus Detection",
  "Blood Cell Research",
];



const Home = () => {
  const services = [
    { title: "Data Technology", description: "Our clinical pathologists are available seven days a week to render diagnoses.",
       icon: <svg fill="#011938" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 479.999 479.999" xml:space="preserve" stroke="#011938" stroke-width="0.0047999900000000005"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M407.699,268.344H258.633c-5.523,0-10,4.477-10,10s4.477,10,10,10h17.608c-6.965,5.063-14.978,8.369-23.8,9.745 c-15.591,2.431-32.245-1.551-46.914-11.213c-14.225-9.353-23.95-23.682-27.386-40.347c-3.436-16.665-0.172-33.678,9.189-47.902 c7.099-10.782,24.866-25.329,37.485-30.998l20.23,39.003c1.222,2.355,3.329,4.128,5.858,4.929 c0.985,0.313,2.003,0.467,3.019,0.467c1.59,0,3.172-0.379,4.608-1.125l1.928-1.001l13.599,26.221 c1.779,3.431,5.27,5.398,8.886,5.398c1.549,0,3.122-0.361,4.593-1.123l32.592-16.891c2.354-1.22,4.128-3.326,4.931-5.855 c0.802-2.528,0.566-5.272-0.654-7.626l-13.614-26.259l4.448-2.309c4.899-2.544,6.811-8.578,4.269-13.479L256.22,45.949 c-1.222-2.355-3.328-4.128-5.857-4.929c-2.53-0.802-5.272-0.565-7.628,0.658l-1.934,1.004L221.474,5.398 c-1.221-2.356-3.329-4.13-5.858-4.931c-2.53-0.803-5.274-0.564-7.63,0.659l-32.591,16.932c-4.898,2.545-6.809,8.579-4.266,13.479 l19.341,37.277l-4.449,2.31c-4.899,2.544-6.811,8.578-4.269,13.479l11.563,22.291c-24.402,10.138-44.908,27.116-59.54,49.374 c-40.037,60.868-23.098,142.981,37.764,183.045c7.656,5.036,15.653,9.149,23.855,12.409v44.394H114.9 c-3.343,0-6.465,1.67-8.319,4.452l-42.603,63.883c-2.047,3.069-2.237,7.014-0.498,10.266c1.74,3.252,5.129,5.282,8.817,5.282 h323.07c3.757,0,7.197-2.106,8.906-5.452c1.708-3.346,1.397-7.368-0.806-10.411l-46.238-63.883 c-1.881-2.598-4.893-4.137-8.1-4.137h-69.857v-39.858c29.876-8.206,57.012-26.85,75.342-54.694 c0.063-0.095,0.123-0.19,0.183-0.288l7.896-12.933h45.008c5.522,0,10-4.477,10-10 C417.699,272.821,413.222,268.344,407.699,268.344z M287.21,218.038l-8.55-16.486l14.829-7.707l8.557,16.505L287.21,218.038z M297.152,168.312l-38.957,20.229l-22.26-42.914l38.811-20.516L297.152,168.312z M241.147,65.085 c0.261-0.135,0.513-0.286,0.759-0.442l1.165-0.605l22.467,43.319l-38.813,20.516l-22.617-43.604l4.285-2.225 c0.054-0.026,0.108-0.045,0.162-0.072L241.147,65.085z M208.325,23.489l14.726,28.41l-14.83,7.7l-14.736-28.401L208.325,23.489z M344.024,416.117L375.784,460H90.986l29.264-43.883h85.144h63.879H344.024z M215.393,396.117v-35.029h43.879v35.029H215.393z M337.817,290.707c-21.543,32.619-57.332,50.33-93.799,50.327c-21.15-0.001-42.536-5.962-61.486-18.427 c-51.649-34.001-66.026-103.689-32.046-155.35c12.729-19.364,30.697-34.003,52.083-42.521l13.033,25.126 c-16.042,7.56-35.971,24.087-44.977,37.768c-12.299,18.688-16.586,41.039-12.071,62.937c4.515,21.901,17.295,40.73,35.979,53.015 c15.142,9.974,32.116,15.203,48.854,15.203c4.068,0,8.127-0.31,12.137-0.935c19.541-3.047,36.681-13.465,48.829-29.506h34.907 L337.817,290.707z"></path> </g> </g> </g></svg> },
    { title: "Materials Analysis", 
      description: "24/7 access to real-time, study-wide data for your project teams, our labs.", 
      icon: ''},
    { title: "Flow Cytometry", description: "Visibility of the sample and the whole chain of custody beginning at collection.", icon: "💊" },
    { title: "Lab Technician", description: "The newest automation technology is used in our labs to improve data quality.", icon: "⚗️" },
  ];

  const [active, setActive] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - 2 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/*------------ Hero Section ------- */}
      <div
        className="flex flex-col md:flex-row items-center bg-gray-100 p-6 md:p-12 rounded-2xl h-auto md:h-[900px] gap-6 md:gap-12"
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
          {/* Background Image */}
          <img
            src="https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/demo1-slider.jpg"
            alt="Scientist working in lab"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Watch Video Button - Positioned Bottom Right Inside Image */}
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
          <div className=" flex gap-6 mt-6 border-t pt-6 border-gray-400" />
          <p className=" mt-1 text-[18px] leading-[28px]">
            Hire us! We are a professional laboratory offering services.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center w-max transition duration-300 hover:bg-white hover:text-black border border-transparent hover:border-black">
            Our Services <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>

     {/*  ------------ServicesCard Section ------------ */}
     <div className="bg-[#ecf2ff] py-10 px-5 md:px-20 flex flex-nowrap overflow-x-auto gap-10 justify-between">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white py-[45px] px-[25px] rounded-[30px] w-80 h-70 flex flex-col 
            items-center text-center relative cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "normal",
              fontSize: "15px",
              lineHeight: "1.6",
              letterSpacing: "0",
              color: "#6a7391",
              textTransform: "none",
              fontStyle: "normal",
            }}
          >
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-2 rounded-full text-3xl text-blue-600">{service.icon}</div>
              <h2 className="text-lg leading-5 font-500 mb-0 tracking-normal text-gray-900 
              normal-case not-italic font-raleway ">{service.title}</h2>
            </div>
            <hr className="mt-3 p-4 border-gray-200 border-t-2 w-full hover:w-full hover:border-gray-400 
            transition-all duration-100 m-2" />
            <p className="text-gray-600 text-sm ml-auto text-[15px]">{service.description}</p>
            <button className="absolute table text-center bg-white px-[15px] py-[10px] 
            mb-[-20px] bottom-0 right-10 rounded-full after:right-[50] after:right-4 before:right-[50px] 
             before:right-4 before:rounded-xl border-indigo-50 border-8  transition-all duration-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" fill="currentColor" class="bi bi-arrow-up-right-circle" className='hover:fill-blue-500' viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
           </svg></button>
          </motion.div>
        ))}
</div>


      {/* -----------ResearchSection ------------ */}
      <div className="bg-[#ecf2ff] min-h-screen flex flex-col md:flex-row items-center justify-between md:px-20  w-screen ">

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

      {/* ------------Feature Section ----------- */}
      <div className="bg-blue-50 min-h-screen flex flex-col items-center py-12 px-6">
        <div className="border border-black px-4 py-1 rounded-full text-sm font-semibold text-[#001837] uppercase font-openSans leading-4" style={{ fontFamily: "Open Sans, sans-serif" }}>
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
                className={`flex justify-between items-center w-4/5 p-3 rounded-full transition-all duration-300 ${index === 0
                  ? "bg-white text-gray-900 "
                  : "border border-gray-300 text-gray-900 bg-transparent"
                  }`}
              >
                <span>{feature}</span>
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${index === 0 ? "bg-blue-600 text-white" : "bg-gray-900 text-white"
                    }`}
                >
                  <FaArrowUpRightFromSquare />
                </div>
              </button>
            ))}
          </div>


          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://xleb-demo.pbminfotech.com/demo1/wp-content/themes/xleb/images/tab.jpg"
              alt="Lab Research"
              className="rounded-lg shadow-lg w-full max-w-sm"
            />
          </motion.div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 px-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Well Ensure You Always Covid 19 Vaccine.
            </h3>
            <p className="text-gray-600 mt-3">
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
    </>
  )
}

export default Home








{/* <button
  key={index}
  className={`flex justify-between items-center w-1/2 p-3 rounded-full transition-all duration-300 ${
    index === 0
      ? "bg-white text-gray-900"
      : "border border-gray-300 text-gray-900 bg-transparent"
  }`}
> */}

// font-family: Raleway, sans-serif;
// font-weight: 600;
// font-style: normal;