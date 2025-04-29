import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaArrowLeft } from "react-icons/fa";
import { IoMdFlask, IoIosArrowForward } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import microscopeImage from "../../assets/welcomeImg.png";
import pattern from "../../assets/Pattern.png";
import demo1 from "../../assets/demo-1.png";
import VerticalTabs from "./VerticalTabs";
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
import fami from "../../assets/logo/fami-qs.png";
import allergen from "../../assets/logo/allergen-free.png";
import bg from "../../assets/slider-1.jpeg";
import translations from "../translater/translations.js";
import { useSelector } from "react-redux";
import homeImage from "../../assets/home-image.png";
import Pharmaceutical from "../../assets/Pharmaceutical.jpg";
import Nutraceutical from "../../assets/Nutraceutical.jpg";
import biotech from "../../assets/biotech.jpg";
import FoodBeverages from "../../assets/FoodBeverages.jpg";
import PersonalCare from "../../assets/PersonalCare.jpg";
import Veterinary from "../../assets/Veterinary .jpg";
import ActivePharmaceuticalIngredients from "../../assets/ActivePharmaceuticalIngredients.png";
import PharmaExcipients from "../../assets/PharmaExcipients.jpg";
import MineralSalts from "../../assets/MineralSalts.jpg";
import SpecialtyChemicals from "../../assets/SpecialtyChemicals.jpg";
import AminoAcids from "../../assets/AminoAcids.jpg";
import Fragrance from "../../assets/Fragrance.jpg";
import { Helmet } from "react-helmet";


