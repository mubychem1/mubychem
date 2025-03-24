import React, { useState } from 'react';
import background from '../../assets/background.png';

const data = [
  { category: "PATHOLOGY", title: "Elemental Analysis", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-770x570.jpg" },
  { category: "BIOSAFETY", title: "Chemical Research", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-02-770x570.jpg" },
  { category: "INCUBATOR", title: "Pathology Testing", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-03-770x570.jpg" },
  { category: "INCUBATOR", title: "Pathology Testing", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-03-770x570.jpg" },
  { category: "BIOSAFETY", title: "Chemical Research", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-02-770x570.jpg" },
  { category: "BIOSAFETY", title: "Chemical Research", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-02-770x570.jpg" },
  { category: "BIOSAFETY", title: "Chemical Research", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-02-770x570.jpg" },
  { category: "BIOSAFETY", title: "Chemical Research", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-02-770x570.jpg" },
  { category: "BIOSAFETY", title: "Chemical Research", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-02-770x570.jpg" },
  { category: "BIOSAFETY", title: "Chemical Research", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-02-770x570.jpg" },
];

const ITEMS_PER_PAGE = 9;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

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

      <div className="bg-[#ecf2ff] min-h-screen p-8 flex justify-center items-center flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentItems.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-3xl hover:shadow-xl transition-all overflow-hidden h-[500px] md:h-[550px] flex flex-col">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-xl mb-4" />
              <p className="text-[#7B3931] font-semibold text-sm mt-3">{item.category}</p>
              <h3 className="text-xl font-bold text-gray-800 mt-1">{item.title}</h3>
              <hr className="border-t border-gray-300 mt-2" />
              <p className="text-gray-600 mt-2 text-sm flex-grow">{item.description}</p>
              <div className="mt-4 flex justify-end">
                <button className="p-2 bg-[#7B3931] text-white rounded-full hover:bg-blue-700 transition-all">&#10140;</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-400' : 'bg-[#7B3931] text-white hover:bg-blue-700'}`}
            >
              Previous
            </button>
            <span className="text-lg font-semibold">Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-400' : 'bg-[#7B3931] text-white hover:bg-blue-700'}`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
