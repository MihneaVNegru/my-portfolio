import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { skillGroups } from '../data';

const Home = () => {
  return (
    <div className="bg-gray-900">
      <Hero />

      {/* Skills Section - Expertise Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Technical Expertise</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (groupIndex * 0.2) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="text-2xl text-gray-400 group-hover:text-blue-400 transition-colors">
                        {skill.icon}
                      </div>
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

