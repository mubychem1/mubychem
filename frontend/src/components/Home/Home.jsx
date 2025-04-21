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
import { useSelector } from "react-redux";
import homeImage from "../../assets/home-image.png";
import Pharmaceutical from"../../assets/Pharmaceutical.jpg";
import Nutraceutical from"../../assets/Nutraceutical.jpg";
import biotech from"../../assets/biotech.jpg";
import FoodBeverages from"../../assets/FoodBeverages.jpg";
import PersonalCare from"../../assets/PersonalCare.jpg";
import Veterinary  from"../../assets/Veterinary .jpg";
import ActivePharmaceuticalIngredients from"../../assets/ActivePharmaceuticalIngredients.jpg";
import PharmaExcipients from"../../assets/PharmaExcipients.jpg";
import MineralSalts from"../../assets/MineralSalts.jpg";
import SpecialtyChemicals from"../../assets/SpecialtyChemicals.jpg";
import AminoAcids from"../../assets/AminoAcids.jpg";
import Fragrance from"../../assets/Fragrance.jpg";


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
  // {
  //   title: '',
  //   bgImage: gptw
  // },
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
      en: "We supply high-purity APIs, excipients, and mineral salts used in formulations for oral, injectable, and topical pharmaceuticals. Our ingredients meet global pharmacopeial standards including USP, BP, EP, and IP.",
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
      en: "Nutraceuticals",
      hi: "फार्मास्युटिकल्स",
      fr: "Nutraceutiques",
      ru: "Нутрицевтики",
      ko: "건강기능식품",
      es: "Nutracéuticos",
      ar: "المكملات الغذائية",
    },
    description: {
      en: "Our ingredients support the development of dietary supplements, functional foods, and wellness products. We offer GRAS and food-grade mineral salts and actives aligned with FSSAI and global standards. ",
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
      en: "Food & Beverage Industry",
      hi: "फार्मास्युटिकल्स",
      fr: "Produits chimiques spécialisés",
      ru: "Специальные химикаты",
      ko: "특수 화학물질",
      es: "Productos químicos especiales",
      ar: "المواد الكيميائية المتخصصة",
    },
    description: {
      en: "We provide food-grade ingredients, mineral salts, and additives used in fortification, preservation, and flavor enhancement. All products meet FCC and relevant food safety certifications.",
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
      en: "Personal Care & Cosmetics",
      hi: "फार्मास्युटिकल्स",
      fr: "Fortifiants minéraux",
      ru: "Минеральные фортификаторы",
      ko: "미네랄 강화제",
      es: "Fortificantes minerales",
      ar: "التحصينات المعدنية",
    },
    description: {
      en: "We offer specialty chemicals and excipients used in skin care, hair care, oral care, and hygiene formulations. Our products comply with cosmetic-grade specifications and are suitable for both leave-on and rinse-off applications. ",
      fr: "Nos fortifiants minéraux sont conçus pour répondre à divers besoins nutritionnels, vous garantissant un apport optimal en minéraux. Grâce à notre technologie de pointe et à notre engagement qualité, nous proposons des fortifiants minéraux conformes aux normes internationales de sécurité, d'efficacité et de durabilité.",
      ru: "Наши минеральные обогатители созданы для удовлетворения различных потребностей в питании, гарантируя, что вы получите нужные минералы в нужных количествах. Благодаря нашим передовым технологиям и приверженности качеству мы предоставляем минеральные обогатители, которые соответствуют мировым стандартам безопасности, эффективности и устойчивости.",
      ko: "당사의 미네랄 강화제는 다양한 영양적 요구를 충족하도록 제작되어 적절한 양의 적절한 미네랄을 섭취할 수 있도록 보장합니다. 최첨단 기술과 품질에 대한 헌신으로 당사는 안전성, 효과성 및 지속 가능성에 대한 글로벌 표준을 충족하는 미네랄 강화제를 제공합니다.",
      es: "Nuestros fortificantes minerales están elaborados para satisfacer diversas necesidades nutricionales, garantizando el aporte de minerales en las cantidades adecuadas. Gracias a nuestra tecnología de vanguardia y nuestro compromiso con la calidad, ofrecemos fortificantes minerales que cumplen con los estándares globales de seguridad, eficacia y sostenibilidad.",
      ar: "مُقوِّياتنا المعدنية مُصمَّمة لتلبية احتياجاتك الغذائية المتنوعة، مما يضمن حصولك على المعادن المناسبة بالكميات المناسبة. بفضل تقنيتنا المتطورة والتزامنا بالجودة، نوفر مُقوِّيات معدنية تُلبي المعايير العالمية للسلامة والفعالية والاستدامة.",
    },
    icon: "🧬",
    bgImage: "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-05-415x530.jpg",
  },
  {
    title: {
      en: "Veterinary & Animal Health",
      hi: "फार्मास्युटिकल्स",
      fr: "Fortifiants minéraux",
      ru: "Минеральные фортификаторы",
      ko: "미네랄 강화제",
      es: "Fortificantes minerales",
      ar: "التحصينات المعدنية",
    },
    description: {
      en: "We supply pharmaceutical-grade and feed-grade ingredients used in veterinary formulations, animal supplements, and nutritional products. Our offerings support animal wellness, therapeutic care, and dietary enrichment.",
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

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const zoomIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
};

const Home = () => {

  const language = useSelector((state) => state.language.language); // Get selected language from Redux
  const currentTranslations = translations[language] || translations.en; // Fallback to English

  const [currentIndex, setCurrentIndex] = useState(0);

  const [showPassword, setShowPassword] = useState(false);


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

      const response = await axios.post("http://mubychem.onrender.com/api/contact", formData);
      alert(response.data.message);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      console.log("mayuri");

      alert("Error submitting form. Try again!");
    }
  };



  return (
    <>
      {/* ----------------- Banner------------------ */}

       <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="relative bg-[#fff] "
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-[340px] md:h-auto lg:h-auto overflow-hidden rounded-bl-[80px] rounded-tr-[80px]"
              >
                {/* <img
                  src={''} // Add your background image path here
                  alt="About Us Background"
                  className="w-full h-full object-cover"
                /> */}
                <div className="bg-[#fff] p-6 md:p-12">
                  <div
                    className="relative h-[340px] bg-cover rounded-bl-[80px] rounded-tr-[80px] overflow-hidden"
                    style={{ backgroundImage: `url(${homeImage})` }}
                  >
                    {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
                    {/* <div className="absolute inset-0 flex items-end bottom-7 pl-9 justify-left">
                      <div>
                        <h1 className="text-[#000] text-3xl font-bold mb-2  ">
                        Empowering Global Health & Industry
                        </h1>
                        <p className="text-black text-lg ">
                        Leading Manufacturer of Specialty Chemicals, Pharmaceutical <br/>Excipients, APIs & Mineral Salts
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            </motion.section>

      {/* ----------Research Section  -------------- */}
      <div className="bg-white flex flex-col md:flex-row items-center justify-between w-full md:px-20 font-['Montserrat',sans-serif]">
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
            className="w-full max-w-[647px] h-auto sm:h-[439px] rounded-xl"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-2/5 text-gray-800 max-w-lg mt-[-1px] md:mt-[-1px] text-center md:text-left"
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
          <motion. h1
            className="text-[32px] leading-[60px] tracking-[0] text-[#001837] normal-case not-italic w-full"
            style={{ fontFamily: "" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {currentTranslations.welcomeToMubyChem}
            {/* Welcome to Muby Chem <br />Private Limited */}
          </motion. h1>
          <motion.p className="mb-4" >{currentTranslations.obsessedWithQuality}</motion.p>

          {/* Description */}
          <motion.p
            className="text-justify text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
            style={{ fontFamily: "" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {currentTranslations.mubyChemDescriptionMain}
          </motion.p>
          <motion.p
            className="text-justify text-[15px] leading-[1.6] text-[#000] normal-case not-italic mb-6"
            style={{ fontFamily: "" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {currentTranslations.mubyChemDescriptionMain2}
          </motion.p>


          {/* Features Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 mb-6 border-t pt-3 border-gray-400"
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
            className=" h-14 mt-4 px-6 py-3 text-[#001837] border border-[#001837] font-Times New Roman rounded-full  
            flex items-center gap-2 hover:bg-[#773135] hover:text-white transition "
            style={{ fontFamily: "" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          ><a href="/about">
              {currentTranslations.knowMore} </a><FaArrowRight />
          </motion.button>
        </motion.div>
      </div>

      {/* Product category section */}
      <div className="pt-6 pl-20 pr-20 md:pt-12">
        <div className="bg-[#773135]  items-center justify-between md:px-12 pt-10 pb-5">
          <div className=" font-['Montserrat', sans-serif]">
            <h2
              className="text-[30px] leading-[50px] font-bold tracking-[0] pl-2 font-['Montserrat', sans-serif] text-[#fff] normal-case not-italic w-full"
              // style={{ fontFamily: " " }}
            >
              Product Divisions
            </h2>
          </div>
          <div className="bg-[#773135] items-center flex justify-between  pt-5 pb-5 text-center">
            {/* Left Side - Image */}
            <motion.div
              className="w-full sm:w-3/4 md:w-1/2 items-center m-2 md:m-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                 src={ActivePharmaceuticalIngredients}
                alt="Active Pharmaceutical Ingredients"
                className="w-full max-w-sm h-auto sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px]"
              />
              <h5 className="text-white font-bold justify-items-center mt-1 text-xl">
                Active Pharmaceutical Ingredients
              </h5>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="w-full sm:w-3/4 md:w-1/2 justify-center text-center m-2 md:m-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={PharmaExcipients}
                alt="Pharma Excipients"
                className="w-full max-w-md h-auto sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px]"
              />
              <h5 className="text-white font-bold justify-items-center mt-1 text-xl">
                Pharma Excipients
              </h5>
            </motion.div>

            <motion.div
              className="w-full sm:w-3/4 md:w-1/2 justify-center text-center m-2 md:m-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                 src={ MineralSalts }
                alt="Mineral Salts"
                className="w-full max-w-md h-auto sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px]"
              />
              <h5 className="text-white font-bold justify-items-center mt-1 text-xl">
                Mineral Salts
              </h5>
            </motion.div>
          </div>
          <div className="items-center flex justify-between  pt-0.5 pb-5 text-center">
            {/* Left Side - Image */}
            <motion.div
              className="w-full sm:w-3/4 md:w-1/2 items-center m-2 md:m-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={SpecialtyChemicals}
                alt="Specialty Chemicals"
                className="w-full max-w-sm h-auto sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px]"
              />
              <h5 className="text-white font-bold justify-items-center mt-1 text-xl">
                Specialty Chemicals
              </h5>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="w-full sm:w-3/4 md:w-1/2 justify-center text-center m-2 md:m-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={AminoAcids}
                alt="Amino Acids"
                className="w-full max-w-md h-auto sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px]"
              />
              <h5 className="text-white font-bold justify-items-center mt-1 text-xl">
                Amino Acids
              </h5>
            </motion.div>

            <motion.div
              className="w-full sm:w-3/4 md:w-1/2 justify-center text-center m-2 md:m-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={Fragrance}   
                alt="Fragrance & Flavor Chemicals"
                className="w-full max-w-md h-auto sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px]"
              />
              <h5 className="text-white font-bold justify-items-center text-xl">
                Fragrance & Flavor Chemicals
              </h5>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Markets section */}
      <div className="pt-6 pl-20 pr-20 md:pt-12">
        <div className="bg-[#e7d1bc] items-center justify-between md:px-12 pt-10 pb-5 ">
          <div className="">
            <h2
              className="text-[30px] leading-[50px] font-bold tracking-[0] pl-3 text-[#773135] normal-case not-italic w-full"
              style={{ fontFamily: " " }}
            >
              Markets We Serve
            </h2>
          </div>
          <div className="bg-[#e7d1bc] items-center flex justify-between  pt-2 pb-5 text-center">
            {/* Left Side - Image */}
            <motion.div
              className="w-full sm:w-3/4 md:w-1/2 items-center m-2 md:m-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                 src={Pharmaceutical}
                alt=" Pharmaceuticals"
                className="w-full max-w-sm h-auto sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px]"
              />
              <h5 className="text-[#773135] font-bold justify-items-center text-xl">
                Pharmaceuticals
              </h5>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="w-full sm:w-3/4 md:w-1/2 justify-center text-center m-2 md:m-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={biotech}
                alt="BioTech"
                className="w-full max-w-md h-auto sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px]"
              />
              <h5 className="text-[#773135] font-bold justify-items-center text-xl">
              Biopharma
              </h5>
            </motion.div>

            <motion.div
              className="w-full sm:w-3/4 md:w-1/2 justify-center text-center m-2 md:m-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={Nutraceutical}
                alt="Nutraceuticals"
                className="w-full max-w-md h-auto sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px]"
              />
              <h5 className="text-[#773135] font-bold justify-items-center text-xl">
                Nutraceuticals 
              </h5>
            </motion.div>
          </div>
          <div className=" items-center flex justify-between  pt-0.5 pb-5 text-center">
            {/* Left Side - Image */}
            <motion.div
              className="w-full sm:w-3/4 md:w-1/2 items-center m-2 md:m-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={FoodBeverages}
                alt="Food & Beverages "
                className="w-full max-w-sm h-auto sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px]"
              />
              <h5 className="text-[#773135] font-bold justify-items-center text-xl">
                 Food & Beverages 
              </h5>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="w-full sm:w-3/4 md:w-1/2 justify-center text-center m-2 md:m-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={PersonalCare}  
                alt="Lab Equipment"
                className="w-full max-w-md h-auto sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px]"
              />
              <h5 className="text-[#773135] font-bold justify-items-center text-xl">
              Personal Care & Cosmetics 
              </h5>
            </motion.div>

            <motion.div
              className="w-full sm:w-3/4 md:w-1/2 justify-center text-center m-2 md:m-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={Veterinary }
                alt="Veterinary & Animal Health"

                className="w-full max-w-md h-auto sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px]"
              />
              <h5 className="text-[#773135] font-bold justify-items-center text-xl">
                 Veterinary & Animal Health
              </h5>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --------------Feature Section --------- */}
      {/* <div className="bg-white flex flex-col items-center py-12 px-3"> */}
      {/* <div className="border border-black px-4 py-1 rounded-full text-sm text text-[#001837] uppercase font-openSans leading-4" style={{
          fontFamily: "Times New Roman",
        }}
        >
          WHY CHOOSE US?
        </div> */}
      {/* < h1 className="text-4xl text-center mt-4 text-gray-900" style={{ fontFamily: " " }}>
          {currentTranslations.Featureheading}<br />{currentTranslations.Featureheading1}
        </ h1>

        <div className="flex items-center mt-8 max-w-7xl w-full">
          <VerticalTabs />
        </div>


      </div> */}

      {/* --------------Our Services ------------ */}
      {/* <div className="bg-[#773135] text-white bg-no-repeat  py-16" style={{ backgroundImage: `url(${bg})` }}>
        <div className="flex justify-between items-center px-15">
          <div className="text-left">
            <button className=" text-white border border-white px-4 py-2 rounded-full text-sm"  >
              Certifications
            </button>
            < h1 className="text-4xl  mt-4"  >Reliable & High Quality Service</ h1>
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
            <button className="bg-[#773135] text-white border border-white px-4 py-2 rounded-full text-sm "  >
              OUR SERVICE
            </button>
            < h1 className="text-4xl  mt-4"  >Reliable & High Quality Service</ h1>
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


      <div className="bg-[#fff] mt-10" >
        <div className="text-center">
          < h1
            className="text-[35px] leading-[60px] font-bold tracking-[0] text-[#001837] normal-case not-italic w-full font-['Montserrat',sans-serif]"
          >
            {currentTranslations.accre}
          </ h1>
        </div>
        {/* <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center px-4 sm:px-15 space-y-4 sm:space-y-0"> */}
        {/* <div className="flex items-center space-x-2 bg-white text-black p-2 rounded-full shadow-md self-start sm:self-auto">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-[#F8F2DE] transition"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="border-l border-gray-400 h-5"></div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-[#F8F2DE] transition"
            >
              <ChevronRight size={20} />
            </button>
          </div> */}
        {/*         </div> */}

        <div className="overflow-hidden relative flex items-center h-[200px] px-5 font-['Montserrat',sans-serif]">
          <motion.div
            className="flex space-x-6 "
            animate={{ x: `-${currentIndex * 320}px` }}
            transition={{ ease: "linear", duration: 1 }}
          >
            {certification.concat(certification, certification, certification).map((certification, index) => (
              <div
                key={index}
                className="group w-[200px] bg-[] p-6 rounded-4xl flex-shrink-0 border border-white h-[200px] text-white hover:text-[#773135] relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:opacity-100 transition duration-500 h-auto"
                  style={{
                    backgroundImage: `url(${certification.bgImage})`,
                  }}
                ></div>

                <h3 className="text-2xl relative text-Black text-center pt-70 font-['Montserrat',sans-serif]" >{certification.title}</h3>

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
      <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 font-['Montserrat',sans-serif]">
        {/* Image Section */}
        <div className="md:w-1/2 p-4">
          <img
            src={homecontact}
            alt="Scientist working"
            className="rounded-3xl  w-full h-[538px]"
          />
        </div>

        {/* Form Section */}
        {/* <div className="flex items-center justify-center min-h-screen bg-[#773135]"> */}
        {/* <div className="flex items-center justify-center min-h-screen bg-[#773135]"> */}
        <div className="bg-[#773135] p-9 rounded-xl shadow-lg w-full max-w-md relative">
            {/* Close button */}
            {/* <button className="absolute top-4 right-4 text-[#773135] text-2xl font-bold">
              ×
            </button> */}

            {/* Title */}
            <h2 className="text-2xl font-semibold text-center text-[#fff] mb-6">
            {currentTranslations.Get} {currentTranslations.estimate}
            </h2>

            {/* Form Fields */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#fff]">
                   Name
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-[#fff] text-[#fff] focus:outline-none focus:border-[#fff] py-1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#fff]">
                   Email address
                </label>
                <input
                  type="email"
                  className="w-full border-b-2 border-[#fff] text-[#fff]  focus:outline-none focus:border-[#fff] py-1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#fff]">
                   Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full border-b-2 border-[#fff] text-[#fff]  focus:outline-none focus:border-[#fff] py-1"
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-[#fff]">
                   Product
                </label>
                 <input
                  type={  "text"}
                  className="w-full border-b-2 border-[#fff] text-[#fff] focus:outline-none focus:border-[#ffff] py-1 pr-8"
                  required
                />
                {/* <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-6 text-[#773135]"
                >
                  👁
                </button>  */}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#fff]">
                  Message
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-[#fff] text-[#fff] focus:outline-none focus:border-[#fff] py-1"
                />
              </div>

              {/* Checkbox and Dummy Text */}
              {/* <div className="flex items-start mt-2">
                <input type="checkbox" className="mr-2 mt-1 text-[#773135]" />
                <p className="text-xs text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod...
                </p>
              </div> */}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-[#fff] text-black font-semibold rounded-md mt-4"
              >
               Submit
              </button>

              {/* Sign in link */}
              {/* <p className="text-sm text-center text-gray-600 mt-4">
                Already have an account?{" "}
                <a href="#" className="text-[#773135] hover:underline">
                  Sing in
                </a>
              </p> */}
            </form>
          </div>
       
      </div>
      {/* </div> */}
    </>
  );
};

export default Home;



