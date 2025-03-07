import React from 'react'
import cta from "../../assets/CTA.webp";
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


const Products = () => {
  return (
    <>

      {/***********Poducts Page Breadcrumb ************/}
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

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-8"
            style={{
              backgroundImage: `url(${cta})`,
              backgroundSize: "100%",
              backgroundPosition: "top-right",
            }}>
            <h1 className="text-white text-4xl md:text-5xl font-bold">Products</h1>
            <p className="text-blue-200 mt-2 text-sm md:text-base">
              <span className="text-yellow-400">Muby Chem</span> &gt; PRODUCTS
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* *************Search bar*************** */}

      <div
        className="flex flex-col md:flex-row align-center items-center bg-[#ecf2ff] p-6 md:p-12 gap-6 md:gap-12"
        style={{
          fontFamily: "Open Sans, sans-serif",
          fontWeight: "normal",
          fontSize: "15px",
          lineHeight: "1.6",
          letterSpacing: "0",
          color: "#6a7391",
          textTransform: "none",
          fontStyle: "normal",
        }}
      >
        {/* Left Side - Dropdown */}
        <div class="w-14 flex-none ..."></div>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="w-64 text-yellow-500 bg-white focus:ring-4 
focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
text-center inline-flex items-center" type="button">Dropdown button
          <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Sign out</a>
            </li>
          </ul>
        </div>

        {/* Right Side - Search bar */}
        <div
          className="text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl flex flex-col justify-center flex-1 relative overflow-hidden bg-no-repeat">
          <div class="w-64 max-w-sm min-w-[200px]">
            <div class="relative">
              <input
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="UI Kits, Dashboards..."
              />
              <button
                class="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2">
                  <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>

        <div class="w-14 flex-none ..."></div>
      </div>


      <div>
        <h1>
          Our Menu
        </h1>
        <div >
          
        </div>
      </div>


    </>
  )
}

export default Products