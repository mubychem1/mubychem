import React from 'react'
import background from '../../assets/background.png'; 


const Career = () => {
  return (
    <>
    {/* -----------------Carrer Banner --------------*/}
          <div className='bg-[#ecf2ff] '>
            <div className='relative h-[500px] bg-cover rounded-4xl overflow-hidden mx-4 md:mx-10' style={{ backgroundImage: `url(${background})` }}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-left">
                <div>
                  <h1 className="text-white text-5xl font-bold mb-4 pl-4 ">Carrer</h1>
                  <p className="text-white text-lg pl-5 ">XLEB &gt; Carrer</p>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Career