import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-[#06102b] text-white py-16 px-8 pt-29 md:px-12 m-3  lg:px-20 rounded-[28px] relative min-h-[550px]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section - Logo & Social Media */}
        <div className="space-y-6  md:w-1/3 ml-[6px] ">
          <div className="w-40">
            <img src={logo} alt="Logo" className="w-full" />
          </div>
          <div className="flex space-x-6 text-2xl ">
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
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            </a>
          </div>
        </div>
        {/* Right Section - Footer Content */}
        <div className="w-full md:w-8/6  md:ml-[-240px]">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-2">
            <div class="py-5 ..."></div>

            <h2 className="text-3xl font-bold mb-13 md:mb-5">
              Subscribe to Our Newsletter
            </h2>
            <div className="w-full flex justify-center">
              <div className="flex flex-col md:flex-row items-center bg-transparent p-0 w-full md:w-48/9 space-y-3 md:space-y-0">
                {/* Email Input */}
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Enter Your Email Address"
                  className="w-full px-6 py-4 text-gray-700 bg-white outline-none 
                     rounded-full md:rounded-l-full md:rounded-r-none 
                     border border-gray-300 md:border-none shadow-md"
                />

                {/* Subscribe Button */}
                <button
                  className="bg-blue-600 text-white px-8 py-2 rounded-full 
                           md:rounded-l-none md:rounded-r-full flex items-center 
                           justify-center text-sm font-semibold w-full md:w-auto 
                           shadow-md transition duration-300 hover:bg-blue-700"
                >
                  <span className="mr-2">Subscribe Now</span>
                  <IoIosArrowRoundForward className="text-xl" />
                </button>
              </div>
            </div>
          </div>
          
          <div class="pt-4 ..."></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
              <ul className="grid grid-cols-2 gap-1 text-gray-400">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Working Time */}
            <div className="text-left md:text-left">
              <h3 className="text-lg font-semibold mb-4">Working Time</h3>
              <p className="text-gray-400 ">Mon - Sat: 9.00am - 5.00pm</p>
              <p className="text-gray-400 ">Sunday Closed</p>
            </div>

            {/* Contact */}
            <div className="text-left md:text-left md:ml-5">
              <h3 className="text-lg font-semibold mb-3">Say Hello</h3>
              <p className="flex items-center space-x-2 text-gray-400">
                <FaEnvelope className="text-blue-400" />
                <a
                  href="mailto:info@mubychem.in"
                  className="hover:text-white underline"
                >
                  info@mubychem.in
                </a>
              </p>
              <p className="flex items-center justify-start md:justify-left space-x-2 text-gray-400 mt-2">
                <FaPhone className="text-blue-400" />
                <span className="text-lg ">+91-22-23770100</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;