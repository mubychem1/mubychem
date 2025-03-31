import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from '../../assets/logo-white.png'

const phoneNumber = "+912223770100";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#544522] text-gray-200 min-h-full p-2 rounded-t-3xl rounded-b-xl">
        <div className="container mx-auto py-14 px-6 min-h-[450px] pt-20">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
            {/* Logo & Description */}
            <div className="lg:col-span-4 col-span-12">
              <a href="/">
                <img className="h-20 sm:h-15" src= {logo} alt="logo" />
              </a>
              <p
                className="mt-6 text-gray-100"
                style={{ fontFamily: "Open_Sans, sans-serif" }}
              >
                We specialize in producing high-quality specialty chemicals and excipients for the pharmaceutical industry. Our products are known for their purity and effectiveness, supporting various industries worldwide.
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
                USEFUL LINKS
              </h5>
              <ul
                className="list-none mt-6 space-y-2"
                style={{ fontFamily: "Open_Sans, sans-serif" }}
              >
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-black transition-all duration-500 ease-in-out"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-100 hover:text-black transition-all duration-500 ease-in-out"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-100 hover:text-black transition-all duration-500 ease-in-out"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-100 hover:text-black transition-all duration-500 ease-in-out"
                  >
                    Product
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="lg:col-span-3 md:col-span-4 col-span-12">
              <h5 className="tracking-wide text-gray-100 font-bold text-center pr-8">
                CATEGORIES
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div>
                  <ul
                    className="list-none space-y-2 mt-6"
                    style={{ fontFamily: "Open_Sans, sans-serif" }}
                  >
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-all duration-500 ease-in-out"
                      >
                        Pharmaceuticals
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-all duration-500 ease-in-out"
                      >
                        Food Additives
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-all duration-500 ease-in-out"
                      >
                        Analytical Reagent
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-all duration-500 ease-in-out"
                      >
                        Amino Acid
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-all duration-500 ease-in-out"
                      >
                        Speciality Chemicals
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul
                    className="list-none space-y-2 mt-6"
                    style={{ fontFamily: "Open_Sans, sans-serif" }}
                  >
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-all duration-500 ease-in-out"
                      >
                        Nutraceuticals
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-all duration-500 ease-in-out"
                      >
                        API/Intermediates
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-all duration-500 ease-in-out"
                      >
                        Lab Chemicals
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-all duration-500 ease-in-out"
                      >
                        Mineral Fortifiers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-all duration-500 ease-in-out"
                      >
                        Excipients
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-all duration-500 ease-in-out"
                      >
                        Other Products
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-3 md:col-span-4 col-span-12 ml-3">
              <h5 className="tracking-wide text-gray-100 font-bold">
                CONTACT DETAILS
              </h5>
              <h3 className="pt-5 font-bold">Muby Chemicals</h3>
              <p className="flex items-center space-x-2 text-white pt-2">
                <FaEnvelope className="text-white" />
                <a
                  href="mailto:info@mubychem.in"
                  className="hover:text-black cursor-pointer"
                >
                  info@mubychem.in
                </a>
              </p>
              <p className="flex items-center space-x-2 text-white mt-2">
                <FaPhone className="text-white" />
                <span className="text-lg hover:text-black">
                  <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </span>
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
              Muby Chemicals{" "}
            </a>
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
