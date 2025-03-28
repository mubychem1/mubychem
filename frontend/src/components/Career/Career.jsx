import React, { useState } from 'react';
import background from '../../assets/background.png';
import { FaMapMarkerAlt } from "react-icons/fa";
import registration from '../../assets/registration.png';
import { Dialog } from "@headlessui/react";
import career from '../../assets/career.png'

const jobs = [
  {
    id: 1,
    title: "React Developer at MubyChem",
    location: "Sandhurst",
    color: "bg-[#7B3931]",
    description: "The Area Sales Manager is responsible for the sales and marketing of API, Speciality chemicals, and excipients within a designated geographical area. The ideal candidate will have a proven track record of success in the chemical industry, as well as strong leadership skills.",
    responsibility: ["Develop and execute sales plans to achieve revenue targets.", "Manage and motivate a team of sales representatives.", "Identify and develop new customers.", "Maintain and grow relationships with existing customers.", "Conduct market research and analysis.", "Represent the company at trade shows and industry events.", "Stay up-to-date on industry trends and regulations."],
    qualification: ["Bachelor's degree in business, marketing, or a related field.", "5+ years of experience in the chemical industry.", "Strong sales and marketing skills.", "Excellent communication and interpersonal skills.", "Ability to work independently and as part of a team", "Ability to travel"],
    experience: "Minimum 10 Years",
  },

  {
    id: 2,
    title: "Marketing Manager at MubyChem",
    location: "Sandhurst",
    color: "bg-[#7B3931]",
    description: "The Marketing Manager is responsible for the sales and marketing of API, Speciality chemicals, and excipients within a designated geographical area. The ideal candidate will have a proven track record of success in the chemical industry, as well as strong leadership skills.",
    responsibility: ["Primary key role as Sales, Marketing & Customer retention.", "To conduct regular follow-up of all the Prospective Clients through Phone Calls and Mails.", "To visit clients on a regular basis.", "Excellent in PPT presentation.", "Excellent in MIS preparation and circular timely.", "Must have Analytical Skills.", "Good command over English (Listening, Reading, Speaking)", "Excellent mail drafting skill.", "Should have Minimum 4 years’ experience in Pharmaceutical or Chemicals Industries.", "Coordination with other team members to create a good working atmosphere.", "Monitor market trends, analysis consumer markets activities to identify opportunities.", "Planning and implementing business strategies.", "Identifying key market opportunities", "Maintain a good relationship with both existing and prospective customers."],
    qualification: ["Bachelor's degree in business, marketing, or a related field.", "3+ years of experience in sales, preferably in the chemical industry.", "Strong understanding of the API, Specialty Chemicals and Excipients industry.", "Excellent communication and interpersonal skills.", "Ability to work independently and as part of a team.", "Strong customer service skills.", "Proficient in Microsoft Office Suite."],
    experience: " Minimum 8 Years",
  },

  {
    id: 3,
    title: "R & D Executive at MubyChem",
    location: "Sandhurst",
    color: "bg-[#7B3931]",
    description: "We are actively looking for credible team members in R&D who would be primarily responsible for:",
    responsibility: ["Identifying techno commercially attractive and non infringing route for identified for commercialization in time bound manner.", "Develop & standardize industrially feasible processes and also meet long term cost targets.", "Identify & develop new products.", "Maintain and grow relationships with existing customers.", "Prepare feasibility report, cost analysis report, monthly progress report and TDR", "Demonstrate/validate the lab scale process up to commercial scale", "Lead a team of scientist and chemists for new products / process development and improvement of the existing products", "Knowledge and understanding of synthetic methods, analytical methods and relevant products.", "Excellent skills in interpretation of analytical data from UV, IR, NMR, GC, GCMS & HPLC, LCMS, MS and so on.", "Well versed with GLP, GMP and IMS guidelines.", "Understanding of literature/ patents.", "Understanding and accomplishment of Customer requirements."],
    qualification: ["M.Sc. / Ph. D. with Organic Chemistry"],
    experience: "Minimum 5 Years years of relevant experience in R&D",
  },

  {
    id: 4,
    title: "SEO Executive at MubyChem",
    location: "Sandhurst",
    color: "bg-[#7B3931]",
    description: "We are looking for an SEO/SEM expert to manage all search engine optimization and marketing activities.",
    responsibility: ["Execute tests, collect and analyze data and results, identify trends and insights in order to achieve maximum ROI in paid search campaigns.", "Track, report, and analyze website analytics and PPC initiatives and campaigns.", "Manage campaign expenses, staying on budget, estimating monthly costs and reconciling discrepancies.", "Optimize copy and landing pages for search engine marketing", "Perform ongoing keyword discovery, expansion and optimization.", "Research and implement search engine optimization recommendations.", "Research and analyze competitor advertising links.", "Develop and implement link building strategy.", "Work with the development team to ensure SEO best practices are properly implemented on newly developed code.", "Work with editorial and marketing teams to drive SEO in content creation and content programming.", "Recommend changes to website architecture, content, linking and other factors to improve SEO positions for target keywords.", "Proven SEO experience", "Proven SEM experience managing PPC campaigns across Google, Yahoo and Bing.", "Solid understanding of performance marketing, conversion, and online customer acquisition.", "In-depth experience with website analytics tools (e.g., Google Analytics, Net Insight, Omniture, Web Trends).", "Experience with bid management tools (e.g., Click Equations, Marin, Kenshoo, Search Ignite).", "Experience with A/B and multivariate experiments", "Working knowledge of HTML, CSS, and JavaScript development and constraints", "Knowledge of ranking factors and search engine algorithms.", "Up-to-date with the latest trends and best practices in SEO and SEM.",],
    qualification: ["BS/MS degree in a quantitative, test-driven field."],
    experience: "E12-13 years of relevant experience in R & D,",
  },

  {
    id: 5,
    title: "Sr Accounts Executive at MubyChem",
    location: "Sandhurst",
    color: "bg-[#7B3931]",
    description: "We are seeking a highly competent Senior Accounts Executive to independently manage various accounting activities on a daily, monthly, quarterly, and annual basis. The ideal candidate will coordinate with internal and external stakeholders to ensure completion of annual audits and maintain accurate financial records. Key responsibilities include:",
    responsibility: ["Performing comprehensive accounting tasks, including but not limited to client payments, vouchers, bills, receipts, bank reconciliation, and reconciliation of sundry debtors & creditors.", "Handling all compliance activities proficiently, such as GST, TDS, PT, and Advance Tax.", "Reviewing closing entries in the system prior to preparing monthly financial reports.", "Analyzing and reporting on financial status, including income statement variances, and communicating results to management.", "Contributing to budget preparation and analysis.", "Identifying opportunities to improve systems and procedures and initiating corrective actions as necessary."],
    qualification: ["B.Com or M.Com"],
    experience: "4-5 years of work experience, preferably from a CA Firm.",
  },

  {
    id: 6,
    title: "Purchase Executive at MubyChem",
    location: "Sandhurst",
    color: "bg-[#7B3931]",
    description: "We are seeking a dynamic Sourcing Executive with a minimum of 1.5 years of experience in the Chemicals & Pharmaceuticals industries. The ideal candidate will be responsible for the preparation and processing of purchase orders, sourcing new vendors, and maintaining effective communication with local vendors and traders. Key responsibilities include:",
    responsibility: ["Identifying techno commercially attractive and non infringing route for identified for commercialization in time bound manner.", "Sourcing new vendors and evaluating their suitability for partnership.", "Following up with local vendors and traders to obtain competitive rates and samples of materials.", "Negotiating rates, quantities, and ensuring the quality of materials.", "Coordinating with suppliers and transporters to ensure timely delivery of materials."],
    qualification: ["Minimum 1.5 years of experience in sourcing, preferably in API, Excipients, or Chemicals.", "Good English communication and written skills.", "Strong sales and marketing skills.", "Proficiency in MS Office."],
    experience: "Minimum 3 Years",
  },

  {
    id: 7,
    title: "HR Executive at MubyChem",
    location: "Sandhurst",
    color: "bg-[#7B3931]",
    description: "We are seeking a dynamic and skilled Recruitment Specialist to join our team and facilitate end-to-end recruitment for open positions. The ideal candidate will possess knowledge of various job portals such as Naukri.com, Indeed, as well as proficiency in leveraging social media channels like Instagram, Facebook, etc., for sourcing top talent.",
    responsibility: ["Conduct end-to-end recruitment activities for open positions within the organization.", "Utilize job portals like Naukri.com, Indeed, and social media platforms to actively source potential candidates.", "Create engaging job postings and ensure their visibility across all relevant portals and social media platforms.", "Establish effective communication with potential candidates, providing them with a brief introduction to the company and job description.", "Coordinate with external consultancies, campuses, and colleges to gather alumni details for potential candidates", "Screen resumes, conduct initial screenings, and schedule interviews for candidates matching the required criteria.", "Provide real-time feedback to interviewed candidates and maintain ongoing communication throughout the recruitment process.", "Facilitate offer roll-outs, negotiate salaries, and ensure smooth closures for successful onboarding."],
    qualification: ["Bachelor's degree in Human Resources Management, Business Administration, or relevant field.", "Proven experience in end-to-end recruitment processes, preferably in a fast-paced environment.", "Strong familiarity with job portals such as Naukri.com, Indeed, and social media channels.", "Excellent communication skills with the ability to convey information effectively to candidates.", "Proficient in candidate sourcing, screening, and interview scheduling", "Negotiation skills and ability to manage offer roll-outs and closures effectively.", "Highly organized with attention to detail and ability to prioritize tasks efficiently."],
    experience: "Minimum 3 Years",
  },

  {
    id: 7,
    title: "QA Asst Manager at MubyChem",
    location: "Sandhurst",
    color: "bg-[#7B3931]",
    description: "We are seeking a dynamic and skilled Recruitment Specialist to join our team and facilitate end-to-end recruitment for open positions.",
    responsibility: ["QA Executive shall verify documents and facility as per existing procedures, cGMP and GLP in company premises.", "To issue the Batch Manufacturing Record, Equipment cleaning record, Logbooks, Analytical Report for raw material, finish product and packing material or any other documents.", "SOP preparation of different departments/ preparation of draft SOPs.", "Line Clearance activities for Production department before start of the process.", "To issue the Change control form, deviation form, Out of Specification form, Customer complaint form etc. as required from relevant dept.", "Review of Batch Manufacturing Record, Analytical reports/records and filling. After verification of all documents and release of finish product.", "To verify Pest control activities on daily basis and record.", "Monitoring of Temperature and Humidity of Finish goods store/ Packing & Blending Area and record.", "Sampling activity of Finish product, stability, retained sample, In–process and Rejected material.", "To prepare/Review BMR, MFR as per regulatory requirements.", "Distribution, retrieval and control of SOPs, documents/records of all department.", "To participate in internal audits, customer audit, regulatory inspection.", "To Attend Quality Review meeting as per schedule.", "To prepare documents & records and monitoring of activities as per SOPs.", "To prepare protocol/Report Technology Transfer documents and Activity.", "To ensure data integrity as per procedure.", "To review Production, QC, QA, Store, Engineering and EHS activity.", "Data storage and gathering and trending of quality-related data for preparation of Annual Product Review.", "To prepare approved vendor list and maintain vendor qualification.", "To send samples to external agency or lab for testing.", "Conduct traceability Activity.", "Preparation and maintain CAPA log.", "To ensure that deviations, product recall, return goods and customer Complaints, OOS, OOT by CAPA and Root Cause analysis are investigated, fill up of report and log the same.", "To verify of process validation, cleaning validation and equipment qualification and to prepare protocol and report.", "To verify Analytical Method validation or verification.", "To investigate Returned Material and maintain the record.", "To investigate Product complaint and maintain the record.", "Ensuring compliance of the systems used for maintaining the equipment and calibrating equipment/instruments/preparation of schedule.", "To prepare a schedule and conduct training on cGMP, GLP and evaluation of the training.", "Providing training to all concerned on cGMP and on job specific or based on needs identified.", "Any other assignment/work allocated by Head QA.", "To ensure disposal of waste is carried out as per procedure.", "To Support the head of department in the environmental management work and reporting to the head of Department regarding how the environmental management work is continuing.", "Investigation of deviation/incident related to Environment management with co-ordination with head of department."],
    qualification: ["BSC"],
    experience: "Minimum 7 Years",
  },

  {
    id: 8,
    title: "QC Head at MubyChem",
    location: "Taloja and Ankleshwar",
    color: "bg-[#7B3931]",
    description: "We are seeking a dynamic and skilled Recruitment Specialist to join our team and facilitate end-to-end recruitment for open positions.",
    responsibility: ["Quality Control department functions for assuring the quality of all the batches manufactured, at every stage of manufacturing/processing excipients and drug products.", "Sampling, inspection & testing as per specifications of Raw material for release or rejection & its documentation.", "Sampling, inspection & testing as per specifications of packaging material for release or rejection & its documentation.", "Sampling, inspection & testing as per specifications of in-process product for release or rejection for further processing or reprocessing & its documentation.", "Sampling, inspection & testing as per specifications of finished products for release or rejection for further processing or re-processing & its documentation.", "Release or rejection of every batch of Drug Products for distribution and sale.", "Stability chamber handling, Stability testing and evaluation of shelf-life of products as per the stability interval planner.", "To prepare or review of stability testing protocol and report and summary report.", "Microbiological analysis of raw material, finished products, water and environmental bio-burden monitoring.", "To review of monthly trend prepared for physicochemical and microbiological trend data and it’s complying with the predefined specifications.", "Analytical investigation for complaints and product recalls.", "Analytical support for evaluating the Change Control proposals & Systems.", "Out of specification investigations for laboratory results.", "Investigation of deviations in the analysis.", "Analysis of Returned products (salvage and disposal).", "Internal Quality System Audits and Quality Review.", "Analysis for Control of non-conforming products.", "Reference standards, working standards, solution preparations.", "To plan and manage all the activities of the Quality Control Department To assure the quality of all products manufactured by the Company.", "To co-ordinate with manufacturing department in controlling their process and products at every stage of manufacturing to meet the established specifications through testing, auditing and reporting.", "To co-ordinate for development of specifications, the analytical procedure in coordination with Quality Assurance Department and R&D.", "To review the adequacy and relevance of specifications & analytical procedures in coordination with the Quality Assurance Department and R&D.", "To be responsible for instruments qualification as per the guideline and prepare protocols and reports accordingly.", "To ensure that audit trail system are implemented including systems for data integrity and data security.", "To co-ordinate technical audits of the Quality Control Laboratory to determine the analytical Quality Systems are yielding the highest quality information and to ensure that the analytical instrumentation is functioning properly and calibration and servicing is as per schedule.", "To be responsible for glassware cleaning protocol and report, also establish of cleaning procedures.", "To be responsible for the Quality Control functions and records, which shall include:", "Maintenance of Quality Control records, Control samples of raw materials and drug products/excipient each batch manufactured.", "Records of release, quarantine or rejection of components and finished products, containers, closures and labels based on Quality Control test results.", "To suggest and organize training programs for the development of technical and administrative skills of all the employees to meet with cGLP regulations on the continuous basis, which shall be done by co-ordination with Plant and Quality Heads.", "To establish guidelines and procedures on cGMP and Good Laboratory Practice — Standard Operating Procedures of overall Quality Control Activities. Protocols related to Method / Process/ Cleaning/ Analytical Method Validation etc.", "To evaluate the Change Control suggestions for overall reviews of non-conformances, failure investigations, analyzing the Quality trends, investigations of market complaints, batch failure investigations, deviations, verifications of change control procedures, updating the specifications, test procedures, manufacturing processes etc.", "Validation of analytical test procedures, specifications, standard operating procedures (both pharmacopeial and In-house).", "To follow the reporting system as per the company procedure."],
    qualification: ["BSC"],
    experience: "Minimum 7 Years",
  },

];


