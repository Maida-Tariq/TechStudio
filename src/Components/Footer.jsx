import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <footer className="bg-white text-white">
      <div className="container mx-auto">
        {/* Glassmorphism Box */}
        <div className="bg-mid p-4">
          {/* Header Section */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
            <p className="mb-4">Follow us on social media for the latest updates.</p>
          </div>

          {/* Social Media Section */}
          <div className="flex justify-center mb-6 space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-3xl hover:text-gray-300 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-3xl hover:text-gray-300 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-3xl hover:text-gray-300 transition duration-300"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Quick Links Section */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <div className="flex justify-center space-x-4">
              <button onClick={() => handleLinkClick('/')} className="hover:text-gray-300 transition duration-300">
                Home
              </button>
              <button onClick={() => handleLinkClick('/about')} className="hover:text-gray-300 transition duration-300">
                About Us
              </button>
              <button onClick={() => handleLinkClick('/services')} className="hover:text-gray-300 transition duration-300">
                Services
              </button>
              <button onClick={() => handleLinkClick('/contact')} className="hover:text-gray-300 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6 opacity-20" />

          {/* Footer Copyright Section */}
          <div className="text-center mt-4">
            <p className="text-sm">
              © {new Date().getFullYear()} WebStudio. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
