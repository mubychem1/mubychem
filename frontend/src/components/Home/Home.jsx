import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay, FaArrowLeft } from 'react-icons/fa';
import { IoMdFlask, IoIosArrowForward } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import microscopeImage from '../../assets/welcomeImg.png';
import pattern from '../../assets/Pattern.png';
import demo1 from '../../assets/demo-1.png';
import VerticalTabs from './VerticalTabs';
import homecontact from "../../assets/home-contact.png";
import iso from "../../assets/logo/ISO.png";
import kstar from "../../assets/logo/kstar.png";
import halal from "../../assets/logo/halal.png";
import haccp from "../../assets/logo/haccp.png";
import gptw from "../../assets/logo/gptw.png";
import gmp from "../../assets/logo/gmp.png";
import glutten from "../../assets/logo/glutten-free.png";
import glp from "../../assets/logo/glp.png";
import fssc from "../../assets/logo/fssc-22000.png";
import fssai from "../../assets/logo/fssai.png";
// import fdca from "../../assets/logo/fdca.png";
import fami from "../../assets/logo/fami-qs.png";
import allergen from "../../assets/logo/allergen-free.png";
import bg from "../../assets/slider-1.jpeg";
import translations from '../translater/translations.js'
import { useSelector } from "react-redux"

const certification = [
  {
    title: '',
    bgImage: gmp
  },
  {
    title: '',
    bgImage: glp
  },
  {
    title: '',
    bgImage: fssc
  },

  {
    title: '',
    bgImage: fssai
  },
  {
    title: '',
    bgImage: fami
  },
  {
    title: '',
    bgImage: kstar
  },
  {
    title: '',
    bgImage: halal
  },
  {
    title: ' ',
    bgImage: iso
  },

  {
    title: '',
    bgImage: allergen
  },
  {
    title: '',
    bgImage: haccp
  },

  {
    title: '',
    bgImage: glutten
  },
  {
    title: '',
    bgImage: gptw
  },
];

