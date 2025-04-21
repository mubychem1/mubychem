// import React from "react";
// import background from '../../assets/productbg.jpg';
// import { Link } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: "SUCOFERRIC OXYHYDROXIDE",
//     category: "IRON",
//     casNo: "1007207-67-2",
//     image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg", // Replace with actual image URL
//   },
//   {
//     id: 2,
//     name: "IRON III HYDROXIDE POLYMALTOSE COMPLEX",
//     category: "IRON",
//     casNo: "53858-86-9",
//     image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg", // Replace with actual image URL
//   },
//   {
//     id: 3,
//     name: "IRON ISOMALTOSIDE",
//     category: "IRON",
//     casNo: "1370654-58-2",
//     hsnCode: "300490909",
//     image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg", // Replace with actual image URL
//   },
//   {
//     id: 4,
//     name: "IRON ISOMALTOSIDE",
//     category: "IRON",
//     casNo: "1370654-58-2",
//     hsnCode: "300490909",
//     image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg", // Replace with actual image URL
//   },
//   {
//     id: 5,
//     name: "IRON ISOMALTOSIDE",
//     category: "IRON",
//     casNo: "1370654-58-2",
//     hsnCode: "300490909",
//     image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg", // Replace with actual image URL
//   },
//   {
//     id: 6,
//     name: "IRON ISOMALTOSIDE",
//     category: "IRON",
//     casNo: "1370654-58-2",
//     hsnCode: "300490909",
//     image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg", // Replace with actual image URL
//   },
// ];

// const ProductCard = ({ product }) => {
//   const isSucoferric = product.name === "SUCOFERRIC OXYHYDROXIDE";

//   const cardContent = (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-95 p-4 h-125">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-68 object-cover rounded-md"
//       />
//       <div className="mt-4 text-center">
//         <p className="text-gray-600 font-semibold mt-9">CATEGORY: {product.category}</p>
//         <hr className="border-t border-gray-300 mt-1 " />
//         <p className="text-gray-800 font-medium ">CAS No: {product.casNo}</p>
//         <hr className="border-t border-gray-300 mt-1" />
//         {product.hsnCode && (
//           <>
//             <p className="text-gray-800 font-medium">HSN Code: {product.hsnCode}</p>
//             <hr className="border-t border-gray-300 mt-1" />
//           </>
//         )}
//         <h2 className="mt-2 text-lg font-bold text-blue-600 border-b-2 border-blue-600 inline-block ">
//           {product.name}
//         </h2>
//       </div>
//     </div>
//   );

//   return isSucoferric ? <Link to="/products/sucoferric-oxyhydroxide">{cardContent}</Link> : cardContent;
// };

// const Products = () => {
//   return (
//     <>
//       <div className="bg-[#ecf2ff] p-6 md:p-12">
//         <div
//           className="relative h-[500px] bg-cover rounded-4xl overflow-hidden "
//           style={{ backgroundImage: `url(${background})` }}
//         >
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="absolute inset-0 flex items-center justify-left">
//             <div>
//               <h1 className="text-white text-5xl font-bold mb-4 pl-4 ">
//                 Product
//               </h1>
//               <p className="text-white text-lg pl-5 ">Mubychem &gt; PRODUCT</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#ecf2ff] flex flex-wrap justify-center gap-6 p-6">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Products;


import React, { useState, useEffect } from "react";
import background from "../../assets/background.png";
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
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/product");
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <>
     

      {/* Background Section */}
      <div className="bg-white p-6 md:p-12">
        <div
          className="relative h-[350px] bg-cover rounded-4xl overflow-hidden"
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
          {/* Industry Filter */}
          <div className="border p-4 rounded shadow-sm">
            <h2 className="font-bold text-lg mb-3">Industry</h2>
            <div className="space-y-2">
              {industries.map((item, idx) => (
                <label key={idx} className="flex items-center space-x-1.5">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="border p-4 rounded shadow-sm">
            <h2 className="font-bold text-lg mb-3">Category</h2>
            <div className="space-y-2">
              {categories.map((item, idx) => (
                <label key={idx} className="flex items-center space-x-1.5">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="lg:col-span-3 space-y-6 mr-13">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="border rounded p-6 shadow-sm grid grid-cols-1 md:grid-cols-5 gap-4 items-start"
            >
              {/* Info Section */}
              <div className="md:col-span-4">
                <span className="bg-gray-300 text-gray-700 text-sm px-3 py-1 rounded-full inline-block mb-2">
                  {product.category}
                </span>
                <h3 className="text-2xl font-semibold text-[#773135] mb-2">{product.product_name}</h3>
                {product.therapeuticCategor && (
                  <p className="text-base mb-1">
                    <strong>Therapeutic Category:</strong> {product.therapeuticCategor}
                  </p>
                )}
                <p className="text-base">
                  <strong>CAS No:</strong> {product.cas_no}
                </p>
              </div>

              {/* Buttons */}
              <div className="md:col-span-1 flex flex-col gap-3">
                <Link to={`/PharmaceuticalsDes/${product.commonId}`} key={product._id}>
                  <button className="bg-[#773135] text-white px-4 py-2 rounded cursor-pointer w-full">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          ))}

          {/* Pagination Controls */}
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