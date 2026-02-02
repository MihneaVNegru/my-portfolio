import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group flex flex-col h-full"
        >
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm flex-grow leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="pt-4 border-t border-white/10 mt-auto flex justify-between items-center">
                    <span className="text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details &rarr;
                    </span>
                    <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors z-10"
                    >
                        <FaGithub /> Source Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
