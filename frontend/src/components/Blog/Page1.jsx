// import React, { useState } from 'react';
// import background from '../../assets/background.png';
// // import { useNavigate } from "react-router-dom";
// import Page1 from './Page1'
// import { Link } from 'react-router-dom';
// import translations from '../translater/translations.js'
// import { useSelector } from "react-redux"

// const data = [
//   { title: "Essential Amino Acid – Its Uses and Benefits for our Body.", description: "Essential Amino Acids (EAAs) are the building blocks of proteins that our body cannot produce on its own. We must obtain them from our diet through protein-rich foods like meat, eggs, dairy, and plant-based sources like quinoa and soy.", image: "https://anmolchem.org/assets/images/blog/Untitled-2.psdessential-amino-acids-in.png" },
//   // { title: "Chemical Research", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-02-770x570.jpg" },
//   // { title: "Pathology Testing", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-03-770x570.jpg" },
// ];

// const ITEMS_PER_PAGE = 9;

// const Blog = () => {

//   const language = useSelector((state) => state.language.language); // Get selected language from Redux
//   const currentTranslations = translations[language] || translations.en; // Fallback to English

//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

//   return (
//     <>
//       <div className="bg-[#ecf2ff] p-6 md:p-12">
//         <div
//           className="relative h-[500px] bg-cover rounded-4xl overflow-hidden "
//           style={{ backgroundImage: `url(${background})` }}
//         >
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="absolute inset-0 flex items-center justify-left">
//             <div>
//               <h1 className="text-white text-5xl font-bold mb-4 pl-4 ">{currentTranslations.BLOGS}</h1>
//               <p className="text-white text-lg pl-5 ">Mubychem &gt; {currentTranslations.BLOGS}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#ecf2ff] min-h-screen p-8 flex justify-center items-center flex-col">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {currentItems.map((item, index) => (
//             <div key={index} className="bg-white p-5 rounded-3xl hover:shadow-xl transition-all overflow-hidden h-[500px] md:h-[550px] flex flex-col">
//               <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-xl mb-4" />
//               {/* <p className="text-[#7B3931] font-semibold text-sm mt-3">{item.category}</p> */}
//               <h3 className="text-xl font-bold text-gray-800 mt-1">{item.title}</h3>
//               <hr className="border-t border-gray-300 mt-2" />
//               <p className="text-gray-600 mt-2 text-sm flex-grow">{item.description}</p>
//               {/* <div className="mt-4 flex justify-end">
//                 <button className="p-2 bg-[#7B3931] text-white rounded-full hover:bg-blue-700 transition-all">&#10140;</button>
//               </div> */}

//               <div className='mt-4 ml-1 flex justify-start'>
//                 <Link to="/Page1">
//                   <button className="p-2 bg-[#7B3931] text-white rounded-full transition-all font-semibold cursor-pointer">
//                     Read More
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </>
//   );
// };

// export default Blog;

