import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState(''); // 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Use environment variable for Formspree ID
    const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;

    // Fallback to mailto if no ID is configured
    if (!FORMSPREE_ID) {
      // Construct mailto link
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // The message is only drafted in the visitor's email app, not sent yet.
      setStatus('mailto');
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="py-20 bg-gray-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >

          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">Let's Connect</h1>
            <p className="text-gray-400 text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-blue-400">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mail me at</p>
                  <a href={`mailto:${personalInfo.email}`} className="font-medium hover:text-white transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-purple-400">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            {status === 'success' || status === 'mailto' ? (
              <div className="text-center py-12" role="status">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPaperPlane size={24} aria-hidden="true" />
                </div>
                {status === 'success' ? (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-2">Almost there</h3>
                    <p className="text-gray-400">
                      Your email app should now show a draft. Press send there to deliver it, or write to{' '}
                      <a href={`mailto:${personalInfo.email}`} className="text-blue-400 hover:text-blue-300">
                        {personalInfo.email}
                      </a>.
                    </p>
                  </>
                )}
                <button
                  onClick={() => setStatus('')}
                  className="mt-6 text-blue-400 hover:text-blue-300 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium py-3 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  <FaPaperPlane size={14} />
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center mt-4" role="alert">
                    Something went wrong sending your message. Please try again or email {personalInfo.email} directly.
                  </p>
                )}
              </form>
            )}
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
