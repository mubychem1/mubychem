// import React, { useState } from 'react';
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import { motion } from 'framer-motion';
// import vision from "../../assets/vision.png";
// import mission from "../../assets/mission.png";
// import quality from "../../assets/quality.png";
// import value from "../../assets/value.png";
// import excellance from "../../assets/Excellence.png"

// const VerticalTabs = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabs = [
//     "Our Vision",
//     "Our Mission",
//     "Our Quality",
//     "Values",
//     "Excellence",
//   ];

//   const content = [
//     <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">

//       {/* Image Section */}
//       <motion.div
//         className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img
//           src={vision}
//           alt="Vision"
//           className="rounded-3xl w-full max-w-sm"
//         />
//       </motion.div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 px-6">
//         <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: "Graphik" }}>
//           Our Vision
//         </h3>
//         <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik",
//           }
//           }>
//           Our vision is to contribute to a healthier, more sustainable future by advancing pharmaceuticals, nutraceuticals, specialty chemicals, and food additives that promote better health, improve quality of life, and foster environmental responsibility.
//         </p>

//         <ul className="mt-4 space-y-2" style={{fontFamily: "Graphik" }}>
//           {[
//             "Access Expert Advice For A Thriving Life",
//             "Benefits Of Health Conscious Living",
//             "Benefits Of Proactive Health Management",
//             "Countless Benefits Of Prioritizing Health",
//           ].map((benefit, index) => (
//             <li key={index} className="flex items-center text-gray-900">
//               <span className="text-yellow-900 text-lg">&#10003;</span>
//               <span className="ml-2">{benefit}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>,

//     <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">

//       {/* Image Section */}
//       <motion.div
//         className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img
//           src={mission}
//           alt="Mission"
//           className="rounded-3xl w-full max-w-sm"
//         />
//       </motion.div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 px-6">
//         <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: "Graphik" }}>
//           Our Mission
//         </h3>
//         <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik",
//           }
//           }>
//           Our mission is to be the partner of choice for businesses worldwide, offering products and services that drive success, support innovation, and help improve the quality of life for people across the globe.
//         </p>
//         <ul className="mt-4 space-y-2" style={{fontFamily: "Graphik" }}>
//           {[
//             "Access Expert Advice For A Thriving Life",
//             "Benefits Of Health Conscious Living",
//             "Benefits Of Proactive Health Management",
//             "Countless Benefits Of Prioritizing Health",
//           ].map((benefit, index) => (
//             <li key={index} className="flex items-center text-gray-900">
//               <span className="text-yellow-900 text-lg">&#10003;</span>
//               <span className="ml-2">{benefit}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>,

//     <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">
//       {/* Image Section */}
//       <motion.div
//         className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img
//           src={quality}
//           alt="Quality"
//           className="rounded-3xl w-full max-w-sm"
//         />
//       </motion.div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 px-6">
//         <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: "Graphik" }}>
//           Our Quality
//         </h3>
//         <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik",
//           }
//           }>
//        At Muby Chem, quality is at the heart of everything we do. We are dedicated to providing our clients with exceptional products that meet the highest standards of safety, performance, and regulatory compliance. Our rigorous commitment to quality ensures that each product we produce is reliable, effective, and consistently exceeds expectations.<br/>
//         <br/>
//         </p>

//         <ul className="mt-4 space-y-2" style={{fontFamily: "Graphik" }}>
//           {[
//             "Access Expert Advice For A Thriving Life",
//             "Benefits Of Health Conscious Living",
//             "Benefits Of Proactive Health Management",
//             "Countless Benefits Of Prioritizing Health",
//           ].map((benefit, index) => (
//             <li key={index} className="flex items-center text-gray-900">
//               <span className="text-yellow-900 text-lg">&#10003;</span>
//               <span className="ml-2">{benefit}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>,

//     <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">

//       {/* Image Section */}
//      {/* Image Section */}
//      <motion.div
//         className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img
//           src={value}
//           alt="Value"
//           className="rounded-3xl w-full max-w-sm"
//         />
//       </motion.div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 px-6">
//         <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: "Graphik" }}> Values</h3>
//         <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik",
//           }
//           }>
//           Our core values drive every aspect of our business. We are committed to maintaining the highest ethical standards, fostering innovation, and creating meaningful partnerships with our customers, employees, and communities. Our values form the foundation of our work culture and guide our actions as we strive to make a positive impact on industries and lives around the world.
//         </p>

//         <ul className="mt-4 space-y-2" style={{fontFamily: "Graphik" }}>
//           {[
//             "Access Expert Advice For A Thriving Life",
//             "Benefits Of Health Conscious Living",
//             "Benefits Of Proactive Health Management",
//             "Countless Benefits Of Prioritizing Health",
//           ].map((benefit, index) => (
//             <li key={index} className="flex items-center text-gray-900">
//               <span className="text-yellow-900 text-lg">&#10003;</span>
//               <span className="ml-2">{benefit}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>,

//     <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">

//       {/* Image Section */}
//       <motion.div
//         className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img
//           src={excellance}
//           alt="Value"
//           className="rounded-3xl w-full max-w-sm"
//         />
//       </motion.div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 px-6">
//         <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: "Graphik" }}>
//         Excellence
//         </h3>
//         <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik" }}>
//         We continuously strive for excellence in everything we do. Our dedication to high standards of performance, attention to detail, and a relentless pursuit of improvement ensures that we remain leaders in the industry, delivering the best products and services to our customers.
//         </p>

