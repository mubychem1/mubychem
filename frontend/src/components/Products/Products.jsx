// import React from "react";
// import background from '../../assets/productbg.jpg';


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
//   return (



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
// };

// const Products = () => {
//   return (
//     <>
//        <div className="bg-[#ecf2ff] p-6 md:p-12">
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


import background from '../../assets/background.png';

import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <img
          className="w-full h-40 object-cover"
          src={product.image || "https://flagcdn.com/w40/gb.png"}
          alt={product.name}
        />
        <div className="p-4">
          <p className="text-gray-700 text-sm font-semibold">CATEGORY: {product.category}</p>
          <p className="text-gray-700 text-sm">CAS No: {product.casNo}</p>
          {product.hsnCode && <p className="text-gray-700 text-sm">HSN Code: {product.hsnCode}</p>}
          <h2 className="text-blue-600 font-bold text-lg mt-2 hover:underline cursor-pointer">
            {product.name}
          </h2>
        </div>
      </div>
    </>
  );
};

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/product")
      .then((response) => {
        console.log("API Response:", response.data);
        if (Array.isArray(response.data.data)) {
          setProducts(response.data.data);  // Extracting the `data` array
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
       <div className='bg-[#ecf2ff]'>
        <div className='relative h-[500px] bg-cover rounded-4xl overflow-hidden mx-4 md:mx-10' style={{ backgroundImage: `url(${background})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-left">
            <div>
              <h1 className="text-white text-5xl font-bold mb-4 pl-4">Product</h1>
              <p className="text-white text-lg pl-5">Mubychem &gt; Product</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-blue-100 min-h-screen">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
