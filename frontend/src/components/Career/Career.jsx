import React, { useState } from "react";
import background from "../../assets/carrerbg.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import registration from "../../assets/registration.png";
import { Dialog } from "@headlessui/react";
import career from "../../assets/career.png";
import translations from "../translater/translations.js";
import { useSelector } from "react-redux";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ label, options }) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-60">
      <label className="text-gray-700 text-sm block mb-1">{label}</label>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center border-b-2 border-[#773135] py-2 cursor-pointer"
      >
        <span className="text-sm text-gray-700">
          {selected || `Select ${label} `}
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
  title,
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
    <div className={`w-12 h-12 flex items-center justify-center rounded-full `}>
      <img src={registration} alt="Badge Icon" className="w-10 h-10" />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
    <p className="flex items-center text-gray-600 mt-2">
      <FaMapMarkerAlt className="mr-2" /> {location}
    </p>
    <div className="mt-4 flex justify-between w-full">
      <button
        onClick={() =>
          onOpen(title, description, responsibility, qualification, experience)
        }
        className="px-6 py-2 text-yellow-900 border rounded-lg"
      >
        {buttonLabels.jobDescription}
      </button>
      <button
        onClick={() => onApply(title)}
        className="px-6 py-2 bg-[#7B3931] text-white rounded-lg hover:bg-gray-700"
      >
        {buttonLabels.applyNow}
      </button>
    </div>
  </div>
);

const Career = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState({
    title: "",
    description: "",
    responsibility: [],
    qualification: [],
    experience: "",
  });
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });
  const language = useSelector((state) => state.language.language); // Get selected language from Redux
  const currentTranslations = translations[language] || translations.en; // Fallback to English
  // const jobs = currentTranslations.jobs;
  const jobs = currentTranslations.jobs || [];

  const openModal = (
    title,
    description,
    responsibility,
    qualification,
    experience
  ) => {
    setSelectedJob({
      title,
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

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("resume", formData.resume);

    try {
      console.log("aayush");

      const response = await fetch("http://localhost:9000/api/apply", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      console.log("Server Response:", data);

      if (response.ok) {
        alert("Application submitted successfully!");
        setIsFormOpen(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          resume: null,
        });
      } else {
        console.log("hello");

        alert("Failed to submit application: " + data.message);
      }
    } catch (error) {
      console.log("apple");

      console.error("Error submitting form:", error);
      alert("An error occurred. Please check the console.");
    }
  };

  return (
    <>
      <div className="bg-[#fff] p-6 pb-1 sm:p-8 md:p-12">
      <div
          className="relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-[350px] bg-cover rounded-4xl overflow-hidden"
          style={{ backgroundImage:` url(${background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 md:px-8">
          <div style={{ fontFamily: "Montserrat, sans-serif" }}>
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 ">
          {currentTranslations.CAREER}
              </h1>
              <p className="text-white text-base sm:text-lg md:text-lg">Muby Chem Private Limited</p>
            </div>
          </div>
        </div>
      </div>


      <section className="p-10 pt-0 bg-[#fff] ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {currentTranslations.heading1}
          </h2>
          <p className="text-xl text-gray-600 mt-2">
            {currentTranslations.heading}
          </p>
        </div>
        <br />
        <div className="flex justify-center items-center gap-10">
          <Dropdown
            label="Business Unit"
            options={[
              "Sales & Marketing",
              "Business Development",
              "Purchase",
              "R&D",
              "QA / QC",
              " Regulatory Affairs",
              "HR",
            ]}
          />
          <Dropdown
            label="Location"
            options={["Mumbai", "Ankleshwar", "Bangalore"]}
          />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              {...job}
              onOpen={openModal}
              onApply={openForm}
            />
          ))}
        </div>
      </section>

      {/* ------- job Description ---------- */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-xl w-full z-10 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-[#7B3931] text-white rounded-lg hover:bg-[#7B3931]"
            >
              ✖
            </button>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {selectedJob.title}
          </h3>
          <p className="text-gray-900">{selectedJob.description}</p>
          <h3 className="text-lg py-2">
            {currentTranslations.responsibilities}
          </h3>
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

      {/* -------------- apply now --------- */}
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
              className="px-4 py-2 bg-[#7B3931] text-white rounded-lg hover:bg-[#7B3931]"
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
              {/* <select
                name="position"
                className="w-full border border-gray-300 p-4 rounded-full"
                value={formData.position}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a position
                </option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select> */}
            </div>
            <input
              type="file"
              name="resume"
              className="w-full p-2 border rounded-lg mb-3"
              onChange={handleFileChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#7B3931] text-white p-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default Career;
