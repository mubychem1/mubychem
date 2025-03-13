import React, { useState } from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from 'framer-motion';
import vision from "../../assets/vision.jpg";
import mission from "../../assets/mission.jpg";
import quality from "../../assets/quality.jpg";
import value from "../../assets/value.jpg";


const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Our Vision",
    "Our Mission",
    "Our Quality",
    "Values",
    "Blood Cell Research",
  ];

  const content = [
    <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">

      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={vision}
          alt="Vision"
          className="rounded-3xl w-full max-w-sm"
        />
      </motion.div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 px-6">
        <h3 className="text-2xl font-bold text-gray-900">
          Our Vision
        </h3>
        <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik",
          }
          }>
          To be globally recognized as an authentic source of Speciality Chemicals, Pharmaceutical Actives, Excipients, Food Additives, Fragrance, and Flavors with international benchmarks.
        </p>

        <ul className="mt-4 space-y-2">
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
    </div>,

    <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">

      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={mission}
          alt="Mission"
          className="rounded-3xl w-full max-w-sm"
        />
      </motion.div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 px-6">
        <h3 className="text-2xl font-bold text-gray-900">
          Our Mission
        </h3>
        <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik",
          }
          }>
          We strive to establish our Company as the market leader, by meeting the growing needs of are customers consistently.
        </p>
        <ul className="mt-4 space-y-2">
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
    </div>,

    <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">
      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={quality}
          alt="Quality"
          className="rounded-3xl w-full max-w-sm"
        />
      </motion.div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 px-6">
        <h3 className="text-2xl font-bold text-gray-900">
          Our Quality
        </h3>
        <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik",
          }
          }>
        Quality has always been our point of focus and it is of utmost importance to us. To be globally recognized as an authentic source of Speciality Chemicals, Pharmaceutical Actives, Excipients, Food Additives, Fragrance, and Flavors with international benchmarks.<br/>
        <br/>
        </p>

        <ul className="mt-4 space-y-2">
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
    </div>,

    <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">

      {/* Image Section */}
     {/* Image Section */}
     <motion.div
        className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={value}
          alt="Value"
          className="rounded-3xl w-full max-w-sm"
        />
      </motion.div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 px-6">
        <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
        <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik",
          }
          }>
          To be a global leader in providing quality and performance based
          technological solutions and services in wide ranging industries with a
          reputation for integrity and commitment to creating value for every
          customer.
        </p>

        <ul className="mt-4 space-y-2">
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
    </div>,

    <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">

      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={value}
          alt="Value"
          className="rounded-3xl w-full max-w-sm"
        />
      </motion.div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 px-6">
        <h3 className="text-2xl font-bold text-gray-900">
          Well Ensure You Always Covid 19 Vaccine.
        </h3>
        <p className="text-[#6a7391] mt-3">
          We help ambitious businesses like yours generate more profits by
          building awareness, driving web traffic, connecting with
          customers, and growing overall sales. Give us a call.
        </p>

        <ul className="mt-4 space-y-2">
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
    </div>,
  ];

  return (
    <div className="flex">
      {/* Tabs */}
      <div className="w-1/4 ">
        <ul className="space-y-2">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`flex justify-between items-center w-5/5 p-3 rounded-full transition-all duration-300 ${activeTab === index ? 'bg-white text-gray-900' : 'border border-gray-300 text-gray-900 bg-transparent'
                }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${index === 0
                  ? "bg-[#7b3931] hover:text-black text-white"
                  : "bg-[#7b3931] hover:text-black text-white"
                  }`}
              >
                <FaArrowUpRightFromSquare />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="w-3/4 ">
        <div className=" p-4 rounded-md">
          {content[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
