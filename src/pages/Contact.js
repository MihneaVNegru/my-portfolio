import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data';

const Contact = () => {
  return (
    <div className="py-20 bg-gray-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >

          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">Let's Connect</h1>
            <p className="text-gray-400 text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-blue-400">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mail me at</p>
                  <p className="font-medium">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-purple-400">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Romania</p> {/* Placeholder */}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium py-3 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02]"
              >
                <span>Send Message</span>
                <FaPaperPlane size={14} />
              </button>
            </form>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
