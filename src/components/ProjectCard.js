import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTerminal } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative glass-card rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 group flex flex-col h-full border ${project.featured ? 'border-blue-500/40 ring-1 ring-blue-500/20' : 'border-white/5'}`}
        >
            {project.featured && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest z-10 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    Featured Architecture
                </div>
            )}

            <div className="p-8 flex flex-col flex-grow relative">
                {/* Tech Background Icon */}
                <div className="absolute top-4 left-4 opacity-[0.03] text-6xl group-hover:opacity-[0.08] transition-opacity duration-500">
                    <FaTerminal />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors leading-tight">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-8 text-sm flex-grow leading-relaxed font-light">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.03] text-gray-400 border border-white/10 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors uppercase tracking-wider"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="pt-6 border-t border-white/5 flex justify-between items-center group/footer">
                    <span className="text-xs font-mono text-blue-500/70 group-hover:text-blue-400 transition-colors cursor-pointer">
                        SYSTEM_SPECS.DETAILS
                    </span>
                    <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-all z-10 bg-white/5 px-3 py-1.5 rounded-lg border border-transparent hover:border-white/10"
                    >
                        <FaGithub /> git_clone
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

