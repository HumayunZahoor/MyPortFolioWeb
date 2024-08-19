import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import { motion } from 'framer-motion';
import { CSSTransition } from 'react-transition-group';

const Menu = () => {
  useEffect(() => {
    anime.timeline()
      .add({
        targets: '.portfolio-heading',
        translateX: [-200, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: '.portfolio-heading',
        scale: [1, 1.1],
        duration: 500,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: '.portfolio-heading',
        scale: [1.1, 1],
        duration: 500,
        easing: 'easeInOutExpo'
      });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { displayText: 'Welcome', path: '/' },
    { displayText: 'Mastery Map', path: '/Skills' },
    { displayText: 'Innovations Gallery', path: '/MyProjects' }
  ];

  return (
    <nav className="flex justify-between items-center p-3 bg-gray-900 text-white shadow-lg">
      {/* Logo and Portfolio Heading */}
      <div className="ml-4">
        <motion.h1 
          className="portfolio-heading text-2xl sm:text-3xl font-bold text-yellow-500"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          PortFolio
        </motion.h1>
      </div>

      {/* Links for Larger Screens */}
      <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm lg:text-lg font-semibold">
        {links.map((link, index) => (
          <li key={index} className="relative group list-none">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                to={link.path}
                className="text-white hover:text-yellow-300 transition-colors duration-300"
              >
                {link.displayText}
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
            </motion.div>
          </li>
        ))}
      </div>

      {/* 'Reach Out' Link for Larger Screens */}
      <div className="hidden md:flex mr-4">
        <ul className="flex space-x-6 lg:space-x-8 text-sm lg:text-lg font-semibold">
          <li className="relative group list-none">
            <CSSTransition
              in={true}
              appear={true}
              timeout={1000}
              classNames="fade"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to="/ContactMe"
                  className="text-white hover:text-yellow-300 transition-colors duration-300"
                >
                  Reach Out
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
              </motion.div>
            </CSSTransition>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white focus:outline-none text-lg"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-gray-900 text-white shadow-lg w-full md:w-auto z-50">
          <ul className="flex flex-col space-y-2 p-4 text-center">
            {links.map((link, index) => (
              <li key={index} className="relative group list-none">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    to={link.path}
                    className="hover:text-yellow-300 transition-colors duration-300"
                  >
                    {link.displayText}
                  </Link>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
                </motion.div>
              </li>
            ))}
            <li className="relative group list-none">
              <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="fade"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    to="/ContactMe"
                    className="hover:text-yellow-300 transition-colors duration-300"
                  >
                    Reach Out
                  </Link>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
                </motion.div>
              </CSSTransition>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Menu;
