import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { skills } from '../data';

const Home = () => {
  return (
    <div className="bg-gray-900">
      <Hero />

      {/* Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center p-6 glass-card rounded-xl hover:bg-white/10 transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4 text-gray-200">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-300">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
