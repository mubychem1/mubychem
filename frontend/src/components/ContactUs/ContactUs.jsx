import React from 'react';
import { motion } from "framer-motion";
import background from '../../assets/background.png';
import { Mail, MapPin, Phone, Calendar, ArrowUpRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../redux/slice/formSlice.js";  // Ensure path is correct
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const ContactUs = () => {
  const contactDetails = [
    {
      title: "Mail Us 24/7",
      details: ["no-reply@mubychem.com", "support@MubyChem.com"],
      icon: <Mail className="text-blue-500" size={32} />,
    },
    {
      title: "Our Location",
      details: ["Sandhrust road ", "Dongri  Mumbai  "],
      icon: <MapPin className="text-blue-500" size={32} />,
    },
    {
      title: "Call US 24/7",
      details: ["Phone: +001 236-895-4732", "Mobile: +9123 895-4732-236"],
      icon: <Phone className="text-blue-500" size={32} />,
    },
    {
      title: "Working Days",
      details: ["Mon to Fri - 09:00am To 06:00pm", "Saturday to Sunday - Closed"],
      icon: <Calendar className="text-blue-500" size={32} />,
    },
  ];

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.form);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Phone number must be exactly 10 digits").required("Phone number is required"),
    subject: Yup.string(),
    message: Yup.string(),
  });

  return (
    <>
      {/* -----------------Contact Us Banner --------------*/}
      <div className='bg-[#ecf2ff] '>
        <div className='relative h-[500px] bg-cover rounded-4xl overflow-hidden mx-4 md:mx-10' style={{ backgroundImage: `url(${background})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-left">
            <div>
              <h1 className="text-white text-5xl font-bold mb-4 pl-4 ">Contact Us</h1>
              <p className="text-white text-lg pl-5 ">XLEB &gt; CONTACT US</p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------Contact Information -------------------*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10 bg-[#ecf2ff] ">
        {contactDetails.map((contact, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative p-6 rounded-[30px] flex flex-col justify-between border border-gray-300 bg-[#e7eefc] h-[300px] shadow-sm transition-all duration-300 ease-in-out transform"
          >
            <h3 className="text-xl font-semibold text-gray-900">{contact.title}</h3>
            <div className="mt-2">
              {contact.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">{detail}</p>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="bg-[#f8faff] p-4 rounded-xl flex items-center justify-center ">
                {contact.icon}
              </div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute bottom-[-15px] right-[-15px] bg-white p-3 rounded-full cursor-pointer hover:bg-gray-100 transition"
              >
                <ArrowUpRight className="text-blue-500" size={20} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ---------------------- Contact Form Section ----------------- */}
      <div className="w-full min-h-screen flex items-center justify-center bg-[#ecf2ff] ">
        <div className="w-full max-w-8xl rounded-3xl flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-gray-900">Happy to Answer All Your Questions</h2>
            <p className="text-gray-600 mt-4">
              We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service.
            </p>
            <button className="mt-6 bg-[#7B3931] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700">
              More Details →
            </button>
          </div>

          {/* Right Side (Form) */}
          <div className="w-full md:w-1/0.5 p-6 bg-white rounded-4xl mr-6 ml-6">
            <h3 className="text-3xl font-bold text-gray-900 pt-7 ml-5" style={{ fontFamily: "Raleway, sans-serif" }}>
              Send a message to staff
            </h3>

            <p className="text-gray-500 text-sm mt-2 pt-2 pb-7 ml-5" style={{ fontFamily: "Raleway, sans-serif" }} >Your email address will not be published. Required fields are marked *</p>

            <Formik
              initialValues={{ name: "", email: "", phone: "", subject: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                dispatch(submitForm(values));
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form className="mt-6 space-y-4">
                  {/* Two Column Layout for Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-3/4 p-3 border rounded-full bg-white ml-5 "
                      />
                      <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1 ml-8" />
                    </div>
                    <div>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-3/4 p-3 border rounded-full bg-white ml-5 "
                      />
                      <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1 ml-8 " />
                    </div>
                  </div>

                  {/* Two Column Layout for Phone & Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        className="w-3/4 p-3 border rounded-full bg-white ml-5"
                      />
                      <ErrorMessage name="phone" component="p" className="text-red-500 text-sm mt-1 ml-8" />
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="w-3/4 p-3 border rounded-full bg-white ml-5"
                      />
                      <ErrorMessage name="subject" component="p" className="text-red-500 text-sm mt-1 ml-8" />
                    </div>
                  </div>

                  {/* Message Field */}
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    className="w-[670px] p-3 border rounded-3xl bg-white h-28 ml-5"
                  />

                  {/* Checkbox */}
                  <div className="flex items-center space-x-2 text-gray-500 text-sm ml-5">
                    <input type="checkbox" className="w-4 h-4 border-gray-400" />
                    <span>Save my name, email, and website in this browser for the next time I comment.</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-48 py-3 bg-white  text-black border border-black font-medium rounded-full hover:bg-[#7B3931] transition flex justify-center items-center gap-2 ml-5"
                  >
                    {isSubmitting ? "Submitting..." : "Get Cost Estimate →"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      {/*----------------- Map section --------------- */}
      <section className="py-8 px-6 bg-[#ecf2ff] flex justify-center  ">
        <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            className="w-full h-[600px] rounded-2xl border border-black "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.3316800082143!2d72.8368572751069!3d18.96095375557437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce39e004da3d%3A0xe68fe70feac03506!2sSandhurst%20Road!5e0!3m2!1sen!2sin!4v1741342335458!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