import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { IoMdFlask, IoIosArrowForward } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { FaArrowRight, FaPlay, FaArrowLeft } from "react-icons/fa";
import background from "../../assets/background.png";
import { motion } from "framer-motion";
import translations from "../translater/translations.js";
import { useSelector } from "react-redux";
const Blog = () => {
  const language = useSelector((state) => state.language.language); // Get selected language from Redux

  const currentTranslations = translations[language] || translations.en; // Fallback to English

  return (
    <>
      {/* Blog page details */}
      <div className="flex flex-col" style={{ fontFamily: "Times New Roman" }}>
        {/* ----------Research Section  -------------- */}
        <div className="bg-white flex flex-col md:flex-row items-center justify-between w-full px-5 md:px-20 pt-10 pb-5">
          {/* Left Side - Image */}
          <motion.div
            className="h-full sm:w-3/4 md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              {" "}
              <img
                src="https://anmolchem.org/assets/images/blog/Untitled-2.psdessential-amino-acids-in.png"
                alt="Lab Equipment"
                className="w-auto rounded-xl  h-full"
                sizes="(max-width: 647px) 100vw, 647px"
              />
              <p style={{ fontFamily: "Times New Roman" }}>
                {currentTranslations.Uploaded}
              </p>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="w-full md:w-1/2 text-gray-800 mt-10 md:mt-0 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {/* Heading */}
            <motion.h2
              className="text-4xl leading-[60px] tracking-[0] text-[#000] normal-case not-italic w-full"
              style={{ fontFamily: "Times New Roman" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a href="/#" className="text-yellow-900">
                <b>{currentTranslations.Essential}</b>
              </a>
              {currentTranslations.Uses}
            </motion.h2>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 mb-2 border-t pt-6 border-gray-400"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.3 },
                },
              }}
            ></motion.div>
            {/* Description */}
            <motion.p
              className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
              style={{ fontFamily: "Graphik" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {currentTranslations.information}
              <br />
              <br />
              {currentTranslations.Amino} <br />
              <br />
              {currentTranslations.Amino1}
            </motion.p>
            {/* <motion.p
            className="text-[15px] leading-[1.6] text-[#6a7391] normal-case not-italic mb-6"
            style={{ fontFamily: "Graphik" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {currentTranslations.mubyChemDescription2}
          </motion.p> */}

            {/* Features Section */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 mb-6 border-t pt-6 border-gray-400"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.3 },
                },
              }}
            ></motion.div>
          </motion.div>
        </div>

        <div
          className="flex flex-col py-6 px-15 text-lg"
          style={{ fontFamily: "Graphik" }}
        >
          <motion.h2
            className="text-4xl leading-[60px] tracking-[0] text-[#000] normal-case not-italic w-full"
            style={{ fontFamily: "Times New Roman" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {currentTranslations.question}
          </motion.h2>
          <motion.p
            className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
            style={{ fontFamily: "Graphik" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {currentTranslations.organic}
            <br />
            {currentTranslations.Histidine1}
            <br />
            {currentTranslations.best}
            <br />
            {currentTranslations.However}
          </motion.p>
          <motion.h2
            className="text-4xl leading-[60px] tracking-[0] text-[#000] normal-case not-italic w-full"
            style={{ fontFamily: "Times New Roman" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {currentTranslations.question1}
          </motion.h2>
          <motion.p
            className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
            style={{ fontFamily: "Graphik" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {currentTranslations.essential9}
          </motion.p>
          <motion.ul
            class="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6 list-disc"
            style={{ fontFamily: "Graphik" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <li>
              <b>{currentTranslations.Phenylalanine}</b> {currentTranslations.Phenylalaninedetail}
            </li>
            <li>
              <b>{currentTranslations.Valine }</b> {currentTranslations.Valinedetail }
            </li>
            <li>
              <b>{currentTranslations.Threonine }</b> {currentTranslations.Threoninedetail}
            </li>
            <li>
              <b>{currentTranslations.Tryptophan} </b> {currentTranslations.Tryptophandetail}
            </li>
            <li>
              <b>{currentTranslations.Methionine} </b> {currentTranslations.Methioninedetail}
            </li>
            <li>
              <b>{currentTranslations.Leucine} </b> {currentTranslations.Leucinedetail}
            </li>
            <li>
              <b>{currentTranslations.Isoleucine}</b>{currentTranslations.Isoleucinedetail}
            </li>
            <li>
              <b>{currentTranslations.Lysine} </b> {currentTranslations.Lysinedetail}
            </li>
            <li>
              <b>{currentTranslations.Histidine} </b> {currentTranslations.Histidinedetail}
            </li>
          </motion.ul>

          <div className="bg-white flex flex-col md:flex-row items-center justify-between w-full px-2 md:px-2 pt-10 pb-5">
            {/* Right Side - Content */}
            <motion.div
              className="w-full md:w-1/2 text-gray-800 mt-10 md:mt-0 text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              {/* Heading */}
              <motion.p
                className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
                style={{ fontFamily: "Graphik" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
               {currentTranslations.content}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-6 mb-2 border-t pt-6 border-gray-400"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.3 },
                  },
                }}
              ></motion.div>
              {/* Description */}
              <motion.ul
                className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
                style={{ fontFamily: "Graphik" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <li>
                  <b>{currentTranslations.Histidine2}</b> 10 milligrams (mg)
                </li>
                <li>
                  <b>{currentTranslations.Isoleucine1}</b> 20 mg
                </li>
                <li>
                  <b>{currentTranslations.Leucine1}</b> 39 mg
                </li>
                <li>
                  <b>{currentTranslations.Lysine1}</b> 30 mg
                </li>
                <li>
                  <b>{currentTranslations.Methionine1}</b> 10.4 mg
                </li>
                <li>
                  <b>
                    {currentTranslations.Phenylalanine}
                  </b>
                  25 mg
                </li>
                <li>
                  <b>{currentTranslations.Threonine}</b> 15 mg
                </li>
                <li>
                  <b>{currentTranslations.Tryptophan}</b> 4 mg
                </li>
                <li>
                  <b>{currentTranslations.Valine}</b> 26 mg
                </li>
              </motion.ul>
              {/* <motion.p
            className="text-[15px] leading-[1.6] text-[#6a7391] normal-case not-italic mb-6"
            style={{ fontFamily: "Graphik" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {currentTranslations.mubyChemDescription2}
          </motion.p> */}

              {/* Features Section */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 mb-6 border-t pt-6 border-gray-400"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.3 },
                  },
                }}
              ></motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="h-full sm:w-3/4 md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div>
                {" "}
                <img
                  src="https://anmolchem.org/assets/images/blog/pic-2.png"
                  alt="Lab Equipment"
                  className="w-auto rounded-xl  h-full"
                  sizes="(max-width: 647px) 100vw, 647px"
                />
                <motion.p
                  className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
                  style={{ fontFamily: "Graphik" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  {currentTranslations.Foodsources} 
                </motion.p>
              </div>
            </motion.div>
          </div>

          <div className="bg-white flex flex-col md:flex-row items-center justify-between w-full px-2 md:px-2 pt-10 pb-5">
            {/* Right Side - Content */}
            <motion.div
              className="w-full md:w-1/2 text-gray-800 mt-10 md:mt-0 text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              {/* Heading */}
              <div>
                {" "}
                <img
                  src="https://anmolchem.org/assets/images/blog/picture-3.png"
                  alt="Lab Equipment"
                  className="w-auto rounded-xl  h-full"
                  sizes="(max-width: 647px) 100vw, 647px"
                />
                <motion.p
                  className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
                  style={{ fontFamily: "Graphik" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  {currentTranslations.Foods}
                </motion.p>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="h-full sm:w-3/4 md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <motion.p
                  className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
                  style={{ fontFamily: "Graphik" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  
                  {currentTranslations.Soya}
                </motion.p>
                <motion.ul
                  class="list-disc text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
                  style={{ fontFamily: "Graphik" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <li>{currentTranslations.Meat}</li>
                  <li>{currentTranslations.Seafood}</li>
                  <li>{currentTranslations.Poultry}</li>
                  <li>{currentTranslations.Eggs}</li>
                  <li>{currentTranslations.Dairyproducts}</li>
                </motion.ul>
                <motion.div
                  className="flex flex-col sm:flex-row gap-6  border-t pt-6 border-gray-400"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.3 },
                    },
                  }}
                ></motion.div>
                <motion.p
                  className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
                  style={{ fontFamily: "Graphik" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  {currentTranslations.plantbased}
                  <br />
                  {currentTranslations.plantbased1}
                </motion.p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col py-6 px-3">
            <motion.h2
              className="text-4xl leading-[60px] tracking-[0] text-[#000] normal-case not-italic w-full"
              style={{ fontFamily: "Times New Roman" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {currentTranslations.Conclusion}
            </motion.h2>
            <motion.p
              className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
              style={{ fontFamily: "Graphik" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {currentTranslations.Conclusion1}
              <br />
              {currentTranslations.Conclusion2} <br />
              {currentTranslations.supplements}
            </motion.p>
            <motion.p
              className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
              style={{ fontFamily: "Graphik" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {currentTranslations.Social}
            </motion.p>
            <div className="flex space-x-5">
              <FaFacebookF className="text-[#0008ba]" />
              <FaLinkedinIn className="text-[#6ba3e0]" />
              <FaInstagram className="text-[#ba00b3]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex"></div>
    </>
  );
};

export default Blog;
