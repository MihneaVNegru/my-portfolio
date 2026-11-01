import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { skillGroups } from '../data';

const Home = () => {
  return (
    <div className="bg-gray-900">
      <Hero />

      {/* Stack: compact chips grouped by area */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-mono text-blue-400 mb-3">Stack</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white">Technical expertise</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (groupIndex % 2) * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-4">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-300 bg-white/[0.03] border border-white/10 rounded-lg"
                    >
                      <span aria-hidden="true" className="text-base">{skill.icon}</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
