import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center bg-gray-900">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    {/* Add more social links if available in data.js */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
