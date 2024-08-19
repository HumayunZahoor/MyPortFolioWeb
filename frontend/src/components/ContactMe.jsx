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
      await fetch('http://localhost:3001/send-email', {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="container mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl sm:text-4xl text-yellow-500 font-bold mb-2">Contact Me</h1>
          <p className="text-base sm:text-lg">I would love to hear from you!</p>
        </motion.div>

        <form className="contact-form max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 rounded-lg border-2 border-gray-700 focus:outline-none focus:border-yellow-500 transition duration-300"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 rounded-lg border-2 border-gray-700 focus:outline-none focus:border-yellow-500 transition duration-300"
            />
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 rounded-lg border-2 border-gray-700 focus:outline-none focus:border-yellow-500 transition duration-300"
            ></motion.textarea>
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </form>

        {status && (
          <div className="text-center mt-6">
            <p className={`text-base sm:text-lg font-semibold ${status.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
              {status}
            </p>
          </div>
        )}

        <div className="text-center mt-6">
          <motion.a
            href="https://www.linkedin.com/in/humayun-zahoor/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-yellow-500 transition duration-300 text-base sm:text-lg"
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
