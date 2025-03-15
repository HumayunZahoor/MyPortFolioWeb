import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';
import './css_folder/Skills.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import icons
import htmlIcon from './pictures/html-1.svg';
import cssIcon from './pictures/css-3.svg';
import jsIcon from './pictures/javascript-1.svg';
import reactIcon from './pictures/react-2.svg';
import nodeIcon from './pictures/nodejs.svg';
import expressIcon from './pictures/expressjs.svg';
// import jwtIcon from './pictures/jwt2.png'
import mongoIcon from './pictures/mongodb.svg';
import mysqlIcon from './pictures/mysql.png';
import apiIcon from './pictures/api1.png';
import tailwindIcon from './pictures/tailwind.svg';
import githubIcon from './pictures/github.svg';
// import contextIcon from './pictures/react-2.svg';
import reduxtkIcon from './pictures/redux.svg';
import laravelIcon from './pictures/laravel.svg';
// import vueIcon from './pictures/vue.svg';
import nextIcon from './pictures/next.svg'
import postmanIcon from './pictures/postman.svg';

const skills = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React JS", icon: reactIcon },
  { name: "Next JS", icon: nextIcon },
  // { name: "Context API", icon: contextIcon },
  { name: "Redux ToolKit", icon: reduxtkIcon },
  { name: "Node JS", icon: nodeIcon },
  { name: "Express JS", icon: expressIcon },
  // { name: "JSON WEB TOKEN", icon: jwtIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "API Integration", icon: apiIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Laravel", icon: laravelIcon },
  // { name: "Vue JS", icon: vueIcon },
  { name: "Postman", icon: postmanIcon },
];

const Skills = () => {
  const textRef = useRef(null);

  useEffect(() => {
    anime({
      targets: '.skill-item',
      translateY: [-40, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'easeOutExpo'
    });

    const textAnimation = anime({
      targets: textRef.current,
      translateX: ['100%', '-100%'],
      duration: 15000,
      easing: 'linear',
      loop: true,
      complete: function() {
        setTimeout(() => {
          textAnimation.restart();
        }, 1000);
      },
    });

    return () => textAnimation.pause();
  }, []);

  return (
    <div className="flex flex-col items-center text-white bg-custom-gray min-h-screen p-5 font-serif relative">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-custom-orange font-bold mt-8 mb-10 text-center">
        Mastering the Art of Web Development
      </h1>
      <p
        ref={textRef}
        className="text-center mb-10 text-lg sm:text-xl md:text-2xl whitespace-nowrap overflow-hidden"
      >
        "Building state-of-the-art web applications with the MERN stack, based in Rawalpindi, Pakistan, with a Bachelor's in Computer Science (2024)."
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item flex flex-col items-center bg-black p-3 sm:p-4 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon rounded-lg w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2"/>
            <h2 className="text-sm sm:text-md md:text-lg font-semibold text-center">{skill.name}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
