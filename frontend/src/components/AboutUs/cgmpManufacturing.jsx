import React, { useState } from "react";
import { motion } from "framer-motion";
import background from "../../assets/Cgmp_Manufacturing.jpg";
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

const CgmpManufacturing = () => {
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
              style={{ backgroundImage: `url(${background})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-left">
                <div>
                  <h1
                    className="text-white text-4xl font-bold mb-4 pl-4 "
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    
                  >
                    Manufacturing Overview
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
            Our current facility has the capability to manufacture a broad range
            of pharmaceutical ingredients, excipients, mineral salts, and
            specialty chemicals . The facility is designed and equipped with
            advanced machinery and technology to produce top-quality products in
            compliance with environmental regulations and Good Manufacturing
            Practices (GMP).
          </p>
          <p className="text-gray-600 mt-4 text-justify">
            This USFDA-registered, state-of-the-art facility, located in
            Ankleshwar, Gujarat, India , is certified for cGMP, GLP, ISO 9001,
            FSSC 22000, FSSAI, Halal, and Kosher standards .
          </p>          
          <p className="text-gray-600 mt-4 text-justify">
            With modern production techniques, flexible processes, and
            procedures, we offer efficient services for both small batches and
            large orders.
          </p>
          <h5
              className="text-[20px] leading-[50px] font-bold tracking-[0]  normal-case not-italic w-full">
            Explore Our State-of-the-Art Manufacturing Facility:
          </h5>

           <div className="flex items-center justify-center mt-4">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-white flex items-center justify-center"
                  >
                    <div className=" rounded-lg border-12 border-[#773135]">
                      <iframe
                        width="800"
                        height="350"
                        src="https://www.youtube.com/embed/buwI_49ZTp0?si=5cAs2dZBEgK7k5lp"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </motion.div>
                </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CgmpManufacturing;
