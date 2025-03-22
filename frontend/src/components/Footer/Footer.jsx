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
import footerPattern from "../../assets/footer_pattern.png";

const phoneNumber = "+1234567890";

const Footer = () => {
  return (
    <div className="bg-[#ecf2ff] m-h-full p-2">
      <div className="bg-[#737373]  text-white py-16 px-6 md:px-0 lg:px-12 rounded-t-3xl rounded-b-xl relative min-h-[490px] mt-0 bg-no-repeat" style={{
        backgroundImage: `url(${footerPattern})`,
        backgroundSize: "auto",
        backgroundPosition: "bottom left",
      }}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Left Section - Logo & Social Media */}
          <div className="space-y-6">
          <h3 className="text-xl mb-3 text-white font-bold font-[Open_Sans]"
                >
                  USEFUL LINKS
                </h3>
                <ul
                  className="text-lg gap-2 text-white "
                  style={{ fontFamily: "Open_Sans, sans-serif" }}
                >
                  <li>
                    <a
                      href="/"
                      className="hover:text-gray-400 cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="hover:text-gray-400  cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      About us
                    </a>
                  </li>
                 
                  {/* <li>
                    <a
                      href="/event"
                      className="hover:text-gray-400 cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      Vision
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="/event"
                      className="hover:text-gray-400  cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/career"
                      className="hover:text-gray-400  cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      Career
                    </a>
                  </li>
                </ul>
          </div>

          {/* Right Section - Footer Content */}
          <div className="w-full md:w-8/6 md:ml-[-210px]">
            {/* Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Useful Links */}
              

              {/* Working Time */}
              <div className="text-left">
                <div>
                  <h3
                    className="text-xl mb-3 text-white font-bold font-[Open_Sans]"
                  // style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    CATEGORIES
                  </h3>
                  <ul
                    className="text-lg grid grid-cols-2 gap-1 lg:grid-cols-2 text-white"
                    style={{ fontFamily: "Open_Sans, sans-serif" }}
                  >
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-400 cursor-pointer"
                        rel="noopener noreferrer"
                      >
                        Pharmaceuticals
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-400  cursor-pointer "
                        rel="noopener noreferrer"
                      >
                        Nutraceuticals
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-400  cursor-pointer"
                        rel="noopener noreferrer"
                      >
                        Speciality chemicals
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-400  cursor-pointer"
                        rel="noopener noreferrer"
                      >
                        Lab Chemicals
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-400  cursor-pointer"
                        rel="noopener noreferrer"
                      >
                        Analytical Reagent
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-400  cursor-pointer"
                        rel="noopener noreferrer"
                      >
                        Mineral Fortifiers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-400  cursor-pointer "
                        rel="noopener noreferrer"
                      >
                        Amino Acid
                      </a>
                    </li>
                    
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-400 cursor-pointer"
                        rel="noopener noreferrer"
                      >
                        Excipients
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-400  cursor-pointer"
                        rel="noopener noreferrer"
                      >
                        Food Additives
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-400  cursor-pointer"
                        rel="noopener noreferrer"
                      >
                        Other Products
                      </a>
                    </li>

                    {/* <li>
                    <a
                      href="/event"
                      className="hover:text-gray-400 cursor-pointer"
                      rel="noopener noreferrer"
                    >
                      Vision
                    </a>
                  </li> */}
                  
                  <li>
                      <a
                        href="#"
                        className="hover:text-gray-400 cursor-pointer"
                        rel="noopener noreferrer"
                      >
                        API/Intermediates
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="text-left">
                <h2
                  className="text-xl mb-3 text-white font-bold font-[Open_Sans]"
                // style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  CONTACT DETAILS
                </h2>
                <h4 className="text-lg mb-3 text-white font-bold font-[Open_Sans]">
                  MUBY CHEMICALS
                </h4>
                <p className="flex items-center space-x-2 text-white">
                  <FaEnvelope className="text-black" />
                  <a
                    href="mailto:info@mubychem.in"
                    className=" hover:text-gray-400 cursor-pointer"
                  >
                    info@mubychem.in
                  </a>
                </p>
                <p className="flex items-center space-x-2 text-white mt-2">
                  <FaPhone className="text-black" />
                  <span className="text-lg hover:text-gray-400"><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white text-black py-2 rounded-t-[20px] rounded-b-[8px] pr-7 pl-2 absolute inset-x-5 bottom-0 flex justify-center">
          <div className="max-w-7xl w-full px-4 sm:px-2 lg:px-8 flex flex-wrap items-center justify-between text-sm">
            <p className="text-center w-full sm:w-auto mb-2 sm:mb-0">
              Copyright &copy;
              <a href="#" className="text-[#7B3931] hover:underline font-bold"> Muby Chemicals </a>
              All Rights Reserved.
            </p>
            {/* <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 w-full sm:w-auto">
              <li>
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms And Condition</a>
              </li>
              <li>
                <a href="#" className="hover:underline">FAQ</a>
              </li>
            </ul> */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;