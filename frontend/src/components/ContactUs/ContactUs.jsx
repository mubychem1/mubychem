import React from 'react';
import { motion } from "framer-motion";
import background from '../../assets/background.png';
import { Mail, MapPin, Phone, Calendar, ArrowUpRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../redux/slice/formSlice.js";
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
      <div className="bg-[#ecf2ff] py-10 px-10"> {/* Added outer background color */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative h-[400px] bg-cover rounded-3xl overflow-hidden mx-4 md:mx-10"
          style={{ backgroundImage: `url(${background})`, marginTop: "40px" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <h1 className="text-white text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-white text-lg">XLEB &gt; CONTACT US</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* -------------Contact Information -------------------*/}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10 bg-[#ecf2ff] mt-15 "
      >
        {contactDetails.map((contact, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl shadow-lg flex flex-col justify-between border border-gray-200 transition transform "
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
            {contact.details.map((detail, idx) => (
              <p key={idx} className="text-gray-600 text-sm">{detail}</p>
            ))}
            <div className="flex justify-between items-center mt-6">
              <div className="bg-blue-100 p-4 rounded-lg">{contact.icon}</div>
              <motion.div whileHover={{ scale: 1.2 }} className="bg-white p-3 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                <ArrowUpRight className="text-blue-500" size={20} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/*---------------------- Contact Form Section -----------------*/}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full min-h-screen flex items-center justify-center bg-[#ecf2ff] p-6"
      >
        <div className="w-full max-w-7xl rounded-3xl p-8 flex flex-col md:flex-row">
          {/* Left Side */}
          <motion.div variants={fadeInUp} className="w-full md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-gray-900">Happy to Answer All Your Questions</h2>
            <p className="text-gray-600 mt-4">
              We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700"
            >
              More Details →
            </motion.button>
          </motion.div>

          {/* Right Side (Form) */}
          <motion.div variants={fadeInUp} className="w-full md:w-1/2 p-6 bg-white rounded-xl">
            <h3 className="text-3xl font-bold text-gray-900">Send a message to staff</h3>
            <p className="text-gray-500 text-sm mt-2">Your email address will not be published. Required fields are marked *</p>

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
                        className="w-full p-3 border rounded-full bg-white"
                      />
                      <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-3 border rounded-full bg-white"
                      />
                      <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  {/* Two Column Layout for Phone & Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        className="w-full p-3 border rounded-full bg-white"
                      />
                      <ErrorMessage name="phone" component="p" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div>
                      <Field
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="w-full p-3 border rounded-full bg-white"
                      />
                      <ErrorMessage name="subject" component="p" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  {/* Message Field */}
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    className="w-full p-3 border rounded-2xl bg-white h-28"
                  />

                  {/* Checkbox */}
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <input type="checkbox" className="w-4 h-4 border-gray-400" />
                    <span>Save my name, email, and website in this browser for the next time I comment.</span>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? "Submitting..." : "Get Cost Estimate →"}
                  </motion.button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </motion.div>

    </>
  );
};

export default ContactUs;
