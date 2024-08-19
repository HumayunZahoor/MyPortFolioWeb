import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CSSTransition } from 'react-transition-group';
import anime from 'animejs';
import './css_folder/Home.css'; // Custom CSS file for animations
import profileImage from './pictures/homepage.jpeg'; // Adjust the path to your profile image
import cvFile from './pictures/cv.pdf'; // Adjust the path to your CV file

const Home = () => {
  useEffect(() => {
    // Profile image animation
    anime({
      targets: '.profile-image',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutExpo',
    });

    // Letter by letter animation for the name
    anime({
      targets: '.name-letter',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: anime.stagger(100),
      complete: () => {
        // Sequentially animate h2 and paragraph
        anime({
          targets: '.role-letter',
          opacity: [0, 1],
          translateY: [20, 0],
          easing: 'easeOutExpo',
          duration: 1000,
          delay: anime.stagger(100),
          complete: () => {
            anime({
              targets: '.description-letter',
              opacity: [0, 1],
              translateY: [20, 0],
              easing: 'easeOutExpo',
              duration: 1000,
              delay: anime.stagger(10),
            });
          },
        });
      },
    });
  }, []);

  const name = 'Humayun Zahoor';
  const nameLetters = name.split('').map((letter, index) => (
    <span key={index} className="name-letter" style={{ opacity: 0 }}>
      {letter}
    </span>
  ));

  const role = 'MERN Stack Developer & Problem Solver';
  const roleLetters = role.split('').map((letter, index) => (
    <span key={index} className="role-letter" style={{ opacity: 0 }}>
      {letter}
    </span>
  ));

  const description =
    "Hi! I'm a passionate MERN Stack Developer with expertise in crafting dynamic and responsive front-end applications using animations and Tailwind CSS. I have a strong command over integrating Flask APIs with front-end frameworks, and I'm proficient in developing RESTful APIs and integrating third-party services. My technical skills span across the MERN stack (MongoDB, Express, React, Node.js), JavaScript, and MySQL, allowing me to deliver robust and scalable solutions. With a proven track record of successfully completing numerous projects, I am dedicated to creating seamless and intuitive user experiences.";
  const descriptionLetters = description.split('').map((letter, index) => (
    <span key={index} className="description-letter" style={{ opacity: 0 }}>
      {letter}
    </span>
  ));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6">
        {/* Left Section: Text */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm font-light uppercase mb-2"
          >
            Welcome to my world
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold mb-4"
          >
            Hi, I'm <span className="text-yellow-500">{nameLetters}</span>
          </motion.h1>

          <h2 className="text-2xl font-medium mb-6">{roleLetters}</h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-lg mx-auto md:mx-0 mb-6 leading-relaxed"
          >
            {descriptionLetters}
          </motion.p>

          {/* Button section */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
            <CSSTransition in appear timeout={300} classNames="fade">
              <motion.a href={cvFile} target="_blank" rel="noopener noreferrer" download>
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300 font-bold">
                  Download Resume
                </button>
              </motion.a>
            </CSSTransition>

            <CSSTransition in appear timeout={300} classNames="fade">
              <motion.a href="https://wa.me/+923099001485" target="_blank" rel="noopener noreferrer">
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300 font-bold">
                  Chat on WhatsApp
                </button>
              </motion.a>
            </CSSTransition>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="relative group md:w-1/2">
          <motion.img
            src={profileImage}
            alt="Profile"
            className="profile-image rounded-lg shadow-2xl w-72 h-96 object-cover border-4 border-gray-800 group-hover:shadow-lg transition-shadow duration-300 mx-auto"
            whileHover={{
              scale: 1.1,
              rotateY: 10,
              rotateX: -10,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.95,
              rotateY: -5,
              rotateX: 5,
              transition: { duration: 0.2 },
            }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
