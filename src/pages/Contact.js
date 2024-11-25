import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy } from "react-icons/fa";

function Contact() {
  const email = "mihnea.vladut.negru@gmail.com";

  // Funcție pentru copierea email-ului în clipboard
  const handleCopy = () => {
    // Verifică dacă API-ul Clipboard este disponibil
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
        .then(() => alert("Email copied to clipboard!"))
        .catch((err) => alert("Failed to copy email: " + err));
    } else {
      // Fallback: folosește un input temporar pentru a copia email-ul
      const tempInput = document.createElement('input');
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        // Încearcă să copiez folosind execCommand
        document.execCommand('copy');
        alert("Email copied to clipboard!");
      } catch (err) {
        alert("Failed to copy email (fallback): " + err);
      }
      document.body.removeChild(tempInput);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Contact Me</h1>

      {/* Email - Iconița care trimite email */}
      <div className="flex items-center space-x-4 mb-6">
        <FaEnvelope
          className="text-blue-500 text-3xl cursor-pointer"
          onClick={() => window.location.href = `mailto:${email}`}
          title="Send Email"
        />
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 text-lg text-blue-600 hover:underline"
          title="E-mail"
        >
          <span>E-mail</span>
        </button>
      </div>

      {/* LinkedIn */}
      <div className="flex items-center space-x-4 mb-6">
        <FaLinkedin className="text-blue-700 text-2xl" />
        <a
          href="https://www.linkedin.com/in/mihnea-negru/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-blue-700 hover:underline"
          title="LinkedIn Profile"
        >
          LinkedIn
        </a>
      </div>

      {/* GitHub */}
      <div className="flex items-center space-x-4">
        <FaGithub className="text-gray-800 text-2xl" />
        <a
          href="https://github.com/MihneaVNegru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-gray-800 hover:underline"
          title="GitHub Profile"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;
