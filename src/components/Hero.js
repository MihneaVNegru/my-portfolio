import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { FaGithub, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden">
            {/* Background Gradients & Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[100px] animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            </div>

            <div className="text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-sm md:text-base text-blue-400 font-mono tracking-widest uppercase mb-4 px-4 py-1 border border-blue-400/30 rounded-full inline-block backdrop-blur-sm">
                        Systems Architect // Fullstack Engineer
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white">
                        {personalInfo.name}
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 mb-8 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                            {personalInfo.title}
                        </span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                >
                    {personalInfo.bio}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                    >
                        <FaGithub className="text-xl" />
                        View System Architectures
                    </a>
                    <a
                        href="/cv.pdf"
                        download
                        className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all hover:scale-105 backdrop-blur-md border border-white/10"
                    >
                        <FaFileDownload className="text-xl text-blue-400" />
                        Download Technical CV
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

