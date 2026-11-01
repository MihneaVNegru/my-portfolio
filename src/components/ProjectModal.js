import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
    const closeRef = useRef(null);

    // Move focus into the dialog, close on Escape, and restore focus on exit.
    useEffect(() => {
        if (!project) return undefined;
        const previouslyFocused = document.activeElement;
        closeRef.current?.focus();
        const onKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            previouslyFocused?.focus?.();
        };
    }, [project, onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="project-modal-title"
                    className="bg-gray-900 border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
                >
                    {/* Close Button */}
                    <button
                        ref={closeRef}
                        onClick={onClose}
                        aria-label="Close project details"
                        className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                        <FaTimes size={16} aria-hidden="true" />
                    </button>

                    <div className="p-8">
                        <h2 id="project-modal-title" className="text-3xl font-bold text-white mb-4 pr-10">
                            {project.title}
                        </h2>

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

                        <div className="text-gray-300 leading-relaxed mb-8 max-h-[60vh] overflow-y-auto">
                            <p>{project.description}</p>
                        </div>

                        {project.repoLink && (
                            <div className="pt-6 border-t border-white/10 flex justify-end">
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                                >
                                    <FaGithub size={20} aria-hidden="true" /> View Source Code
                                </a>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
