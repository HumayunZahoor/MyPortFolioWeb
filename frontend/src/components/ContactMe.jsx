import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://portfolio-backend-pink-nu.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-gray font-serif text-white p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="container mx-auto p-3 sm:p-3 md:p-3 lg:p-3">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10"
        >
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-custom-orange font-bold mb-1">
            Contact Me
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
            I would love to hear from you!
          </p>
        </motion.div>

        <form
          className="contact-form max-w-lg mx-auto space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-2 sm:mb-3">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 md:p-4 bg-gray-800 rounded-lg border-2 border-gray-700 focus:outline-none focus:border-custom-ortext-custom-orange transition duration-300"
            />
          </div>

          <div className="flex flex-col mb-2 sm:mb-3">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 md:p-4 bg-gray-800 rounded-lg border-2 border-gray-700 focus:outline-none focus:border-custom-ortext-custom-orange transition duration-300"
            />
          </div>

          <div className="flex flex-col mb-4 sm:mb-5">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 md:p-4 bg-gray-800 rounded-lg border-2 border-gray-700 focus:outline-none focus:border-custom-ortext-custom-orange transition duration-300"
            ></motion.textarea>
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              className="bg-custom-orange text-white px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg text-xl hover:bg-orange-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </form>

        {status && (
          <div className="text-center mt-4 sm:mt-6">
            <p
              className={`text-sm sm:text-lg md:text-xl font-semibold ${
                status.includes('Failed') ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {status}
            </p>
          </div>
        )}

        <div className="text-center mt-4 sm:mt-6">
          <motion.a
            href="https://www.linkedin.com/in/humayun-zahoor/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-orange transition duration-300 text-sm sm:text-lg md:text-xl hover:underline"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with me on LinkedIn
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
