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
  const [loading, setLoading] = useState(true);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://mubychem.onrender.com/api/product?page=${currentPage}&limit=${productsPerPage}`
        );
        setProducts(response.data.data);
        setTotalPages(response.data.meta.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

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
      <div className="bg-white p-4 sm:p-6 md:p-12">
        <div
          className="relative h-[250px] sm:h-[300px] md:h-[350px] bg-cover rounded-2xl overflow-hidden"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-start px-4">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              All Products
            </h1>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto p-4">
        <div className="flex items-center w-full bg-white rounded-xl shadow-sm px-4 py-3 border border-gray-200">
          <FaSearch className="text-gray-400 mr-3 text-xl" />
          <input
            type="text"
            placeholder="Search By Product"
            className="w-full outline-none text-base sm:text-lg placeholder-gray-400"
          />
          <button className="bg-[#773135] text-white text-sm sm:text-lg font-semibold px-4 sm:px-6 py-2 rounded-xl ml-2 sm:ml-4 mt-2 sm:mt-0">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 px-4 pb-10">
        {/* Sidebar - Industry & Category */}
        <div className="lg:col-span-4 space-y-6 lg:sticky top-4 self-start h-fit ml-0 lg:ml-10">
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
                  <span className="text-sm whitespace-nowrap">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product List */}
        <div
          className="lg:col-span-8 space-y-6 mr-0 lg:mr-10"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center text-gray-500 text-lg py-12">
              No products found.
            </div>
          ) : (
            <>
              {products.map((product, index) => (
                <div
                  key={index}
                  className="border rounded p-4 sm:p-6 shadow-sm grid grid-cols-1 md:grid-cols-5 gap-4 items-start"
                >
                  <div className="md:col-span-4">
                    <span className="bg-gray-300 text-gray-700 text-xs sm:text-sm px-3 py-1 rounded-full inline-block mb-2">
                      {product.category}
                    </span>
                    <Link to={`/PharmaceuticalsDes/${product.commonId}`} key={product._id}>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#773135] mb-2">
                        {product.product_name}
                      </h3>
                    </Link>
                    {product.therapeuticCategor && (
                      <p className="text-sm sm:text-base mb-1">
                        <strong>Therapeutic Category:</strong> {product.therapeuticCategor}
                      </p>
                    )}
                    <p className="text-sm sm:text-base">
                      <strong>CAS No:</strong> {product.cas_no}
                    </p>
                  </div>

                  <div className="md:col-span-1 flex flex-col gap-3">
                    <Link to={`/PharmaceuticalsDes/${product.commonId}`} key={product._id}>
                      <button className="bg-[#773135] text-white px-4 py-2 rounded cursor-pointer w-full text-sm sm:text-base">
                        More Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border rounded bg-white text-[#7b3931] border-[#7b3931] disabled:opacity-50"
                >
                  Previous
                </button>

                <span className="text-[#7b3931] font-medium text-sm sm:text-base">
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
            </>
          )}
        </div>
      </div>

    </>
  );
}

export default Pharmaceuticals;
