import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { personalInfo, highlights } from '../data';

const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-64px)] py-16 flex items-center">
            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-sm font-mono text-blue-400 mb-6">{personalInfo.location}</p>
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-4">
                        {personalInfo.name}
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-400 mb-8 leading-snug">
                        {personalInfo.title}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed font-light">
                        {personalInfo.bio}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-16">
                        <Link
                            to="/projects"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                            View projects
                            <FaArrowRight size={14} aria-hidden="true" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 text-gray-200 font-medium rounded-lg border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                            Get in touch
                        </Link>
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-3 text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
                        >
                            <FaGithub size={18} aria-hidden="true" />
                            GitHub
                        </a>
                    </div>
                </motion.div>

                <motion.dl
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden"
                >
                    {highlights.map((item) => (
                        <div key={item.label} className="bg-gray-900 p-6">
                            <dt className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
                                {item.label}
                            </dt>
                            <dd className="text-sm text-gray-300 leading-relaxed">{item.text}</dd>
                        </div>
                    ))}
                </motion.dl>
            </div>
        </section>
    );
};

export default Hero;
