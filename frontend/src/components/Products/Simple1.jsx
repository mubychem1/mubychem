
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products/acacia')
      .then(response => setProduct(response.data))
      .catch(err => console.error(err));
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <div className='bg-white mt-10'>
        <div className='relative h-[500px] bg-cover rounded-4xl overflow-hidden mx-4 md:mx-10 max-w-screen-xl mx-auto'
          style={{ backgroundImage: `url(${product.backgroundImage})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center ">
            <div>
              <h1 className="text-white text-8xl font-bold mb-4 pl-4">{product.productName}</h1>
              <p className="text-[#773135] text-xl font-bold text-center">IP/BP/PH.EUR/USP/JP/FCC</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto bg-white p-6 flex justify-between">
        <div className="w-full pl-6">
          <table className="w-full text-gray-900">
            <tbody>
              <tr className="border-b border-gray-300 ">
                <td className="py-2 pr-2">
                  <span className="font-bold text-[#773135]">Product Name:</span>
                  <span className="text-2xl text-[#773135] ml-44">{product.productName}</span>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2">
                  <span className="font-bold text-[#773135]">CAS No:</span>
                  <span className="pl-58">{product.casNo}</span>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2">
                  <span className="font-bold text-[#773135]">Dosage Form:</span>
                  <span className="pl-48">{product.dosageForm}</span>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2">
                  <span className="font-bold text-[#773135]">Therapeutic Category:</span>
                  <span className="pl-32">{product.therapeuticCategory}</span>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2">
                  <span className="font-bold text-[#773135]">Regulatory Filing:</span>
                  <span className="pl-5">{product.regulatoryFiling}</span>
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <span className="font-bold text-[#773135]">Muby Product Status:</span>
                  <span className="pl-33">{product.productStatus}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="self-end pr-5 p-[30px]">
          <img src={product.imageUrl} alt={product.productName} className="w-[550px] h-[250px] rounded-lg shadow-md" />
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-white p-8 rounded-lg w-full mx-auto font-sans">
        <h2 className="text-2xl font-bold mb-4 text-[#773135]">Application of {product.productName}</h2>

        {Object.entries(product.application).map(([key, value]) => (
          <div className="mb-4" key={key}>
            <p className="font-bold text-base mb-2">&#x2756; {key.replace(/([A-Z])/g, ' $1')}</p>
            <p className="text-sm">{value}</p>
          </div>
        ))}
      </div>

      {/* Certification Image */}
      <div className="flex items-center bg-white rounded-lg mx-4 md:mx-10 max-w-screen-2xl mx-auto min-h-[300px]">
        <img src={product.certificationImage} alt="Certification" className="w-[1000px] h-30 border-4 border-white" />
        <div className="ml-6 text-2xl h-auto flex items-center text-[#773135] font-semibold pt-4">
          Certifications
        </div>
      </div>
    </>
  )
}

export default ProductDetail;



// const mongoose = require('mongoose');

// const productDescriptionSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     medicinalUses: {
//         type: String,
//         required: true,
//     },
    // pharmaceuticalApplications: {
    //     type: String,
    //     required: true,
    // },
    // ecologicalImportance: {
    //     type: String,
    //     required: true,
    // },
    // traditionalUses: {
    //     type: String,
    //     required: true,
    // }
// });

// const ProductDescription = mongoose.model('ProductDescription', productDescriptionSchema);

// module.exports = ProductDescription;
// hello world about and this is very good and is very found of her 
// hello wold is very hard is going 