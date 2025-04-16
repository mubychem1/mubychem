import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../assets/logo-white.png";
import translations from "../translater/translations.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const phoneNumber = "+912223770100";

const Footer = () => {
  const language = useSelector((state) => state.language.language); // Get selected language from Redux
  const currentTranslations = translations[language] || translations.en; // Fallback to English

  return (
    <>
      <footer className="bg-[#544522] text-gray-200 min-h-full p-2 rounded-t-3xl rounded-b-xl">
        <div className="container mx-auto py-14 px-6 min-h-[450px] pt-20">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
            {/* Logo & Description */}
            <div className="lg:col-span-4 col-span-12">
              <a href="/">
                <img className="h-20 sm:h-15" src={logo} alt="logo" />
              </a>
              <p
                className="mt-6 text-gray-100"
                style={{ fontFamily: "Open_Sans, sans-serif" }}
              >
                {currentTranslations.SPECIALTY_CHEMICALS}
              </p>
              <div className="flex pt-7 space-x-5">
                <FaFacebookF className="text-white" />
                <FaLinkedinIn className="text-white" />
                <FaInstagram className="text-white" />
              </div>
            </div>

            {/* Useful Links */}
            <div className="lg:col-span-2 md:col-span-4 col-span-12 ml-7">
              <h5 className="tracking-wide text-gray-100 font-bold">
                {currentTranslations.USEFUL_LINKS}
              </h5>
              <ul
                className="list-none mt-6 space-y-2"
                style={{ fontFamily: "Open_Sans, sans-serif" }}
              >
                {["HOME", "ABOUT", "CAREER", "PRODUCT"].map((key) => (
                  <li key={key}>
                    <Link
                      to={`/${key.toLowerCase()}`} // Dynamic route path
                      className="text-gray-100 hover:text-black transition-all duration-500 ease-in-out"
                    >
                      {currentTranslations[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="lg:col-span-3 md:col-span-4 col-span-12">
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
                      style={{ fontFamily: "Open_Sans, sans-serif" }}
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
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-3 md:col-span-4 col-span-12 ml-3">
              <h5 className="tracking-wide text-gray-100 font-bold">
                {currentTranslations.CONTACT_DETAILS}
              </h5>
              <h3 className="pt-5 font-bold">Muby Chem Private Limited</h3>
              <p className="flex items-center space-x-2 text-white pt-2">
                <FaEnvelope className="text-white" />
                <a
                  href="mailto:info@mubychemicals.com"
                  className="hover:text-black cursor-pointer"
                >
                  {currentTranslations.EMAIL}
                </a>
              </p>
              <p className="flex items-center space-x-2 text-white mt-2">
                <FaPhone className="text-white" />
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-lg hover:text-black"
                >
                  {phoneNumber}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 bg-white text-black py-2 rounded-t-[20px] rounded-b-[8px] px-6 flex flex-wrap items-center justify-center text-sm">
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