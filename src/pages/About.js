
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, experience, education } from '../data';

const About = () => {
  return (
    <div className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
          <div className="glass-card p-8 rounded-xl text-lg text-gray-300 leading-relaxed">
            <p>{personalInfo.summary}</p>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-blue-500/30"
              >
                <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
                <span className="text-sm text-blue-400 font-mono mb-1 block">
                  {exp.year}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.role} <span className="text-gray-500">at</span> {exp.company}
                </h3>
                <p className="text-gray-400">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                  <span className="text-blue-400 font-mono text-sm">{edu.period}</span>
                </div>
                <p className="text-lg text-gray-300 font-medium">{edu.degree}</p>
                <p className="text-gray-500 text-sm mt-1">{edu.location}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;

