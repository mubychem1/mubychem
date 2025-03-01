import React, { useState } from 'react'
// import Image1 from '../../assets/hero-section1.png'
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { IoMdFlask } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import { ArrowUpRight } from "lucide-react";
import microscopeImage from '../../assets/microscope.png';
// import lab from '../../assets/lab-research.png';
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { motion } from "framer-motion";



const features = [
  "Sample Collection",
  "Covid 19 Vaccine",
  "Genetics Research",
  "Virus Detection",
  "Blood Cell Research",
];

const cards = [
  "https://www.tailwindtap.com/assets/components/vertical-carousel/canada_lake.jpg",
  "https://www.tailwindtap.com/assets/components/vertical-carousel/jungle.jpg",
  "https://www.tailwindtap.com/assets/components/vertical-carousel/mountainvalley.jpg",
  "https://www.tailwindtap.com/assets/components/vertical-carousel/rainforest.jpg",
  "https://www.tailwindtap.com/assets/components/vertical-carousel/sand_background.jpg",
  "https://www.tailwindtap.com/assets/components/vertical-carousel/sunrise.jpg",
  "https://www.tailwindtap.com/assets/components/vertical-carousel/waterfront.jpg",
];

const VerticalCarousel = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div className="h-[500px] overflow-y-scroll snap-y snap-mandatory no-scrollbar">
        {cards.map((data, index) => {
          return (
            <section
              key={index}
              className="h-[500px] max-w-[900px] snap-center"
            >
              <img
                src={data}
                className="bg-cover bg-no-repeat w-full h-full object-cover lg:max-h-[700px] sm:max-h-[500px] max-h-[400px]"
                alt="Carousel images for make scroll on verticle direction"
              />
            </section>
          );
        })}
      </div>
    </div>
  );
};
// export default VerticalCarousel;


