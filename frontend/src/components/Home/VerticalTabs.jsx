// import React, { useState } from 'react';
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import { motion } from 'framer-motion';
// import vision from "../../assets/vision.png";
// import mission from "../../assets/mission.png";
// import quality from "../../assets/quality.png";
// import value from "../../assets/value.png";
// import excellance from "../../assets/Excellence.png"

// const VerticalTabs = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabs = [
//     "Our Vision",
//     "Our Mission",
//     "Our Quality",
//     "Values",
//     "Excellence",
//   ];

//   const content = [
//     <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">

//       {/* Image Section */}
//       <motion.div
//         className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img
//           src={vision}
//           alt="Vision"
//           className="rounded-3xl w-full max-w-sm"
//         />
//       </motion.div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 px-6">
//         <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: "Graphik" }}>
//           Our Vision
//         </h3>
//         <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik",
//           }
//           }>
//           Our vision is to contribute to a healthier, more sustainable future by advancing pharmaceuticals, nutraceuticals, specialty chemicals, and food additives that promote better health, improve quality of life, and foster environmental responsibility.
//         </p>

//         <ul className="mt-4 space-y-2" style={{fontFamily: "Graphik" }}>
//           {[
//             "Access Expert Advice For A Thriving Life",
//             "Benefits Of Health Conscious Living",
//             "Benefits Of Proactive Health Management",
//             "Countless Benefits Of Prioritizing Health",
//           ].map((benefit, index) => (
//             <li key={index} className="flex items-center text-gray-900">
//               <span className="text-yellow-900 text-lg">&#10003;</span>
//               <span className="ml-2">{benefit}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>,

//     <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">

//       {/* Image Section */}
//       <motion.div
//         className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img
//           src={mission}
//           alt="Mission"
//           className="rounded-3xl w-full max-w-sm"
//         />
//       </motion.div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 px-6">
//         <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: "Graphik" }}>
//           Our Mission
//         </h3>
//         <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik",
//           }
//           }>
//           Our mission is to be the partner of choice for businesses worldwide, offering products and services that drive success, support innovation, and help improve the quality of life for people across the globe.
//         </p>
//         <ul className="mt-4 space-y-2" style={{fontFamily: "Graphik" }}>
//           {[
//             "Access Expert Advice For A Thriving Life",
//             "Benefits Of Health Conscious Living",
//             "Benefits Of Proactive Health Management",
//             "Countless Benefits Of Prioritizing Health",
//           ].map((benefit, index) => (
//             <li key={index} className="flex items-center text-gray-900">
//               <span className="text-yellow-900 text-lg">&#10003;</span>
//               <span className="ml-2">{benefit}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>,

//     <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">
//       {/* Image Section */}
//       <motion.div
//         className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img
//           src={quality}
//           alt="Quality"
//           className="rounded-3xl w-full max-w-sm"
//         />
//       </motion.div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 px-6">
//         <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: "Graphik" }}>
//           Our Quality
//         </h3>
//         <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik",
//           }
//           }>
//        At Muby Chem, quality is at the heart of everything we do. We are dedicated to providing our clients with exceptional products that meet the highest standards of safety, performance, and regulatory compliance. Our rigorous commitment to quality ensures that each product we produce is reliable, effective, and consistently exceeds expectations.<br/>
//         <br/>
//         </p>

//         <ul className="mt-4 space-y-2" style={{fontFamily: "Graphik" }}>
//           {[
//             "Access Expert Advice For A Thriving Life",
//             "Benefits Of Health Conscious Living",
//             "Benefits Of Proactive Health Management",
//             "Countless Benefits Of Prioritizing Health",
//           ].map((benefit, index) => (
//             <li key={index} className="flex items-center text-gray-900">
//               <span className="text-yellow-900 text-lg">&#10003;</span>
//               <span className="ml-2">{benefit}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>,

//     <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">