const JobCard = ({ title, location, description, responsibility, qualification, experience, onOpen, onApply }) => (
  <div className="bg-[#ecf2ff] rounded-2xl p-6 flex flex-col items-start w-full max-w-sm border border-gray-400 h-full">
    <div className={`w-12 h-12 flex items-center justify-center rounded-full `}>
      <img src={registration} alt="Badge Icon" className="w-10 h-10" />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
    <p className="flex items-center text-gray-600 mt-2">
      <FaMapMarkerAlt className="mr-2" /> {location}
    </p>
    <div className="mt-4 flex justify-between w-full">
      <button onClick={() => onOpen(title, description, responsibility, qualification, experience)} className="px-6 py-2 text-yellow-900 border rounded-lg">
        Job Description
      </button>
      <button onClick={() => onApply(title)} className="px-6 py-2 bg-[#7B3931] text-white rounded-lg hover:bg-gray-700">
        Apply Now
      </button>
    </div>
  </div>
);

const Career = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState({ title: "", description: "", responsibility: [], qualification: [], experience: "" });
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", position: "", resume: null });

  const openModal = (title, description, responsibility, qualification, experience) => {
    setSelectedJob({ title, description, responsibility, qualification, experience });
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const applicationData = new FormData();
    applicationData.append("name", formData.name);
    applicationData.append("email", formData.email);
    applicationData.append("phone", formData.phone);
    applicationData.append("position", formData.position);
    applicationData.append("resume", formData.resume);

    console.log("Form Data Submitted:", Object.fromEntries(applicationData));

    setIsFormOpen(false);
  };

  return (
    <>
      <div className='bg-[#ecf2ff]'>
        <div
          className='relative h-[500px] bg-cover rounded-4xl overflow-hidden mx-4 md:mx-10'
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center pl-4">
            <div>
              <h1 className="text-white text-5xl font-bold mb-4">Career</h1>
              <p className="text-white text-lg">Mubychem &gt; Career</p>
            </div>
          </div>
        </div>
      </div>

      <section className="p-10 bg-[#ecf2ff] min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Find jobs for every industry and role.
          </h2>
          <p className="text-xl text-gray-600 mt-2">Your next career move starts here.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} onOpen={openModal} onApply={openForm} />
          ))}
        </div>
      </section>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-xl w-full z-10 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-[#7B3931] text-white rounded-lg hover:bg-[#7B3931]">✖</button>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedJob.title}</h3>
          <p className="text-gray-900">{selectedJob.description}</p>
          <h3 className="text-lg py-2">Responsibilities:</h3>
          <ul className="text-gray-700 list-disc pl-5">
            {selectedJob.responsibility.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <h3 className="text-lg py-2">Qualifications:</h3>
          <ul className="text-gray-700 list-disc pl-5">
            {selectedJob.qualification.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <h3 className="text-lg py-2">Experience:</h3>
          <p className="text-gray-900">{selectedJob.experience}</p>
        </div>
      </Dialog>

      <Dialog open={isFormOpen} onClose={() => setIsFormOpen(false)} className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-xl w-lg z-10 pb-10">
          <div className="flex justify-end">
            <button onClick={() => setIsFormOpen(false)} className="px-4 py-2 bg-[#7B3931] text-white rounded-lg hover:bg-[#7B3931]">✖</button>
          </div>
          <div className="">
            <img
              src={career}
              alt="Scientist working in lab"
              className=" h-1/2 "
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-3 mb-5">Apply for {formData.position}</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-3'>
              <input type="text" name="name" placeholder="Full Name" className="w-full border border-gray-300 p-5 rounded-full bg-white" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" className="w-full border border-gray-300 p-5 rounded-full bg-white" onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone" className="w-full border border-gray-300 p-5 rounded-full bg-white" onChange={handleChange} required />
              <select
                name="position"
                className="w-full border border-gray-300 p-5 rounded-full"
                value={formData.position}
                onChange={handleChange}
                required
              >
                <option value="" disabled >Select a position</option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.title}>{job.title}</option>
                ))}
              </select>
            </div>
            <input type="file" name="resume" className="w-full p-2 border rounded-lg mb-3" onChange={handleFileChange} required />
            <button type="submit" className="w-full bg-[#7B3931] text-white p-2 rounded-lg">Submit</button>
          </form>

        </div>
      </Dialog>
    </>
  );
};

export default Career;