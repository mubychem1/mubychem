import React, { useState } from "react";
import { motion } from "framer-motion";
import background from "../../assets/Research_Development.jpg";
import translations from "../translater/translations.js";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";


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
   <Helmet>
           <title>Research and Developement - Mubychem Pvt. Ltd.</title>
           <meta name="description" content="" />
           <meta name="keywords" content="" />
           <link rel="canonical" href="" />
   
           {/* Schema.org JSON-LD */}
           <script type="application/ld+json">
             {`
         {
           "@context": "https://schema.org",
           "@type": "AboutPage",
           "name": "Research and Developement - Mubychem Pvt. Ltd.",
           "url": "https://www.mubychem.com/about",
           "mainEntity": {
             "@type": "Organization",
             "name": "Mubychem Pvt. Ltd.",
             "url": "https://www.mubychem.com", 
             "logo": "https://www.mubychem.com/logo.png",
             "description": "Mubychem Pvt. Ltd. is a reputed chemical manufacturing company in India, known for high-quality industrial and pharmaceutical chemicals.",
             "address": {
               "@type": "PostalAddress",
               "streetAddress": "Your Street Address",
               "addressLocality": "City",
               "addressRegion": "State",
               "postalCode": "PIN Code",
               "addressCountry": "IN"
             },
             "contactPoint": {
               "@type": "ContactPoint",
               "telephone": "+91-XXXXXXXXXX",
               "contactType": "Customer Service"
             }
           }
         }
       `}
           </script>
   
         </Helmet>

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
              style={{ backgroundImage: `url(${background}) ` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-left sm:justify-left">
                <div>
                  <h1
                    className="text-white text-3xl sm:text-4xl font-bold mb-4 pl-4"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {currentTranslations.ResearchDevelopment}
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
          {currentTranslations.Researchdesc}
          </p>
          
          <p className="text-gray-600 mt-4 text-justify">
          {currentTranslations.Researchdesc1}
          </p><br/>
          <h5 className="font-bold"> What Our R&D Team Offers: </h5>
          <p className="text-gray-600 mt-4 text-justify">
           
          {currentTranslations.Researchdesc2}<br/>
          {currentTranslations.Researchdesc3}<br/>
          {currentTranslations.Researchdesc4}<br/>
          {currentTranslations.Researchdesc5}<br/>
          {currentTranslations.Researchdesc6}<br/>
          {currentTranslations.Researchdesc7}<br/>
          {currentTranslations.Researchdesc8}<br/>
          {currentTranslations.Researchdesc9}<br/>
          {currentTranslations.Researchdesc10}<br/>
          {currentTranslations.Researchdesc11}<br/>
          {currentTranslations.Researchdesc12}
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ResearchAndDevelopment;
