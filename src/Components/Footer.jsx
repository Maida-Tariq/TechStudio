import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F9F4EF] text-[#3E4E88] py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
          <p className="mb-4">Follow us on social media for the latest updates.</p>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center mb-6 space-x-6">
          <a href="#" aria-label="Facebook" className="text-3xl hover:text-[#3E4E88] transition duration-300">
            <FaFacebook />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-3xl hover:text-[#3E4E88] transition duration-300">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Twitter" className="text-3xl hover:text-[#3E4E88] transition duration-300">
            <FaTwitter />
          </a>
        </div>

        {/* Quick Links Section */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2 text-[#3E4E88]">Quick Links</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-[#3E4E88] transition duration-300">Home</a>
            <a href="#" className="hover:text-[#3E4E88] transition duration-300">About Us</a>
            <a href="#" className="hover:text-[#3E4E88] transition duration-300">Services</a>
            <a href="#" className="hover:text-[#3E4E88] transition duration-300">Contact Us</a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#3E4E88] my-6" />

        {/* Footer Copyright Section */}
        <div className="text-center mt-4">
          <p className="text-sm">© {new Date().getFullYear()} WebStudio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