//       {/* Image Section */}
//      {/* Image Section */}
//      <motion.div
//         className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img
//           src={value}
//           alt="Value"
//           className="rounded-3xl w-full max-w-sm"
//         />
//       </motion.div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 px-6">
//         <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: "Graphik" }}> Values</h3>
//         <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik",
//           }
//           }>
//           Our core values drive every aspect of our business. We are committed to maintaining the highest ethical standards, fostering innovation, and creating meaningful partnerships with our customers, employees, and communities. Our values form the foundation of our work culture and guide our actions as we strive to make a positive impact on industries and lives around the world.
//         </p>

//         <ul className="mt-4 space-y-2" style={{fontFamily: "Graphik" }}>
//           {[
//             "Access Expert Advice For A Thriving Life",
//             "Benefits Of Health Conscious Living",
//             "Benefits Of Proactive Health Management",
//             "Countless Benefits Of Prioritizing Health",
//           ].map((benefit, index) => (
//             <li key={index} className="flex items-center text-gray-900">
//               <span className="text-yellow-900 text-lg">&#10003;</span>
//               <span className="ml-2">{benefit}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>,

//     <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">

//       {/* Image Section */}
//       <motion.div
//         className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img
//           src={excellance}
//           alt="Value"
//           className="rounded-3xl w-full max-w-sm"
//         />
//       </motion.div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 px-6">
//         <h3 className="text-2xl font-bold text-gray-900" style={{fontFamily: "Graphik" }}>
//         Excellence
//         </h3>
//         <p className="text-[#6a7391] mt-3" style={{fontFamily: "Graphik" }}>
//         We continuously strive for excellence in everything we do. Our dedication to high standards of performance, attention to detail, and a relentless pursuit of improvement ensures that we remain leaders in the industry, delivering the best products and services to our customers.
//         </p>

//         <ul className="mt-4 space-y-2" style={{fontFamily: "Graphik" }}>
//           {[
//             "Access Expert Advice For A Thriving Life",
//             "Benefits Of Health Conscious Living",
//             "Benefits Of Proactive Health Management",
//             "Countless Benefits Of Prioritizing Health",
//           ].map((benefit, index) => (
//             <li key={index} className="flex items-center text-gray-900">
//               <span className="text-yellow-900 text-lg">&#10003;</span>
//               <span className="ml-2">{benefit}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>,
//   ];

//   return (
//     <div className="flex">
//       {/* Tabs */}
//       <div className="w-1/4 ">
//         <ul className="space-y-2">
//           {tabs.map((tab, index) => (
//             <li
//               key={index}
//               className={`flex justify-between items-center w-5/5 p-3 rounded-full transition-all duration-300 ${activeTab === index ? 'bg-white text-gray-900' : 'border border-gray-300 text-gray-900 bg-transparent'
//                 }`}
//               onClick={() => setActiveTab(index)}
//             >
//               {tab}
//               <div
//                 className={`w-10 h-10 flex items-center justify-center rounded-full ${index === 0
//                   ? "bg-[#773135] hover:text-black text-white"
//                   : "bg-[#773135] hover:text-black text-white"
//                   }`}
//               >
//                 <FaArrowUpRightFromSquare />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Tab Content */}
//       <div className="w-3/4 ">
//         <div className=" p-4 rounded-md">
//           {content[activeTab]}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerticalTabs;

