import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logo-white.png";
import translations from "../translater/translations.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const phoneNumber = "022 23770100";

const Footer = () => {
  const language = useSelector((state) => state.language.language); // Get selected language from Redux
  const currentTranslations = translations[language] || translations.en; // Fallback to English

  return (
    <>
      <footer className="bg-[#773135] text-gray-200 min-h-full p-2 rounded-t-3xl rounded-b-xl"  >
        <div className="container mx-auto py-5 px-10 min-h-[350px] pt-7">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
            {/* Logo & Description */}
            <div className="lg:col-span-4 col-span-12">
              <a href="/">
                <img className="h-20 sm:h-15" src={logo} alt="logo" />
              </a>
              <p
                className="mt-2 text-gray-100"
                 
              >
                {currentTranslations.SPECIALTY_CHEMICALS}
              </p>
              <div className="flex pt-7 space-x-5">
                <FaLinkedinIn className="text-white text-[30px]  " />
                <FaYoutube className="text-white text-[30px] " />
              </div>
            </div>

            {/* Useful Links */}
            <div className="lg:col-span-3 md:col-span-3 col-span-12 ml-7">
              <h5 className="tracking-wide text-gray-100 font-bold">
                {currentTranslations.USEFUL_LINKS}
              </h5>
              <ul
                className="list-none mt-6 space-y-2"
              >
                {["Home", "About", "Product", "Events", "Career", "Contact"].map((key) => (
                  <li key={key}>
                    <Link
                      to={`/${key.toLowerCase()}`} // Dynamic route path
                      className="text-gray-100 transition-all duration-500 ease-in-out"
                    >
                      {currentTranslations[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            {/* <div className="lg:col-span-3 md:col-span-4 col-span-12">
              <h5 className="tracking-wide text-gray-100 font-bold text-left pr-8">
                {currentTranslations.CATEGORIES}
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {[
                  [
                    "PHARMACEUTICALS",
                    "SPECIALITY_CHEMICALS",
                    "EXCIPIENTS",
                    "API_INTERMEDIATES",
                    "AMINO_ACID",
                  ],
                  [
                    "FINE CHEMICALS",
                    "ANALYTICAL_REAGENT",
                    "LAB_CHEMICALS",
                    "NUTRACEUTICALS",
                    "MINERAL_FORTIFIERS",
                    "FOOD_ADDITIVES",
                    "OTHER_PRODUCTS",
                  ],
                ].map((column, i) => (
                  <div key={i}>
                    <ul
                      className="list-none space-y-2 mt-6"
                        >
                      {column.map((key) => (
                        <li key={key}>
                          <a
                            href="#"
                            className="hover:text-black transition-all duration-500 ease-in-out"
                          >
                            {currentTranslations[key]}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Contact Details */}
            <div className="lg:col-span-5 md:col-span-5 col-span-12 ml-3">
              <h5 className="tracking-wide text-gray-100 font-bold">
                {currentTranslations.CONTACT_DETAILS}
              </h5>
              <h3 className="pt-6 font-bold">Muby Chem Private Limited</h3>
              <h3 className="pt-3 font-bold">Corporate Office:</h3>
              <p className="flex items-center space-x-2 text-white pt-1">S-8, Sarifa Mansion, 2nd Flank Road, Chinchbunder, Mandvi, Mumbai, Maharashtra 400009</p>
              <h3 className="pt-3 font-bold">Manufacturing Plant:</h3>
              <p className="flex items-center space-x-2 text-white pt-1">Plot No. 2900/46, 47, 162, 164, 164, 165, 166, 167 GIDC Ankleshwar, Bharuch, Gujarat 393002</p>
              <p className="flex items-center space-x-2 text-white pt-2">
                <FaEnvelope className="text-white" />
                <a
                  href="mailto:info@mubychemicals.com"
                  className=" cursor-pointer"
                >
                  {currentTranslations.EMAIL}
                </a>
              </p>
              <p className="flex items-center space-x-2 text-white mt-2">
                <FaPhone className="text-white" />
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-lg "
                >
                  {phoneNumber}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-3 bg-white text-black py-2 rounded-t-[20px] rounded-b-[8px] px-6 flex flex-wrap items-center justify-center text-sm">
          <p className="text-center w-full sm:w-auto mb-2 sm:mb-0">
            Copyright &copy;
            <a href="#" className="text-[#711d14] hover:underline font-bold">
              {" "}
              Muby Chem Private Limited{" "}
            </a>
            {currentTranslations.COPYRIGHT}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
