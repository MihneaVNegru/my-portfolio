import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            {/* Keyboard shortcut past the nav. Uses focus() instead of an href jump because the app uses hash routing. */}
            <a
                href="#main-content"
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('main-content')?.focus();
                }}
                className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
            >
                Skip to content
            </a>
            <Navbar />
            <main id="main-content" tabIndex={-1} className="flex-grow pt-16 focus:outline-none">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