import React, { useState, useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import Vision from "../../assets/Vision.png";
import mission from "../../assets/mission.png";
import quality from "../../assets/quality.png";
import Value from "../../assets/Value.png";
import excellance from "../../assets/Excellence.png";
import translations from "../translater/translations.js";
import { useSelector } from "react-redux";

const VerticalTabs = () => {
  const language = useSelector((state) => state.language.language); // Get selected language from Redux
  const currentTranslations = translations[language] || translations.en; // Fallback to English

  const [activeTab, setActiveTab] = useState(0);
  const [visibleTabs, setVisibleTabs] = useState([]);

  useEffect(() => {
    tabs.forEach((_, index) => {
      setTimeout(() => {
        setVisibleTabs((prev) => [...prev, index]);
      }, index * 300);
    });
  }, []);

  const tabs = [
    {
      key: "vision",
      label: {
        en: "Our Vision",
        fr: "Notre vision",
        ru: "Наше видение",
        ko: "우리의 비전",
        es: "Nuestra Visión",
        ar: "رؤيتنا",// Add more languages here
      },
    },
    {
      key: "mission",
      label: {
        en: "Our Mission",
        fr: "Notre mission",
        ru: "Наша миссия",
        ko: "우리의 사명",
        es: "Nuestra misión",
        ar: "مهمتنا",
      },
    },
    {
      key: "quality",
      label: {
        en: "Our Quality",
        fr: "Notre qualité",
        ru: "Наше качество",
        ko: "우리의 품질",
        es: "Nuestra Calidad",
        ar: "الجودة لدينا",
      },
    },
    {
      key: "values",
      label: {
        en: "Our Values",
        fr: "Nos valeurs",
        ru: "Наши ценности",
        ko: "우리의 가치",
        es: "Nuestras Valores",
        ar: "قيمنا",
      },
    },
    {
      key: "excellence",
      label: {
        en: "Our Excellence",
        fr: "Notre excellence",
        ru: "Наше превосходство",
        ko: "우리의 우수성",
        es: "Nuestra Excelencia",
        ar: "التميز لدينا",
      },
    },
  ];

  const content = [
    {
      title: {
        en: "Our Vision",
        fr: "Notre vision",
        ru: "Наше видение",
        ko: "우리의 비전",
        es: "Nuestra Visión",
        ar: "رؤيتنا",
      },
      description: {
        en: " To be globally recognized as an authentic source of Speciality Chemicals, Pharmaceutical Actives, Excipients, Food Additives, Fragrance, and Flavors with international benchmarks.",
        fr: "Être reconnu mondialement comme une source authentique de produits chimiques de spécialité, d'actifs pharmaceutiques, d'excipients, d'additifs alimentaires, de parfums et d'arômes avec des références internationales.",
        ru: "Быть признанным во всем мире как подлинный источник специальных химикатов, фармацевтических активных веществ, вспомогательных веществ, пищевых добавок, отдушек и ароматизаторов, соответствующий международным стандартам».",
        ko: "국제적 기준을 통해 특수 화학물질, 제약 활성제, 부형제, 식품 첨가물, 향료 및 풍미제의 정통한 공급원으로 전 세계적으로 인정받고자 합니다.",
        es: "Ser reconocidos globalmente como una fuente auténtica de productos químicos especializados, activos farmacéuticos, excipientes, aditivos alimentarios, fragancias y sabores con puntos de referencia internacionales.",
        ar: "أن نكون معترفًا بنا عالميًا كمصدر أصيل للمواد الكيميائية المتخصصة والمواد الصيدلانية والمواد المساعدة والمواد المضافة للأغذية والعطور والنكهات وفقًا للمعايير الدولية.",
      },
      img: Vision,
    },
    {
      title: {
        en: "Our Mission",
        fr: "Notre mission",
        ru: "Наша миссия",
        ko: "우리의 사명",
        es: "Nuestra misión",
        ar: "مهمتنا",
      },
      description: {
        en: "Our vision is to contribute to a healthier, more sustainable future by advancing pharmaceuticals, nutraceuticals, specialty chemicals, and food additives that promote better health, improve quality of life, and foster environmental responsibility.",
        fr: "Notre vision est de contribuer à un avenir plus sain et plus durable en faisant progresser les produits pharmaceutiques, les nutraceutiques, les produits chimiques de spécialité et les additifs alimentaires qui favorisent une meilleure santé, améliorent la qualité de vie et encouragent la responsabilité environnementale.",
        ru: "Наша цель — внести вклад в более здоровое и устойчивое будущее путем совершенствования фармацевтических препаратов, нутрицевтиков, специальных химикатов и пищевых добавок, которые способствуют укреплению здоровья, повышению качества жизни и повышению экологической ответственности.",
        ko: "당사의 비전은 더 나은 건강을 증진하고, 삶의 질을 향상시키고, 환경적 책임을 촉진하는 의약품, 건강기능식품, 특수화학제품, 식품첨가물을 발전시켜 보다 건강하고 지속 가능한 미래에 기여하는 것입니다.",
        es: "Nuestra visión es contribuir a un futuro más saludable y sostenible mediante el avance de productos farmacéuticos, nutracéuticos, productos químicos especializados y aditivos alimentarios que promuevan una mejor salud, mejoren la calidad de vida y fomenten la responsabilidad ambiental.",
        ar: "رؤيتنا هي المساهمة في مستقبل أكثر صحة واستدامة من خلال تطوير الأدوية والمكملات الغذائية والمواد الكيميائية المتخصصة والمواد المضافة إلى الأغذية التي تعمل على تعزيز الصحة وتحسين نوعية الحياة وتعزيز المسؤولية البيئية.",
      },
      img: mission,
    },
    {
      title: {
        en: "Our Quality",
        fr: "Notre qualité",
        ru: "Наше качество",
        ko: "우리의 품질",
        es: "Nuestra Calidad",
        ar: "الجودة لدينا",
      },
      description: {
        en: "At Muby Chem, quality is at the heart of everything we do. We are dedicated to providing our clients with exceptional products that meet the highest standards of safety, performance, and regulatory compliance. Our rigorous commitment to quality ensures that each product we produce is reliable, effective, and consistently exceeds expectations.",
        fr: "Chez Muby Chem, la qualité est au cœur de toutes nos activités. Nous nous engageons à fournir à nos clients des produits exceptionnels répondant aux normes les plus strictes en matière de sécurité, de performance et de conformité réglementaire. Notre engagement rigoureux en matière de qualité garantit que chaque produit que nous fabriquons est fiable, efficace et dépasse systématiquement les attentes.",
        ru: "В Muby Chem качество лежит в основе всего, что мы делаем. Мы стремимся предоставлять нашим клиентам исключительные продукты, которые отвечают самым высоким стандартам безопасности, производительности и соответствия нормативным требованиям. Наша строгая приверженность качеству гарантирует, что каждый производимый нами продукт надежен, эффективен и неизменно превосходит ожидания.",
        ko: "Muby Chem에서 품질은 우리가 하는 모든 일의 핵심입니다. 우리는 고객에게 최고 수준의 안전, 성능 및 규정 준수를 충족하는 뛰어난 제품을 제공하는 데 전념합니다. 품질에 대한 엄격한 헌신은 우리가 생산하는 각 제품이 신뢰할 수 있고 효과적이며 지속적으로 기대치를 초과하도록 보장합니다.",
        es: "En Muby Chem, la calidad es la base de todo lo que hacemos. Nos dedicamos a ofrecer a nuestros clientes productos excepcionales que cumplen con los más altos estándares de seguridad, rendimiento y cumplimiento normativo. Nuestro riguroso compromiso con la calidad garantiza que cada producto que fabricamos sea confiable, eficaz y supere constantemente las expectativas.",
        ar: "في موبي كيم، الجودة هي جوهر كل ما نقوم به. نلتزم بتزويد عملائنا بمنتجات استثنائية تلبي أعلى معايير السلامة والأداء والامتثال للأنظمة. التزامنا الصارم بالجودة يضمن أن يكون كل منتج ننتجه موثوقًا وفعالًا ويتجاوز التوقعات باستمرار.",
      },
      img: quality,
    },
    {
      title: {
        en: "Our Values",
        fr: "Nos valeurs",
        ru: "Наши ценности",
        ko: "우리의 가치",
        es: "Nuestras Valores",
        ar: "قيمنا",
      },
      description: {
        en: "Our core values drive every aspect of our business. We are committed to maintaining the highest ethical standards, fostering innovation, and creating meaningful partnerships with our customers, employees, and communities. Our values form the foundation of our work culture and guide our actions as we strive to make a positive impact on industries and lives around the world.",
        fr: "Nos valeurs fondamentales guident tous les aspects de notre activité. Nous nous engageons à maintenir les normes éthiques les plus strictes, à favoriser l'innovation et à nouer des partenariats constructifs avec nos clients, nos employés et nos communautés. Elles constituent le fondement de notre culture d'entreprise et guident nos actions, dans le cadre de nos efforts pour avoir un impact positif sur les industries et les vies humaines à travers le monde.",
        ru: "Наши основные ценности определяют каждый аспект нашего бизнеса. Мы стремимся поддерживать самые высокие этические стандарты, поощрять инновации и создавать значимые партнерства с нашими клиентами, сотрудниками и сообществами. Наши ценности формируют основу нашей рабочей культуры и направляют наши действия, поскольку мы стремимся оказывать положительное влияние на отрасли и жизни по всему миру.",
        ko: "우리의 핵심 가치는 우리 사업의 모든 측면을 주도합니다. 우리는 최고의 윤리적 기준을 유지하고, 혁신을 촉진하며, 고객, 직원 및 커뮤니티와 의미 있는 파트너십을 구축하는 데 전념합니다. 우리의 가치는 우리의 업무 문화의 기초를 형성하고 전 세계의 산업과 삶에 긍정적인 영향을 미치기 위해 노력하면서 우리의 행동을 안내합니다.",
        es: "Nuestros valores fundamentales impulsan cada aspecto de nuestro negocio. Nos comprometemos a mantener los más altos estándares éticos, fomentar la innovación y forjar alianzas significativas con nuestros clientes, empleados y comunidades. Nuestros valores constituyen la base de nuestra cultura laboral y guían nuestras acciones mientras nos esforzamos por generar un impacto positivo en las industrias y las vidas de las personas en todo el mundo.",
        ar: "قيمنا الأساسية هي المحرك الرئيسي لجميع جوانب أعمالنا. نحن ملتزمون بالحفاظ على أعلى المعايير الأخلاقية، وتشجيع الابتكار، وبناء شراكات مثمرة مع عملائنا وموظفينا ومجتمعاتنا. تُشكل قيمنا أساس ثقافة عملنا، وتُوجه أعمالنا في سعينا لإحداث تأثير إيجابي على القطاعات وحياة الناس حول العالم.",
      },
      img: Value,
    },
    {
      title: {
        en: "Our Excellence",
        fr: "Notre excellence",
        ru: "Наше превосходство",
        ko: "우리의 우수성",
        es: "Nuestra Excelencia",
        ar: "التميز لدينا",
      },
      description: {
        en: "We continuously strive for excellence in everything we do. Our dedication to high standards of performance, attention to detail, and a relentless pursuit of improvement ensures that we remain leaders in the industry, delivering the best products and services to our customers.",
        fr: "Nous visons constamment l'excellence dans tout ce que nous entreprenons. Notre engagement envers des normes de performance élevées, notre souci du détail et notre quête constante d'amélioration nous permettent de rester leaders du secteur et d'offrir les meilleurs produits et services à nos clients.",
        ru: "Мы постоянно стремимся к совершенству во всем, что мы делаем. Наша преданность высоким стандартам производительности, внимание к деталям и неустанное стремление к совершенствованию гарантируют, что мы остаемся лидерами в отрасли, предоставляя нашим клиентам лучшие продукты и услуги.",
        ko: "우리는 우리가 하는 모든 일에서 끊임없이 우수성을 위해 노력합니다. 높은 성과 기준, 세부 사항에 대한 주의, 그리고 끊임없는 개선 추구에 대한 우리의 헌신은 우리가 업계의 선두 주자로 남아 고객에게 최고의 제품과 서비스를 제공할 수 있도록 보장합니다.",
        es: "Nos esforzamos continuamente por alcanzar la excelencia en todo lo que hacemos. Nuestra dedicación a altos estándares de rendimiento, atención al detalle y una búsqueda incesante de la mejora nos aseguran mantenernos como líderes en la industria, ofreciendo los mejores productos y servicios a nuestros clientes.",
        ar: "نسعى باستمرار للتميز في كل ما نقوم به. التزامنا بمعايير أداء عالية، واهتمامنا بالتفاصيل، وسعينا الدؤوب للتحسين، يضمن لنا البقاء في صدارة هذا القطاع، وتقديم أفضل المنتجات والخدمات لعملائنا.",
      },
      img: excellance,
    },
  ];

  const benefitsList = {
    en: [
      "Customer Delight: Prioritizing customer needs to enhance productivity and plant performance.",
      "High-Performance Innovation: Engaging in continuous research and development to stay ahead in a dynamic global market.",
      "Value Creation: Through Time-Based Efficiency: Maximizing productivity through efficient program design and resource management.",
      "Countless Benefits Of Prioritizing Health",
    ],
    fr: [
      "Satisfaction client : Prioriser les besoins des clients pour améliorer la productivité et les performances de l'usine.",
      "Innovation à haute performance : Recherche et développement continus pour rester en tête dans un marché mondial dynamique.",
      "Création de valeur grâce à l'efficacité temporelle : Maximiser la productivité grâce à une conception de programme efficace et à la gestion des ressources.",
      "Innombrables avantages de la priorité à la santé",
    ],
    ru: [

      "Удовлетворение клиентов: Приоритет потребностей клиентов для повышения производительности и эффективности работы завода.",
      "Инновации высокой производительности: Постоянные исследования и разработки, чтобы опережать в динамичном глобальном рынке.",
      "Создание ценности через эффективность времени: Максимизация производительности за счёт эффективного проектирования программ и управления ресурсами.",
      "Бесчисленные преимущества приоритета здоровья",

    ],
    ko: [

      "고객 만족: 생산성과 공장 성능을 향상시키기 위해 고객의 요구를 우선시합니다.",
      "고성능 혁신: 역동적인 글로벌 시장에서 앞서기 위해 지속적인 연구 개발을 수행합니다.",
      "시간 기반 효율성을 통한 가치 창출: 효율적인 프로그램 설계와 자원 관리를 통해 생산성을 극대화합니다.",
      "건강 우선의 무수한 이점",

    ],
    es: [

      "Satisfacción del cliente: Priorizando las necesidades del cliente para mejorar la productividad y el rendimiento de la planta.",
      "Innovación de alto rendimiento: Realizando investigación y desarrollo continuo para mantenerse a la vanguardia en un mercado global dinámico.",
      "Creación de valor a través de la eficiencia basada en el tiempo: Maximizando la productividad mediante el diseño eficiente de programas y la gestión de recursos.",
      "Incontables beneficios de priorizar la salud",

    ],
    ar: [
      "رضا العملاء: إعطاء الأولوية لاحتياجات العملاء لتعزيز الإنتاجية وأداء المصنع.",
      "الابتكار عالي الأداء: الانخراط في البحث والتطوير المستمرين للبقاء في طليعة السوق العالمية الديناميكية.",
      "خلق القيمة من خلال الكفاءة الزمنية: تعظيم الإنتاجية من خلال تصميم البرامج بكفاءة وإدارة الموارد.",
      "فوائد لا حصر لها من إعطاء الأولوية للصحة",
    ]

    // Add other languages here
  };


  return (
    <div
      className="flex flex-col md:flex-row items-start max-w-7xl mx-auto p-4"
      style={{ fontFamily: "Graphik" }}
    >
      {/* Tabs */}
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <ul className="space-y-2">
          {tabs.map((tab, index) => (
            <motion.li
              key={index}
              className={`flex justify-between items-center w-full p-3 rounded-full cursor-pointer transition-all duration-300 ${activeTab === index
                  ? "bg-[#773135] text-white"
                  : "border border-gray-300 text-gray-900 bg-transparent"
                } ${visibleTabs.includes(index) ? "opacity-100" : "opacity-0"}`}
              onClick={() => setActiveTab(index)}
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleTabs.includes(index) ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {tab.label[language]}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F2DE] text-[#773135]">
                <FaArrowUpRightFromSquare />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        className="w-full px-4 md:px-10 rounded-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <motion.img
            src={content[activeTab].img}
            alt={content[activeTab].title[language]}
            className="rounded-3xl w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-8 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900 ">
              {content[activeTab].title[language]}
            </h3>
            <p className="text-[#6a7391] mt-3">
              {content[activeTab].description[language]}
            </p>
            <ul className="mt-4 space-y-2" style={{ fontFamily: "Graphik" }}>
              {benefitsList[language].map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-900">
                  <span className="text-yellow-900 text-lg">&#10003;</span>
                  <span className="ml-2">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VerticalTabs;
