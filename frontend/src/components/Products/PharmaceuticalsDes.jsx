import React, { useEffect, useState } from 'react';
import axios from 'axios';
import background from '../../assets/background1.jpg';
import glp from "../../assets/certificate.png";
import { useParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const PharmaceuticalsDes = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    productName: '',
    companyName: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://mubychem.onrender.com/api/productdes/${id}`);
        setProduct(response.data.data);
        console.log("Fetched product :", response.data.data);

        // Set product name into form automatically
        setFormData((prevFormData) => ({
          ...prevFormData,
          productName: response.data?.data?.name || '',
        }));

      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const handleChange = (name) => (event) => {
    setFormData({ ...formData, [name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await axios.post('https://mubychem.onrender.com/api/productForm', formData);

      setSubmissionResult({
        success: true,
        message: 'Thank you for your message. We will get back to you soon!',
      });

      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        productName: '',
        companyName: '',
        message: '',
      });

    } catch (error) {
      console.error('Submission error:', error);

      const errorMessage =
        error.response?.data?.message || 'An unexpected error occurred. Please try again.';

      setSubmissionResult({
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      {/*----------- Banner Section ------------ */}
      <div className="bg-white mt-10">
        <div
          className="relative h-[350px] sm:h-[350px] md:h-[350px] bg-cover rounded-4xl overflow-hidden md:mx-10 max-w-screen-xl mx-auto"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-start ">
            <div className="px-4">
              <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-4">
                {product.name}
              </h1>
              <p className="text-white text-sm sm:text-lg md:text-xl font-bold text-left">
                IP/BP/PH.EUR/USP/JP/FCC
              </p>
            </div>
          </div>
        </div>
      </div>


      <button
        onClick={() => window.history.back()}
        className="bg-[#7b3931] text-white font-bold py-2 px-4 rounded cursor-pointer ml-12 sm:ml-8 lg:ml-12 xl:ml-12 mt-10"
      >
        Back To Products
      </button>

      <div className="py-5 p-12">
        <p className="text-lg text-gray-700 sm:text-base md:text-lg lg:text-xl text-justify">
          <strong>Muby Chem </strong> is a leading manufacturer and supplier of <strong>{product.name}</strong> <strong>(CAS No. {product.casNo})</strong>, offering high-purity [API/Excipient/Specialty Chemical]. As a <strong>USFDA-registered </strong> and <strong>GMP-certified </strong>company, Muby Chem supports customers with comprehensive documentation and ensures the highest standards in pharmaceutical manufacturing.
        </p>
      </div>

      {/* Product Info Table */}
      <div className="max-w-screen-2xl mx-auto bg-white p-4 pb-2 flex flex-col lg:flex-row justify-between ml-2" style={{ fontFamily: " 'Poppins',sans-serif" }}>
        <div className="w-full lg:w-1/2 pl-6">
          <table className="w-full text-gray-300">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-2">
                  <span className="font-bold text-[#773135] text-[14px]">Product Name:</span>
                  <span className="text-[20px] pl-4 sm:pl-8 lg:pl-44 text-[#773135]">{product.name}</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2">
                  <span className="font-bold text-[#773135] text-[14px]">CAS No:</span>
                  <span className="pl-4 sm:pl-8 lg:pl-54 text-[#1a1a1a] text-[14px]">{product.casNo}</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2">
                  <span className="font-bold text-[#773135] text-[14px]">Dosage Form:</span>
                  <span className="pl-4 sm:pl-8 lg:pl-45 text-[#1a1a1a] text-[14px]">{product.dosageForm}</span>
                </td>
              </tr>
              {product.therapeuticCategory && (
                <tr className="border-b border-gray-200">
                  <td className="py-2">
                    <span className="font-bold text-[#773135] text-[14px]">Therapeutic Category:</span>
                    <span className="pl-4 sm:pl-8 lg:pl-31 text-[#1a1a1a] text-[14px]">{product.therapeuticCategory}</span>
                  </td>
                </tr>
              )}
              {product.regulatoryFiling && (
                <tr className="border-b border-gray-200">
                  <td className="py-2">
                    <span className="font-bold text-[#773135] text-[14px]">Regulatory Filing:</span>
                    <span className="pl-4 sm:pl-8 lg:pl-31 text-[#1a1a1a] text-[14px]">{product.regulatoryFiling}</span>
                  </td>
                </tr>
              )}
              <tr>
                <td className="py-2">
                  <span className="font-bold text-[#773135] text-[14px]">Muby Product Status:</span>
                  <span className="pl-4 sm:pl-8 lg:pl-31 text-[#1a1a1a] text-[14px]">{product.productStatus}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center h-48 lg:h-64 pr-28">
          <div>
            <img
              src={product.img}
              alt={product.name}
              className="sm:w-[250px] lg:w-[300px] h-auto rounded-lg"
            />
          </div>
        </div>

        {/* <div className="self-end px-4 mt-5 lg:mt-0 max-w-[500px] mx-auto">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div> */}
      </div>


     {/* Description & Contact Form */}
     <div className="min-h-screen bg-white flex flex-col lg:flex-row px-4 lg:px-20 py-12 gap-12">
        {/* Left Section - Description */}
        <div className="lg:w-1/2 text-gray-800 space-y-10 -ml-2 lg:-ml-6">
          {/* <div>
            <h2 className="text-4xl font-semibold text-[#773135] mb-4">Mechanism Of Action</h2>
            <p className="text-justify">{product.mechanismOfAction}</p>
          </div> */}
          <div>
            <h2 className="text-4xl font-semibold text-[#773135] mb-4">Indication</h2>
            <ul className="list-disc pl-5 space-y-2">
              {product.indication?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-semibold text-[#773135] mb-4">Mechanism Of Action</h2>
            <ul className="list-disc pl-5 space-y-2">
              {Array.isArray(product.mechanismOfAction) ? (
                product.mechanismOfAction.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>No data available</li>
              )}
            </ul>
          </div>



          <div>
            <h2 className="text-4xl font-semibold text-[#773135] mb-4">Muby Chem Expertise</h2>
            <p className="text-justify">
              Headquartered in Mumbai, India, Muby Chem is one of the leading manufacturers and suppliers globally of excipients, including Acacia. Muby Chem’s excipient and ingredient business is a preferred partner for pharmaceutical companies across the US, Europe, Brazil, Latin America, Japan, China, Korea, the Middle East, and other emerging markets.
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:w-1/2 bg-white shadow-xl rounded-xl p-8 border relative lg:left-10">
          <h2 className="text-3xl font-bold text-center text-[#773135] mb-8">Contact Us</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Name *"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#773135]"
                value={formData.fullName}
                onChange={handleChange('fullName')}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Id *"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#773135]"
                value={formData.email}
                onChange={handleChange('email')}
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Mobile No."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#773135]"
                value={formData.mobile}
                onChange={handleChange('mobile')}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#773135]"
                value={formData.companyName}
                onChange={handleChange('companyName')}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Product Name"
                value={formData.productName}
                onChange={handleChange('productName')}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#773135]"
              />
            </div>
            <div>
              <textarea
                placeholder="Message *"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#773135]"
                value={formData.message}
                onChange={handleChange('message')}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#773135] text-white py-3 font-bold cursor-pointer rounded-md transition duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            {submissionResult && (
              <p className={submissionResult.success ? 'text-green-500' : 'text-red-500'}>
                {submissionResult.message}
              </p>
            )}
          </form>
        </div>
      </div>

    </>
  );
};

export default PharmaceuticalsDes;
