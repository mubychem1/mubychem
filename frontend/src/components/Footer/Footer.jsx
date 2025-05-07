import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logo-white.png";
import translations from "../translater/translations.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const phoneNumber = "022 23770100";

const Footer = () => {
  const language = useSelector((state) => state.language.language);
  const currentTranslations = translations[language] || translations.en;

  return (
    <>
      <footer className="bg-[#773135] text-gray-200 min-h-full p-2 rounded-t-3xl rounded-b-xl">
        <div className="container mx-auto py-5 px-4 sm:px-10 min-h-[350px] pt-7">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Logo & Description */}
            <div className="lg:col-span-4 col-span-12">
              <a href="/">
                <img className="h-16 sm:h-20" src={logo} alt="logo" />
              </a>
              <p className="mt-2 text-gray-100 text-sm sm:text-base">
                {currentTranslations.SPECIALTY_CHEMICALS}
              </p>
              <div className="flex pt-7 space-x-5">
                <FaLinkedinIn className="text-white text-[24px] sm:text-[30px]" />
                <FaYoutube className="text-white text-[24px] sm:text-[30px]" />
              </div>
            </div>

            {/* Useful Links */}
            <div className="lg:col-span-3 md:col-span-3 col-span-12 ml-3 sm:ml-7">
              <h5 className="tracking-wide text-gray-100 font-bold text-lg sm:text-xl">
                {currentTranslations.USEFUL_LINKS}
              </h5>
              <ul className="list-none mt-6 space-y-2">
                {["Home", "ABOUT", "AllProducts", "BLOGS", "CAREER"].map((key) => (
                  <li key={key}>
                    <Link
                      to={key === "Home" ? "/" : `/${key.toLowerCase()}`}
                      className="text-gray-100 transition-all duration-500 ease-in-out text-sm sm:text-base"
                    >
                      {currentTranslations[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-5 md:col-span-5 col-span-12 ml-2 sm:ml-3">
              <h5 className="tracking-wide text-gray-100 font-bold text-lg sm:text-xl">
                {currentTranslations.CONTACT_DETAILS}
              </h5>
              <h3 className="pt-6 font-bold text-base sm:text-lg">
                Muby Chem Private Limited
              </h3>
              <h3 className="pt-3 font-bold text-base sm:text-lg">
                {currentTranslations.CorporateOffice}
              </h3>
              <p className="flex items-center space-x-2 text-white pt-1 text-sm sm:text-base">
                {currentTranslations.CorporateOfficeAddress}
              </p>
              <h3 className="pt-3 font-bold text-base sm:text-lg">
                {currentTranslations.ManufacturingPlant}
              </h3>
              <p className="flex items-center space-x-2 text-white pt-1 text-sm sm:text-base">
                {currentTranslations.ManufacturingPlantAddress}
              </p>
              <p className="flex items-center space-x-2 text-white pt-3 text-sm sm:text-base">
                <FaEnvelope className="text-white" />
                <a href="mailto:info@mubychemicals.com" className="cursor-pointer">
                  {currentTranslations.EMAIL}
                </a>
              </p>
              <p className="flex items-center space-x-2 text-white mt-2 text-sm sm:text-base">
                <FaPhone className="text-white" />
                <a href={`tel:${phoneNumber}`} className="text-base">
                  {phoneNumber}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-3 bg-white text-black py-2 rounded-t-[20px] rounded-b-[8px] px-3 sm:px-6 flex flex-wrap items-center justify-center text-xs sm:text-sm">
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