import React from 'react'
import background from '../../assets/background1.png';
import img from "../../assets/product1.png";
import glp from "../../assets/certificate.png";

const Simple = () => {
  return (
    <>
      {/*----------- Header Section ---------- */}
      <div className='bg-white mt-10'>
        <div className='relative h-[500px] bg-cover rounded-4xl overflow-hidden mx-4 md:mx-10 max-w-screen-xl mx-auto' style={{ backgroundImage: `url(${background})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center ">
            <div>
              <h1 className="text-white text-8xl font-bold mb-4 pl-4">ACACIA</h1>
              <p className="text-[#773135] text-xl font-bold text-center">IP/BP/PH.EUR/USP/JP/FCC</p>
            </div>
          </div>
        </div>
      </div>

      {/*---------- Description Section ------- */}
      <div className="max-w-screen-2xl mx-auto bg-white p-6">
        <div className="flex justify-between items-center">

          {/* Left Side - Product Details */}
          <div className="w-full pl-6">
            <table className="w-full text-gray-900">
              <tbody>
                {/* Product Name */}
                <tr className="border-b border-gray-300 ">
                  <td className="py-2 pr-2">
                    <span className="font-bold text-[#773135]">Product Name:</span>
                    <span className="text-2xl text-[#773135] ml-44">ACACIA</span>
                  </td>
                </tr>

                {/* CAS No. & HSN Code */}

                <tr className="border-b border-gray-300">
                  <td className="py-2">
                    <span className="font-bold text-[#773135]">CAS No:</span>
                    <span className=" pl-58">9000-01-5</span>
                  </td>
                </tr>


                {/* Shelf Life & Pharmaceutical Grade */}
                <tr className='border-b border-gray-300'>

                  <td className="py-2">
                    <span className="font-bold text-[#773135]">Dosage Form:</span>
                    <span className="pl-48">Oral
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 ">
                    <span className="font-bold text-[#773135]">Therapeutic Category:</span>
                    <span className="pl-32">Demulcent/anti-inflammatory, antibacterial</span>
                  </td></tr>
                <tr className='border-b border-gray-300'>
                  <td className="py-2 ">
                    <span className="font-bold text-[#773135]">Regulatory Filing/Technical Package:</span>
                    <span className="pl-5">DMF/ CEP/ COA / TDS / MSDS
                    </span>
                  </td></tr>
                <td className="py-2">
                  <span className="font-bold text-[#773135]">Muby Product Status:</span>
                  <span className="pl-33">Commercially Availablee
                  </span>
                </td>
              </tbody>
            </table>
          </div>

          {/* Right Side - Product Image (Pushed to Right) */}
          <div className="self-end pr-5 p-[30px]">
            <img
              src={img}
              alt="Milk Calcium Powder"
              className="w-[550px] h-[250px] rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* <div className='w-full flex flex-col md:flex-row items-start p-6 bg-white mx-4 md:mx-10 max-w-screen-xl mx-auto '>
            hello
          </div> */}

      {/* --------- Other Section --------- */}
      {/* <div className="bg-white rounded-lg w-full max-w-screen-xl mx-auto p-6">
        <div className="flex pl-2">
          <button className="px-4 py-2 bg-[#773135]  text-white font-semibold rounded-t-lg">Application</button> */}
      {/* <button className="px-4 py-2 bg-[#773135]  text-gray-600 font-semibold rounded-t-lg">SYNONYMS</button> */}
      {/* </div>
        <div className=" border border-black rounded-lg">
          <h2 className="text-xl text-[#773135] pl-5 pt-5"></h2> */}
      {/* <ul className="mt-2 space-y-2 text-gray-700 pl-5 pt-5 pb-5">
            <li className="flex items-start"><span className="text-[#773135]  pr-2">✦</span> DMF Support Available.</li>
            <li className="flex items-start"><span className="text-[#773135]  pr-2">✦</span> COA / TDS / MSDS.</li>
            <li className="flex items-start"><span className="text-[#773135]  pr-2">✦</span> Multi-Compendial.</li>
          </ul> */}
      {/* </div>
      </div> */}

      {/* --------------- Design ------------ */}
      <div className="flex items-center bg-white rounded-lg mx-4 md:mx-10 max-w-screen-2xl mx-auto min-h-[300px]">
        {/* Single Image Section */}
        <img
          src={glp} // Change src as needed
          alt="Certification"
          className="w-[1000px] h-30 border-4 border-white "
        />

        {/* Arrow Shape */}
        {/* <div className="w-9 h-9 bg-blue-500 transform rotate-45 ml-[-5px]"></div> */}

        {/* Text & Button Section */}
        <div className="ml-6 text-2xl h-auto flex items-center text-[#773135]">
          {/* Certifications */}
          <span className="text-[#773135] font-semibold pt-4 "> Certifications </span>
          {/* <button className="ml-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold rounded-lg shadow-md hover:opacity-90">
        REQUEST A QUOTE
      </button> */}
        </div>
      </div>


      {/* ---------description ---------  */}
      <div className="space-y-8 p-8">
        {/* Description  */}
        {/* <div className="bg-white p-8 rounded-lg w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-[#773135]">
            Description of ACACIA
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Acacia is a genus of trees and shrubs, primarily found in tropical and subtropical regions. Known for their resilience and adaptability, acacias thrive in arid climates and are commonly found in Africa, Australia, and parts of Asia. They belong to the Fabaceae family and often have small, feathery leaves and clusters of fragrant flowers, which can be yellow, white, or cream-colored.
            Acacia trees are culturally significant and ecologically valuable. Some species are used for their wood, which is prized for its strength, while others produce gum arabic, a key ingredient in food, pharmaceuticals, and cosmetics. Additionally, they play a vital role in restoring soil fertility due to their nitrogen-fixing properties.
          </p>
        </div> */}

        {/* ---------Application  ---------- */}
        <div className="bg-white p-8 rounded-lg w-full mx-auto font-sans">
          <h2 className="text-2xl font-bold mb-4 text-[#773135]">Application of ACACIA</h2>

          <div className="mb-4">
            <p className="font-bold text-base mb-2">
              &#x2756; Medicinal Uses:
            </p>
            <p className="text-sm">
              Acacia species are known for their therapeutic properties. They contain bioactive compounds like flavonoids, alkaloids, and phenolics, which have antibacterial, antifungal, antioxidant, and anticancer properties.

            </p>
          </div>

          <div className="mb-4">
            <p className="font-bold text-base mb-2">
              &#x2756;Pharmaceutical Applications:
            </p>
            <p className="text-sm">
              Gum Arabic, derived from Acacia seyal, is widely used in pharmaceuticals as a stabilizer and emulsifier.
            </p>
          </div>

          <div className="mb-4">
            <p className="font-bold text-base mb-2">
              &#x2756; Ecological Importance:
            </p>
            <p className="text-sm">
              Acacia trees play a significant role in soil conservation and are used in reforestation projects.
            </p>
          </div>

          <div className="mb-4">
            <p className="font-bold text-base mb-2">
              &#x2756; Traditional Uses:
            </p>
            <p className="text-sm">
              In many cultures, Acacia species are used in traditional medicine to treat various ailments.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Simple


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import background from '../../assets/background1.png';
// import glp from "../../assets/certificate.png";

// const Simple = () => {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get('http://localhost:9000/api/productdes');
//         setProduct(response.data.data[0]);
//         console.log("aayush");

//       } catch (error) {
//         console.error('Error fetching product data:', error);
//         console.log("radha");

//       }
//     };

//     fetchProduct();
//   }, []);
//   if (!product) return <div>Loading...</div>


//   return (
//     <>

//       {/* ------------ Baneer contain ----------- */}
//       < div className='bg-white mt-10' >
//         <div className='relative h-[500px] bg-cover rounded-4xl overflow-hidden md:mx-10 max-w-screen-xl mx-auto' style={{ backgroundImage: `url(${background})` }}>
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="absolute inset-0 flex items-center justify-center ">
//             <div>
//               <h1 className="text-white text-8xl font-bold mb-4 pl-4">{product.name}</h1>
//               <p className="text-[#773135] text-xl font-bold text-center">IP/BP/PH.EUR/USP/JP/FCC</p>
//             </div>
//           </div>
//         </div>
//       </div >

//       {/* ---------- main contain ------- */}
//       <div className='max-w-screen-2xl mx-auto bg-white p-6 flex justify-between'>
//         <div className='w-full pl-6'>
//           <table className='w-full text-gray-300'>
//             <tbody>
//               <tr className='border-b border-gray-900'>
//                 <td className='py-2 pr-2 '>
//                   <span className='font-bold text-[#773135]'>Product Name:</span>
//                   <span className='text-2xl text-[#773135]'>{product.name}</span>
//                 </td>
//               </tr>
//               <tr className="border-b border-gray-300">
//                 <td className="py-2">
//                   <span className="font-bold text-[#773135]">CAS No:</span>
//                   <span className="pl-58">{product.casNo}</span>
//                 </td>
//               </tr>
//               <tr className="border-b border-gray-300">
//                 <td className="py-2">
//                   <span className="font-bold text-[#773135]">Dosage Form:</span>
//                   <span className="pl-48">{product.dosageForm}</span>
//                 </td>
//               </tr>
//               <tr className="border-b border-gray-300">
//                 <td className="py-2">
//                   <span className="font-bold text-[#773135]">Therapeutic Category:</span>
//                   <span className="pl-32">{product.therapeuticCategory}</span>
//                 </td>
//               </tr>
//               <tr className="border-b border-gray-300">
//                 <td className="py-2">
//                   <span className="font-bold text-[#773135]">Regulatory Filing:</span>
//                   <span className="pl-5">{product.regulatoryFiling}</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2">
//                   <span className="font-bold text-[#773135]">Muby Product Status:</span>
//                   <span className="pl-33">{product.productStatus}</span>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Right Side - Product Image (Pushed to Right) */}
//         <div className="self-end pr-5 p-[30px]">
//           <img
//             src={product.img}
//             alt="Milk Calcium Powder"
//             className="w-[550px] h-[250px] rounded-lg shadow-md"
//           />
//         </div>
//       </div>


//       {/* --------------- Design ------------ */}
//       <div className="flex items-center bg-white rounded-lg  md:mx-10 max-w-screen-2xl mx-auto min-h-[300px]">
//         {/* Single Image Section */}
//         <img
//           src={glp} // Change src as needed
//           alt="Certification"
//           className="w-[1000px] h-30 border-4 border-white "
//         />

//         {/* Text & Button Section */}
//         <div className="ml-6 text-2xl h-auto flex items-center text-[#773135]">

//           {/* Certifications */}
//           <span className="text-[#773135] font-semibold pt-4 "> Certifications </span>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Simple


