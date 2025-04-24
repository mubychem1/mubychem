import React, { useState } from "react";
import { motion } from "framer-motion";
import background from "../../assets/Research_Development.jpg";
import translations from "../translater/translations.js";
import { useSelector } from "react-redux";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const ResearchAndDevelopment = () => {
  const language = useSelector((state) => state.language.language); // Get selected language from Redux
  const currentTranslations = translations[language] || translations.en; // Fallback to English
  // const reviews = currentTranslations.reviews || [];

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
        className="relative bg-[#fff] "
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-auto md:h-auto lg:h-auto overflow-hidden rounded-xl"
        >
          <div className="bg-[#fff] p-6 pb-1 md:p-12">
            <div
              className="relative h-[350px] bg-cover rounded-4xl  overflow-hidden"
              style={{ backgroundImage: `url(${background}) `}}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-left">
                <div>
                  <h1
                    className="text-white text-4xl font-bold mb-4 pl-4 "
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Research & Development
                  </h1>
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
        className="bg-[#fff] p-12  pt-0 flex flex-col md:flex-row items-center md:items-start "
      >
        {/* Text Content Section */}
        <motion.div
          variants={fadeInUp}
          className="w-full text-center md:text-left "
        >
          <p className="text-gray-600 text-justify">
            At Muby Chem, innovation is powered by expertise. Our R&D
            professionals bring together decades of cumulative industry
            experience in pharmaceutical, nutraceutical, food, and specialty
            chemical development.
          </p>

          <p className="text-gray-600 mt-4 text-justify">
            We take pride in developing high-purity, performance-driven products
            that consistently meet global quality and regulatory expectations.
            Whether it’s excipients, APIs, or mineral salts — our team works
            relentlessly to research, refine, and reimagine chemical
            manufacturing for evolving industry needs.
          </p><br/>
          <h5 className="font-bold"> What Our R&D Team Offers: </h5>
          <p className="text-gray-600 mt-4 text-justify">
           
            * Custom product development, process optimization, validation &
            scale-up <br />
            * Granulation, encapsulation, milling (wet/dry), and particle size
            optimization (powder to ultrafine grades)
            <br />* Inorganic, organic, organometallic synthesis & process
            chemistry <br />
            * Advanced chemical engineering, design & technology transfer
            <br />
            * Analytical method development & validation <br />
            * Compliance with USP, EP, BP, IP, FCC, ACS, JP, CP and Ph. Eur. standards{" "}
            <br />
            * cGMP and GLP-compliant product design and support <br />
            * Formulation support for solid, semi-solid & injectable
            applications
            <br />
            * Robust technical support & documentation (TDS, MSDS, CoA,
            stability data)
            <br />* Custom solutions for encapsulation, free-flowing grades, and
            anti-caking systems
            <br />* eCTD and DMF Support and Documentations Available.
            <br />* Documents and Support for eCTD and DMF Are Available
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ResearchAndDevelopment;
