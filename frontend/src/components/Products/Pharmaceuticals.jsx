import React, { useState, useEffect } from "react";
import background from "../../assets/background1.jpg";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function Pharmaceuticals() {
  const industries = [
    "Pharmaceuticals",
    "Nutraceuticals",
    "Food & Beverages",
    "Personal Care & Cosmetics",
    "Veterinary & Animal Health",
  ];

  const categories = [
    "Active Pharmaceutical Ingredients (APIs)",
    "Pharma Excipients",
    "Mineral Salts",
    "Specialty Chemicals",
    "Amino Acids",
    "Fragrance & Flavor Chemicals",
  ];

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://mubychem.onrender.com/api/product?page=${currentPage}&limit=${productsPerPage}`
        );
        setProducts(response.data.data);
        setTotalPages(response.data.meta.totalPages); // Ensure you're setting totalPages correctly
        console.log("Fetched products:", response.data); // Check if the response is correct
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage]); // ✅ This will re-run the fetch on page change

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');`}
      </style>

      {/* Background Section */}
      <div className="bg-white p-6 md:p-12">
        <div
          className="relative h-[300px] bg-cover rounded-4xl overflow-hidden"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-left">
            <div>
              <h1 className="text-white text-5xl font-bold mb-4 pl-4">All Products</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Search Engine */}
      <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
        <div className="flex items-center w-full bg-white rounded-xl shadow-sm px-4 py-3 border border-gray-200">
          <FaSearch className="text-gray-400 mr-3 text-xl" />
          <input
            type="text"
            placeholder="Search By Product"
            className="w-full outline-none text-lg placeholder-gray-400"
          />
          <button className="bg-[#773135] text-white text-lg font-semibold px-6 py-2 rounded-xl ml-4">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
        {/* Filter Sidebar */}
        <div className="lg:col-span-1 space-y-6 sticky top-4 self-start h-fit ml-12">
          <div className="border p-4 rounded shadow-sm">
            <h2 className="font-bold text-lg mb-3">Industry</h2>
            <div className="space-y-2">
              {industries.map((item, idx) => (
                <label key={idx} className="flex items-center space-x-1.5">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm"> {item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="border p-4 rounded shadow-sm">
            <h2 className="font-bold text-lg mb-3">Category</h2>
            <div className="space-y-2">
              {categories.map((item, idx) => (
                <label key={idx} className="flex items-center space-x-1.5">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="whitespace-nowrap text-sm ">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product List */}
        <div
          className="lg:col-span-3 space-y-6 mr-13"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded p-6 shadow-sm grid grid-cols-1 md:grid-cols-5 gap-4 items-start"
            >
              <div className="md:col-span-4">
                <span className="bg-gray-300 text-gray-700 text-sm px-3 py-1 rounded-full inline-block mb-2">
                  {product.category}
                </span>
                <Link to={`/PharmaceuticalsDes/${product.commonId}`} key={product._id}>
                  <h3 className="text-2xl font-semibold text-[#773135] mb-2">{product.product_name}</h3>
                </Link>
                {product.therapeuticCategor && (
                  <p className="text-base mb-1">
                    <strong>Therapeutic Category:</strong> {product.therapeuticCategor}
                  </p>
                )}
                <p className="text-base">
                  <strong>CAS No:</strong> {product.cas_no}
                </p>
              </div>

              <div className="md:col-span-1 flex flex-col gap-3">
                <Link to={`/PharmaceuticalsDes/${product.commonId}`} key={product._id}>
                  <button className="bg-[#773135] text-white px-4 py-2 rounded cursor-pointer w-full">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mb-10">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded bg-white text-[#7b3931] border-[#7b3931] disabled:opacity-50"
            >
              Previous
            </button>

            <span className="text-[#7b3931] font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded bg-white text-[#7b3931] border-[#7b3931] disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pharmaceuticals;