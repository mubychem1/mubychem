import React from 'react';
import background from '../../assets/background.png';
import { FaMapMarkerAlt } from "react-icons/fa";
import registration from '../../assets/registration.png';

const jobs = [
  { id: 1, title: "React Developer at MubyChem", location: "Sandhurst", color: "bg-green-500" },
  { id: 2, title: "Motion Designer at MubyChem", location: "Sandhurst", color: "bg-yellow-500" },
  { id: 3, title: "Full Stack Designer at MubyChem", location: "Sandhurst", color: "bg-black" },
  { id: 4, title: "UX Designer at MubyChem", location: "Sandhurst", color: "bg-purple-500" },
  { id: 5, title: "Web Developer at MubyChem", location: "Sandhurst", color: "bg-red-500" },
  { id: 6, title: "Senior Designer at MubyChem", location: "Sandhurst", color: "bg-blue-500" },
];

const JobCard = ({ title, location, color }) => (
  <div className="bg-[#ecf2ff] rounded-2xl p-6 flex flex-col items-start w-full max-w-sm border border-gray-400 h-full">
    <div className={`w-12 h-12 flex items-center justify-center rounded-full `}>
      <img src={registration} alt="Badge Icon" className="w-10 h-10" />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
    <p className="flex items-center text-gray-600 mt-2">
      <FaMapMarkerAlt className="mr-2" /> {location}
    </p>
    <div className="mt-4 flex justify-between w-full">
      {/* Job Description Button */}
      <button className="px-6 py-2 text-yellow-900   ">
        Job Description
      </button>
      {/* Apply Now Button */}
      <button className="px-6 py-2 bg-[#7B3931] text-white rounded-lg hover:bg-gray-700">
        Apply Now
      </button>
    </div>
  </div>
);

const Career = () => {
  return (
    <>
      {/* Contact Us Banner */}
      <div className='bg-[#ecf2ff]'>
        <div
          className='relative h-[500px] bg-cover rounded-4xl overflow-hidden mx-4 md:mx-10'
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center pl-4">
            <div>
              <h1 className="text-white text-5xl font-bold mb-4">Career</h1>
              <p className="text-white text-lg">XLEB &gt; Career</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listing Section */}
      <section className="py-20 px-6 bg-[#ecf2ff] min-h-screen" style={{ fontFamily: "Raleway, sans-serif" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Find jobs for every industry and role.
          </h2>
          <p className="text-xl text-gray-600 mt-2">Your next career move starts here.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Find More Jobs →
          </a>
        </div>
      </section>
    </>
  );
};

export default Career;