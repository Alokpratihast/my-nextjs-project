'use client';

import React, { useState, FormEvent } from 'react';
import { BackgroundBeams } from '@/Component/Ui/background-beams';
import { motion } from 'framer-motion';

function MusicSchoolContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log('Form Submitted:', { email, message });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      {/* Background Beams */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto p-6 relative z-10">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-7xl text-center font-bold text-white mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h1>

        <p className="text-neutral-400 text-center mb-10">
          Have questions? Let us help you get started on your musical journey.
          Fill out the form, and we’ll get back to you shortly!
        </p>

        {/* Form */}
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-neutral-950 p-6 rounded-lg shadow-lg border border-gray-800"
          >
            {/* Email Input */}
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              required
              whileFocus={{ scale: 1.02 }}
            />

            {/* Message Textarea */}
            <motion.textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              rows={5}
              required
              whileFocus={{ scale: 1.02 }}
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full p-4 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              whileHover={{ scale: 1.02 }}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        ) : (
          <div className="text-center p-6 bg-green-800 text-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p>Your message has been successfully sent. We will get back to you soon!</p>
          </div>
        )}

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" aria-label="Facebook" className="text-neutral-400 hover:text-teal-500">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="#" aria-label="Twitter" className="text-neutral-400 hover:text-teal-500">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" aria-label="Instagram" className="text-neutral-400 hover:text-teal-500">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