const Home = () => {
  const services = [
    {
      title: "Data Technology", description: "Our clinical pathologists are available seven days a week to render diagnoses.",
      icon: <svg fill="#011938" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 479.999 479.999" xml:space="preserve" stroke="#011938" stroke-width="0.0047999900000000005"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M407.699,268.344H258.633c-5.523,0-10,4.477-10,10s4.477,10,10,10h17.608c-6.965,5.063-14.978,8.369-23.8,9.745 c-15.591,2.431-32.245-1.551-46.914-11.213c-14.225-9.353-23.95-23.682-27.386-40.347c-3.436-16.665-0.172-33.678,9.189-47.902 c7.099-10.782,24.866-25.329,37.485-30.998l20.23,39.003c1.222,2.355,3.329,4.128,5.858,4.929 c0.985,0.313,2.003,0.467,3.019,0.467c1.59,0,3.172-0.379,4.608-1.125l1.928-1.001l13.599,26.221 c1.779,3.431,5.27,5.398,8.886,5.398c1.549,0,3.122-0.361,4.593-1.123l32.592-16.891c2.354-1.22,4.128-3.326,4.931-5.855 c0.802-2.528,0.566-5.272-0.654-7.626l-13.614-26.259l4.448-2.309c4.899-2.544,6.811-8.578,4.269-13.479L256.22,45.949 c-1.222-2.355-3.328-4.128-5.857-4.929c-2.53-0.802-5.272-0.565-7.628,0.658l-1.934,1.004L221.474,5.398 c-1.221-2.356-3.329-4.13-5.858-4.931c-2.53-0.803-5.274-0.564-7.63,0.659l-32.591,16.932c-4.898,2.545-6.809,8.579-4.266,13.479 l19.341,37.277l-4.449,2.31c-4.899,2.544-6.811,8.578-4.269,13.479l11.563,22.291c-24.402,10.138-44.908,27.116-59.54,49.374 c-40.037,60.868-23.098,142.981,37.764,183.045c7.656,5.036,15.653,9.149,23.855,12.409v44.394H114.9 c-3.343,0-6.465,1.67-8.319,4.452l-42.603,63.883c-2.047,3.069-2.237,7.014-0.498,10.266c1.74,3.252,5.129,5.282,8.817,5.282 h323.07c3.757,0,7.197-2.106,8.906-5.452c1.708-3.346,1.397-7.368-0.806-10.411l-46.238-63.883 c-1.881-2.598-4.893-4.137-8.1-4.137h-69.857v-39.858c29.876-8.206,57.012-26.85,75.342-54.694 c0.063-0.095,0.123-0.19,0.183-0.288l7.896-12.933h45.008c5.522,0,10-4.477,10-10 C417.699,272.821,413.222,268.344,407.699,268.344z M287.21,218.038l-8.55-16.486l14.829-7.707l8.557,16.505L287.21,218.038z M297.152,168.312l-38.957,20.229l-22.26-42.914l38.811-20.516L297.152,168.312z M241.147,65.085 c0.261-0.135,0.513-0.286,0.759-0.442l1.165-0.605l22.467,43.319l-38.813,20.516l-22.617-43.604l4.285-2.225 c0.054-0.026,0.108-0.045,0.162-0.072L241.147,65.085z M208.325,23.489l14.726,28.41l-14.83,7.7l-14.736-28.401L208.325,23.489z M344.024,416.117L375.784,460H90.986l29.264-43.883h85.144h63.879H344.024z M215.393,396.117v-35.029h43.879v35.029H215.393z M337.817,290.707c-21.543,32.619-57.332,50.33-93.799,50.327c-21.15-0.001-42.536-5.962-61.486-18.427 c-51.649-34.001-66.026-103.689-32.046-155.35c12.729-19.364,30.697-34.003,52.083-42.521l13.033,25.126 c-16.042,7.56-35.971,24.087-44.977,37.768c-12.299,18.688-16.586,41.039-12.071,62.937c4.515,21.901,17.295,40.73,35.979,53.015 c15.142,9.974,32.116,15.203,48.854,15.203c4.068,0,8.127-0.31,12.137-0.935c19.541-3.047,36.681-13.465,48.829-29.506h34.907 L337.817,290.707z"></path> </g> </g> </g></svg>
    },
    {
      title: "Materials Analysis",
      description: "24/7 access to real-time, study-wide data for your project teams, our labs.",
      icon: <svg fill="#011938" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.08 512.08" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M473.92,155.458c-41.92-41.92-105.493-49.28-155.093-22.08c-13.12-76.373-80-133.333-158.187-133.333 C72.32,0.045,0.427,71.725,0,159.832c0,0.107,0,0.107,0,0.213c0,0.107,0,0.107,0,0.107s0,0.32,0,0.533 c0,78.293,56.96,145.067,133.333,158.187c-34.56,63.253-11.307,142.613,51.947,177.173 c50.773,27.733,113.707,18.773,154.773-22.08L473.92,340.098C524.8,289.112,524.8,206.552,473.92,155.458z M160.533,21.378 c69.653,0,128.96,51.947,138.027,120.853c0.213,1.28,0.64,2.56,1.28,3.627c-2.133,1.707-4.16,3.627-6.187,5.44 c-1.707-1.173-3.627-1.92-5.76-2.027H21.867C27.627,77.805,87.573,21.378,160.533,21.378z M21.867,170.712H273.92L155.307,289.218 c-3.307,3.413-6.507,6.933-9.493,10.667c-1.067-0.533-2.24-0.96-3.307-1.173C76.8,290.178,26.56,235.992,21.867,170.712z M324.907,458.818c-43.093,42.24-112.213,41.6-154.453-1.387c-41.707-42.453-41.707-110.507,0-152.96l59.413-59.413 L333.76,348.952l50.56,50.56L324.907,458.818z M458.773,325.058l-59.413,59.413l-50.56-50.56L244.907,230.018l59.413-59.413 c42.667-42.667,111.787-42.667,154.453,0C501.44,213.272,501.44,282.392,458.773,325.058z"></path> </g> </g> </g></svg>
    },
    {
      title: "Flow Cytometry",
      description: "Visibility of the sample and the whole chain of custody beginning at collection.",
      icon: <svg fill="#011938" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 496" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M80,392c-13.232,0-24,10.768-24,24s10.768,24,24,24s24-10.768,24-24S93.232,392,80,392z M80,424c-4.416,0-8-3.584-8-8 c0-4.416,3.584-8,8-8s8,3.584,8,8C88,420.416,84.416,424,80,424z"></path> <path d="M440,136V80h16V64h-72h-56v16h16v56h-56v64h24v296h16V200h16v200c0,26.472,21.528,48,48,48s48-21.528,48-48V200h16v296 h16V200h24v-64H440z M360,80h64v56h-64V80z M424,400c0,17.648-14.352,32-32,32c-12.104,0-22.536-6.832-27.968-16.768 C384.464,411.44,400,393.512,400,372c0-22.904-17.608-41.768-40-43.8V256h20.448c-2.752,4.728-4.448,10.144-4.448,16 c0,17.648,14.352,32,32,32c5.856,0,11.272-1.696,16-4.448V400z M360,399.592v-55.184c13.536,1.96,24,13.528,24,27.592 S373.536,397.632,360,399.592z M408,288c-8.824,0-16-7.176-16-16c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16 C424,280.824,416.824,288,408,288z M424,240h-64v-40h64V240z M480,184H304v-32h176V184z"></path> <path d="M408,40c0-13.232-10.768-24-24-24s-24,10.768-24,24s10.768,24,24,24S408,53.232,408,40z M384,48c-4.416,0-8-3.584-8-8 s3.584-8,8-8c4.416,0,8,3.584,8,8S388.416,48,384,48z"></path> <path d="M448,40c22.056,0,40-17.944,40-40h-16c0,13.232-10.768,24-24,24s-24-10.768-24-24h-16C408,22.056,425.944,40,448,40z"></path> <path d="M176,230.144V40h16V24h-16h-32V0h-16v24H96H80v16h16v190.144C39.168,247.584,0,300.12,0,360c0,74.992,61.008,136,136,136 s136-61.008,136-136C272,300.12,232.832,247.584,176,230.144z M256,360c0,66.168-53.832,120-120,120S16,426.168,16,360 c0-5.416,0.464-10.744,1.168-16h127.64c3.72,18.232,19.872,32,39.192,32s35.472-13.768,39.192-32h31.64 C255.536,349.256,256,354.584,256,360z M161.472,344h45.056c-3.312,9.288-12.112,16-22.528,16S164.784,353.288,161.472,344z M20.416,328c11.24-40.52,43.288-73.152,85.584-84.056l6-1.552V40h48v202.392l6,1.552c42.296,10.904,74.344,43.536,85.584,84.056 H20.416z"></path> </g> </g> </g> </g></svg>
    },
    {
      title: "Lab Technician",
      description: "The newest automation technology is used in our labs to improve data quality.",
      icon: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve" fill="#011938" stroke="#011938"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g display="none"> <path display="inline" d="M20.01,36.5c-0.277,0-0.537-0.137-0.693-0.368L9.468,21.529c-1.171-1.861-1.79-3.993-1.79-6.162 C7.678,8.824,13.206,3.5,20,3.5c6.795,0,12.322,5.324,12.322,11.867c0,2.164-0.612,4.284-1.77,6.129l-9.851,14.636 C20.547,36.363,20.287,36.5,20.01,36.5L20.01,36.5z M20,5.17c-5.873,0-10.652,4.574-10.652,10.197c0,1.854,0.525,3.669,1.52,5.251 l9.14,13.55l9.146-13.581c0.981-1.566,1.499-3.371,1.499-5.22C30.652,9.744,25.873,5.17,20,5.17L20,5.17z"></path> <path display="inline" d="M20,20.857c-3.159,0-5.728-2.482-5.728-5.535c0-3.051,2.569-5.534,5.728-5.534s5.729,2.483,5.729,5.534 C25.729,18.375,23.158,20.857,20,20.857L20,20.857z M20,11.458c-2.237,0-4.057,1.734-4.057,3.864c0,2.13,1.82,3.865,4.057,3.865 s4.058-1.734,4.058-3.865C24.058,13.192,22.236,11.458,20,11.458L20,11.458z"></path> </g> <path display="none" d="M36.705,34.289L26.059,23.615c3.918-4.69,3.688-11.708-0.707-16.114C23.1,5.243,20.104,4,16.919,4 S10.74,5.243,8.488,7.501c-4.647,4.66-4.647,12.241,0,16.899c2.253,2.257,5.248,3.5,8.431,3.5c2.866,0,5.573-1.015,7.728-2.86 l10.639,10.665C35.479,35.902,35.738,36,35.994,36s0.514-0.098,0.709-0.293C37.096,35.316,37.097,34.68,36.705,34.289z M9.766,23.126c-3.945-3.958-3.945-10.395,0-14.351c1.912-1.914,4.452-2.97,7.153-2.97s5.243,1.056,7.153,2.97 c3.946,3.956,3.946,10.394,0,14.351c-1.91,1.914-4.452,2.969-7.153,2.969S11.678,25.04,9.766,23.126z"></path> <path display="none" d="M25.38,34.848c-0.066,0-0.136-0.009-0.206-0.024l-10.498-2.561l-10.61,2.561 c-0.069,0.016-0.139,0.024-0.205,0.024c-0.191,0-0.38-0.064-0.532-0.184C3.12,34.5,3,34.252,3,33.986V8.635 c0-0.397,0.27-0.741,0.657-0.836l10.76-2.623l0.407,0.003l10.504,2.558l10.607-2.561c0.065-0.016,0.135-0.023,0.203-0.023 c0.195,0,0.38,0.063,0.533,0.183C36.881,5.499,37,5.746,37,6.012v25.352c0,0.397-0.27,0.741-0.656,0.837l-10.759,2.622 C25.516,34.839,25.446,34.848,25.38,34.848L25.38,34.848z M15.481,30.688l9.039,2.203V9.311l-9.039-2.203V30.688z M26.24,9.311 v23.58l9.039-2.202V7.108L26.24,9.311z M4.721,9.311v23.58l9.039-2.202V7.108L4.721,9.311z"></path> <g display="none"> <path display="inline" d="M9.708,35C7.112,35,5,32.893,5,30.303c0-2.592,2.112-4.699,4.708-4.699c2.595,0,4.707,2.107,4.707,4.699 C14.415,32.893,12.303,35,9.708,35L9.708,35z M9.708,27.445c-1.578,0-2.863,1.281-2.863,2.857c0,1.574,1.285,2.855,2.863,2.855 c1.578,0,2.861-1.281,2.861-2.855C12.568,28.727,11.285,27.445,9.708,27.445L9.708,27.445z"></path> <path display="inline" d="M24.574,35c-0.621,0-1.125-0.505-1.125-1.126c0-9.552-7.771-17.324-17.323-17.324 C5.505,16.55,5,16.045,5,15.425s0.505-1.126,1.126-1.126c10.792,0,19.573,8.781,19.573,19.575C25.699,34.495,25.193,35,24.574,35 L24.574,35z"></path> <path display="inline" d="M33.916,35c-0.597,0-1.082-0.486-1.082-1.084c0-14.75-12-26.751-26.751-26.751 C5.486,7.165,5,6.68,5,6.083C5,5.486,5.486,5,6.083,5C22.027,5,35,17.972,35,33.916C35,34.514,34.514,35,33.916,35L33.916,35z"></path> </g> <g display="none"> <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M20,29.616c-6.911,0-13.412-3.681-17-9.615 c3.588-5.935,10.089-9.617,17-9.617c6.91,0,13.412,3.682,17,9.617C33.412,25.936,26.91,29.616,20,29.616L20,29.616z M19.998,12.254 c-5.817,0-11.309,2.848-14.687,7.618l-0.088,0.125l0.088,0.124c3.378,4.77,8.87,7.618,14.687,7.618 c5.82,0,11.311-2.849,14.687-7.618l0.089-0.124l-0.089-0.125C31.309,15.103,25.818,12.254,19.998,12.254L19.998,12.254z"></path> <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M19.987,13.521c-3.574,0-6.478,2.9-6.478,6.479 c0,3.579,2.904,6.478,6.478,6.478c3.581,0,6.478-2.898,6.478-6.478C26.465,16.42,23.568,13.521,19.987,13.521z M19.987,24.857 c-2.68,0-4.858-2.175-4.858-4.858s2.178-4.859,4.858-4.859c2.686,0,4.858,2.175,4.858,4.859S22.673,24.857,19.987,24.857z"></path> </g> <path display="none" d="M7.336,35.5c-0.399,0-0.725-0.325-0.725-0.726v-7.599c0-0.4,0.326-0.725,0.725-0.725h3.181v-6.336 c0-0.342,0.276-0.619,0.619-0.619h8.247v-5.949h-3.181c-0.398,0-0.725-0.325-0.725-0.726V5.223c0-0.399,0.326-0.723,0.725-0.723 h7.598c0.398,0,0.725,0.324,0.725,0.723v7.599c0,0.401-0.326,0.726-0.725,0.726H20.62v5.949h8.245c0.341,0,0.618,0.277,0.618,0.619 v6.336h3.182c0.397,0,0.724,0.324,0.724,0.725v7.599c0,0.399-0.326,0.725-0.724,0.725h-7.599c-0.4,0-0.726-0.325-0.726-0.725v-7.599 c0-0.4,0.325-0.725,0.726-0.725h3.179v-5.717H11.754v5.717h3.18c0.399,0,0.725,0.324,0.725,0.725v7.599 c0,0.4-0.325,0.726-0.725,0.726H7.336z M8.061,34.051h6.149V27.9H8.061V34.051z M25.79,34.051h6.149V27.9H25.79V34.051z M16.927,12.099h6.146V5.949h-6.146V12.099z"></path> <g display="none"> <path display="inline" d="M11.018,35.01c-0.402,0-0.736-0.314-0.759-0.717L8.879,9.946H5.75c-0.419,0-0.76-0.342-0.76-0.76 c0-0.419,0.341-0.761,0.76-0.761h3.59L9.495,8.45L9.6,8.426h5.171V5.75c0-0.419,0.34-0.76,0.76-0.76h8.939 c0.419,0,0.76,0.341,0.76,0.76v2.676h5.174l0.175,0.028l0.118-0.028h3.554c0.419,0,0.76,0.342,0.76,0.761 c0,0.418-0.341,0.76-0.76,0.76h-3.128l-1.36,24.346c-0.023,0.402-0.356,0.718-0.759,0.718H11.018z M11.735,33.49h16.549L29.6,9.946 H10.4L11.735,33.49z M16.29,8.426h7.42V6.51h-7.42V8.426z"></path> <path display="inline" d="M14.302,12.201c-0.249,0.012-0.435,0.102-0.57,0.252c-0.135,0.152-0.203,0.348-0.192,0.551l0.998,17.608 c0.024,0.401,0.357,0.716,0.759,0.716v0.19l0.045-0.19c0.417-0.024,0.737-0.385,0.715-0.804l-0.999-17.606 C15.034,12.516,14.702,12.201,14.302,12.201L14.302,12.201z"></path> <path display="inline" d="M25.709,12.202c-0.445,0-0.776,0.314-0.8,0.716l-1,17.606c-0.022,0.419,0.298,0.779,0.717,0.804 l0.044,0.19v-0.19c0.402,0,0.735-0.314,0.757-0.716l1.001-17.608c0.011-0.203-0.058-0.398-0.192-0.551 c-0.136-0.15-0.321-0.24-0.523-0.251C25.711,12.202,25.71,12.202,25.709,12.202L25.709,12.202z"></path> <path display="inline" d="M20,12.201c-0.419,0-0.76,0.341-0.76,0.76v17.607c0,0.419,0.341,0.76,0.76,0.76s0.76-0.341,0.76-0.76 V12.961C20.76,12.542,20.419,12.201,20,12.201L20,12.201z"></path> </g> <g display="none"> <path display="inline" d="M8.236,15.765C5.901,15.765,4,17.665,4,20c0,2.336,1.901,4.234,4.236,4.234 c2.336,0,4.235-1.898,4.235-4.234C12.472,17.665,10.572,15.765,8.236,15.765z M8.236,22.824c-1.557,0-2.823-1.268-2.823-2.824 c0-1.557,1.267-2.824,2.823-2.824c1.558,0,2.822,1.267,2.822,2.824C11.059,21.557,9.794,22.824,8.236,22.824z"></path> <path display="inline" d="M20,15.765c-2.334,0-4.236,1.899-4.236,4.235c0,2.336,1.902,4.234,4.236,4.234 c2.337,0,4.236-1.898,4.236-4.234C24.236,17.665,22.337,15.765,20,15.765z M20,22.824c-1.557,0-2.822-1.268-2.822-2.824 c0-1.557,1.266-2.824,2.822-2.824c1.559,0,2.822,1.267,2.822,2.824C22.822,21.557,21.559,22.824,20,22.824z"></path> <path display="inline" d="M31.764,15.765c-2.334,0-4.235,1.899-4.235,4.235c0,2.336,1.901,4.234,4.235,4.234 C34.101,24.234,36,22.336,36,20C36,17.665,34.101,15.765,31.764,15.765z M31.764,22.824c-1.556,0-2.822-1.268-2.822-2.824 c0-1.557,1.267-2.824,2.822-2.824c1.559,0,2.823,1.267,2.823,2.824C34.587,21.557,33.322,22.824,31.764,22.824z"></path> </g> <path display="none" d="M33.125,19.125H8.98L20.841,7.5c0.345-0.338,0.351-0.892,0.013-1.237s-0.892-0.35-1.237-0.012L6.262,19.339 C6.095,19.503,6,19.729,6,19.965c0,0.005,0,0.011,0,0.017C6,19.989,6,19.994,6,20c0,0.319,0.171,0.598,0.427,0.751L19.69,33.75 c0.17,0.167,0.392,0.25,0.613,0.25c0.227,0,0.453-0.088,0.625-0.262c0.338-0.346,0.332-0.9-0.013-1.238L9.055,20.875h24.07 C33.607,20.875,34,20.483,34,20S33.607,19.125,33.125,19.125z"></path> <path display="none" d="M34,20c0-0.32-0.172-0.599-0.428-0.751L20.31,6.25c-0.345-0.338-0.899-0.333-1.237,0.012 S18.738,7.161,19.084,7.5l11.861,11.625H6.875C6.393,19.125,6,19.517,6,20s0.393,0.875,0.875,0.875H31.02L19.158,32.5 c-0.344,0.339-0.35,0.893-0.012,1.238C19.318,33.912,19.545,34,19.771,34c0.221,0,0.442-0.083,0.612-0.25l13.353-13.089 C33.904,20.497,34,20.271,34,20.035c0-0.005-0.001-0.011-0.001-0.017C33.999,20.011,34,20.006,34,20z"></path> <path display="none" d="M33.75,19.616L20.66,6.262C20.496,6.095,20.271,6,20.037,6c-0.007,0-0.014,0.001-0.02,0.001S20.006,6,20,6 c-0.32,0-0.598,0.172-0.751,0.428L6.25,19.69c-0.338,0.345-0.332,0.899,0.013,1.237c0.171,0.167,0.391,0.25,0.612,0.25 c0.227-0.001,0.454-0.088,0.625-0.263l11.625-11.86v24.07C19.125,33.607,19.518,34,20,34c0.483,0,0.875-0.393,0.875-0.875V8.981 L32.5,20.841c0.338,0.345,0.893,0.35,1.237,0.013C34.082,20.515,34.088,19.96,33.75,19.616z"></path> <path display="none" d="M33.737,19.071c-0.345-0.337-0.899-0.332-1.237,0.014l-11.625,11.86V6.875C20.875,6.392,20.483,6,20,6 c-0.482,0-0.875,0.392-0.875,0.875V31.02L7.5,19.159c-0.338-0.345-0.892-0.351-1.237-0.013c-0.345,0.338-0.351,0.892-0.013,1.237 l13.09,13.354C19.504,33.905,19.729,34,19.965,34c0.005,0,0.012-0.001,0.018-0.001C19.989,33.999,19.994,34,20,34 c0.32,0,0.599-0.172,0.752-0.428L33.75,20.31C34.088,19.965,34.082,19.41,33.737,19.071z"></path> <path display="none" d="M26.714,34c-0.222,0-0.442-0.083-0.612-0.251l-13.429-13.16c-0.167-0.164-0.262-0.39-0.262-0.624 c0-0.236,0.095-0.462,0.262-0.626L26.027,6.251c0.344-0.339,0.898-0.334,1.237,0.011c0.338,0.346,0.331,0.899-0.013,1.237 L14.536,19.965l12.79,12.536c0.345,0.337,0.351,0.892,0.013,1.237C27.168,33.912,26.939,34,26.714,34z"></path> <path display="none" d="M13.36,34c-0.225,0-0.453-0.088-0.624-0.262c-0.339-0.346-0.333-0.899,0.01-1.237l12.717-12.466 L12.673,7.499c-0.345-0.339-0.35-0.893-0.013-1.237c0.34-0.344,0.894-0.35,1.238-0.012l13.429,13.161 c0.167,0.164,0.262,0.39,0.262,0.624c0,0.236-0.094,0.461-0.262,0.625L13.974,33.75C13.803,33.917,13.581,34,13.36,34z"></path> <path display="none" d="M5.938,28.131c-0.236,0-0.474-0.089-0.657-0.269c-0.368-0.362-0.375-0.956-0.012-1.325L19.37,12.149 c0.176-0.179,0.417-0.28,0.669-0.28s0.493,0.101,0.669,0.28l14.023,14.308c0.363,0.369,0.356,0.963-0.012,1.326 c-0.37,0.361-0.965,0.356-1.326-0.014L20.039,14.146L6.608,27.85C6.423,28.037,6.182,28.13,5.938,28.131z"></path> <path display="none" d="M19.962,28.131c-0.253,0-0.493-0.102-0.67-0.281L5.27,13.542c-0.364-0.37-0.357-0.963,0.011-1.326 c0.372-0.362,0.965-0.356,1.326,0.013l13.354,13.625l13.433-13.704c0.361-0.37,0.954-0.376,1.326-0.015 c0.368,0.363,0.375,0.957,0.013,1.327L20.632,27.85C20.454,28.029,20.214,28.131,19.962,28.131z"></path> <g display="none"> <path display="inline" d="M6.72,34C6.323,34,6,33.678,6,33.281v-5.811c0-0.396,0.323-0.721,0.72-0.721h5.81 c0.397,0,0.72,0.324,0.72,0.721v5.811c0,0.396-0.323,0.719-0.72,0.719H6.72z M7.439,32.561h4.371v-4.371H7.439V32.561z"></path> <path display="inline" d="M17.095,34c-0.396,0-0.72-0.322-0.72-0.719v-5.811c0-0.396,0.323-0.721,0.72-0.721h5.811 c0.396,0,0.72,0.324,0.72,0.721v5.811c0,0.396-0.323,0.719-0.72,0.719H17.095z M17.815,32.561h4.371v-4.371h-4.371V32.561z"></path> <path display="inline" d="M27.471,34c-0.397,0-0.721-0.322-0.721-0.719v-5.811c0-0.396,0.323-0.721,0.721-0.721h5.81 c0.396,0,0.72,0.324,0.72,0.721v5.811C34,33.678,33.677,34,33.28,34H27.471z M28.189,32.561h4.371v-4.371h-4.371V32.561z"></path> <path display="inline" d="M6.72,23.625c-0.396,0-0.72-0.322-0.72-0.719v-5.811c0-0.397,0.323-0.72,0.72-0.72h5.81 c0.397,0,0.72,0.323,0.72,0.72v5.811c0,0.396-0.323,0.719-0.72,0.719H6.72z M7.439,22.186h4.371v-4.371H7.439V22.186z"></path> <path display="inline" d="M17.095,23.625c-0.396,0-0.72-0.322-0.72-0.719v-5.811c0-0.397,0.323-0.72,0.72-0.72h5.811 c0.396,0,0.72,0.323,0.72,0.72v5.811c0,0.396-0.323,0.719-0.72,0.719H17.095z M17.815,22.186h4.371v-4.371h-4.371V22.186z"></path> <path display="inline" d="M27.471,23.625c-0.397,0-0.721-0.322-0.721-0.719v-5.811c0-0.397,0.323-0.72,0.721-0.72h5.81 c0.396,0,0.72,0.323,0.72,0.72v5.811c0,0.396-0.323,0.719-0.72,0.719H27.471z M28.189,22.186h4.371v-4.371h-4.371V22.186z"></path> <path display="inline" d="M6.72,13.25C6.323,13.25,6,12.927,6,12.531v-5.81C6,6.324,6.323,6,6.72,6h5.81 c0.397,0,0.72,0.323,0.72,0.72v5.81c0,0.396-0.323,0.719-0.72,0.719H6.72z M7.439,11.811h4.371V7.439H7.439V11.811z"></path> <path display="inline" d="M17.095,13.25c-0.396,0-0.72-0.322-0.72-0.719v-5.81c0-0.397,0.323-0.72,0.72-0.72h5.811 c0.396,0,0.72,0.323,0.72,0.72v5.81c0,0.396-0.323,0.719-0.72,0.719H17.095z M17.815,11.811h4.371V7.439h-4.371V11.811z"></path> <path display="inline" d="M27.471,13.25c-0.397,0-0.721-0.322-0.721-0.719v-5.81c0-0.397,0.323-0.72,0.721-0.72h5.81 C33.677,6,34,6.324,34,6.721v5.81c0,0.396-0.323,0.719-0.72,0.719H27.471z M28.189,11.811h4.371V7.439h-4.371V11.811z"></path> </g> <g display="none"> <path display="inline" d="M16.225,8.013h16.949C33.63,8.013,34,7.642,34,7.185c0-0.455-0.37-0.826-0.826-0.826H16.225 c-0.457,0-0.827,0.371-0.827,0.826C15.398,7.642,15.768,8.013,16.225,8.013z"></path> <path display="inline" d="M33.174,11.423H16.225c-0.457,0-0.827,0.369-0.827,0.826s0.37,0.826,0.827,0.826h16.949 c0.456,0,0.826-0.369,0.826-0.826S33.63,11.423,33.174,11.423z"></path> <path display="inline" d="M33.174,16.692H16.225c-0.457,0-0.827,0.371-0.827,0.827s0.37,0.827,0.827,0.827h16.949 c0.456,0,0.826-0.371,0.826-0.827S33.63,16.692,33.174,16.692z"></path> <path display="inline" d="M33.174,21.653H16.225c-0.457,0-0.827,0.371-0.827,0.827s0.37,0.827,0.827,0.827h16.949 c0.456,0,0.826-0.371,0.826-0.827S33.63,21.653,33.174,21.653z"></path> <path display="inline" d="M33.174,27.027H16.225c-0.457,0-0.827,0.37-0.827,0.827c0,0.456,0.37,0.826,0.827,0.826h16.949 c0.456,0,0.826-0.37,0.826-0.826C34,27.397,33.63,27.027,33.174,27.027z"></path> <path display="inline" d="M33.174,31.987H16.225c-0.457,0-0.827,0.371-0.827,0.828c0,0.455,0.37,0.826,0.827,0.826h16.949 c0.456,0,0.826-0.371,0.826-0.826C34,32.358,33.63,31.987,33.174,31.987z"></path> <path display="inline" d="M6.717,33.53C6.322,33.53,6,33.21,6,32.815v-4.961c0-0.396,0.322-0.717,0.717-0.717h4.961 c0.395,0,0.717,0.321,0.717,0.717v4.961c0,0.395-0.322,0.715-0.717,0.715H6.717z M7.434,32.098h3.526V28.57H7.434V32.098z"></path> <path display="inline" d="M6.717,23.196C6.322,23.196,6,22.876,6,22.48V17.52c0-0.396,0.322-0.717,0.717-0.717h4.961 c0.395,0,0.717,0.321,0.717,0.717v4.961c0,0.396-0.322,0.716-0.717,0.716H6.717z M7.434,21.763h3.526v-3.527H7.434V21.763z"></path> <path display="inline" d="M6.717,12.862C6.322,12.862,6,12.541,6,12.146V7.185C6,6.79,6.322,6.468,6.717,6.468h4.961 c0.395,0,0.717,0.322,0.717,0.717v4.961c0,0.396-0.322,0.717-0.717,0.717H6.717z M7.434,11.429h3.526V7.901H7.434V11.429z"></path> </g> <g display="none"> <path display="inline" d="M34.063,10.625H5.938C5.419,10.625,5,10.204,5,9.688C5,9.17,5.419,8.75,5.938,8.75h28.125 C34.58,8.75,35,9.17,35,9.688C35,10.204,34.58,10.625,34.063,10.625"></path> <path display="inline" d="M34.063,20.938H5.938C5.419,20.938,5,20.517,5,20c0-0.518,0.419-0.938,0.938-0.938h28.125 C34.58,19.063,35,19.482,35,20C35,20.517,34.58,20.938,34.063,20.938"></path> <path display="inline" d="M34.063,31.25H5.938C5.419,31.25,5,30.829,5,30.313c0-0.518,0.419-0.938,0.938-0.938h28.125 c0.518,0,0.938,0.42,0.938,0.938C35,30.829,34.58,31.25,34.063,31.25"></path> <path display="inline" d="M34.063,20.938H5.938C5.419,20.938,5,20.517,5,20c0-0.518,0.419-0.938,0.938-0.938h28.125 C34.58,19.063,35,19.482,35,20C35,20.517,34.58,20.938,34.063,20.938"></path> </g> <path display="none" d="M21.414,20L33.207,8.207c0.391-0.39,0.391-1.023,0-1.414c-0.391-0.391-1.023-0.391-1.414,0L20,18.586 L8.207,6.793c-0.39-0.391-1.023-0.391-1.414,0c-0.391,0.391-0.391,1.023,0,1.414L18.586,20L6.793,31.793 c-0.391,0.391-0.391,1.023,0,1.414C6.988,33.402,7.245,33.5,7.5,33.5c0.256,0,0.511-0.098,0.707-0.293L20,21.414l11.793,11.793 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L21.414,20z"></path> <path display="none" d="M9.411,35C9,35,8.653,34.658,8.653,34.254V5.758C8.653,5.34,8.992,5,9.411,5h14.706 c0.198,0,0.394,0.084,0.546,0.236l6.449,6.461c0.15,0.13,0.235,0.324,0.235,0.535v22.021C31.347,34.658,31,35,30.589,35H9.411z M10.17,33.496h19.672V12.989h-5.726c-0.419,0-0.759-0.34-0.759-0.757V6.504H10.17V33.496z M24.875,11.485h3.9l-3.9-3.914V11.485z"></path> <g display="none"> <path display="inline" d="M12.966,17.262c-0.483,0-0.878,0.395-0.878,0.878s0.395,0.877,0.878,0.877h13.518 c0.483,0,0.878-0.394,0.878-0.877s-0.395-0.878-0.878-0.878H12.966L12.966,17.262z"></path> <path display="inline" d="M9.411,35C9,35,8.652,34.658,8.652,34.254V5.758C8.652,5.34,8.992,5,9.411,5h14.704 c0.2,0,0.395,0.084,0.547,0.236l6.449,6.461c0.15,0.13,0.236,0.324,0.236,0.534v22.022c0,0.404-0.349,0.746-0.759,0.746H9.411z M10.17,33.496h19.672V12.989h-5.727c-0.417,0-0.758-0.34-0.758-0.757V6.504H10.17V33.496z M24.875,11.485h3.9l-3.9-3.915V11.485z"></path> <path display="inline" d="M12.966,21.164c-0.483,0-0.878,0.395-0.878,0.878s0.395,0.878,0.878,0.878h13.518 c0.483,0,0.878-0.395,0.878-0.878s-0.395-0.878-0.878-0.878H12.966L12.966,21.164z"></path> <path display="inline" d="M12.966,25.065c-0.483,0-0.878,0.395-0.878,0.878c0,0.484,0.395,0.877,0.878,0.877h13.518 c0.483,0,0.878-0.393,0.878-0.877c0-0.483-0.395-0.878-0.878-0.878H12.966L12.966,25.065z"></path> </g> <g> <path d="M14.766,16.227c0,0.45,0.367,0.816,0.817,0.816h12.578c0.449,0,0.817-0.367,0.817-0.816c0-0.451-0.368-0.817-0.817-0.817 H15.583C15.133,15.41,14.766,15.776,14.766,16.227z"></path> <path d="M32.468,10.232l-6.002-6.013C26.324,4.078,26.144,4,25.959,4H12.274c-0.389,0-0.706,0.316-0.706,0.706v26.516 c0,0.377,0.323,0.694,0.706,0.694h14.757v2.685H8.727V9.484H11.5v-1.4H8.02c-0.389,0-0.706,0.317-0.706,0.707v26.515 C7.313,35.683,7.637,36,8.02,36h19.706c0.383,0,0.706-0.317,0.706-0.694v-3.39h3.549c0.383,0,0.706-0.317,0.706-0.694V10.729 C32.687,10.533,32.607,10.354,32.468,10.232z M26.664,6.393l3.63,3.642h-3.63V6.393z M31.286,30.516H12.981V5.399h12.271v5.33 c0,0.388,0.315,0.705,0.706,0.705h5.327V30.516z"></path> <path d="M28.161,19.041H15.583c-0.45,0-0.817,0.367-0.817,0.817c0,0.45,0.367,0.816,0.817,0.816h12.578 c0.449,0,0.817-0.367,0.817-0.816C28.979,19.407,28.61,19.041,28.161,19.041z"></path> <path d="M28.161,22.672H15.583c-0.45,0-0.817,0.365-0.817,0.816s0.367,0.816,0.817,0.816h12.578c0.449,0,0.817-0.365,0.817-0.816 S28.61,22.672,28.161,22.672z"></path> <path d="M11.5,19.495h-0.172c-0.45,0-0.817,0.367-0.817,0.816c0,0.451,0.367,0.818,0.817,0.818H11.5V19.495z"></path> <path d="M11.5,23.125h-0.172c-0.45,0-0.817,0.367-0.817,0.816c0,0.451,0.367,0.818,0.817,0.818H11.5V23.125z"></path> <path d="M10.511,27.573c0,0.45,0.367,0.816,0.817,0.816H11.5v-1.634h-0.172C10.878,26.756,10.511,27.123,10.511,27.573z"></path> </g> </g></svg>
    },
  ];

  const [active, setActive] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - 2 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/*------------ Hero Section ------- */}
      <div
        className="flex flex-col md:flex-row items-center bg-gray-100 p-6 md:p-12 
        rounded-2xl h-auto md:h-[900px] gap-6 md:gap-12"
        style={{
          fontFamily: "Open Sans, sans-serif",
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
        <div className="md:w-1/2 h-full flex items-center justify-center relative">
          {/* Background Image */}
          <img
            src="https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/11/demo1-slider.jpg"
            alt="Scientist working in lab"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Watch Video Button - Positioned Bottom Right Inside Image */}
          <div className="absolute bottom-0 right-0 bg-[#EAF0FC] px-6 py-3 flex items-center rounded-tl-[50px] rounded-br-xl ">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-500 rounded-full">
              <FaPlay className="text-gray-800" />
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-900">Watch Video</span>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 h-full bg-[#3772ff] text-white p-6 md:p-12 rounded-2xl flex flex-col justify-center">
          <p className="uppercase text-xs font-semibold bg-[#3772ff] text-white px-3 py-1 rounded-full inline-block w-max border ">
            Best Solutions for Laboratory
          </p>
          <h1 className="text-[84px] font-bold leading-[84px] mt-4 whitespace-nowrap">
            Micro Biology
          </h1>
          <h2 className="text-[60px] font-bold leading-[60px] mt-3">
            Research Institution
          </h2>
          <div className=" flex gap-6 mt-6 border-t pt-6 border-gray-400" />
          <p className=" mt-1 text-[18px] leading-[28px]">
            Hire us! We are a professional laboratory offering services.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full font-semibold flex 
          items-center w-max transition duration-300 hover:bg-white 
          hover:text-black border border-transparent hover:border-black">
            Our Services <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>

      {/*  ------------ServicesCard Section ------------ */}
      <div className="bg-[#ecf2ff] py-10 px-5 md:px-20 flex flex-nowrap overflow-x-auto gap-10 justify-between">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white py-[45px] px-[25px] rounded-[30px] w-80 h-70 flex flex-col 
            items-center  relative cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "normal",
              fontSize: "15px",
              lineHeight: "1.6",
              letterSpacing: "0",
              color: "#6a7391",
              textTransform: "none",
              fontStyle: "normal",
            }}
          >
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-2 rounded-full text-3xl ">{service.icon}</div>
              <h2 className="w-30 text-lg leading-5 font-500 mb-0 tracking-normal text-gray-900 
              normal-case not-italic font-raleway justify">{service.title}</h2>
            </div>
            <hr className="mt-3 p-4 border-gray-200 border-t-1 w-full hover:w-full hover:border-gray-400 
            transition-all duration-100 m-2" />
            <p className="text-gray-600 text-center text-sm ml-auto text-[15px]">{service.description}</p>
            <button className="absolute right-[50px] bottom-[-10px] table text-center z-10 py-[8px] px-[10px] p-2 text-center bg-white 
            mb-[-1px] bottom-0 right-0 rounded-full pbmit-ihbox-style-7 pbmit-ihbox-btn 
              border-indigo-50 border-8 transition-all duration-100 before:relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" fill="currentColor" class="bi bi-arrow-up-right-circle" className='hover:fill-blue-500' viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
              </svg></button>
          </motion.div>
        ))}
      </div>


      {/* -----------ResearchSection ------------ */}
      <div className="bg-[#ecf2ff] min-h-screen flex flex-col md:flex-row items-center justify-between md:px-20  w-screen ">

        {/* Left Side - Image */}
        <motion.div
          className="w-1/2 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={microscopeImage}
            alt="Lab Equipment"
            className="w-full max-w-[647px] h-auto"
            sizes="(max-width: 647px) 100vw, 647px"
          />
        </motion.div>
        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-2/5 text-gray-800 max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Badge */}
          <motion.span
            className="inline-block px-4 py-1 text-[11px] leading-[22px] tracking-[0] text-[#001837] font-[Open_Sans] font-bold border border-[#001837] rounded-full uppercase mb-4 self-start not-italic"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Who We Are
          </motion.span>

          {/* Heading */}
          <motion.h2
            className="font-raleway font-semibold text-[50px] leading-[60px] tracking-[0] text-[#001837] normal-case not-italic mb-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            We'll Ensure You Always Get the Best Results
          </motion.h2>
          {/* Description */}
          <motion.p
            className="font-opensans font-normal text-[15px] leading-[1.6] tracking-[0] text-[#6a7391] normal-case not-italic mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Chemistry Research Documentation Center, a hub for exploration & discovery in the realm of
            uncommon & extraordinary chemical phenomena. Our clinical pathologists are available
            seven days a week to render diagnoses.
          </motion.p>

          {/* Features Section */}
          <motion.div
            className="flex gap-6 mb-6 border-t pt-6 border-gray-400"
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
            {/* Feature 1 */}
            <motion.div
              className="flex items-center space-x-3 p-4 rounded-lg "
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-3 bg-gray-100 rounded-full">
                <IoMdFlask className="text-2xl text-blue-600" />
              </div>
              <div className='pr-1'>
                <h4 className="font-semibold text-gray-900">Medical Research</h4>
                <p className="text-gray-600 text-sm pt-2">Health research, sometimes referred to as medical research.</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex items-center space-x-3 p-4 rounded-lg "
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-3 bg-gray-100 rounded-full">
                <BsCheck2Circle className="text-2xl text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Accurate Analysis</h4>
                <p className="text-gray-600 text-sm pt-2">Accurate Analysis is an absolute testing laboratory.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Button with Hover Animation */}
          <motion.button
            className=" h-14 mt-4 px-6 py-3 text-[#001837] border border-[#001837] font-semibold rounded-full font-['Open_Sans',sans-serif] flex items-center gap-2 hover:bg-blue-600 hover:text-white transition "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>


      {/* ---------------OUR PROJECT SECTION------------------ */}

      <div className="flex justify-center items-center h-screen bg-gray-300">
      <div className="h-[500px] overflow-y-scroll snap-y snap-mandatory no-scrollbar">
        {cards.map((data, index) => {
          return (
            <section
              key={index}
              className="h-[500px] max-w-[900px] snap-center"
            >
              <img
                src={data}
                className="bg-cover bg-no-repeat w-full h-full object-cover lg:max-h-[700px] sm:max-h-[500px] max-h-[400px]"
                alt="Carousel images for make scroll on verticle direction"
              />
            </section>
          );
        })}
      </div>
    </div>

 {/* --------------------Contact form -------------------------- */}
 <div className="bg-[#ecf2ff] min-h-screen flex flex-col md:flex-row items-center justify-between md:px-20  w-screen ">

