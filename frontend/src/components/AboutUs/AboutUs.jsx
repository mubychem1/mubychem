import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import Aboutleft from "../../assets/Aboutleft.png";
import Demo1 from "../../assets/Demo1.png";
import fidbg from "../../assets/fidbg.png";
import Nationalbg from "../../assets/Nationalbg.png";
import Simplebg from "../../assets/4Simplebg.png";
import labtest from "../../assets/lab-test-img.png";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import background from "../../assets/background.png";
import { AnimatePresence } from "framer-motion";
import VerticalTabs from '../Home/VerticalTabs';
import translations from '../translater/translations.js'
import { useSelector } from "react-redux"

// const steps = [
//   {
//     id: "01",
//     title: "Sample Collection",
//     description: "Sometimes these types of samples can be collected at home.",
//     icon: "🔬", // Replace with an actual icon if needed
//   },
//   {
//     id: "02",
//     title: "Sample Processing",
//     description:
//       "The results of sample processing can provide crucial information and more.",
//     icon: "🧪",
//   },
//   {
//     id: "03",
//     title: "Accurate Test Results",
//     description:
//       "Laboratory test checks a sample of your blood, or other body fluid.",
//     icon: "🩸",
//   },
//   {
//     id: "04",
//     title: "Reports Delivered",
//     description:
//       "If you would like to request a special service, change your lab detail.",
//     icon: "⌛",
//   },
// ];
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
const reviews = [
  {
    text: {
      en: "Best experience with all products and services and also provided fast customers Support service. Highly recommended Muby Chem Private Limited. #One of the best Pharmaceutical & Speciality Chemicals. Company in India.",
      es: "La mejor experiencia con todos los productos y servicios, y también brindaron un servicio de atención al cliente rápido. Altamente recomendada Muby Chem Private Limited. #Una de las mejores compañías de productos farmacéuticos y químicos especializados en India.",
      ko: "모든 제품과 서비스에서 최고의 경험을 했으며 빠른 고객 지원도 제공되었습니다. Muby Chem Private Limited를 강력히 추천합니다. #인도 최고의 제약 및 특수 화학 회사 중 하나입니다.",
      ru: "Лучший опыт со всеми продуктами и услугами, а также быстрая поддержка клиентов. Настоятельно рекомендую Muby Chem Private Limited. #Одна из лучших фармацевтических и специализированных химических компаний в Индии.",
      fr: "Meilleure expérience avec tous les produits et services, avec un service client rapide. Muby Chem Private Limited est fortement recommandée. #L'une des meilleures entreprises de produits pharmaceutiques et chimiques spécialisés en Inde.",
      ar: "أفضل تجربة مع جميع المنتجات والخدمات، وتم أيضًا تقديم خدمة دعم العملاء بسرعة. أوصي بشدة بشركة Muby Chem Private Limited. #واحدة من أفضل شركات الأدوية والمواد الكيميائية المتخصصة في الهند.",
    },

    name: "Anand Naikawadi",
    role: "Mumbai",
  },
  {
    text: {
      en: "I've been using chemicals for years, and the quality is consistently top-notch. They are reliable and always meet our strict specifications.",
      es: "He estado usando productos químicos durante años y la calidad es siempre de primera. Son confiables y siempre cumplen con nuestras estrictas especificaciones.",
      ko: "수년간 화학제품을 사용해 왔으며, 품질은 항상 최고 수준입니다. 신뢰할 수 있고 항상 우리의 엄격한 기준을 충족합니다.",
      ru: "Я использую химикаты в течение многих лет, и их качество всегда на высшем уровне. Они надёжны и всегда соответствуют нашим строгим требованиям.",
      fr: "J'utilise des produits chimiques depuis des années, et la qualité est toujours excellente. Ils sont fiables et respectent toujours nos spécifications strictes.",
      ar: "لقد كنت أستخدم المواد الكيميائية لسنوات، والجودة دائمًا من الطراز الأول. إنهم موثوقون ويلبون دائمًا مواصفاتنا الصارمة.",
    },
    name: "Komal Patil",
    role: "Mumbai",
  },
  {
    text: {
      en: "Service is excellent. Turn-around times are met and sometimes we get results back quicker.",
      es: "El servicio es excelente. Se cumplen los tiempos de entrega y, a veces, recibimos los resultados incluso más rápido.",
      ko: "서비스가 훌륭합니다. 처리 시간이 지켜지며 때때로 더 빠르게 결과를 받기도 합니다.",
      ru: "Сервис отличный. Сроки выполнения соблюдаются, а иногда мы получаем результаты даже быстрее.",
      fr: "Le service est excellent. Les délais sont respectés et parfois nous recevons les résultats encore plus rapidement.",
      ar: "الخدمة ممتازة. يتم الالتزام بأوقات التسليم، وأحيانًا نحصل على النتائج بشكل أسرع.",
    },
    name: "Gaurav Satre",
    role: "Satara",
  },
  {
    text: {

      en: "The customer service is exceptional. They are always responsive, knowledgeable, and go above and beyond to help us with our needs.",
      es: "El servicio al cliente es excepcional. Siempre responden rápidamente, son expertos y hacen todo lo posible para ayudarnos con nuestras necesidades.",
      ko: "고객 서비스는 탁월합니다. 항상 응답이 빠르고 지식이 풍부하며 우리의 요구를 충족시키기 위해 최선을 다합니다.",
      ru: "Обслуживание клиентов на высшем уровне. Они всегда быстро реагируют, компетентны и делают всё возможное, чтобы помочь нам с нашими потребностями.",
      fr: "Le service client est exceptionnel. Ils sont toujours réactifs, compétents et vont au-delà de nos attentes pour répondre à nos besoins.",
      ar: "خدمة العملاء استثنائية. إنهم دائمًا متجاوبون، على دراية، ويبذلون جهدًا إضافيًا لمساعدتنا في تلبية احتياجاتنا.",
    },
    name: "Mayuri Munagekar",
    role: "Pune ",
  },
  {
    text: {
      en: "We appreciate the fast and accurate quotes we receive which allows us to plan our projects effectively.",
      es: "Agradecemos las cotizaciones rápidas y precisas que recibimos, lo que nos permite planificar nuestros proyectos de manera efectiva.",
      ko: "우리는 빠르고 정확한 견적을 받을 수 있어 프로젝트를 효율적으로 계획할 수 있다는 점에 감사드립니다.",
      ru: "Мы ценим быстрые и точные сметы, которые получаем, что позволяет нам эффективно планировать наши проекты.",
      fr: "Nous apprécions les devis rapides et précis que nous recevons, ce qui nous permet de planifier efficacement nos projets.",
      ar: "نحن نُقدّر السرعة والدقة في العروض التي نتلقاها، مما يساعدنا على تخطيط مشاريعنا بفعالية.",
    } ,
    name: "Aayush Shah",
    role: "Gujarat",
  },
  {
    text: {
      en: "Timely delivery of chemicals expedites the research activities and provided very high quality products with high packing standards.",
      es: "La entrega oportuna de productos químicos acelera las actividades de investigación y proporciona productos de muy alta calidad con altos estándares de embalaje.",
      ko: "화학 제품의 적시 배송은 연구 활동을 촉진하며, 매우 높은 품질의 제품과 우수한 포장 기준을 제공합니다.",
      ru: "Своевременная поставка химикатов ускоряет исследовательскую деятельность и обеспечивает продукцию высокого качества с высокими стандартами упаковки.",
      fr: "La livraison ponctuelle des produits chimiques accélère les activités de recherche et fournit des produits de très haute qualité avec des normes d'emballage élevées.",
      ar: "تُسهم التسليمات في الوقت المناسب للمواد الكيميائية في تسريع الأنشطة البحثية، وتوفر منتجات عالية الجودة بمعايير تغليف مرتفعة.",
    },
    name: "Parinaz Elavia",
    role: "Gujarat",
  },
  {
    text: {
      en: "Muby Chem products are very helpful for our research and the result is excellent.",
      es: "Los productos de Muby Chem son muy útiles para nuestra investigación y los resultados son excelentes.",
      ko: "Muby Chem 제품은 우리의 연구에 매우 유용하며, 결과도 훌륭합니다.",
      ru: "Продукция Muby Chem очень полезна для наших исследований, и результаты превосходные.",
      fr: "Les produits de Muby Chem sont très utiles pour nos recherches et les résultats sont excellents.",
      ar: "منتجات Muby Chem مفيدة جدًا لأبحاثنا، والنتائج ممتازة.",
    }
    ,
    name: "Sachin Mavale",
    role: "Kalyan",
  },
  {
    text: {
      en: "I can confidently say that Muby Chem has become an integral part of our success story. Your contributions have helped us to better serve our customers.",
      es: "Puedo decir con confianza que Muby Chem se ha convertido en una parte integral de nuestra historia de éxito. Sus contribuciones nos han ayudado a servir mejor a nuestros clientes.",
      ko: "Muby Chem은 우리 성공 스토리의 중요한 일부가 되었다고 자신 있게 말할 수 있습니다. 귀사의 기여는 우리가 고객에게 더 나은 서비스를 제공하는 데 큰 도움이 되었습니다.",
      ru: "Я с уверенностью могу сказать, что Muby Chem стал неотъемлемой частью нашей истории успеха. Ваш вклад помог нам лучше обслуживать наших клиентов.",
      fr: "Je peux dire avec confiance que Muby Chem est devenu une partie intégrante de notre réussite. Vos contributions nous ont aidés à mieux servir nos clients.",
      ar: "يمكنني القول بثقة إن Muby Chem أصبحت جزءًا لا يتجزأ من قصة نجاحنا. لقد ساعدتنا مساهماتكم في خدمة عملائنا بشكل أفضل.",
    } ,
    name: "Anna Parera",
    role: "Mumbai",
  },
  {
    text: {
      en: "Your commitment to innovation and continuous improvement has been evident in the way you have adapted to our changing needs and industry trends. Muby Chem team willingness, to explore new solutions and technologies has helped us stay ahead of the curve",
      es: "Su compromiso con la innovación y la mejora continua ha sido evidente en la forma en que se han adaptado a nuestras necesidades cambiantes y a las tendencias de la industria. La disposición del equipo de Muby Chem para explorar nuevas soluciones y tecnologías nos ha ayudado a mantenernos a la vanguardia.",
      ko: "혁신과 지속적인 개선에 대한 귀하의 헌신은 변화하는 우리의 요구와 업계 트렌드에 적응하는 방식에서 분명하게 드러났습니다. Muby Chem 팀의 새로운 솔루션과 기술을 탐색하려는 의지는 우리가 앞서 나가는 데 큰 도움이 되었습니다.",
      ru: "Ваша приверженность инновациям и постоянному совершенствованию очевидна по тому, как вы адаптируетесь к меняющимся потребностям и тенденциям отрасли. Готовность команды Muby Chem исследовать новые решения и технологии помогла нам оставаться впереди.",
      fr: "Votre engagement envers l'innovation et l'amélioration continue est évident dans votre capacité à vous adapter à nos besoins changeants et aux tendances du secteur. La volonté de l'équipe de Muby Chem d'explorer de nouvelles solutions et technologies nous a permis de garder une longueur d'avance.",
      ar: "إن التزامكم بالابتكار والتحسين المستمر واضح في كيفية تكيّفكم مع احتياجاتنا المتغيرة واتجاهات الصناعة. إن استعداد فريق Muby Chem لاستكشاف حلول وتقنيات جديدة ساعدنا على البقاء في المقدمة.",
    }  ,
    name: "Sachin Mavale",
    role: "Maharashtra",
  },
  {
    text: {
      en: "We are pleased with the quality of service Muby Chem provides. We sincerely appreciate their responsiveness and the way they connect business. We look forward to doing business with Muby Chem for years to come Thank You.",
      es: "Estamos satisfechos con la calidad del servicio que ofrece Muby Chem. Agradecemos sinceramente su capacidad de respuesta y la forma en que gestionan los negocios. Esperamos seguir haciendo negocios con Muby Chem durante muchos años. Gracias.",
      ko: "Muby Chem이 제공하는 서비스 품질에 만족합니다. 그들의 빠른 대응과 비즈니스를 연결하는 방식에 진심으로 감사드립니다. 앞으로도 Muby Chem과 오랫동안 비즈니스를 이어가길 기대합니다. 감사합니다.",
      ru: "Мы довольны качеством обслуживания, которое предоставляет Muby Chem. Искренне благодарим за оперативность и профессиональный подход к бизнесу. С нетерпением ждём многолетнего сотрудничества с Muby Chem. Спасибо.",
      fr: "Nous sommes satisfaits de la qualité du service fourni par Muby Chem. Nous apprécions sincèrement leur réactivité et leur manière de gérer les affaires. Nous espérons continuer à travailler avec Muby Chem pendant de nombreuses années. Merci.",
      ar: "نحن راضون عن جودة الخدمة التي تقدمها شركة Muby Chem. نحن نُقدّر بصدق سرعة استجابتهم وطريقتهم في إدارة الأعمال. نتطلع إلى مواصلة التعامل مع Muby Chem لسنوات عديدة قادمة. شكرًا لكم.",
    }
    ,
    name: "Ekansh Devlekar",
    role: "Nashik",
  },

];
const AboutUs = () => {

  const language = useSelector((state) => state.language.language); // Get selected language from Redux
  const currentTranslations = translations[language] || translations.en; // Fallback to English
  const selectedLang = "es"; // or use state: const [selectedLang, setSelectedLang] = useState("en");


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

  const [currentReview, setCurrentReview] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextReview = () => {
    setDirection(1);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <>
      {/* -----------------About Us Banner------------------ */}
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
          className="relative w-full h-auto md:h-auto lg:h-auto overflow-hidden rounded-xl"
        >
          {/* <img
            src={''} // Add your background image path here
            alt="About Us Background"
            className="w-full h-full object-cover"
          /> */}
          <div className="bg-[#fff] p-6 md:p-12">
            <div
              className="relative h-[500px] bg-cover rounded-4xl  overflow-hidden"
              style={{ backgroundImage: `url(${background})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-left">
                <div>
                  <h1 className="text-white text-5xl font-bold mb-4 pl-4 ">
                    {currentTranslations.ABOUT}
                  </h1>
                  <p className="text-white text-lg pl-5 ">
                    Muby Chem Private Limited
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/*--------------------- About Us Content----------------- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-[#fff] p-10 flex flex-col md:flex-row items-center md:items-start  min-h-[600px]" style={{
          fontFamily: "Times New Roman",
        }}>
        {/* Image Section */}
        <motion.div
          variants={zoomIn}
          className="relative w-full p-10 md:w-1/2 flex justify-center md:justify-start h-[560px]"
        >
          <img
            src={Aboutleft} // Replace with your image path
            alt="Scientist working in lab"
            className="rounded-lg  w-full max-w-md md:max-w-lg "
          />
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          variants={fadeInUp}
          className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left"
        >
          {/* <motion.span
            className="inline-block px-4 py-1 text-[11px] leading-[22px] tracking-[0] text-[#001837] 
                     font-[Open_Sans] font-bold border border-[#001837] rounded-full uppercase mb-4 self-start not-italic"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Who We Are
          </motion.span> */}

          <h2 className="text-4xl leading-[60px] tracking-[0] text-[#001837] mt-4" style={{ fontFamily: "Times New Roman" }}>
            Welcome to Muby Chem<br />
            Private Limited
          </h2>
          <p className="text-gray-600 mt-4">
          {currentTranslations.mubyChemDescription1}          </p><br />
          <p className="text-gray-600 mt-4">
          {currentTranslations.mubyChemDescription2}          </p>

        </motion.div>
      </motion.div>
      {/*--------------------- 3 post ----------------- */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className=" bg-[#fff] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  p-6 sm:p-10 "
      >
        {/* Card 1 - Watch Video with Curved Edge */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={Demo1} // Replace with your image path
            alt="Scientist working in lab"
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Play Button */}
          <button
            onClick={() => openModal("https://www.youtube.com/embed/buwI_49ZTp0")}
            className="absolute bottom-4 right-1 p-0.5 rounded-full flex items-center 
               hover:scale-110  transition-transform duration-300 ease-in-out"
          >
            <FaPlay className="text-gray-900 text-lg" />
            <span className="ml-1 text-sm font-semibold">{currentTranslations.watchVideo}</span>
          </button>
        </div>

        {/* Video Popup Modal */}
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

        {/* Card 2 - Staff Info */}
        <div
          className="bg-white p-6 sm:p-4 rounded-2xl shadow-md flex flex-col justify-center items-start w-full h-auto min-h-[300px] relative"
          style={{
            backgroundImage: `url(${fidbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <span className="text-4xl font-bold text-white ml-2">20+</span> */}
          <p className="text-white text-l sm:text-sm leading-tight mt-3 ml-2">
          {currentTranslations.Professional}
            <br />
            {currentTranslations.staff}  
                    </p>
        </div>

        {/* Card 3 - National Science Day */}
        <div
          className="pr-6 sm:p-4 rounded-2xl shadow-lg flex flex-col justify-center  text-right bg-no-repeat w-full h-auto min-h-[300px]"
          style={{
            backgroundImage: `url(${Nationalbg})`,
            backgroundSize: "cover",
            backgroundPosition: "Center",
          }}
        >
          <h2 className="text-2xl text-white font-bold">
          {currentTranslations.National}
                    </h2>
          <p className=" text-white text-lg">25th Feb 2022</p>
          <div className="border-t border-white my-2  w-2/3 mx-30"></div>
          <p className=" text-white mt-2">{currentTranslations.Experts}</p>
        </div>
      </motion.div>
      {/*--------------------- Sample post ----------------- */}



      {/* <div className="bg-[#ecf2ff] p-2"> */}
      {/* <section
          className="bg-[#7B3931] rounded-2xl text-white py-16 px-6 sm:px-8 md:px-10 lg:px-12 bg-no-repeat"
          style={{
            backgroundImage: `url(${Simplebg})`,
            backgroundSize: "60%",
            backgroundPosition: "right",
          }}
        > */}
      {/* Heading */}
      {/* <div className="text-left mb-10">
            <span className="text-sm font-semibold uppercase px-4 py-2 bg-black text-white rounded-full">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
              Get amazing cleaning in <br className="hidden md:block" /> 4 simple steps
            </h2>
          </div> */}


      {/* Steps Section */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-[#7B3931] p-10 sm:p-10 md:p-12 lg:p-16 h-full rounded-xl shadow-lg flex flex-col justify-between text-center relative border border-white"
              >
                <div className="text-4xl sm:text-5xl">{step.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold mt-4">{step.title}</h3>
                <p className="text-sm sm:text-base mt-1 text-gray-300">{step.description}</p>
                <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div> */}

      {/*--------------------- Sample post ----------------- */}
      <div className="bg-[#fff] py-5 px-3 md:px-2 md:py-7 lg:px-3 flex items-center justify-center">
        <div className="max-w-7xl w-full h-full grid grid-cols-1 md:grid-cols-2 bg-[#7B3931] text-white rounded-2xl overflow-hidden">
          <div className="relative">
            <img
              src={labtest}
              alt="Scientist in lab"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-opacity-80 pt-1 sm:p-8 md:p-8 md:ml-5 rounded-lg text-white">
              <span className="text-3xl sm:text-4xl font-bold text-white">460+</span>
              <p className="text-xs sm:text-sm">
              {currentTranslations.Professional}
                <br />
                {currentTranslations.staff}
                              </p>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <p className="text-sm uppercase font-semibold text-gray-400">              {currentTranslations.Client}
            </p>
            <h2 className="text-3xl font-bold my-2">
            {currentTranslations.Trusted}
            </h2>
            <FaQuoteLeft className="text-3xl text-black mb-2" />

            {/* Animated Review Text */}
            <div className="overflow-hidden h-32 relative">
              <AnimatePresence initial={false} custom={direction}>
                <motion.p
                  key={currentReview}
                  initial={{ x: direction * 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -direction * 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg mb-7 p-4 absolute w-full"
                >
{reviews[currentReview].text[selectedLang]}                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center p-6 gap-3">
              <div>
                <h4 className="text-lg font-semibold">{reviews[currentReview].name}</h4>
                <h3 className="text-md text-black">{reviews[currentReview].role}</h3>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end items-center mt-6">
              <div className="flex space-x-2">
                <button
                  onClick={prevReview}
                  className="p-2 bg-gray-700 rounded-full flex items-center justify-center w-10 h-10"
                >
                  <IoIosArrowBack className="text-white text-lg" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-2 bg-gray-700 rounded-full flex items-center justify-center w-10 h-10"
                >
                  <IoIosArrowForward className="text-white text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;