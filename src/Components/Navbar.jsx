import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 bg-white text-[#333333]"> 
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-4xl font-extrabold tracking-wide cursor-pointer ml-[3%]">
          Tech<span className="italic text-mid">Studio</span> 
        </div>

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

        <div className={`hidden md:flex space-x-8`}>
          <Link to="/" className="hover:text-mid hover:underline underline-offset-4 transition duration-300 font-semibold">Home</Link>
          <Link to="/about" className="hover:text-mid hover:underline underline-offset-4 transition duration-300 font-semibold">About Us</Link>
          <Link to="/services" className="hover:text-mid hover:underline underline-offset-4 transition duration-300 font-semibold">Services</Link>
          <Link to="/contact" className="hover:text-mid hover:underline underline-offset-4 transition duration-300 font-semibold">Contact Us</Link>
        </div>

        <div className="hidden md:block">
          <Link to="/contact" className="bg-mid text-white px-8 py-3 rounded-full hover:bg-[#fff] hover:text-mid hover:border-2 hover:border-mid transition duration-300 font-bold text-lg">
            Let's Start a Project
          </Link>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <Link to="/" className="block text-[#333333] hover:text-mid p-4 border-b border-gray-300">Home</Link>
        <Link to="/about" className="block text-[#333333] hover:text-mid p-4 border-b border-gray-300">About Us</Link>
        <Link to="/services" className="block text-[#333333] hover:text-mid p-4 border-b border-gray-300">Services</Link>
        <Link to="/contact" className="block text-[#333333] hover:text-mid p-4 border-b border-gray-300">Contact Us</Link>
        
        <Link to="/contact" className="block text-center bg-mid text-white px-8 py-3 rounded-full hover:bg-[#fff] hover:text-mid transition duration-300 font-bold text-lg my-4 mx-auto">
          Let's Start a Project
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
