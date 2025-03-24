import React from "react";

const products = [
  {
    id: 1,
    name: "SUCOFERRIC OXYHYDROXIDE",
    category: "IRON",
    casNo: "1007207-67-2",
    image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    name: "IRON III HYDROXIDE POLYMALTOSE COMPLEX",
    category: "IRON",
    casNo: "53858-86-9",
    image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    name: "IRON ISOMALTOSIDE",
    category: "IRON",
    casNo: "1370654-58-2",
    hsnCode: "300490909",
    image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg", // Replace with actual image URL
  },
  {
    id: 4,
    name: "IRON ISOMALTOSIDE",
    category: "IRON",
    casNo: "1370654-58-2",
    hsnCode: "300490909",
    image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg", // Replace with actual image URL
  },
  {
    id: 5,
    name: "IRON ISOMALTOSIDE",
    category: "IRON",
    casNo: "1370654-58-2",
    hsnCode: "300490909",
    image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg", // Replace with actual image URL
  },
  {
    id: 6,
    name: "IRON ISOMALTOSIDE",
    category: "IRON",
    casNo: "1370654-58-2",
    hsnCode: "300490909",
    image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg", // Replace with actual image URL
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-95 p-4 h-125">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-68 object-cover rounded-md"
      />
      <div className="mt-4 text-center">
        <p className="text-gray-600 font-semibold mt-9">CATEGORY: {product.category}</p>
        <hr className="border-t border-gray-300 mt-1 " />
        <p className="text-gray-800 font-medium ">CAS No: {product.casNo}</p>
        <hr className="border-t border-gray-300 mt-1" />
        {product.hsnCode && (
          <>
            <p className="text-gray-800 font-medium">HSN Code: {product.hsnCode}</p>
            <hr className="border-t border-gray-300 mt-1" />
          </>
        )}
        <h2 className="mt-2 text-lg font-bold text-blue-600 border-b-2 border-blue-600 inline-block ">
          {product.name}
        </h2>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="bg-[#ecf2ff] flex flex-wrap justify-center gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;