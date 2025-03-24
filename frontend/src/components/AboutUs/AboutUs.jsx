import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import Aboutleft from "../../assets/Aboutleft.png";
import Demo1 from "../../assets/Demo1.png";
import fidbg from "../../assets/fidbg.png";
import Nationalbg from "../../assets/Nationalbg.png";
import Simplebg from "../../assets/4Simplebg.png";
import labtest from "../../assets/lab-test-img.png";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import background from "../../assets/background.png";
import { AnimatePresence } from "framer-motion";
import VerticalTabs from '../Home/VerticalTabs';

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
const reviews = [
  {
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    name: "Parsons William",
    role: "Lab Specialist",
  },
  {
    text: "I greatly appreciate the communication on the very hard process, what we needed to do in terms of providing good samples. Thank you all!",
    name: "Evangeline Lee",
    role: "Satisfied Client",
  },
  {
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    name: "Adeline wood ",
    role: "Happy Customer ",
  },
  {
    text: "I greatly appreciate the communication on the very hard process, what we needed to do in terms of providing good samples. Thank you all!",
    name: "Naomi Violet  ",
    role: "Customer ",
  },
  {
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    name: "Hazel Jenkins   ",
    role: "Satisfied Client  ",
  },
];
const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl("");
  };

  const [currentReview, setCurrentReview] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextReview = () => {
    setDirection(1);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <>
      {/* -----------------About Us Banner------------------ */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative bg-[#ecf2ff] "
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-auto md:h-auto lg:h-auto overflow-hidden rounded-xl"
        >
          {/* <img
            src={''} // Add your background image path here
            alt="About Us Background"
            className="w-full h-full object-cover"
          /> */}
          <div className="bg-[#ecf2ff] ">
            <div
              className="relative h-[500px] bg-cover rounded-4xl  overflow-hidden mx-4 md:mx-10"
              style={{ backgroundImage: `url(${background})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-left">
                <div>
                  <h1 className="text-white text-5xl font-bold mb-4 pl-4 ">
                    About Us
                  </h1>
                  <p className="text-white text-lg pl-5 ">
                    Muby chem &gt; ABOUT US
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/*--------------------- About Us Content----------------- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-[#ecf2ff] p-10 flex flex-col md:flex-row items-center md:items-start  min-h-[600px]" style={{
          fontFamily: "Times New Roman",
        }}>
        {/* Image Section */}
        <motion.div
          variants={zoomIn}
          className="relative w-full p-10 md:w-1/2 flex justify-center md:justify-start h-[450px]"
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
          {/* <motion.span
            className="inline-block px-4 py-1 text-[11px] leading-[22px] tracking-[0] text-[#001837] 
                     font-[Open_Sans] font-bold border border-[#001837] rounded-full uppercase mb-4 self-start not-italic"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Who We Are
          </motion.span> */}

          <h2 className="text-4xl leading-[60px] tracking-[0] text-[#001837] mt-4" style={{ fontFamily: "Times New Roman" }}>
          Welcome to Muby Chem<br/>
          Private Limited
          </h2>
          <p className="text-gray-600 mt-4">
            At Muby Chem, we are committed to advancing industries by providing high-quality chemicals and innovative solutions for pharmaceutical, nutraceutical, specialty chemicals, food additives, and more. With over 49 years of expertise, we pride ourselves on offering cutting-edge products that meet the most stringent quality and regulatory standards.
          </p><br/>
          <p className="text-gray-600 mt-4">
          We work with industries around the world, supporting the development of exceptional products that enhance health, wellness, and industrial performance. Whether you need customized chemical solutions, nutraceutical ingredients, or specialty chemical formulations, Muby Chem is your trusted partner.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 border hover:bg-yellow-900 hover:text-white border-black rounded-full flex items-center gap-2 text-lg font-medium"
          >
            Enquire Now ➝
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
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={Demo1} // Replace with your image path
            alt="Scientist working in lab"
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Play Button */}
          <button
            onClick={() => openModal("https://www.youtube.com/embed/buwI_49ZTp0")}
            className="absolute bottom-4 right-1 p-0.5 rounded-full flex items-center 
               hover:scale-110  transition-transform duration-300 ease-in-out"
          >
            <FaPlay className="text-gray-900 text-lg" />
            <span className="ml-1 text-sm font-semibold">Watch Video</span>
          </button>
        </div>

        {/* Video Popup Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className=" p-4 rounded-lg shadow-lg relative w-11/12 md:w-3/4 lg:w-1/2">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2  text-white p-1 rounded-full"
              >
                ✖
              </button>
              <iframe
                width="100%"
                height="315"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        )}

        {/* Card 2 - Staff Info */}
        <div
          className="bg-white p-6 sm:p-4 rounded-2xl shadow-md flex flex-col justify-center items-start w-full h-auto min-h-[300px] relative"
          style={{
            backgroundImage: `url(${fidbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="text-4xl font-bold text-white ml-2">20+</span>
          <p className="text-white text-l sm:text-xs leading-tight mt-3 ml-2">
            Professional and Experienced <br /> staff ready to help you
          </p>
        </div>

        {/* Card 3 - National Science Day */}
        <div
          className="pr-6 sm:p-4 rounded-2xl shadow-lg flex flex-col justify-center  text-right bg-no-repeat w-full h-auto min-h-[300px]"
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
          <div className="border-t border-white my-2  w-2/3 mx-30"></div>
          <p className=" text-white mt-2">With The Best Experts In Science</p>
        </div>
      </motion.div>
      {/*--------------------- Sample post ----------------- */}

      <div className="bg-[#ecf2ff] min-h-screen flex flex-col items-center py-12 px-3">
            <h2 className="text-4xl text-center mt-4 text-gray-900" style={{ fontFamily: "Times New Roman" }}>
              Why Choose Muby Chem <br />Private Limited?
            </h2>
            <div className="flex items-center mt-8 max-w-7xl w-full ">
              <VerticalTabs />
            </div>
          </div>

      {/* <div className="bg-[#ecf2ff] p-2"> */}
        {/* <section
          className="bg-[#7B3931] rounded-2xl text-white py-16 px-6 sm:px-8 md:px-10 lg:px-12 bg-no-repeat"
          style={{
            backgroundImage: `url(${Simplebg})`,
            backgroundSize: "60%",
            backgroundPosition: "right",
          }}
        > */}
          {/* Heading */}
          {/* <div className="text-left mb-10">
            <span className="text-sm font-semibold uppercase px-4 py-2 bg-black text-white rounded-full">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
              Get amazing cleaning in <br className="hidden md:block" /> 4 simple steps
            </h2>
          </div> */}
          

          {/* Steps Section */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-[#7B3931] p-10 sm:p-10 md:p-12 lg:p-16 h-full rounded-xl shadow-lg flex flex-col justify-between text-center relative border border-white"
              >
                <div className="text-4xl sm:text-5xl">{step.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold mt-4">{step.title}</h3>
                <p className="text-sm sm:text-base mt-1 text-gray-300">{step.description}</p>
                <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div> */}

      {/*--------------------- Sample post ----------------- */}
      <div className="bg-[#E9F1FF] py-5 px-3 md:px-2 md:py-7 lg:px-3 flex items-center justify-center">
        <div className="max-w-7xl w-full h-full grid grid-cols-1 md:grid-cols-2 bg-[#7B3931] text-white rounded-2xl overflow-hidden">
          <div className="relative">
            <img
              src={labtest}
              alt="Scientist in lab"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-opacity-80 pt-1 sm:p-8 md:p-8 md:ml-5 rounded-lg text-white">
              <span className="text-3xl sm:text-4xl font-bold text-white">460+</span>
              <p className="text-xs sm:text-sm">
                Professional and <br /> Experienced staff ready <br /> to help you
              </p>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <p className="text-sm uppercase font-semibold text-gray-400">Client Reviews</p>
            <h2 className="text-3xl font-bold my-2">
              Trusted by thousands of people & companies.
            </h2>
            <FaQuoteLeft className="text-3xl text-black mb-2" />

            {/* Animated Review Text */}
            <div className="overflow-hidden h-32 relative">
              <AnimatePresence initial={false} custom={direction}>
                <motion.p
                  key={currentReview}
                  initial={{ x: direction * 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -direction * 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg mb-7 p-4 absolute w-full"
                >
                  {reviews[currentReview].text}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center p-6 gap-3">
              <div>
                <h4 className="text-lg font-semibold">{reviews[currentReview].name}</h4>
                <h3 className="text-md text-black">{reviews[currentReview].role}</h3>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end items-center mt-6">
              <div className="flex space-x-2">
                <button
                  onClick={prevReview}
                  className="p-2 bg-gray-700 rounded-full flex items-center justify-center w-10 h-10"
                >
                  <IoIosArrowBack className="text-white text-lg" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-2 bg-gray-700 rounded-full flex items-center justify-center w-10 h-10"
                >
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

export default AboutUs;