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

import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { IoMdFlask, IoIosArrowForward } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { FaArrowRight, FaPlay, FaArrowLeft } from 'react-icons/fa';
import background from '../../assets/background.png';
import { motion } from 'framer-motion';
import translations from '../translater/translations.js';
import { useSelector } from "react-redux";
const Blog = () => {
  const language = useSelector((state) => state.language.language); // Get selected language from Redux

  const currentTranslations = translations[language] || translations.en; // Fallback to English

  return (
    <>
      {/* Blog page details */}
      <div className='flex flex-col'>
        {/* ----------Research Section  -------------- */}
        <div className="bg-white flex flex-col md:flex-row items-center justify-between w-full px-5 md:px-20 pt-10 pb-5">
          {/* Left Side - Image */}
          <motion.div
            className="h-full sm:w-3/4 md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div> <img
              src="https://anmolchem.org/assets/images/blog/Untitled-2.psdessential-amino-acids-in.png"
              alt="Lab Equipment"
              className="w-auto rounded-xl  h-full"
              sizes="(max-width: 647px) 100vw, 647px"
            />
              <p style={{ fontFamily: "Times New Roman" }}>Uploaded By: admin | 12th August 2024</p>
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
              <a href="/#" className='text-yellow-900'><b>Essential Amino Acids</b></a> - Its Uses and Benefits for our Body.
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
            >

            </motion.div>
            {/* Description */}
            <motion.p
              className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
              style={{ fontFamily: "Graphik" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Essential Amino Acids are organic compounds that our body needs to function well. Our body doesn't synthesize it on its own you need to take it from a diet.<br /><br />
              Amino acids are also referred to as the building blocks of proteins and also play an important role in our body. We need amino acids for important processes such as building proteins, hormones, and neurotransmitters.<br /><br />
              Amino acids are rich in foods such as meat, fish, and soybeans. Some people take amino acids in the form of supplements tablets, to boost their performance or improve blood.
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
            >

            </motion.div>

          </motion.div>
        </div>

        <div className="flex flex-col py-6 px-15 text-lg" style={{ fontFamily: "Graphik" }}>
         
          <motion.h2
            className="text-4xl leading-[60px] tracking-[0] text-[#000] normal-case not-italic w-full"
            style={{ fontFamily: "Times New Roman" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            What are essential amino acids?
          </motion.h2>
          <motion.p
            className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
            style={{ fontFamily: "Graphik" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >Amino acids are organic compounds which is composed of nitrogen, carbon, hydrogen, and oxygen. Our body needs 20 different types of amino acids to grow and perform properly. All of these 20 amino acids are important for our health. From that we have discussed the Nine essential amino acid.
         <br/>
         They are Histidine, isoleucine, leucine, valine, lysine, methionine, phenylalanine, threonine, and tryptophan. Though our body can make nonessential amino acids, it cannot make essential amino acids, so we have to take it from our diet.<br/>
         The best sources of essential amino acids one can get are - animal proteins such as meat, eggs, and poultry.<br/>
            However, there are some plant foods, such as the soya product - tofu which contain all nine essential amino acids.
          </motion.p>
          <motion.h2
            className="text-4xl leading-[60px] tracking-[0] text-[#000] normal-case not-italic w-full"
            style={{ fontFamily: "Times New Roman" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            How many essential amino acids are there?
          </motion.h2>
          <motion.p
            className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
            style={{ fontFamily: "Graphik" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >There are 9 essential amino acids</motion.p>
          <motion.ul class="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6 list-disc" style={{ fontFamily: "Graphik" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}>
            <li>
              <b>Phenylalanine</b> - Our body turns this amino acid into neurotransmitter tyrosine, dopamine, epinephrine, and norepinephrine. It plays a crucial role in the functions of proteins, enzymes, and the production of other amino acids.
            </li>
            <li>
              <b>Valine </b> - This amino acid is not produced directly in your body, it needs to be taken from diet only.Valine is Branched chain amino acid.Branched-chain amino acids are used in our body to make energy. Valine is mainly found in protein food sources such as meat, fish, soy, and dairy products.
            </li>
            <li>
              <b>Threonine </b> - Threonine is important for skin development and connective tissue formation; involved in fat metabolism and immune function.
            </li>
            <li>
              <b>Tryptophan </b> - It is associated with drowsiness,trptophan is a precursor to serotonin which is a neurotransmitter that regulates our appetite, sleep, and mood.
            </li>
            <li>
              <b>Methionine </b> - This amino acid plays a vital role in metabolism and detoxification. It is also necessary for the tissue growth.
            </li>
            <li>
              <b>Leucine </b> - Like valine, leucine is a BCAA which is important for protein synthesis, muscle growth and repair. By taking it in our diet it regulates our blood sugar levels.
            </li>
            <li>
              <b>Isoleucine</b> - Isoleucine helps in maintaining muscle metabolism and muscle tissue. It is also important for immune function, haemoglobin production, and energy maintenance.
            </li>
            <li>
              <b>Lysine </b> - Lysine plays major roles in protein synthesis, calcium absorption, and in the production of hormones and enzymes. It is also important for energy production, immune function, and collagen production.
            </li>
            <li>
              <b>Histidine </b> - Our body uses this amino acid to produce histamine, which is a neurotransmitter that is important to immune response, digestion, and sexual function. It is very important for maintaining the myelin sheath, a protective barrier that protects our nerve cells.
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
                As we know our body does not produce essential amino acid we need to take it from diet. Here we have found by researching the daily required intakes for the essential amino acids, according to the World Health Organization. These values mentioned below are for adults per 2.2 lb (1 kg) of body weight (29):
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
              >

              </motion.div>
              {/* Description */}
              <motion.ul
                className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
                style={{ fontFamily: "Graphik" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <li><b>Histidine:</b> 10 milligrams (mg)</li>
                <li><b>Isoleucine:</b> 20 mg</li>
                <li><b>Leucine:</b> 39 mg</li>
                <li><b>Lysine:</b> 30 mg</li>
                <li><b>Methionine:</b> 10.4 mg</li>
                <li><b>Phenylalanine is combined with the nonessential amino acid tyrosine:</b> 25 mg</li>
                <li><b>Threonine:</b> 15 mg</li>
                <li><b>Tryptophan:</b> 4 mg</li>
                <li><b>Valine:</b> 26 mg</li>
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
              >

              </motion.div>

            </motion.div>


            {/* Right Side - Image */}
            <motion.div
              className="h-full sm:w-3/4 md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div> <img
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
                >Food sources and recommended intake</motion.p>
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
              <div> <img
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
                >Foods that 9 essential amino acids contain are</motion.p>
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
              > Soya and pea protein are plant-based protein for vegetarian people. </motion.p>
                <motion.ul class="list-disc text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
                  style={{ fontFamily: "Graphik" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}>
                  <li>Meat</li>
                  <li>Seafood</li>
                  <li>Poultry</li>
                  <li>Eggs</li>
                  <li>Dairy products</li>
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
                >

                </motion.div>
                <motion.p
                  className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
                  style={{ fontFamily: "Graphik" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}>
                  There are other plant-based sources of protein, such as beans, nuts, and some grains, are considered incomplete proteins because they lack one or more of the essential amino acids.<br />
                  However, if an individual is following a plant-based diet, still we can ensure proper intake of all nine essential amino acids by eating a variety of plant proteins each day.</motion.p>
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
            >Conclusion</motion.h2>
            <motion.p
              className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
              style={{ fontFamily: "Graphik" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >There are nine essential amino acids, which we must get through our daily diet — histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine.<br/>
            They are important for our day-to-day functions, including protein synthesis, tissue repair, and nutrient absorption.These important compounds are found in many animal and plant-based foods. Most of us can manage a balanced diet and healthy lifestyle. <br/>
            We can even take essential amino acid supplements if needed.</motion.p>
            <motion.p
              className="text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
              style={{ fontFamily: "Graphik" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >Follow us on Social Media : </motion.p>
            <div className="flex space-x-5">
              <FaFacebookF className="text-[#0008ba]" />
              <FaLinkedinIn className="text-[#6ba3e0]" />
              <FaInstagram className="text-[#ba00b3]" />
            </div>
          </div>

        </div>
      </div>
      <div className='flex'></div>

    </>
  )
}

export default Blog;