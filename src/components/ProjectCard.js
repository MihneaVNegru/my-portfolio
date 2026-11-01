import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className={`relative glass-card rounded-xl overflow-hidden hover:border-white/25 hover:-translate-y-0.5 transition-all duration-200 group flex flex-col h-full ${project.featured ? 'border-blue-500/40' : ''}`}
        >
            <div className="p-8 flex flex-col flex-grow">
                {project.featured && (
                    <span className="self-start mb-4 text-[11px] font-mono uppercase tracking-wider text-blue-400 border border-blue-500/30 rounded-full px-2.5 py-0.5">
                        Featured
                    </span>
                )}

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors leading-tight">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-8 text-sm flex-grow leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] text-gray-400 border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <span className="text-xs font-mono text-blue-400/80 group-hover:text-blue-400 transition-colors">
                        View details
                    </span>
                    {project.repoLink && (
                        <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors z-10 bg-white/5 px-3 py-1.5 rounded-lg border border-transparent hover:border-white/10"
                        >
                            <FaGithub aria-hidden="true" /> Source
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