const certification = [
  {
    title: "",
    bgImage: gmp,
  },
  {
    title: "",
    bgImage: glp,
  },
  {
    title: "",
    bgImage: fssc,
  },

  {
    title: "",
    bgImage: fssai,
  },
  {
    title: "",
    bgImage: fami,
  },
  {
    title: "",
    bgImage: kstar,
  },
  {
    title: "",
    bgImage: halal,
  },
  {
    title: " ",
    bgImage: iso,
  },

  {
    title: "",
    bgImage: allergen,
  },
  {
    title: "",
    bgImage: haccp,
  },

  {
    title: "",
    bgImage: glutten,
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
      en: "We supply high-purity APIs, excipients, and mineral salts used in formulations for oral, injectable, and topical pharmaceuticals. Our ingredients meet global pharmacopeial standards including USP, BP, EP, and IP.",
      ru: "Мы производим высококачественные активные фармацевтические ингредиенты (АФИ) и вспомогательные вещества, которые служат строительными блоками для фармацевтических формул. Наши продукты производятся тщательно в контролируемых условиях, чтобы гарантировать эффективность, чистоту и действенность.",
      ko: "당사는 제약 제형의 빌딩 블록 역할을 하는 고품질 활성 제약 성분(API)과 부형제를 제조합니다. 당사의 제품은 효능, 순도 및 효능을 보장하기 위해 통제된 조건에서 신중하게 생산됩니다.",
      es: "Fabricamos ingredientes farmacéuticos activos (API) y excipientes de alta calidad que sirven como componentes básicos para formulaciones farmacéuticas. Nuestros productos se elaboran cuidadosamente en condiciones controladas para garantizar su potencia, pureza y eficacia.",
      fr: "Nous fabriquons des principes actifs pharmaceutiques (API) et des excipients de haute qualité qui servent de base aux formulations pharmaceutiques. Nos produits sont fabriqués avec soin dans des conditions contrôlées pour garantir leur efficacité, leur pureté et leur puissance.",
      ar: "نصنع مكونات صيدلانية فعالة (APIs) ومواد مساعدة عالية الجودة تُشكل اللبنات الأساسية للتركيبات الصيدلانية. تُنتج منتجاتنا بعناية فائقة في ظل ظروف مُراقبة لضمان الفعالية والنقاء والفعالية.",
    },
    icon: "🤖",
    bgImage:
      "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/demo1-slider.jpg",
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
    bgImage:
      "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-04-415x530.jpg",
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
    bgImage:
      "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-01-415x530.jpg",
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
    bgImage:
      "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-05-415x530.jpg",
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
    bgImage:
      "https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/service-img-05-415x530.jpg",
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (name) => (event) => {
    setFormData({ ...formData, [name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null)

    try {
      console.log("aayush");
      
      const response = await axios.post('https://mubychem.onrender.com/api/contact', formData)

      setSubmissionResult({
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });

    } catch (error) {
      console.log("saloni");
      
      console.error('Submission error:', error);

      const errorMessage =
        error.response?.data?.message || 'An unexpected error occurred. Please try again.';

      setSubmissionResult({
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  }



  return (
    <>
    <Helmet>
        <title> Mubychem Pvt. Ltd. | Home Page</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Mubychem Pvt. Ltd. | Home Page",
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
          <div className="bg-[#fff] p-6 md:p-12">
            <div
              className="relative h-[250px] sm:h-[300px] md:h-[340px] bg-cover bg-center rounded-bl-[40px] sm:rounded-bl-[60px] md:rounded-bl-[80px] rounded-tr-[40px] sm:rounded-tr-[60px] md:rounded-tr-[80px] overflow-hidden"
              style={{ backgroundImage: `url(${homeImage})` }}
            >
              {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
              <div className="absolute inset-0 flex items-center bottom-2 sm:bottom-7 justify-left pt-4">
                <div class="bg-white/40 backdrop-blur-sm w-[90%] max-w-2xl pl-2 p-5 rounded-lg">
                  <h1 className="text-[#773135] text-lg sm:text-2xl mb-2 sm:mb-2  ">
                    {currentTranslations.Empowering}
                  </h1>
                  <p className="text-black text-sm sm:text-lg leading-6 pb-5">
                    {currentTranslations.Leading} <br />
                    {currentTranslations.Specialty} <br />
                    {currentTranslations.Active}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ----------Research Section  -------------- */}
      <div className="bg-white flex flex-col md:flex-row items-center justify-between w-full md:px-20 font-['Montserrat',sans-serif]">
        {/* Left Side - Image */}
        <motion.div
          className="w-full sm:w-3/4 md:w-1/2  px-4 sm:px-6 md:px-0 flex justify-center"
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
          className="w-full md:w-2/5 text-gray-800 max-w-lg mt-4 md:mt-[-1px] text-center md:text-left px-4 md:px-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-[24px] sm:text-[26px] md:text-[29px] leading-[36px] sm:leading-[44px] md:leading-[60px] tracking-[0] text-[#001837] normal-case not-italic w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {currentTranslations.welcomeToMubyChem}
          </motion.h2>

          {/* Subheading */}
          <motion.p className="mb-4 text-sm sm:text-base">
            {currentTranslations.obsessedWithQuality}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-justify text-[14px] sm:text-[15px] leading-[1.6] text-[#000] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {currentTranslations.mubyChemDescriptionMain}<b>{currentTranslations.mubychemdes}</b>{currentTranslations.mubychemdes1}<b>{currentTranslations.mubychemdes2}</b>{currentTranslations.mubychemdes3}
          </motion.p>
          <motion.p
            className="text-justify text-[14px] sm:text-[15px] leading-[1.6] text-[#000] mb-6"
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
            {/* Add features here */}
          </motion.div>

          {/* Button */}
          <motion.button
            className="h-12 sm:h-14 mt-4 px-6 py-2 sm:py-3 text-[#001837] border border-[#001837] font-Times New Roman rounded-full  
    flex items-center justify-center gap-2 hover:bg-[#773135] hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/about">{currentTranslations.knowMore}</a>
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>

      {/* Product category section */}
      <div className="pt-6 px-4 md:px-20 md:pt-12">
        <div className="bg-[#773135] p-4 md:px-12 pt-10 pb-5">
          <div className="font-['Montserrat',sans-serif] w-full text-center md:text-left">
            <h2 className="text-2xl md:text-[30px] leading-[40px] md:leading-[50px] font-bold pl-3 text-[#fff]">
              {currentTranslations.Product1}
            </h2>
          </div>

          {/* First Row */}
          <div className="flex flex-col md:flex-row md:justify-between text-center pt-5 gap-4">
            {/* Each Item */}
            <motion.div
              className="w-full md:w-1/3 m-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={ActivePharmaceuticalIngredients}
                alt="Active Pharmaceutical Ingredients"
                className="w-full h-auto max-w-sm sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px] mx-auto"
              />
              <p className="text-[#fff] font-bold text-xl mt-2">
                {currentTranslations.ActivePharmaceuticalIngredients}
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/3 m-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={PharmaExcipients}
                alt="Pharma Excipients"
                className="w-full h-auto max-w-sm sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px] mx-auto"
              />
              <p className="text-[#fff] font-bold text-xl mt-2">
                {currentTranslations.PharmaExcipients}
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/3 m-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={MineralSalts}
                alt="Mineral Salts"
                className="w-full h-auto max-w-sm sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px] mx-auto"
              />
              <p className="text-[#fff] font-bold text-xl mt-2">
                {currentTranslations.MineralSalts}
              </p>
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row md:justify-between text-center pt-5 gap-4">
            <motion.div
              className="w-full md:w-1/3 m-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={SpecialtyChemicals}
                alt="Specialty Chemicals"
                className="w-full h-auto max-w-sm sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px] mx-auto"
              />
              <p className="text-[#fff] font-bold text-xl mt-2">
                {currentTranslations.SpecialtyChemicals}
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/3 m-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={AminoAcids}
                alt="Amino Acids"
                className="w-full h-auto max-w-sm sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px] mx-auto"
              />
              <p className="text-[#fff] font-bold text-xl mt-2">
                {currentTranslations.AminoAcids}
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/3 m-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={Fragrance}
                alt="Fragrance & Flavor Chemicals"
                className="w-full h-auto max-w-sm sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px] mx-auto"
              />
              <p className="text-[#fff] font-bold text-xl mt-2">
                {currentTranslations.FragranceFlavorChemicals}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Markets section */}
      <div className="pt-6 px-4 md:px-20 md:pt-12">
        <div className="bg-[#e7d1bc] p-4 md:px-12 pt-10 pb-5">
          <h2 className="text-2xl md:text-[30px] leading-[40px] md:leading-[50px] font-bold pl-3 text-[#773135]">
            {currentTranslations.MarketsWeServe}
          </h2>

          {/* First Row */}
          <div className="flex flex-col md:flex-row md:justify-between text-center pt-5 gap-4">
            <motion.div
              className="w-full md:w-1/3 m-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={Pharmaceutical}
                alt="Pharmaceuticals"
                className="w-full h-auto max-w-sm sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px] mx-auto"
              />
              <p className="text-[#773135] font-bold text-xl mt-2">
                {currentTranslations.Pharmaceuticals}
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/3 m-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={biotech}
                alt="BioTech"
                className="w-full h-auto max-w-sm sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px] mx-auto"
              />
              <p className="text-[#773135] font-bold text-xl mt-2">
                {currentTranslations.Biopharma}
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/3 m-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={Nutraceutical}
                alt="Nutraceuticals"
                className="w-full h-auto max-w-sm sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px] mx-auto"
              />
              <p className="text-[#773135] font-bold text-xl mt-2">
                {currentTranslations.Nutraceuticals}
              </p>
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row md:justify-between text-center pt-5 gap-4">
            <motion.div
              className="w-full md:w-1/3 m-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={FoodBeverages}
                alt="Food & Beverages"
                className="w-full h-auto max-w-sm sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px] mx-auto"
              />
              <p className="text-[#773135] font-bold text-xl mt-2">
                {currentTranslations.FoodBeverages}
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/3 m-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={PersonalCare}
                alt="Personal Care"
                className="w-full h-auto max-w-sm sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px] mx-auto"
              />
              <p className="text-[#773135] font-bold text-xl mt-2">
                {currentTranslations.PersonalCareCosmetics}
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/3 m-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={Veterinary}
                alt="Veterinary"
                className="w-full h-auto max-w-sm sm:h-[220px] rounded-bl-[80px] rounded-tr-[80px] mx-auto"
              />
              <p className="text-[#773135] font-bold text-xl mt-2">
                {currentTranslations.VeterinaryAnimalHealth}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-[#fff] mt-10">
        <div className="text-center">
          <h2 className="text-[35px] leading-[60px] font-bold tracking-[0] text-[#001837] normal-case not-italic w-full font-['Montserrat',sans-serif]">
            {currentTranslations.accre}
          </h2>
        </div>

        <div className="overflow-hidden relative flex items-center h-[200px] px-5 font-['Montserrat',sans-serif]">
          <motion.div
            className="flex space-x-6 "
            animate={{ x: `-${currentIndex * 320}px` }}
            transition={{ ease: "linear", duration: 1 }}
          >
            {certification
              .concat(certification, certification, certification)
              .map((certification, index) => (
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

                  <h3 className="text-2xl relative text-Black text-center pt-70 font-['Montserrat',sans-serif]">
                    {certification.title}
                  </h3>

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
            className="rounded-3xl  w-full h-[560px] "
          />
        </div>

        {/* Form Section */}

        <div className="bg-[#773135] p-9 rounded-xl shadow-lg w-full max-w-md relative">

          {/* Title */}
          <h2 className="text-2xl font-semibold text-center text-[#fff] mb-6">
            {currentTranslations.Get} {currentTranslations.estimate}
          </h2>

          {/* Form Fields */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-[#fff]">
                {currentTranslations.Name}
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-[#fff] text-[#fff] focus:outline-none focus:border-[#fff] py-1"
                value={formData.name}
                onChange={handleChange('name')}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#fff]">
                {currentTranslations.EmailID}
              </label>
              <input
                type="email"
                className="w-full border-b-2 border-[#fff] text-[#fff]  focus:outline-none focus:border-[#fff] py-1"
                value={formData.email}
                onChange={handleChange('email')}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#fff]">
                {currentTranslations.PhoneNumber}
              </label>
              <input
                type="tel"
                className="w-full border-b-2 border-[#fff] text-[#fff]  focus:outline-none focus:border-[#fff] py-1"
                value={formData.phone}
                onChange={handleChange('phone')}
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-[#fff]">
                {currentTranslations.Product}
              </label>
              <input
                type={"text"}
                className="w-full border-b-2 border-[#fff] text-[#fff] focus:outline-none focus:border-[#ffff] py-1 pr-8"
                value={formData.product}
                onChange={handleChange('product')}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#fff]">
                {currentTranslations.Message}
              </label>
              <textarea
                type="text"
                className="w-full border-b-2 border-[#fff] text-[#fff] focus:outline-none focus:border-[#fff] py-1"
                value={formData.message}
                onChange={handleChange('message')}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#fff] text-black font-semibold rounded-md mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            {submissionResult && (
              <p className={submissionResult.success ? 'text-green-500' : 'text-red-500'}>
                {submissionResult.message}
              </p>
            )}
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Home;