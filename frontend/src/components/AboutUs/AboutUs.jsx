import React from "react";
import Aboutleft from "../../assets/Aboutleft.png";
import { motion } from "framer-motion";
import AboutUsbg from "../../assets/AboutUsbg.png";
import Demo1 from "../../assets/Demo1.png";
import fidbg from "../../assets/fidbg.png";
import Nationalbg from "../../assets/Nationalbg.png";
import Simplebg from "../../assets/4Simplebg.png";
import labtest from "../../assets/lab-test-img.png";

import { FaQuoteLeft } from "react-icons/fa";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const steps = [
  {
    id: "01",
    title: "Sample Collection",
    description: "Sometimes these types of samples can be collected at home.",
    icon: "🔬", // Replace with an actual icon if needed
  },
  {
    id: "02",
    title: "Sample Processing",
    description:
      "The results of sample processing can provide crucial information and more.",
    icon: "🧪",
  },
  {
    id: "03",
    title: "Accurate Test Results",
    description:
      "Laboratory test checks a sample of your blood, or other body fluid.",
    icon: "🩸",
  },
  {
    id: "04",
    title: "Reports Delivered",
    description:
      "If you would like to request a special service, change your lab detail.",
    icon: "⌛",
  },
];
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const zoomIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
};

const AboutUs = () => {
  return (
    <>
      {/* -----------------About Us Banner------------------ */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative bg-[#ecf2ff] p-6 "
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl"
        >
          {/* <img
            src={''} // Add your background image path here
            alt="About Us Background"
            className="w-full h-full object-cover"
          /> */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center bg-no-repeat px-8"
            style={{
              backgroundImage: `url(${AboutUsbg})`,
              backgroundSize: "cover",
              backgroundPosition: "Center",
            }}
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              About Us
            </h1>
            <p className="text-blue-200 mt-2 text-sm md:text-base">
              <span className="text-yellow-400">Muby Chemical</span> &gt; ABOUT
              US
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/*--------------------- About Us Content----------------- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-[#ecf2ff] p-10 flex flex-col md:flex-row items-center md:items-start  min-h-[600px]"
      >
        {/* Image Section */}
        <motion.div
          variants={zoomIn}
          className="relative w-full md:w-1/2 flex justify-center md:justify-start h-[450px]"
        >
          <img
            src={Aboutleft} // Replace with your image path
            alt="Scientist working in lab"
            className="rounded-lg  w-full max-w-md md:max-w-lg "
          />
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          variants={fadeInUp}
          className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border border-black px-4 py-1 rounded-full text-sm font-semibold"
          >
            WHO WE ARE
          </motion.button>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            We'll Ensure You Always Get the Best Results
          </h2>
          <p className="text-gray-600 mt-4">
            Chemistry Research Documentation Center, a hub exploration &
            discovery in the realm of uncommon & extraordinary chemical
            phenomena. Our clinical pathologists are available seven days a week
            to render diagnoses.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 border hover:bg-yellow-900 hover:text-white border-black rounded-full flex items-center gap-2 text-lg font-medium"
          >
            Read More ➝
          </motion.button>
        </motion.div>
      </motion.div>
      {/*--------------------- 3 post ----------------- */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className=" bg-[#ecf2ff] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  p-6 sm:p-10 "
      >
        {/* Card 1 - Watch Video with Curved Edge */}
        <div className="relative  rounded-3xl  overflow-hidden">
          <img
            src={Demo1}
            alt="Scientist working in lab"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        {/* Watch Video Button - Positioned Bottom Right Inside Image */}
        {/* <div className="absolute bottom-0 right-0 bg-[#EAF0FC] px-6 py-3 flex items-center rounded-tl-[50px] rounded-br-xl ">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-500 rounded-full">
              <FaPlay className="text-gray-800" />
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-900">
              Watch Video
            </span>
          </div> */}

        {/* Card 2 - Staff Info */}
        <div
          className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-center object-cover bg-no-repeat text-left w-full h-full"
          style={{
            backgroundImage: `url(${fidbg})`,
            backgroundSize: "cover",
            backgroundPosition: "Center",
          }}
        >
          <h2 className="text-4xl font-bold">20+</h2>
          <p className="text-gray-600">
            Professional and Experienced <br></br>staff ready to help you
          </p>
          {/* <img
            src={fidbg} 
            alt="About Us Background"
            className="rounded-2xl shadow-lg flex flex-col  items-center  text-center w-full h-full  justify-center md:justify-end"
          /> */}
        </div>

        {/* Card 3 - National Science Day */}
        <div
          className="pr-3 rounded-2xl shadow-lg flex flex-col justify-center object-cover text-right bg-no-repeat w-full h-full"
          style={{
            backgroundImage: `url(${Nationalbg})`,
            backgroundSize: "cover",
            backgroundPosition: "Center",
          }}
        >
          <h2 className="text-2xl text-white font-bold">
            National Science Day
          </h2>
          <p className=" text-white text-lg">25th Feb 2022</p>
          <div className="border-t-1  border-white my-2  mx-auto"></div>
          <p className=" text-white mt-2">With The Best Experts In Science</p>
        </div>
      </motion.div>

      {/*--------------------- Sample post ----------------- */}
      <div className="bg-[#ecf2ff] p-2 ">
        <section
          className="bg-[#7B3931] rounded-2xl  text-white py-16  px-10 md:px-10 lg:px-12 rounded-t-6xl rounded-b-xl  bg-no-repeat"
          style={{
            backgroundImage: `url(${Simplebg})`,
            backgroundSize: "60%",
            backgroundPosition: "right",
          }}
        >
          {/* Heading */}
          <div className="text-left mb-10">
            <span className="text-sm font-semibold uppercase px-4 py-2 bg-black text-white rounded-full">
              How It Works
            </span>
            <h2 className="text-4xl font-bold mt-4">
              Get amazing cleaning in <br /> 4 simple steps
            </h2>
          </div>

          {/* Steps Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-[#7B3931] p-16  h-full rounded-xl shadow-lg flex flex-col justify-between text-center relative border border-white"
              >
                <div className="text-5xl">{step.icon}</div>
                <h3 className="text-2xl font-semibold mt-4">{step.title}</h3>
                <p className="text-l mt-1 text-gray-300">{step.description}</p>
                <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/*--------------------- Sample post ----------------- */}

      <div className="bg-[#E9F1FF] py-5 px-3 md:px-2 md:py-7 lg:px-3 flex items-center justify-center">
        <div className=" max-w-7xl w-full  h-full grid grid-cols-1 md:grid-cols-2 bg-[#7B3931] text-white rounded-2xl overflow-hidden">
          <div className="relative">
            <img
              src={labtest}
              alt="Scientist in lab"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4  bg-opacity-80 pt-1 sm:p-8 md:p-10 rounded-lg text-white">
              <span className="text-3xl sm:text-4xl font-bold text-white">
                460+
              </span>
              <p className="text-xs sm:text-sm">
                Professional and
                <br /> Experienced staff ready <br />
                to help you
              </p>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <p className="text-sm uppercase font-semibold text-gray-400">
              Client Reviews
            </p>
            <h2 className="text-3xl font-bold my-2">
              Trusted by thousand of people & companies.
            </h2>
            <FaQuoteLeft className="text-3xl text-black mb-2" />
            <p className="text-lg mb-7 p-4">
              "I would recommend practitioners at this center to everyone! They
              are great to work with and are excellent trainers. Thank you all!"
            </p>
            <div className="flex items-center gap-3">
              {/* <img
              src="/user-avatar.jpg"
              alt="Parsons William"
              className="w-12 h-12 rounded-full object-cover"
            /> */}
              <div>
                <h4 className="text-lg font-semibold">Parsons William</h4>
                <h3 className="text-md text-black">Lab Specialist</h3>
              </div>
            </div>
            <div className="flex justify-end items-center mt-6">
              {/* <div className="flex space-x-4">
              <img src="/ecolab-logo.png" alt="Ecolab" className="h-6" />
              <img src="/dna-logo.png" alt="DNA" className="h-6" />
              <img src="/lab-logo.png" alt="LAB" className="h-6" />
            </div> */}
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-700 rounded-full flex items-center justify-center w-10 h-10">
                  <IoIosArrowBack className="text-white text-lg" />
                </button>
                <button className="p-2 bg-gray-700 rounded-full flex items-center justify-center w-10 h-10">
                  <IoIosArrowForward className="text-white text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;