//         <ul className="mt-4 space-y-2" style={{fontFamily: "Graphik" }}>
//           {[
//             "Access Expert Advice For A Thriving Life",
//             "Benefits Of Health Conscious Living",
//             "Benefits Of Proactive Health Management",
//             "Countless Benefits Of Prioritizing Health",
//           ].map((benefit, index) => (
//             <li key={index} className="flex items-center text-gray-900">
//               <span className="text-yellow-900 text-lg">&#10003;</span>
//               <span className="ml-2">{benefit}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>,
//   ];

//   return (
//     <div className="flex">
//       {/* Tabs */}
//       <div className="w-1/4 ">
//         <ul className="space-y-2">
//           {tabs.map((tab, index) => (
//             <li
//               key={index}
//               className={`flex justify-between items-center w-5/5 p-3 rounded-full transition-all duration-300 ${activeTab === index ? 'bg-white text-gray-900' : 'border border-gray-300 text-gray-900 bg-transparent'
//                 }`}
//               onClick={() => setActiveTab(index)}
//             >
//               {tab}
//               <div
//                 className={`w-10 h-10 flex items-center justify-center rounded-full ${index === 0
//                   ? "bg-[#773135] hover:text-black text-white"
//                   : "bg-[#773135] hover:text-black text-white"
//                   }`}
//               >
//                 <FaArrowUpRightFromSquare />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Tab Content */}
//       <div className="w-3/4 ">
//         <div className=" p-4 rounded-md">
//           {content[activeTab]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerticalTabs;

import React, { useState, useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import Vision from "../../assets/Vision.png";
import mission from "../../assets/mission.png";
import quality from "../../assets/quality.png";
import Value from "../../assets/Value.png";
import excellance from "../../assets/Excellence.png";


const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleTabs, setVisibleTabs] = useState([]);

  useEffect(() => {
    tabs.forEach((_, index) => {
      setTimeout(() => {
        setVisibleTabs((prev) => [...prev, index]);
      }, index * 300);
    });
  }, []);

  const tabs = [
    "Our Vision",
    "Our Mission",
    "Our Quality",
    "Our Values",
    "Excellence",
  ];

  const content = [
    {
      title: "Our Vision",
      description: " To be globally recognized as an authentic source of Speciality Chemicals, Pharmaceutical Actives, Excipients, Food Additives, Fragrance, and Flavors with international benchmarks.",
      img: Vision,
      
    },
    {
      title: "Our Mission",
      description: "Our vision is to contribute to a healthier, more sustainable future by advancing pharmaceuticals, nutraceuticals, specialty chemicals, and food additives that promote better health, improve quality of life, and foster environmental responsibility.",
      img: mission,
    },
    {
      title: "Our Quality",
      description: "At Muby Chem, quality is at the heart of everything we do. We are dedicated to providing our clients with exceptional products that meet the highest standards of safety, performance, and regulatory compliance. Our rigorous commitment to quality ensures that each product we produce is reliable, effective, and consistently exceeds expectations.",
      img: quality,
    },
    {
      title: "Our Values",
      description: "Our core values drive every aspect of our business. We are committed to maintaining the highest ethical standards, fostering innovation, and creating meaningful partnerships with our customers, employees, and communities. Our values form the foundation of our work culture and guide our actions as we strive to make a positive impact on industries and lives around the world.",
      img: Value,
    },
    {
      title: "Excellence",
      description: "We continuously strive for excellence in everything we do. Our dedication to high standards of performance, attention to detail, and a relentless pursuit of improvement ensures that we remain leaders in the industry, delivering the best products and services to our customers.",
      img: excellance,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-start max-w-7xl mx-auto p-4" style={{fontFamily: "Graphik" }}>
      {/* Tabs */}
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <ul className="space-y-2">
          {tabs.map((tab, index) => (
            <motion.li
              key={index}
              className={`flex justify-between items-center w-full p-3 rounded-full cursor-pointer transition-all duration-300 ${
                activeTab === index
                  ? "bg-[#773135] text-white"
                  : "border border-gray-300 text-gray-900 bg-transparent"
              } ${visibleTabs.includes(index) ? "opacity-100" : "opacity-0"}`}
              onClick={() => setActiveTab(index)}
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleTabs.includes(index) ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {tab}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F2DE] text-[#773135]">
                <FaArrowUpRightFromSquare/>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        className="w-full px-4 md:px-10 rounded-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <motion.img
            src={content[activeTab].img}
            alt={content[activeTab].title}
            className="rounded-3xl w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-8 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900 ">
              {content[activeTab].title}
            </h3>
            <p className="text-[#6a7391] mt-3">
              {content[activeTab].description}
            </p>
            <ul className="mt-4 space-y-2" style={{fontFamily: "Graphik" }}>
          {[
             "Access Expert Advice For A Thriving Life",
             "Benefits Of Health Conscious Living",
             "Benefits Of Proactive Health Management",
             "Countless Benefits Of Prioritizing Health",
           ].map((benefit, index) => (
             <li key={index} className="flex items-center text-gray-900">
               <span className="text-yellow-900 text-lg">&#10003;</span>
               <span className="ml-2">{benefit}</span>
             </li>
           ))}
         </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VerticalTabs;
