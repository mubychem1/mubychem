import React from "react";
import { motion } from "framer-motion";
import background from "../../assets/contactbg.png";
import { Mail, MapPin, Phone, Calendar, ArrowUpRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../redux/slice/formSlice.js"; // Ensure path is correct
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
      link: "mailto:support@MubyChem.com",
    },
    {
      title: "Our Location",
      details: ["Sandhrust road ", "Dongri  Mumbai  "],
      icon: <MapPin className="text-blue-500" size={32} />,
      link: "https://www.google.com/maps?q=Sandhurst+Road+Dongri+Mumbai",
    },
    {
      title: "Call US 24/7",
      details: ["Phone: +91 222 377 0100", "Mobile: +91 222 377 0100"],
      icon: <Phone className="text-blue-500" size={32} />,
      link: "tel:+912223770100",
    },
    {
      title: "Working Days",
      details: [
        "Mon to Fri - 09:00am To 06:00pm",
        "Saturday to Sunday - Closed",
      ],
      icon: <Calendar className="text-blue-500" size={32} />,
      link: "#working-hours", // This could scroll to a section with more info
    },
  ];

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.form);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    subject: Yup.string(),
    message: Yup.string(),
  });

  return (
    <>
      {/* -----------------Contact Us Banner --------------*/}
      <div className="bg-white p-6 md:p-12">
        <div
          className="relative h-[500px] bg-cover rounded-4xl overflow-hidden "
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-left">
            <div>
              <h1 className="text-white text-5xl font-bold mb-4 pl-4 ">
                Contact Us
              </h1>
              <p className="text-white text-lg pl-5 ">Mubychem &gt; CONTACT US</p>
            </div>
          </div>
        </div>
      </div>
      {/* -------------Contact Information -------------------*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10 bg-white">
        {contactDetails.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target={contact.link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-[30px] flex flex-col justify-between border border-gray-300 bg-[#9d916c] h-[300px] shadow-sm transition-all duration-300 ease-in-out transform"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {contact.title}
              </h3>
              <div className="mt-2">
                {contact.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="bg-[#f8faff] p-4 rounded-xl flex items-center justify-center">
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
          </a>
        ))}
      </div>
      {/* ---------------------- Contact Form Section ----------------- */}
      <div className="w-full h-auto flex flex-col md:flex-row items-start justify-between bg-white px-4 md:px-6 lg:px-12 py-12 gap-y-6 md:gap-x-12">
        {/* Left Side */}
        <div className="w-full md:w-[50%] lg:w-[45%] text-center md:text-left flex-grow">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Happy to Answer All Your Questions
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            We carefully screen all of our cleaners, so you can rest assured
            that your home would receive the absolute highest quality of
            service.
          </p>
          <button className="mt-6 bg-[#7B3931] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 mx-auto md:mx-0">
            More Details →
          </button>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-[50%] lg:w-[45%] p-6 md:p-8 bg-white rounded-3xl shadow-lg max-w-[95%] md:max-w-[80%] lg:max-w-[60%] flex-grow">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Send a message to staff
          </h3>
          <p className="text-gray-500 text-sm text-center mt-2">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            }}
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
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-full bg-white"
                  />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-full bg-white"
                  />
                </div>

                {/* Two Column Layout for Phone & Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full p-3 border rounded-full bg-white"
                  />
                  <Field
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full p-3 border rounded-full bg-white"
                  />
                </div>

                {/* Message Field */}
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  className="w-full p-3 border rounded-3xl bg-white h-28"
                />

                {/* Checkbox */}
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <input type="checkbox" className="w-4 h-4 border-gray-400" />
                  <span>Save my name, email, and website for next time.</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-48 py-3 bg-white text-black border border-black font-medium rounded-full hover:bg-[#7B3931] transition flex justify-center items-center gap-2 mx-auto md:ml-5"
                >
                  {isSubmitting ? "Submitting..." : "Get Cost Estimate →"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/*----------------- Map section --------------- */}
      <section className="py-8 px-6 bg-white flex justify-center  ">
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