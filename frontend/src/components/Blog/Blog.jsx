import React, { useState } from "react";
import background from "../../assets/Blog1.jpg";
// import { useNavigate } from "react-router-dom";
import Page1 from "./Page1";
import { Link } from "react-router-dom";
import translations from "../translater/translations.js";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";


// const data = [
//   {
//     title: {
//       en: "Essential Amino Acid – Its Uses and Benefits for our Body.",
//       fr: "Essential Amino Acid – Its Uses and Benefits for our Body.",
//       ru: "Незаменимая аминокислота – ее применение и польза для нашего организма.",
//       ko: "필수 아미노산 – 우리 몸에 대한 용도 및 이점.",
//       es: "Aminoácidos esenciales: sus usos y beneficios para nuestro organismo.",
//       ar: "الأحماض الأمينية الأساسية - استخداماتها وفوائدها لجسمنا.",
//     },
//     description: {
//       en:      "Essential Amino Acids (EAAs) are the building blocks of proteins that our body cannot produce on its own. We must obtain them from our diet through protein-rich foods like meat, eggs, dairy, and plant-based sources like quinoa and soy.",
//       fr:      "Les acides aminés essentiels (AAE) sont les éléments constitutifs des protéines que notre corps ne peut produire lui-même. Nous devons les obtenir par l'alimentation, notamment par des aliments riches en protéines comme la viande, les œufs, les produits laitiers et les sources végétales comme le quinoa et le soja.",
//       ru:      "Незаменимые аминокислоты (EAA) являются строительными блоками белков, которые наш организм не может производить самостоятельно. Мы должны получать их из нашего рациона через богатые белком продукты, такие как мясо, яйца, молочные продукты, а также растительные источники, такие как киноа и соя.",
//       ko:      "필수 아미노산(EAA)은 우리 몸이 스스로 생성할 수 없는 단백질의 구성 요소입니다. 우리는 고기, 계란, 유제품, 그리고 퀴노아와 콩과 같은 식물성 식품과 같은 단백질이 풍부한 음식을 통해 필수 아미노산을 섭취해야 합니다.",
//       es:      "Los aminoácidos esenciales (AAE) son los componentes básicos de las proteínas que nuestro cuerpo no puede producir por sí solo. Debemos obtenerlos de nuestra dieta a través de alimentos ricos en proteínas como la carne, los huevos, los lácteos y fuentes vegetales como la quinoa y la soja.",
//       ar:      "الأحماض الأمينية الأساسية (EAAs) هي اللبنات الأساسية للبروتينات التي لا يستطيع جسمنا إنتاجها بمفرده. يجب أن نحصل عليها من نظامنا الغذائي من خلال الأطعمة الغنية بالبروتين مثل اللحوم والبيض ومنتجات الألبان، بالإضافة إلى المصادر النباتية مثل الكينوا والصويا.",
//     },
//     image:
//     "https://anmolchem.org/assets/images/blog/Untitled-2.psdessential-amino-acids-in.png",
//   },

//   // { title: "Chemical Research", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-02-770x570.jpg" },
//   // { title: "Pathology Testing", description: "Our clinical pathologists are available seven days a week to render diagnoses.", image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-03-770x570.jpg" },
// ];

const ITEMS_PER_PAGE = 9;

