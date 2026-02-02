import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data';

const Hero = () => {
    return (
        <section className="h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4">
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        {personalInfo.name}
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-8">
                        <span className="text-gradient">{personalInfo.title}</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {personalInfo.bio}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        to="/projects"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-600/25"
                    >
                        View My Work
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-all hover:scale-105 backdrop-blur-sm border border-white/10"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