{/* Left Side - Image */}
<motion.div
  className="w-1/2 md:w-1/2 flex justify-center"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <img
    src={microscopeImage}
    alt="Lab Equipment"
    className="w-full max-w-[647px] h-auto"
    sizes="(max-width: 647px) 100vw, 647px"
  />
</motion.div>
{/* Right Side - Content */}
<motion.div
  className="w-full md:w-2/5 text-gray-800 max-w-lg"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
>
  {/* Badge */}
  <motion.span
    className="inline-block px-4 py-1 text-[11px] leading-[22px] tracking-[0] text-[#001837] font-[Open_Sans] font-bold border border-[#001837] rounded-full uppercase mb-4 self-start not-italic"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    Who We Are
  </motion.span>

  {/* Heading */}
  <motion.h2
    className="font-raleway font-semibold text-[50px] leading-[60px] tracking-[0] text-[#001837] normal-case not-italic mb-4 w-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.7 }}
  >
    We'll Ensure You Always Get the Best Results
  </motion.h2>
  {/* Description */}
  <motion.p
    className="font-opensans font-normal text-[15px] leading-[1.6] tracking-[0] text-[#6a7391] normal-case not-italic mb-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.9 }}
  >
    Chemistry Research Documentation Center, a hub for exploration & discovery in the realm of
    uncommon & extraordinary chemical phenomena. Our clinical pathologists are available
    seven days a week to render diagnoses.
  </motion.p>

  {/* Features Section */}
  <motion.div
    className="flex gap-6 mb-6 border-t pt-6 border-gray-400"
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
    {/* Feature 1 */}
    <motion.div
      className="flex items-center space-x-3 p-4 rounded-lg "
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-3 bg-gray-100 rounded-full">
        <IoMdFlask className="text-2xl text-blue-600" />
      </div>
      <div className='pr-1'>
        <h4 className="font-semibold text-gray-900">Medical Research</h4>
        <p className="text-gray-600 text-sm pt-2">Health research, sometimes referred to as medical research.</p>
      </div>
    </motion.div>

    {/* Feature 2 */}
    <motion.div
      className="flex items-center space-x-3 p-4 rounded-lg "
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="p-3 bg-gray-100 rounded-full">
        <BsCheck2Circle className="text-2xl text-blue-600" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">Accurate Analysis</h4>
        <p className="text-gray-600 text-sm pt-2">Accurate Analysis is an absolute testing laboratory.</p>
      </div>
    </motion.div>
  </motion.div>

  {/* Button with Hover Animation */}
  <motion.button
    className=" h-14 mt-4 px-6 py-3 text-[#001837] border border-[#001837] font-semibold rounded-full font-['Open_Sans',sans-serif] flex items-center gap-2 hover:bg-blue-600 hover:text-white transition "
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Know More <FaArrowRight />
  </motion.button>
