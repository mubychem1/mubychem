import React, { useState, useEffect } from "react";
import background from "../../assets/background1.jpg";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function Pharmaceuticals() {
  const Dosage_Forms = [
    "Oral",
    "Parenteral",
    "Topical",
    "Transdermal",
    "Ophthalmic",
    "Otic",
    "Respiratory/Inhaled",
    "Rectal/Vaginal (Suppositories)"
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
    <div className="font-montserrat"> {/* Apply font-family to the main container */}
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
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto pt-0 py-10 px-6">
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

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 pb-10">
        {/* Sidebar - Industry & Category */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky top-6 self-start h-fit lg:ml-8">
          <div className="border p-4 rounded shadow-sm">
            <h2 className="font-bold text-lg mb-3">Dosage Forms</h2>
            <div className="space-y-2">
              {Dosage_Forms.map((item, idx) => (
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
        </aside>

        {/* Product List */}
        <main className="lg:col-span-8 space-y-6 lg:mr-7">
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
                    <div className="mb-2 flex flex-wrap gap-2">
                      {product.dosageForm?.split(',').map((form, i) => (
                        <span
                          key={i}
                          className="bg-gray-300 text-gray-700 text-xs sm:text-sm px-3 py-1 rounded-full inline-block"
                        >
                          {form.trim()}
                        </span>
                      ))}
                    </div>
                    <Link to={`/PharmaceuticalsDes/${product.commonId}`} key={product._id}>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#773135] mb-2 hover:underline">
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
                      <button className="bg-[#773135] text-white px-4 py-2 rounded cursor-pointer w-full text-sm sm:text-base hover:bg-[#5e272a]">
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
                  className="px-4 py-2 border rounded bg-white text-[#7b3931] border-[#7b3931] disabled:opacity-50 hover:bg-gray-100"
                >
                  Previous
                </button>

                <span className="text-[#7b3931] font-medium text-sm sm:text-base">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border rounded bg-white text-[#7b3931] border-[#7b3931] disabled:opacity-50 hover:bg-gray-100"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default Pharmaceuticals;