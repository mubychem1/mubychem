import React, { useEffect, useState } from 'react';
import axios from 'axios';
import background from '../../assets/background1.png';
import glp from "../../assets/certificate.png";
import { useParams } from 'react-router-dom';


const PharmaceuticalsDes = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {


        const response = await axios.get(`http://localhost:9000/api/productdes/${id}`);
        setProduct(response.data.data);
        console.log("aayush");

      } catch (error) {
        console.error('Error fetching product data:', error);
        console.log("radha");

      }
    };

    fetchProduct();
  }, [id]);
  if (!product) return <div>Loading...</div>


  return (
    <>

      {/* ------------ Baneer contain ----------- */}
      < div className='bg-white mt-10' >
        <div className='relative h-[500px] bg-cover rounded-4xl overflow-hidden md:mx-10 max-w-screen-xl mx-auto' style={{ backgroundImage: `url(${background})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center fontFamily: 'Poppins',sans-serif">
            <div>
              <h1 className="text-white text-8xl font-bold mb-4 pl-4">{product.name}</h1>
              <p className="text-[#773135] text-xl font-bold text-center">IP/BP/PH.EUR/USP/JP/FCC</p>
            </div>
          </div>
        </div>
      </div >

      {/* ---------- main contain ------- */}
      <div className='max-w-screen-2xl mx-auto bg-white p-8 pt-20 flex justify-between' style={{
        fontFamily: " 'Poppins',sans-serif"
      }}>
        <div className='w-full pl-6'>
          <table className='w-full text-gray-300'>
            <tbody>
              <tr className='border-b border-gray-200' >
                <td className='py-2 pr-2 '>
                  <span className='font-bold text-[#773135] text-[14px] '>Product Name:</span>
                  <span className='text-[20px] pl-44 text-[#773135]'>{product.name}</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2">
                  <span className="font-bold text-[#773135] text-[14px]" >CAS No:</span>
                  <span className="pl-54 text-[#1a1a1a] text-[14px]">{product.casNo}</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2">
                  <span className="font-bold text-[#773135] text-[14px]">Dosage Form:</span>
                  <span className="pl-45 text-[#1a1a1a] text-[14px]">{product.dosageForm}</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2">
                  <span className="font-bold text-[#773135] text-[14px]">Therapeutic Category:</span>
                  <span className="pl-31 text-[#1a1a1a] text-[14px]">{product.therapeuticCategory}</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2">
                  <span className="font-bold text-[#773135] text-[14px]">Regulatory Filing:</span>
                  <span className="pl-38 text-[#1a1a1a] text-[14px]">{product.regulatoryFiling}</span>
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <span className="font-bold text-[#773135] text-[14px]">Muby Product Status:</span>
                  <span className="pl-31 text-[#1a1a1a] text-[14px]">{product.productStatus}</span>
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <button
                    onClick={() => window.history.back()}
                    className="bg-[#7b3931] text-white font-bold py-2 px-4 rounded cursor-pointer mt-2">
                    BACK
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        {/* Right Side - Product Image (Pushed to Right) */}
        <div className="self-end pr-5 p-[30px]">
          <img
            src={product.img}
            alt="Milk Calcium Powder"
            className="w-[550px] h-[250px] rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>


      {/* --------------- Design ------------ */}
      <div className="flex items-center bg-white rounded-lg  md:mx-10 max-w-screen-2xl mx-auto min-h-[220px]">
        {/* Single Image Section */}
        <img
          src={glp} // Change src as needed
          alt="Certification"
          className="w-[1000px] h-auto border-4 border-white "
        />

        {/* Text & Button Section */}
        <div className="ml-6 text-2xl h-auto flex items-center text-[#773135]">

          {/* Certifications */}
          <span className="text-[#773135] font-semibold pt-4 "> Certifications </span>
        </div>
      </div>


    </>
  )
}

export default PharmaceuticalsDes