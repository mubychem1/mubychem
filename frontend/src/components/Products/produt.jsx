import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';


const produt = (props) => {
    return (
        <>
            <div className=' font-raleway w-full lg:w-1/4 p-3 rounded-lg bg-white'>
                <div>
                    <img className='rounded-xl border-1 border-[#7B3931]' src={props.img} alt=""></img>
                </div>
                <div className='p-2 mt-5 font-raleway'>
                    <div className='flex flex-row justify-between '>
                        <h3 className='font-raleway font-semibold text-xl text-[#7b3931]'>
                            {props.title}
                        </h3>
                        <h3 className=' font-raleway font-semibold text-xl'>
                            {props.value}
                        </h3>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='flex gap-2'>
                            {/* <button className='px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor
                        transition-all rounded-lg'>
                                Hot
                            </button> */}
                            {/* <button className='px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor
                        transition-all rounded-lg'>
                                Cold
                            </button> */}
                        </div>
                        <motion.button
                            className=" h-14 mt-4 px-6 py-3 text-[#001837] border border-[#001837] font-semibold rounded-full font-['Open_Sans',sans-serif] flex items-center gap-2 hover:bg-yellow-900 hover:text-white transition "
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Know More <FaArrowRight />
                        </motion.button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default produt