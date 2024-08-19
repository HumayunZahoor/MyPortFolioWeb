import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css_folder/Projects.css';

// Import project images
import ecommerceImage1 from './proj_imp/ecommerce1.png';
import ecommerceImage2 from './proj_imp/ecommerce2.jpg';
import ecommerceImage3 from './proj_imp/ecommerce3.jpg';
import dentalImage1 from './proj_imp/dental1.jpg';
import dentalImage2 from './proj_imp/dental2.jpg';
import dentalImage3 from './proj_imp/dental3.jpg';
import neuroImage1 from './proj_imp/ecommerce3.jpg';
import neuroImage2 from './proj_imp/ecommerce3.jpg';
import neuroImage3 from './proj_imp/ecommerce3.jpg';
import renalImage1 from './proj_imp/ecommerce3.jpg';
import renalImage2 from './proj_imp/ecommerce3.jpg';
import renalImage3 from './proj_imp/ecommerce3.jpg';
import dermImage1 from './proj_imp/ecommerce3.jpg';
import dermImage2 from './proj_imp/ecommerce3.jpg';
import dermImage3 from './proj_imp/ecommerce3.jpg';

const projects = [
  {
    title: "Ecommerce Website",
    description: "This project involved the creation of a fully functional eCommerce platform using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application supports a wide range of features such as user authentication, product management, shopping cart functionality, and payment integration. Tailwind CSS was used to create a modern, responsive, and visually appealing user interface. The website also includes animations and transitions to enhance the user experience, making navigation intuitive and enjoyable. Additionally, the platform is scalable and secure, capable of handling large volumes of traffic and transactions.",
    images: [ecommerceImage1, ecommerceImage2, ecommerceImage3],
  },
  {
    title: "Dental Diagnostic Platform",
    description: "The Dental Diagnostic Platform is a specialized web application designed to assist dental professionals in diagnosing and managing dental diseases. The platform integrates secure user authentication to protect patient data and offers a user-friendly interface that allows dentists to easily upload patient records, analyze images, and receive diagnostic suggestions. Built with the MERN stack and styled with Tailwind CSS, the platform ensures high performance and a seamless user experience. The integration of a Flask API enables advanced diagnostic capabilities, such as image processing and analysis, providing accurate and timely information for better patient outcomes.",
    images: [dentalImage1, dentalImage2, dentalImage3],
  },
  {
    title: "Neurological Analysis System",
    description: "This system is a cutting-edge tool designed for neurologists to analyze and diagnose brain diseases. Utilizing the MERN stack, the system offers a secure and comprehensive user interface that supports the management of patient data, brain scans, and diagnostic reports. The platform is enhanced with a Flask API that facilitates the processing and analysis of neurological data, enabling precise detection of conditions such as Alzheimer's, Parkinson's, and other neurological disorders. The system is built to be highly reliable, ensuring that sensitive medical data is protected while providing neurologists with the tools they need to make informed decisions.",
    images: [neuroImage1, neuroImage2, neuroImage3],
  },
  {
    title: "Renal Health Monitoring Tool",
    description: "The Renal Health Monitoring Tool is designed to assist healthcare providers in tracking and managing kidney diseases. This tool leverages the MERN stack to provide a secure, scalable, and intuitive interface where users can monitor patient data, assess kidney function, and predict disease progression. The system integrates a Flask API that enables advanced data analysis, offering insights into renal health based on patient history and test results. The application is designed with user experience in mind, ensuring that healthcare providers can quickly and easily access the information they need to make critical decisions regarding patient care.",
    images: [renalImage1, renalImage2, renalImage3],
  },
  {
    title: "Dermatological Assessment Application",
    description: "The Dermatological Assessment Application is a sophisticated web-based tool that aids dermatologists in diagnosing and treating skin conditions. Built with the MERN stack and styled with Tailwind CSS, the platform offers a secure and responsive interface where dermatologists can upload images, analyze skin conditions, and receive diagnostic suggestions. The application is integrated with a Flask API that leverages machine learning algorithms to analyze skin lesions, helping to identify conditions such as melanoma, eczema, and psoriasis. The application is designed to streamline the diagnostic process, improve accuracy, and enhance patient outcomes through timely and accurate assessments.",
    images: [dermImage1, dermImage2, dermImage3],
  },
];

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      &lt;
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      &gt;
    </div>
  );
};

const MyProjects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (index) => {
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      setActiveProject(index);
    }
  };

  return (
    <div className="my-projects-container flex flex-col items-center text-white bg-gray-900 min-h-screen p-5">
      <h1 className="text-3xl sm:text-4xl text-yellow-500 font-bold mt-8 mb-10">Major Projects</h1>
      <div className="projects-list flex flex-col items-center gap-12 w-full max-w-screen-md mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-item transform transition-all duration-300 ease-in-out 
                        ${activeProject === index ? 'shadow-xl' : ''} 
                        bg-gray-800 p-6 rounded-lg glass-effect w-full`}
          >
            <div 
              className="project-header cursor-pointer" 
              onClick={() => handleProjectClick(index)}
            >
              <h2 className="text-3xl font-bold mb-3 text-center text-yellow-500">{project.title}</h2>
              <div className="w-[500px] h-[auto] mx-auto overflow-hidden rounded-lg shadow-lg mb-5 transform transition-transform duration-300 hover:scale-105">
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="object-cover w-full h-full"
                />
              </div>
              <p className="text-lg text-gray-300">
                {activeProject === index ? project.description : `${project.description.substring(0, 100)}...`}
              </p>
            </div>
            {activeProject === index && (
              <div className="project-details mt-5">
                <Slider {...{
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 5000,
                  prevArrow: <CustomPrevArrow />,
                  nextArrow: <CustomNextArrow />,
                }}>
                  {project.images.map((image, idx) => (
                    <div key={idx} className="w-[500px] h-[auto] mx-auto overflow-hidden rounded-lg shadow-lg mb-5 transform transition-transform duration-300 hover:scale-105">
                      <img 
                        src={image} 
                        alt={`${project.title} ${idx + 1}`} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
