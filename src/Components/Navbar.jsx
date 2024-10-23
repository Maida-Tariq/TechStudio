import React, { useState } from 'react';

const Navbar = () => {
  // State to manage the dropdown menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 bg-white text-[#333333]"> 
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="text-4xl font-extrabold tracking-wide cursor-pointer ml-[3%]">
          Tech<span className="italic text-[#3E4E88]">Studio</span> 
        </div>
        
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Menu Links for Larger Screens */}
        <div className={`hidden md:flex space-x-8`}>
          <a href="/" className="hover:text-[#3E4E88] hover:underline underline-offset-4 transition duration-300 font-semibold">
            Home
          </a>
          <a href="/about" className="hover:text-[#3E4E88] hover:underline underline-offset-4 transition duration-300 font-semibold">
            About Us
          </a>
          <a href="/services" className="hover:text-[#3E4E88] hover:underline underline-offset-4 transition duration-300 font-semibold">
            Services
          </a>
          <a href="/contact" className="hover:text-[#3E4E88] hover:underline underline-offset-4 transition duration-300 font-semibold">
            Contact Us
          </a>
        </div>

        {/* Call-to-Action Button for Larger Screens */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="bg-[#3E4E88] text-white px-8 py-3 rounded-full hover:bg-[#fff] hover:text-[#3E4E88] transition duration-300 font-bold text-lg"
          >
            Let's Start a Project
          </a>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <a href="/" className="block text-[#333333] hover:text-[#3E4E88] p-4 border-b border-gray-300">
          Home
        </a>
        <a href="/about" className="block text-[#333333] hover:text-[#3E4E88] p-4 border-b border-gray-300">
          About Us
        </a>
        <a href="/services" className="block text-[#333333] hover:text-[#3E4E88] p-4 border-b border-gray-300">
          Services
        </a>
        <a href="/contact" className="block text-[#333333] hover:text-[#3E4E88] p-4 border-b border-gray-300">
          Contact Us
        </a>
        
        {/* Call-to-Action Button for Mobile */}
        <a
          href="/contact"
          className="block text-center bg-[#3E4E88] text-white px-8 py-3 rounded-full hover:bg-[#fff] hover:text-[#3E4E88] transition duration-300 font-bold text-lg my-4 mx-auto"
        >
          Let's Start a Project
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
