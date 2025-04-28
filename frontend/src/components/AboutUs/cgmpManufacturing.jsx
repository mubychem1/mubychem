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
          className="relative w-full h-auto overflow-hidden rounded-xl"
        >
          <div className="bg-[#fff] p-6 pb-1 sm:p-8 md:p-12">
            <div
              className="relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-[350px] bg-cover rounded-4xl overflow-hidden"
              style={{ backgroundImage: `url(${background}) `}}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-left sm:justify-left">
                <div>
                  <h1
                    className="text-white text-3xl sm:text-4xl font-bold mb-4 pl-4"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {currentTranslations.ManufacturingOverview}
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
        className="bg-[#fff] p-12 pt-3 py-6 sm:pt-0 flex flex-col md:flex-row items-center md:items-start "
      >
        {/* Text Content Section */}
        <motion.div
          variants={fadeInUp}
          className="w-full text-center md:text-left "
        >
          <p className="text-gray-600 text-justify">
          {currentTranslations.ManufacturingDesc}<b>{currentTranslations.ManufacturingDescB}</b>{currentTranslations.ManufacturingDescC}<b>{currentTranslations.ManufacturingDescD}</b>
          </p>
          <p className="text-gray-600 mt-4 text-justify">
          {currentTranslations.ManufacturingDesc1}
          </p>          
          <p className="text-gray-600 mt-4 text-justify">
          {currentTranslations.ManufacturingDesc2}
          </p>
          

        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-[#fff] px-12  py-0 flex flex-col md:flex-row items-center md:items-start "
      >
      <h5 className="text-[20px] font-bold normal-case not-italic w-full">
           {currentTranslations.ManufacturingDesc3}
          </h5></motion.div>
      <div className="flex items-center justify-center px-6 py-10">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-white flex items-center justify-center w-full"
                  >
                    <div className="w-full max-w-4xl aspect-video rounded-lg border-4 border-[#773135] overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/buwI_49ZTp0?si=5cAs2dZBEgK7k5lp"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </motion.div>
                </div>
    </>
  );
};

export default CgmpManufacturing;
