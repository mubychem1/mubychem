import React, { useState } from "react";
import background from "../../assets/carrerbg.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import registration from "../../assets/registration.png";
import { Dialog } from "@headlessui/react";
import career from "../../assets/career.png";
import translations from "../translater/translations.js";
import { useSelector } from "react-redux";
import { ChevronDown } from "lucide-react";
import microscopeImage from "../../assets/logo/gptw.png";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";


const Dropdown = ({ label, options, onSelect }) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="relative w-90">
      <label className="text-gray-700 text-sm block mb-1">{label}</label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center border-b-2 border-[#773135] py-2 cursor-pointer"
      >
        <span className="text-sm text-gray-700">
          {selected || `Select ${label}`}
        </span>
        <ChevronDown className="h-4 w-4 text-[#773135]" />
      </div>

      {isOpen && (
        <ul className="absolute bg-white z-10 mt-1 w-full rounded shadow border border-gray-200">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
                onSelect(option);
              }}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const JobCard = ({
  position,
  location,
  description,
  responsibility,
  qualification,
  experience,
  onOpen,
  onApply,
  buttonLabels = { jobDescription: "Job Description", applyNow: "Apply Now" },
}) => (
  <div className="bg-[#ecf2ff] rounded-2xl p-6 flex flex-col items-start w-full max-w-sm border border-gray-400 h-full">
    <div className="w-12 h-12 flex items-center justify-center rounded-full">
      <img src={registration} alt="Badge Icon" className="w-10 h-10" />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-900">{position}</h3>
    <p className="flex items-center text-gray-600 mt-2">
      <FaMapMarkerAlt className="mr-2" /> {location}
    </p>
    <div className="mt-4 flex justify-between w-full">
      <button
        onClick={() =>
          onOpen(position, description, responsibility, qualification, experience)
        }
        className="px-6 py-2 text-yellow-900 border rounded-lg cursor-pointer"
      >
        {buttonLabels.jobDescription}
      </button>
      <button
        onClick={() => onApply(position)}
        className="px-6 py-2 bg-[#7B3931] text-white rounded-lg hover:bg-gray-700 cursor-pointer"
      >
        {buttonLabels.applyNow}
      </button>
    </div>
  </div>
);

const Career = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState({
    position: "",
    description: "",
    responsibility: [],
    qualification: [],
    experience: "",
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });

  const [selectedBusinessUnit, setSelectedBusinessUnit] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const language = useSelector((state) => state.language.language);
  const currentTranslations = translations[language] || translations.en;
  const jobs = currentTranslations.jobs || [];

  const openModal = (
    position,
    description,
    responsibility,
    qualification,
    experience
  ) => {
    setSelectedJob({
      position,
      description,
      responsibility,
      qualification,
      experience,
    });
    setIsOpen(true);
  };

  const openForm = (position) => {
    setFormData({ ...formData, position });
    setIsFormOpen(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null);

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("resume", formData.resume);

    try {
      const response = await fetch("https://mubychem.onrender.com/api/apply", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      console.log("Server Response:", data);

      if (response.ok) {
        setSubmissionResult({ success: true, message: "Application submitted successfully!" });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          resume: null,
        });
        // setIsFormOpen(false); // Optional: Close form after successful submit
      } else {
        setSubmissionResult({ success: false, message: data.message || "Failed to submit application." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionResult({ success: false, message: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchBusinessUnit = selectedBusinessUnit ? job.position === selectedBusinessUnit : true;
    const matchLocation = selectedLocation ? job.location === selectedLocation : true;
    return matchBusinessUnit && matchLocation;
  });

  return (
    <>
    <Helmet>
        <title>Career - Mubychem Pvt. Ltd.</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Career - Mubychem Pvt. Ltd.",
        "url": "https://www.mubychem.com/about",
        "mainEntity": {
          "@type": "Organization",
          "name": "Mubychem Pvt. Ltd.",
          "url": "https://www.mubychem.com", 
          "logo": "https://www.mubychem.com/logo.png",
          "description": "Mubychem Pvt. Ltd. is a reputed chemical manufacturing company in India, known for high-quality industrial and pharmaceutical chemicals.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street Address",
            "addressLocality": "City",
            "addressRegion": "State",
            "postalCode": "PIN Code",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "Customer Service"
          }
        }
      }
    `}
        </script>

      </Helmet>


      <div className="bg-[#fff] p-6 pb-1 sm:p-8 md:p-12">
        <div
          className="relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-[350px] bg-cover rounded-4xl overflow-hidden"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 md:px-8">
            <div style={{ fontFamily: "Montserrat, sans-serif" }}>
              <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
                {currentTranslations.CAREER}
              </h1>
              <p className="text-white text-base sm:text-lg md:text-lg">
                Muby Chem Private Limited
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="p-10 pt-0 bg-[#fff]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {currentTranslations.heading1}
          </h2>
          <p className="text-xl text-gray-600 mt-2">
            {currentTranslations.heading}
          </p>
        </div>

        <br />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
    <div className="flex flex-col sm:flex-row gap-10">
      <Dropdown
        label="Business Unit"
        options={[
          "Marketing Manager at Muby Chem Private Limited",
          "SEO Executive at Muby Chem Private Limited",
          "Sr Accounts Executive at Muby Chem Private Limited",
          "Purchase Executive at Muby Chem Private Limited",
          "R & D Executive at Muby Chem Private Limited",
          "QC Head at Muby Chem Private Limited",
          "QA Asst Manager at Muby Chem Private Limited",
          "Web Developer at Muby Chem Private Limited",
          "HR Executive at Muby Chem Private Limited",
        ]}
        onSelect={(value) => setSelectedBusinessUnit(value)}
      />
      <Dropdown
        label="Location"
        options={["Mumbai", "Taloja and Ankleshwar", "Bangalore"]}
        onSelect={(value) => setSelectedLocation(value)}
      />
    </div>

    <motion.div animate={{ x: [0, 100, 0] }}>
      <img
        src={microscopeImage}
        alt="Lab Equipment"
        className="h-50 rounded-xl"
      />
    </motion.div>
  </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              {...job}
              onOpen={openModal}
              onApply={openForm}
            />
          ))}
        </div>
      </section>

      {/* Job Description Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-xl w-full z-10 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-[#7B3931] text-white rounded-lg hover:bg-[#7B3931] cursor-pointer">
              ✖
            </button>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedJob.position}</h3>
          <p className="text-gray-900">{selectedJob.description}</p>
          <h3 className="text-lg py-2">{currentTranslations.responsibilities}</h3>
          <ul className="text-gray-700 list-disc pl-5">
            {selectedJob.responsibility.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg py-2">{currentTranslations.qualifications}</h3>
          <ul className="text-gray-700 list-disc pl-5">
            {selectedJob.qualification.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg py-2">{currentTranslations.experience}</h3>
          <p className="text-gray-900">{selectedJob.experience}</p>
        </div>
      </Dialog>

      {/* Apply Now Modal */}
      <Dialog
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-xl w-full z-10 pb-10">
          <div className="flex justify-end">
            <button
              onClick={() => setIsFormOpen(false)}
              className="px-4 py-2 bg-[#7B3931] text-white rounded-lg hover:bg-[#7B3931] cursor-pointer"
            >
              ✖
            </button>
          </div>

          <img
            src={career} // Replace with your image URL
            alt="Job Application Banner"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />

          <h3 className="text-xl font-bold text-gray-900 mt-3 mb-5">
            Apply for {formData.position}
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full border border-gray-300 p-4 rounded-full bg-white"
                onChange={handleChange}
                value={formData.fullName}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-4 rounded-full bg-white"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full border border-gray-300 p-4 rounded-full bg-white"
                onChange={handleChange}
                value={formData.phone}
                required
              />
              <input
                type="text"
                name="position"
                placeholder="Position"
                className="w-full border border-gray-300 p-4 rounded-full bg-white"
                onChange={handleChange}
                value={formData.position}
                required
              />
            </div>
            <input
              type="file"
              name="resume"
              className="w-full p-2 border rounded-lg mb-3 cursor-pointer"
              onChange={handleFileChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#773135] text-white py-3 font-bold cursor-pointer rounded-md transition duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {submissionResult && (
              <div
                className={`mt-4 p-3 rounded-md text-center font-semibold ${submissionResult.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
              >
                {submissionResult.message}
              </div>
            )}

          </form>
        </div>
      </Dialog>
    </>
  );
};

export default Career;