const services = [
  {
    title: {
      en: "Pharmaceuticals",
      fr: "Pharmaceutiques",
      ru: "Фармацевтика",
      ko: "의약품",
      es: "Farmacéuticos",
      ar: "المستحضرات الصيدلانية",
    },
    description: {
      en: "We manufacture high-quality active pharmaceutical ingredients (APIs) and Excipients that serve as the building blocks for pharmaceutical formulations. Our products are carefully produced under controlled conditions to ensure potency, purity, and efficacy.",
      ru: "Мы производим высококачественные активные фармацевтические ингредиенты (АФИ) и вспомогательные вещества, которые служат строительными блоками для фармацевтических формул. Наши продукты производятся тщательно в контролируемых условиях, чтобы гарантировать эффективность, чистоту и действенность.",
      ko: "당사는 제약 제형의 빌딩 블록 역할을 하는 고품질 활성 제약 성분(API)과 부형제를 제조합니다. 당사의 제품은 효능, 순도 및 효능을 보장하기 위해 통제된 조건에서 신중하게 생산됩니다.",
      es: "Fabricamos ingredientes farmacéuticos activos (API) y excipientes de alta calidad que sirven como componentes básicos para formulaciones farmacéuticas. Nuestros productos se elaboran cuidadosamente en condiciones controladas para garantizar su potencia, pureza y eficacia.",
      fr: "Nous fabriquons des principes actifs pharmaceutiques (API) et des excipients de haute qualité qui servent de base aux formulations pharmaceutiques. Nos produits sont fabriqués avec soin dans des conditions contrôlées pour garantir leur efficacité, leur pureté et leur puissance.",
      ar: "نصنع مكونات صيدلانية فعالة (APIs) ومواد مساعدة عالية الجودة تُشكل اللبنات الأساسية للتركيبات الصيدلانية. تُنتج منتجاتنا بعناية فائقة في ظل ظروف مُراقبة لضمان الفعالية والنقاء والفعالية.",
    },
    icon: "🤖",
    bgImage: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/demo1-slider.jpg",
  },
  {
    title: {
      en: "Speciality chemicals",
      hi: "फार्मास्युटिकल्स",
      fr: "Produits chimiques spécialisés",
      ru: "Специальные химикаты",
      ko: "특수 화학물질",
      es: "Productos químicos especiales",
      ar: "المواد الكيميائية المتخصصة",
    },
    description: {
      en: "Tailored chemical solutions designed specifically for your needs, ensuring optimal results and seamless integration into your production processes.",
      fr: "Des solutions chimiques sur mesure conçues spécifiquement pour vos besoins, garantissant des résultats optimaux et une intégration transparente dans vos processus de production.",
      ru: "«Индивидуальные химические решения, разработанные специально для ваших нужд, гарантирующие оптимальные результаты и бесшовную интеграцию в ваши производственные процессы».",
      ko: "귀하의 요구 사항에 맞게 특별히 설계된 맞춤형 화학 솔루션으로 최적의 결과와 생산 프로세스에 대한 원활한 통합을 보장합니다.",
      es: "Soluciones químicas a medida, diseñadas específicamente para sus necesidades, garantizando resultados óptimos y una integración perfecta en sus procesos de producción.",
      ar: "حلول كيميائية مصممة خصيصًا لتلبية احتياجاتك، مما يضمن الحصول على نتائج مثالية والتكامل السلس في عمليات الإنتاج الخاصة بك.",
    },
    icon: "🧠",
    bgImage: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-415x530.jpg",
  },
  {
    title: {
      en: "Nutraceuticals",
      hi: "फार्मास्युटिकल्स",
      fr: "Nutraceutiques",
      ru: "Нутрицевтики",
      ko: "건강기능식품",
      es: "Nutracéuticos",
      ar: "المكملات الغذائية",
    },
    description: {
      en: "We specialize in the development and manufacturing. Our nutraceuticals combine the best of nature and science to offer advanced, effective solutions for a variety of health and dietary needs. Our commitment to quality ensures that every product we create meets the highest standards of safety, efficacy, and regulatory compliance.",
      fr: "Nous sommes spécialisés dans le développement et la fabrication. Nos nutraceutiques allient le meilleur de la nature et de la science pour offrir des solutions avancées et efficaces répondant à une variété de besoins en matière de santé et d'alimentation. Notre engagement qualité garantit que chaque produit que nous créons répond aux normes les plus strictes en matière de sécurité, d'efficacité et de conformité réglementaire.",
      ru: "Мы специализируемся на разработке и производстве. Наши нутрицевтики сочетают в себе лучшее от природы и науки, предлагая передовые, эффективные решения для различных потребностей в области здравоохранения и питания. Наша приверженность качеству гарантирует, что каждый созданный нами продукт соответствует самым высоким стандартам безопасности, эффективности и соответствия нормативным требованиям.",
      ko: "저희는 개발 및 제조를 전문으로 합니다. 저희의 건강기능식품은 자연과 과학의 장점을 결합하여 다양한 건강 및 식단 요구에 대한 진보적이고 효과적인 솔루션을 제공합니다. 품질에 대한 저희의 헌신은 저희가 만드는 모든 제품이 가장 높은 수준의 안전성, 효능 및 규정 준수를 충족하도록 보장합니다.",
      es: "Nos especializamos en el desarrollo y la fabricación. Nuestros nutracéuticos combinan lo mejor de la naturaleza y la ciencia para ofrecer soluciones avanzadas y eficaces para diversas necesidades de salud y nutrición. Nuestro compromiso con la calidad garantiza que cada producto que creamos cumpla con los más altos estándares de seguridad, eficacia y cumplimiento normativo.",
      ar: "نحن متخصصون في التطوير والتصنيع. تجمع منتجاتنا من المكملات الغذائية بين أفضل ما توصلت إليه الطبيعة والعلوم لتقديم حلول متطورة وفعالة لمختلف الاحتياجات الصحية والغذائية. التزامنا بالجودة يضمن أن كل منتج نصنعه يفي بأعلى معايير السلامة والفعالية والامتثال للأنظمة.",
    },
    icon: "⚛",
    bgImage: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-04-415x530.jpg",
  },
  {
    title: {
      en: "Mineral Fortifiers",
      hi: "फार्मास्युटिकल्स",
      fr: "Fortifiants minéraux",
      ru: "Минеральные фортификаторы",
      ko: "미네랄 강화제",
      es: "Fortificantes minerales",
      ar: "التحصينات المعدنية",
    },
    description: {
      en: "Our mineral fortifiers are crafted to meet diverse nutritional needs, ensuring you get the right minerals in the right amounts. With our cutting-edge technology and commitment to quality, we provide mineral fortifiers that meet global standards for safety, effectiveness, and sustainability.",
      fr: "Nos fortifiants minéraux sont conçus pour répondre à divers besoins nutritionnels, vous garantissant un apport optimal en minéraux. Grâce à notre technologie de pointe et à notre engagement qualité, nous proposons des fortifiants minéraux conformes aux normes internationales de sécurité, d'efficacité et de durabilité.",
      ru: "Наши минеральные обогатители созданы для удовлетворения различных потребностей в питании, гарантируя, что вы получите нужные минералы в нужных количествах. Благодаря нашим передовым технологиям и приверженности качеству мы предоставляем минеральные обогатители, которые соответствуют мировым стандартам безопасности, эффективности и устойчивости.",
      ko: "당사의 미네랄 강화제는 다양한 영양적 요구를 충족하도록 제작되어 적절한 양의 적절한 미네랄을 섭취할 수 있도록 보장합니다. 최첨단 기술과 품질에 대한 헌신으로 당사는 안전성, 효과성 및 지속 가능성에 대한 글로벌 표준을 충족하는 미네랄 강화제를 제공합니다.",
      es: "Nuestros fortificantes minerales están elaborados para satisfacer diversas necesidades nutricionales, garantizando el aporte de minerales en las cantidades adecuadas. Gracias a nuestra tecnología de vanguardia y nuestro compromiso con la calidad, ofrecemos fortificantes minerales que cumplen con los estándares globales de seguridad, eficacia y sostenibilidad.",
      ar: "مُقوِّياتنا المعدنية مُصمَّمة لتلبية احتياجاتك الغذائية المتنوعة، مما يضمن حصولك على المعادن المناسبة بالكميات المناسبة. بفضل تقنيتنا المتطورة والتزامنا بالجودة، نوفر مُقوِّيات معدنية تُلبي المعايير العالمية للسلامة والفعالية والاستدامة.",
    },
    icon: "🧬",
    bgImage: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-05-415x530.jpg",
  },
];