</motion.div>
</div>


      {/* ------------Feature Section ----------- */}
      <div className="bg-blue-50 min-h-screen flex flex-col items-center py-12 px-6">
        <div className="border border-black px-4 py-1 rounded-full text-sm font-semibold text-[#001837] uppercase font-openSans leading-4" style={{ fontFamily: "Open Sans, sans-serif" }}>
          WHY CHOOSE US?
        </div>
        <h2 className="text-4xl font-bold text-center mt-4 text-gray-900">
          We Advice to Choose a <br /> Right Decision
        </h2>

        <div className="flex flex-col lg:flex-row items-center mt-8 max-w-7xl w-full">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 space-y-4">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`flex justify-between items-center w-4/5 p-3 rounded-full transition-all duration-300 ${index === 0
                  ? "bg-white text-gray-900 "
                  : "border border-gray-300 text-gray-900 bg-transparent"
                  }`}
              >
                <span>{feature}</span>
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${index === 0 ? "bg-blue-600 text-white" : "bg-gray-900 text-white"
                    }`}
                >
                  <FaArrowUpRightFromSquare />
                </div>
              </button>
            ))}
          </div>

         

          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://xleb-demo.pbminfotech.com/demo1/wp-content/themes/xleb/images/tab.jpg"
              alt="Lab Research"
              className="rounded-lg shadow-lg w-full max-w-sm"
            />
          </motion.div>

         

          {/* Right Section */}
          <div className="w-full lg:w-1/3 px-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Well Ensure You Always Covid 19 Vaccine.
            </h3>
            <p className="text-gray-600 mt-3">
              We help ambitious businesses like yours generate more profits by
              building awareness, driving web traffic, connecting with customers,
              and growing overall sales. Give us a call.
            </p>

            <ul className="mt-4 space-y-2">
              {["Access Expert Advice For A Thriving Life", "Benefits Of Health Conscious Living", "Benefits Of Proactive Health Management", "Countless Benefits Of Prioritizing Health"].map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-900">
                  <span className="text-blue-600 text-lg">&#10003;</span>
                  <span className="ml-2">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>


           
            


        </div>
      </div>
    </>
  )
}

export default Home








{/* <button
  key={index}
  className={`flex justify-between items-center w-1/2 p-3 rounded-full transition-all duration-300 ${
    index === 0
      ? "bg-white text-gray-900"
      : "border border-gray-300 text-gray-900 bg-transparent"
  }`}
> */}

// font-family: Raleway, sans-serif;
// font-weight: 600;
// font-style: normal;