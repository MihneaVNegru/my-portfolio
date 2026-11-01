import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <div className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Featured Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Personal projects in distributed systems, RPC protocols, data collection and backend tooling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              aria-label={`View details: ${project.title}`}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                // Only react to keys pressed on the card itself, not on the repo link inside it.
                if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