const Home = () => {

  const language = useSelector((state) => state.language.language); // Get selected language from Redux
  const currentTranslations = translations[language] || translations.en; // Fallback to English

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === certification.length ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [certification.length]);
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl("");
  };

  // --------estimation -----
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("aayush");

      const response = await axios.post("http://localhost:9000/api/contact", formData);
      alert(response.data.message);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      console.log("mayuri");

      alert("Error submitting form. Try again!");
    }
  };



  return (
    <>
      {/*------------ Hero Section ------- */}
      <div
        className="flex flex-col md:flex-row items-center
         bg-white p-6 md:p-12  h-auto md:h-[700px] gap-6 md:gap-12"
        style={{
          fontFamily: "Times New Roman ",
          fontWeight: "normal",
          fontSize: "15px",
          lineHeight: "1.6",
          letterSpacing: "0",
          color: "#6a7391",
          textTransform: "none",
          fontStyle: "normal",
        }}
      >
        {/* Left Side - Image */}
        <div className="md:w-2/4 h-full flex items-center justify-center relative">
          {/* Background Image */}
          <img
            src={demo1}
            alt="Scientist working in lab"
            className="w-full h-full rounded-2xl"
          />

          {/* Watch Video Button - Positioned Bottom Right Inside Image */}
          {/* <div className='absolute rotate-50 bottom-10 -right-6 px-7 py-3 flex
           rounded-full'> */}
          {/* <div class="absolute -left-10 bottom-3 z-10 h-10 w-10 rounded-full group-aria-selected:bg-color-bright"></div> */}
          {/* <div class="absolute -bottom-2 -left-5 z-0 h-10 w-10 rounded-full group-aria-selected:bg-color-dark"></div>
          </div> */}
          {/* Watch Video Button - Positioned Bottom Right Inside Image */}
          <button
            onClick={() =>
              openModal("https://www.youtube.com/embed/buwI_49ZTp0")
            }
            className="absolute bottom-0 right-[2px] sm:bottom-4 sm:right-103 md:bottom-3 md:right-2
               flex items-center  px-0 py-2 sm:px-5 sm:py-3  rounded-full 
               hover:scale-105 transition-all duration-300"
          >
            <FaPlay className="text-black text-xl sm:text-base md:text-lg " />
            <span className="ml-2 text-xs sm:text-sm md:text-base font-semibold text-black">
              {currentTranslations.watchVideo}
            </span>
          </button>
        </div>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center border-5 border-white  z-50">
            <div className=" p-4 rounded-lg border-5 border-white relative w-10/12 md:w-3/4 lg:w-1/2 bg-opacity-60 bg-[#773135]">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white p-1 rounded-full"
              >
                ✖
              </button>
              <iframe
                width="100%"
                height="315"
                src={videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        )}

        {/* Right Side - Content */}
        <div
          className="w-full max-w-[650px] h-full bg-[#773135] text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl flex flex-col justify-center flex-1 relative overflow-hidden bg-no-repeat"
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundSize: "100%",
            backgroundPosition: "top-right",
          }}
        >
          <p
            className="text-lg sm:text-lg md:text-xl font-semibold text-white px-4 sm:px-5 md:px-6 italic py-2 rounded-full w-max border border-white"
            style={{ fontFamily: "Times New Roman" }}
          >
            {currentTranslations.qualityChemicals}
          </p>

          <h1 className="text-[clamp(32px,6vw,72px)] md:text-[60px] lg:text-[57px] leading-tight mt-4 " style={{ fontFamily: "Times New Roman" }}>
            {currentTranslations.qualityProducts}
          </h1><br />

          <h2 className="text-[clamp(24px,5vw,50px)] md:text-[20px] italic lg:text-[20px] font-graphik leading-tight mt-2 text-left">
            {currentTranslations.whereChemistryMeets}
          </h2>

          <div className="flex gap-6 mt-4 border-t pt-4 border-gray-400"></div>
          <p className="mt-2 text-[clamp(14px,2vw,18px)] md:text-[16px] lg:text-[18px] leading-[1.6] rounded-xl border p-2 w-max shadow-2xl" style={{ fontFamily: "Graphik" }}>
            IP/BP/ Ph. Eur./USP-NF/JP/CP/FCC/ACS
          </p><br />

          <button className="mt-4 bg-black text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full 
         flex items-center w-max transition duration-300 hover:bg-white hover:text-black 
          border border-transparent hover:border-black" style={{ fontFamily: "Graphik" }}>
            <a href="/products">{currentTranslations.ourProducts} <span className="ml-2">&rarr;</span></a>
          </button>
        </div>
      </div>

      {/* ------------Services Card Section ------------ */}
      <div className="bg-white py-10 px-5 md:px-20 flex flex-wrap md:flex-nowrap overflow-x-auto gap-10 justify-center md:justify-between w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#f7f4e9] py-[35px] px-[15px] rounded-[30px] w-full sm:w-80 md:w-90 h-[350px] flex flex-col items-start text-left relative cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <div className="bg-blue-100 p-2 rounded-full text-[12px] text-blue-600">
                {service.icon}
              </div>
              <h2 className="text-[17px] font-semibold text-gray-900">
                {service.title[language]}
              </h2>
            </div>
            <hr className="mt-3 p-3 border-gray-200 border-t-2 w-full hover:w-full hover:border-gray-400 transition-all duration-100 m-0" />
            <p className="text-gray-600 text-sm ml-auto text-[15px] text-left">
              {service.description[language]}
            </p>
            <button className="absolute table text-center bg-[#f7f4e9] px-[15px] py-[10px] bottom-[-10px] sm:bottom-[-15px] right-5 sm:right-10 rounded-full border-white border-8 transition-all duration-100 hover:text-[#773135]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="23"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>

      {/* ----------Research Section  -------------- */}
      <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between w-full px-5 md:px-20 pt-10 pb-5">
        {/* Left Side - Image */}
        <motion.div
          className="w-full sm:w-3/4 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={microscopeImage}
            alt="Lab Equipment"
            className="w-auto rounded-xl max-w-[647px] h-[500px]"
            sizes="(max-width: 647px) 100vw, 647px"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-2/5 text-gray-800 max-w-lg mt-10 md:mt-0 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Badge */}
          {/* <motion.span
            className="inline-block px-4 py-1 text-[11px] leading-[22px] tracking-[0] text-[#001837] 
      font-[Open_Sans] font-bold border border-[#001837] rounded-full uppercase mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Who We Are
          </motion.span> */}

          {/* Heading */}
          <motion.h2
            className="text-4xl leading-[60px] tracking-[0] text-[#001837] normal-case not-italic w-full"
            style={{ fontFamily: "Times New Roman" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {currentTranslations.welcomeToMubyChem}
            {/* Welcome to Muby Chem <br />Private Limited */}
          </motion.h2>
          <motion.p className="mb-4">{currentTranslations.obsessedWithQuality}</motion.p>

          {/* Description */}
          <motion.p
            className="text-[15px] leading-[1.6] text-[#6a7391] normal-case not-italic mb-6"
            style={{ fontFamily: "Graphik" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {currentTranslations.mubyChemDescription1}
          </motion.p>
          <motion.p
            className="text-[15px] leading-[1.6] text-[#6a7391] normal-case not-italic mb-6"
            style={{ fontFamily: "Graphik" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {currentTranslations.mubyChemDescription2}
          </motion.p>


          {/* Features Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 mb-6 border-t pt-6 border-gray-400"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >


            {/* Feature 2 */}

          </motion.div>

          {/* Button with Hover Animation */}
          <motion.button
            className=" h-14 mt-4 px-6 py-3 text-[#001837] border border-[#001837] font-Times New Roman rounded-full font-['Open_Sans',sans-serif] 
            flex items-center gap-2 hover:bg-[#773135] hover:text-white transition "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          ><a href="/about">
              {currentTranslations.knowMore} </a><FaArrowRight />
          </motion.button>
        </motion.div>
      </div>

      {/* --------------Feature Section --------- */}
      <div className="bg-white min-h-screen flex flex-col items-center py-12 px-3">
        {/* <div className="border border-black px-4 py-1 rounded-full text-sm text text-[#001837] uppercase font-openSans leading-4" style={{
          fontFamily: "Times New Roman",
        }}
        >
          WHY CHOOSE US?
        </div> */}
        <h2 className="text-4xl text-center mt-4 text-gray-900" style={{ fontFamily: "Times New Roman" }}>
          {currentTranslations.Featureheading}<br />{currentTranslations.Featureheading1}
        </h2>

        <div className="flex items-center mt-8 max-w-7xl w-full ">
          <VerticalTabs />
        </div>


      </div>

      {/* --------------Our Services ------------ */}
      {/* <div className="bg-[#773135] text-white bg-no-repeat  py-16" style={{ backgroundImage: `url(${bg})` }}>
        <div className="flex justify-between items-center px-15">
          <div className="text-left">
            <button className=" text-white border border-white px-4 py-2 rounded-full text-sm" style={{ fontFamily: "Times New Roman" }}>
              Certifications
            </button>
            <h2 className="text-4xl  mt-4" style={{ fontFamily: "Times New Roman" }}>Reliable & High Quality Service</h2>
          </div>

          <div className="flex items-center space-x-2 bg-white text-black p-2 rounded-full shadow-md">
            <button onClick={prevSlide} className="p-2 rounded-full hover:bg-gray-200 transition">
              <ChevronLeft size={20} />
            </button>
            <div className="border-l border-gray-400 h-5"></div>
            <button onClick={nextSlide} className="p-2 rounded-full hover:bg-gray-200 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div> */}

      {/* <div className="overflow-hidden relative flex items-center mt-10 h-[400px] px-5">
          <motion.div
            className="flex space-x-6"
            animate={{ x: `-${currentIndex * 320}px` }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            {certification.concat(certification).map((certification, index) => (
              <div
                key={index}
                className="group w-[290px] p-6 rounded-4xl flex-shrink-0 border border-white h-[400px] relative overflow-hidden"
              >
                <img
                  src={certification.bgImage}
                  alt="Scientist working in lab"
                  className="w-full h-full rounded-2xl"
                /> */}
      {/* <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                ></div> */}

      {/* <div className="absolute top-4 right-4 text-3xl pt-5 pr-5 opacity-100 group-hover:opacity-0 transition duration-300">
                  {service.icon}
                </div> */}

      {/* <h3 className="mt-12 text-xl pt-42  relative" style={{
                  fontFamily: "Times New Roman",
                }}>{certification.title}</h3> 
                 */}

      {/* <div className="mt-4 relative">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                    ➜
                  </button>
                </div> */}
      {/* </div>
            ))}
          </motion.div>
        </div>
      </div> */}


      {/* <div className="bg-[#773135] text-white  py-16">
        <div className="flex justify-between items-center px-15">
          <div className="text-left">
            <button className="bg-[#773135] text-white border border-white px-4 py-2 rounded-full text-sm " style={{ fontFamily: "Times New Roman" }}>
              OUR SERVICE
            </button>
            <h2 className="text-4xl  mt-4" style={{ fontFamily: "Times New Roman" }}>Reliable & High Quality Service</h2>
          </div>

          <div className="flex items-center space-x-2 bg-white text-black p-2 rounded-full shadow-md">
            <button onClick={prevSlide} className="p-2 rounded-full hover:bg-gray-200 transition">
              <ChevronLeft size={20} />
            </button>
            <div className="border-l border-gray-400 h-5"></div>
            <button onClick={nextSlide} className="p-2 rounded-full hover:bg-gray-200 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden relative flex items-center mt-10 h-[400px] px-5">
          <motion.div
            className="flex space-x-6"
            animate={{ x: `-${currentIndex * 320}px` }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            {services.concat(services).map((service, index) => (
              <div
                key={index}
                className="group w-[290px] bg-[#773135] p-6 rounded-4xl flex-shrink-0 border border-white h-[400px] relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                ></div>

                <div className="absolute top-4 right-4 text-3xl pt-5 pr-5 opacity-100 group-hover:opacity-0 transition duration-300">
                  {service.icon}
                </div>

                <h3 className="mt-12 text-xl pt-42  relative" style={{
                  fontFamily: "Times New Roman",
                }}>{service.title}</h3>
                <p className="mt-2 text-sm opacity-75 relative" style={{ fontFamily: "Graphik" }}>We manufacture high-quality active pharmaceutical ingredients (APIs)</p>

                <div className="mt-4 relative">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                    ➜
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div> */}


      <div className="bg-[#544522] text-white py-16" >
        <div className="flex justify-between items-center px-15">
          <div className="text-left">
            <button className=" text-white border border-white px-4 py-2 rounded-full text-sm" style={{ fontFamily: "Times New Roman" }}>
              {currentTranslations.Service}
            </button>
            <h2 className="text-4xl mt-4 " style={{ fontFamily: "Times New Roman" }}>
              {currentTranslations.Manufacturing}</h2>
          </div>

          <div className="flex items-center space-x-2 bg-white text-black p-2 rounded-full shadow-md">
            <button onClick={prevSlide} className="p-2 rounded-full hover:bg-[#F8F2DE] transition">
              <ChevronLeft size={20} />
            </button>
            <div className="border-l border-gray-400 h-5"></div>
            <button onClick={nextSlide} className="p-2 rounded-full hover:bg-[#F8F2DE] transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden relative flex items-center mt-10 h-[400px] px-5">
          <motion.div
            className="flex space-x-6 "
            animate={{ x: `-${currentIndex * 320}px` }}
            transition={{ ease: "linear", duration: 1 }}
          >
            {certification.concat(certification, certification, certification).map((certification, index) => (
              <div
                key={index}
                className="group w-[290px] bg-[] p-6 rounded-4xl flex-shrink-0 border border-white h-[400px] text-white hover:text-[#773135] relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:opacity-100 transition duration-500"
                  style={{
                    backgroundImage: `url(${certification.bgImage})`,
                  }}
                ></div>

                <h3 className="text-2xl relative text-Black text-center pt-70" style={{
                  fontFamily: "Times New Roman",
                }}>{certification.title}</h3>

                {/* 
                <div className="mt-4 relative">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                    ➜
                  </button>
                </div> */}
              </div>
            ))}
          </motion.div>
        </div>
      </div>


      {/* {------------estimate section--------------} */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-6">
        {/* Image Section */}
        <div className="md:w-1/2 p-4">
          <img
            src={homecontact}
            alt="Scientist working"
            className="rounded-3xl  w-full h-[588px]"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 bg-[#773135] text-white p-8 rounded-3xl " style={{ fontFamily: "Times New Roman" }}>
          <button className="border border-white px-4 py-1 rounded-full text-sm mb-4 font-[Open_Sans]"  >
            {currentTranslations.CONTACT_US}
          </button>
          <h2 className="  text-[50px] leading-[60px] text-white mb-6">{currentTranslations.Get}<br /> {currentTranslations.estimate}</h2>

          {/* Form Inputs */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="bg-transparent border border-white p-3 rounded-4xl text-gray-300" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="bg-transparent border border-white p-3 rounded-4xl text-gray-300" />
              <input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} className="bg-transparent border border-white p-3 rounded-4xl text-gray-300" />
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="bg-transparent border border-white p-3 rounded-4xl text-gray-300" />
              <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="bg-transparent border border-white p-3 rounded-4xl text-gray-300"></textarea>
            </div>

            <p className="text-white text-sm mt-4 italic">{currentTranslations.information}<br />{currentTranslations.information1}</p>

            <div className="mt-6 flex justify-end">
              <button type="submit" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-300 hover:text-black">
                {currentTranslations.submit}
              </button>
            </div>
          </form>


          {/* Submit Button */}
          {/* <div className="mt-6 flex justify-end">
            <button className="bg-black text-white px-6 py-3 rounded-full font-Times New Roman flex items-center gap-2 hover:bg-gray-300 hover:text-black h-15">
              Submit →
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;