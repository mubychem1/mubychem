import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { title: "Elemental Analysis", icon: "\u269B", description: "Our clinical pathologists are available seven days a week..." },
  { title: "Chemical Research", icon: "\uD83E\uDDE0", description: "Our clinical pathologists are available seven days a week..." },
  { title: "Pathology Testing", icon: "\uD83C\uDF93", description: "Our clinical pathologists are available seven days a week..." },
  { title: "Artificial Intelligence", icon: "\u269B", description: "Our clinical pathologists are available seven days a week..." },
];

// const perks = [
//   {
//     icon: "/images/teamwork.svg",
//     title: "Teamwork",
//     description: "Our employees work in teams and share even the boldest ideas."
//   },
//   {
//     icon: "/images/ideas.svg",
//     title: "Room for New Ideas",
//     description: "We’re always ready to listen and discuss new initiatives."
//   },
//   {
//     icon: "/images/salary.svg",
//     title: "Competitive Salary",
//     description: "Get paid well for your skills! We offer competitive salary + benefits."
//   },
//   {
//     icon: "/images/development.svg",
//     title: "Personal Development",
//     description: "We encourage you to study and cover your expenses on courses."
//   }
// ];
const Career = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent(current > 0 ? current - 1 : services.length - 1);
  const nextSlide = () => setCurrent(current < services.length - 1 ? current + 1 : 0);
  return (
    <>
      <div className="relative w-full bg-[#0B1C3F] text-white p-10">
        <div className="text-center mb-6">
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm">OUR SERVICE</button>
          <h2 className="text-4xl font-semibold mt-4">Reliable & High Quality Service</h2>
        </div>
        <div className="overflow-hidden relative flex items-center">
          <motion.div
            className="flex space-x-6"
            animate={{ x: `-${current * 100}%` }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            {services.map((service, index) => (
              <div key={index} className="w-[300px] bg-[#11254D] p-6 rounded-2xl flex-shrink-0">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm opacity-75">{service.description}</p>
                <div className="mt-4">
                  <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    ➜
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
          <button onClick={prevSlide} className="bg-white p-2 rounded-full">
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <button onClick={nextSlide} className="bg-white p-2 rounded-full">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Career

// {/* <>
// <div className="bg-blue-600 text-white py-16 px-8 md:px-20 flex flex-col md:flex-row items-center gap-10">
//   {/* Left Content */}
//   <div className="md:w-1/2 text-center md:text-left">
//     <p className="text-blue-600 text-sm mb-2">- Hello and welcome -</p>
//     <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//       Start Your Career in <span className="text-blue-600">Outer Web</span>
//     </h1>
//     <p className="text-gray-300 mt-4 text-lg">We are the people who dream & do.</p>
//     <div className="mt-6 flex justify-center md:justify-start gap-4">
//       <button className="bg-blue-600 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
//         About us
//       </button>
//       <button className="border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black">
//         Vacancies
//       </button>
//     </div>
//     <p className="text-gray-400 text-sm mt-6">
//       <span className="font-semibold text-white">Hot vacancies :</span> UX Designer, JS Developer, iOS Developer, Product Manager
//     </p>
//   </div>
//   {/* Right Content - Images */}
//   <div className="md:w-1/2 grid grid-cols-2 gap-4">
//     <img src="/images/person.jpg" alt="Person" className="rounded-lg w-full" />
//     <img src="/images/office.jpg" alt="Office" className="rounded-lg w-full" />
//     <img src="/images/team.jpg" alt="Team" className="rounded-lg w-full col-span-2" />
//   </div>
// </div>


// <div className="bg-white text-black py-16 px-8 md:px-20 text-center">
//   <p className="text-blue-600  text-sm font-semibold">- Perks -</p>
//   <h2 className="text-3xl md:text-4xl font-bold mt-2">Main Reasons Why You Should Work Here</h2>
//   <p className="text-gray-500 mt-3 text-lg">
//     Being a part of Outer Web means enjoying every working day!
//   </p>

//   <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
//     {perks.map((perk, index) => (
//       <div key={index} className="text-center flex flex-col items-center">
//         <div className="bg-gray-100 p-4 rounded-full mb-4">
//           <img src={perk.icon} alt={perk.title} className="w-12 h-12" />
//         </div>
//         <h3 className="text-xl font-semibold">{perk.title}</h3>
//         <div className="w-10 h-1 bg-blue-600 my-2"></div>
//         <p className="text-gray-500 text-sm">{perk.description}</p>
//       </div>
//     ))}
//   </div>
// </div>


// <div className="bg-[#FAF8F1] py-16 px-8 md:px-20 flex flex-col md:flex-row items-center gap-10">
//   {/* Left Content */}
//   <div className="md:w-1/2">
//     <p className="text-blue-600 text-sm font-semibold">- Benefits -</p>
//     <h2 className="text-3xl md:text-4xl font-bold mt-2">Feel and Do Your Best</h2>
//     <p className="text-xl font-semibold text-gray-700 mt-2">
//       We really care about our employees.
//     </p>
//     <p className="text-gray-600 mt-4 text-lg">
//       Working in Outer Web, you get a range of benefits, resources, and expert guidance to help you prioritize your well-being and find a work-life balance. The main benefits include:
//     </p>
//     <ul className="mt-4 space-y-3 text-lg">
//       <li className="flex items-center gap-2">
//         ✅ <span className="font-semibold">Full healthcare coverage for you and your family;</span>
//       </li>
//       <li className="flex items-center gap-2">
//         ✅ <span className="font-semibold">Wellbeing reimbursement (up to $500 every month);</span>
//       </li>
//       <li className="flex items-center gap-2">
//         ✅ <span className="font-semibold">Home office budget to make your home workplace comfortable;</span>
//       </li>
//     </ul>
//     <p className="text-gray-600 mt-4 text-lg">
//       You also can get paid sick leaves, 28 vacation days per year, separate budgets on education, your hobbies, family time, and so on. Being a part of our team is beneficial and really exciting!
//     </p>
//     <button className="bg-blue-600 hover:bg-blue-600 text-white px-6 py-3 mt-6 rounded-lg font-semibold">
//       Learn More
//     </button>
//   </div>
//   {/* Right Image */}
//   <div className="md:w-1/2">
//     <img
//       src="/images/benefits.jpg"
//       alt="Employee working"
//       className="w-full rounded-lg"
//     />
//   </div>
// </div>



// <div className="bg-white text-center py-12 px-6 md:px-20">
//   <p className="text-blue-600 text-sm font-semibold">- Categories -</p>
//   <h2 className="text-3xl md:text-4xl font-bold mt-2">
//     Browse Vacancies by Category
//   </h2>
//   <p className="text-gray-500 mt-3 text-lg">
//     Are you passionate about doing your best work? We'd love to meet you!
//   </p>
// </div>
// </> */}