const Blog = () => {
  const language = useSelector((state) => state.language.language); // Get selected language from Redux
  const currentTranslations = translations[language] || translations.en; // Fallback to English
  const data = currentTranslations.data || [];
  const [currentPage, setCurrentPage] = useState(1);
  const dataT = currentTranslations.dataT || [];
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const indexOfLastItemT = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItemT = indexOfLastItemT - ITEMS_PER_PAGE;
  const currentItemsT = dataT.slice(indexOfFirstItemT, indexOfLastItemT);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <>
    <Helmet>
        <title>Blog - Mubychem Pvt. Ltd.</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Blog - Mubychem Pvt. Ltd.",
        "url": "https://www.mubychem.com/about",
        "mainEntity": {
          "@type": "Organization",
          "name": "Mubychem Pvt. Ltd.",
          "url": "https://www.mubychem.com", 
          "logo": "https://www.mubychem.com/logo.png",
          "description": "Mubychem Pvt. Ltd. is a reputed chemical manufacturing company in India, known for high-quality industrial and pharmaceutical chemicals.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street Address",
            "addressLocality": "City",
            "addressRegion": "State",
            "postalCode": "PIN Code",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "Customer Service"
          }
        }
      }
    `}
        </script>

      </Helmet>



      <div className="bg-[#fff] p-6 pb-1 sm:p-8 md:p-12">
        <div
          className="relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-[350px] bg-cover rounded-4xl overflow-hidden"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 md:px-8">
            <div style={{ fontFamily: "Montserrat, sans-serif" }}>
              <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 ">
                {currentTranslations.BLOGS}
              </h1>
              <p className="text-white text-base sm:text-lg md:text-lg">
                Muby Chem Private Limited
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
          {currentTranslations.Blogs}
        </h1>
      </div>

      <div className="bg-white px-4 py-8 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-3xl shadow-md hover:shadow-xl transition-all overflow-hidden h-auto flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              {/* <p className="text-[#7B3931] font-semibold text-sm mt-3">{item.category}</p> */}
              <h3 className="text-xl font-bold text-gray-800 mt-1">
                {item.title}
              </h3>
              <hr className="border-t border-gray-300 mt-2" />
              <p className="text-gray-600 mt-2 text-sm flex-grow">
                {item.description.split("<br>").map((line, index) => (
                  <span key={index}>
                    {line.trim()}
                    <br />
                  </span>
                ))}
              </p>
              {/* <div className="mt-4 flex justify-end">
                <button className="p-2 bg-[#7B3931] text-white rounded-full hover:bg-blue-700 transition-all">&#10140;</button>
              </div> */}

              {/* <div className="mt-4 ml-1 flex justify-start">
                <Link to="/Page1">
                  <button className="p-2 bg-[#7B3931] text-white rounded-full transition-all font-semibold cursor-pointer">
                    {currentTranslations.Readmore}
                  </button>
                </Link>
              </div> */}

              <div className="flex flex-col items-left justify-left  p-6">
                {/* Button to trigger modal */}
                <button
                  onClick={toggleModal}
                  className="bg-[#7B3931] hover:bg-[#5c2821] text-white font-semibold py-3 px-6 rounded-full transition duration-300"
                >
                  {currentTranslations.Readmore}
                </button>

                {/* Modal */}
                {isOpen && (
                  <div className="fixed inset-0  bg-opacity-10 flex items-center justify-center z-50">
                    <div className="bg-[#7B3931] border-5 border-[#000] text-white rounded-3xl p-8 w-full max-w-2xl relative">
                      <button
                        onClick={toggleModal}
                        className="absolute top-4 right-6 text-white text-2xl font-bold"
                      >
                        ×
                      </button>

                      <h2 className="text-3xl font-bold mb-2 text-center">
                        {currentTranslations.staff}{" "}
                      </h2>
                      <p className="text-center mb-6">
                        {currentTranslations.message}{" "}
                      </p>

                      <form className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                          <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 rounded-full border border-white bg-transparent placeholder-white focus:outline-none"
                          />
                          <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 rounded-full border border-white bg-transparent placeholder-white focus:outline-none"
                          />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                          <input
                            type="text"
                            placeholder="Phone"
                            className="w-full p-3 rounded-full border border-white bg-transparent placeholder-white focus:outline-none"
                          />
                          <input
                            type="text"
                            placeholder="Product"
                            className="w-full p-3 rounded-full border border-white bg-transparent placeholder-white focus:outline-none"
                          />
                        </div>
                        <textarea
                          rows="4"
                          placeholder="Message"
                          className="w-full p-3 rounded-2xl border border-white bg-transparent placeholder-white focus:outline-none"
                        ></textarea>
                        <div className="flex justify-center">
                          <button
                            type="submit"
                            className="bg-white text-[#7B3931] font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition"
                          >
                            {currentTranslations.submit}{" "}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <br />
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
          {currentTranslations.Blogs1}
        </h1>
      </div>

      <div className="bg-white px-4 py-8 flex justify-center">
        <div className="w-full h max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentItemsT.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-3xl shadow-md hover:shadow-xl transition-all overflow-hidden h-auto flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  {item.title}
                </h3>
                <hr className="border-t border-gray-300 mt-2" />
                <p className="text-gray-600 mt-2 text-sm flex-grow">
                  {item.description.split("<br>").map((line, idx) => (
                    <span key={idx}>
                      {line.trim()}
                      <br />
                    </span>
                  ))}
                </p>
                {/* <div className="mt-4 ml-1 flex justify-start">
                  
                    <button className="p-2 bg-[#7B3931] text-white rounded-full transition-all font-semibold cursor-pointer">
                      {currentTranslations.Readmore}
                    </button>
                  
                </div> */}

                <div className="flex flex-col items-left justify-left  p-6">
                  {/* Button to trigger modal */}
                  <button
                    onClick={toggleModal}
                    className="bg-[#7B3931] hover:bg-[#5c2821] text-white font-semibold py-3 px-6 rounded-full transition duration-300"
                  >
                    {currentTranslations.Readmore}
                  </button>

                  {/* Modal */}
                  {isOpen && (
                    <div className="fixed inset-0  bg-opacity-10 flex items-center justify-center z-50">
                      <div className="bg-[#7B3931] border-5 border-[#000] text-white rounded-3xl p-8 w-full max-w-2xl relative">
                        <button
                          onClick={toggleModal}
                          className="absolute top-4 right-6 text-white text-2xl font-bold"
                        >
                          ×
                        </button>

                        <h2 className="text-3xl font-bold mb-2 text-center">
                          {currentTranslations.staff}{" "}
                        </h2>
                        <p className="text-center mb-6">
                          {currentTranslations.message}{" "}
                        </p>

                        <form className="space-y-4">
                          <div className="flex flex-col md:flex-row gap-4">
                            <input
                              type="text"
                              placeholder="Name"
                              className="w-full p-3 rounded-full border border-white bg-transparent placeholder-white focus:outline-none"
                            />
                            <input
                              type="email"
                              placeholder="Email"
                              className="w-full p-3 rounded-full border border-white bg-transparent placeholder-white focus:outline-none"
                            />
                          </div>
                          <div className="flex flex-col md:flex-row gap-4">
                            <input
                              type="text"
                              placeholder="Phone"
                              className="w-full p-3 rounded-full border border-white bg-transparent placeholder-white focus:outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Product"
                              className="w-full p-3 rounded-full border border-white bg-transparent placeholder-white focus:outline-none"
                            />
                          </div>
                          <textarea
                            rows="4"
                            placeholder="Message"
                            className="w-full p-3 rounded-2xl border border-white bg-transparent placeholder-white focus:outline-none"
                          ></textarea>
                          <div className="flex justify-center">
                            <button
                              type="submit"
                              className="bg-white text-[#7B3931] font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition"
                            >
                              {currentTranslations.submit}{" "}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
