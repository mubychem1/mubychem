import React from "react";
import img1 from "../../assets/aboutUs-img.png";
import { motion } from "framer-motion";

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
        className="relative bg-[#ecf2ff] p-6 rounded-xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl"
        >
          <img
            src="" // Add your background image path here
            alt="About Us Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-8">
            <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
            <p className="text-blue-200 mt-2 text-sm md:text-base">
              <span className="text-yellow-400">XLEB</span> &gt; ABOUT US
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
        className="bg-[#ecf2ff] p-10 flex flex-col md:flex-row items-center md:items-start rounded-lg min-h-[600px]" 
      >
        {/* Image Section */}
        <motion.div
          variants={zoomIn}
          className="relative w-full md:w-1/2 flex justify-center md:justify-start h-[450px]"
        >
          <img
            src={img1} // Replace with your image path
            alt="Scientist working in lab"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg "
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
            Chemistry Research Documentation Center, a hub exploration & discovery in the
            realm of uncommon & extraordinary chemical phenomena. Our clinical pathologists are
            available seven days a week to render diagnoses.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 border border-black rounded-full flex items-center gap-2 text-lg font-medium"
          >
            Read More ➝
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutUs;
