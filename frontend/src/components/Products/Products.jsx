import React from 'react'
import cta from "../../assets/CTA.webp";
import { motion } from "framer-motion";
import img1 from "../../assets/product/product-img.png";
import product2 from "../../assets/product/Sucroferric-Oxyhydroxide-1.jpg.webp";
import Produt from './produt';


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
            <h1 className="text-white text-4xl md:text-5xl font-bold">All Products</h1>
            <p className="text-blue-200 mt-2 text-sm md:text-base">
              <span className="text-yellow-400">Muby Chem</span> &gt; PRODUCTS
            </p>
          </div>
        </motion.div>
      </motion.section>

   

      <div className='min-h-screen flex flex-col justify-center lg:px-10 px-5 bg-[#ecf2ff]'>
        <h1 className='font-[Open_Sans] font-raleway font-semibold text-center text-4xl mt-20 mb-8 '>
          Products
        </h1>
        <div className='flex flex-wrap pb-9 gap-8 justify-center'>
          <Produt img={product2} title="Product Name" />
          <Produt img={product2} title="Product Name" />
          <Produt img={product2} title="Product Name" />
          <Produt img={img1} title="Product Name" />
          <Produt img={img1} title="Product Name" />
          <Produt img={img1} title="Product Name" />
          <Produt img={img1} title="Product Name" />
          <Produt img={img1} title="Product Name" />
        </div>
      </div>


    </>
  )
}

export default Products