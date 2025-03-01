import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import logo1 from "../../assets/logo1.png";

const Footer = () => {
  return (
    <div className="bg-[#ecf2ff] min-h-screen p-1">
      <div className="bg-[#06102b]  text-white py-16 px-6 md:px-0 lg:px-12 rounded-[28px] relative min-h-[590px]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Logo & Social Media */}
          <div className="space-y-6 md:w-1/3 ml-[6px]">
            <div className="w-40">
              <img src={logo1} alt="Logo" className="w-full" />
            </div>
            <div className="flex space-x-6 text-2xl">
              <a
                href="https://www.facebook.com/mubychemicails1976"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
              </a>
              <a
                href="https://twitter.com/muby_chemicals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="hover:text-blue-400 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/company/muby-chemicals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/mubychemicalsgroups"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-blue-600 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Right Section - Footer Content */}
          <div className="w-full md:w-8/6 md:ml-[-210px]">
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4">
              <div class="py-5 "></div>
              <h3
                className="text-[30px]  leading-[50px] m-0 pr-[80px] font-['sans-serif'] text-white"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Subscribe to Our Newsletter
              </h3>
              <div className="w-full flex justify-center">
                <div className="flex flex-col sm:flex-row items-center bg-transparent p-0 w-full sm:max-w-[450px] space-y-3 sm:space-y-0">
                  {/* Email Input */}
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Enter Your Email Address"
                    className="w-full px-5 py-4 text-gray-700 bg-white outline-none rounded-full sm:rounded-l-full sm:rounded-r-none border border-gray-300 sm:border-none shadow-md"
                  />

                  {/* Subscribe Button */}
                  <button className="bg-blue-600 text-white px-5 py-2 rounded-full sm:rounded-l-none sm:rounded-r-full flex items-center justify-center text-sm font-semibold w-full sm:w-auto shadow-md transition duration-300 hover:bg-blue-700">
                    <span className=" elementor-button-text mr-5">
                      Subscribe Now
                    </span>
                    <IoIosArrowRoundForward className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
            <div class="pt-4 ..."></div>
            {/* Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Useful Links */}
              <div>
                <h3
                  className="text-lg  mb-3"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Useful Links
                </h3>
                <ul
                  className="grid grid-cols-2 gap-1  text-gray-400"
                  style={{ fontFamily: "Open_Sans, sans-serif" }}
                >
                  <li>
                    <a
                      href="Home"
                      className="hover:text-blue-600 cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="About us"
                      className="hover:text-blue-600 cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="Product"
                      className="hover:text-blue-600 cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="Vision"
                      className="hover:text-blue-600 cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      Vision
                    </a>
                  </li>
                  <li>
                    <a
                      href="Blog"
                      className="hover:text-blue-600 cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="Career"
                      className="hover:text-blue-600 cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      Career
                    </a>
                  </li>
                  <li>
                    <a
                      href="Events"
                      className="hover:text-blue-600 cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="Contact Us"
                      className="hover:text-blue-600 cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Working Time */}
              <div className="text-left">
                <h3
                  className="text-lg mb-4"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Working Time
                </h3>
                <p className="text-gray-400">Mon - Sat: 9.00am - 5.00pm</p>
                <p className="text-gray-400">Sunday Closed</p>
              </div>

              {/* Contact */}
              <div className="text-left">
                <h3
                  className="text-lg mb-3"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Say Hello
                </h3>
                <p className="flex items-center space-x-2 text-white">
                  <FaEnvelope className="text-blue-400 " />
                  <a
                    href="mailto:info@mubychem.in"
                    className=" hover:text-blue-600 cursor-pointer"
                  >
                    info@mubychem.in
                  </a>
                </p>
                <p className="flex items-center space-x-2 text-white mt-2">
                  <FaPhone className="text-blue-400" />
                  <span className="text-lg">+91-22-23770100</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white text-black py-4  rounded-t-[28px] rounded-b-[8px] pr-9 pl-9 w-[97%] absolute inset-x-5 bottom-0  shadow-md ">
          <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 sm:w-1/2 text-center md:text-left text-sm">
              <p>
                Copyright &copy; 2025{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                >
                  Muby Chemicals
                </a>{" "}
                All Rights Reserved.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <ul className="flex flex-col md:flex-row items-center gap-4 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
