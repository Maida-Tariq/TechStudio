import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 bg-[#F9F4EF] to-[#357B8A] text-white shadow-xl"> 
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="text-[#333333] text-4xl font-extrabold tracking-wide cursor-pointer ml-[3%]">
          Tech<span className="italic text-[#3E4E88]">Studio</span> 
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-[#333333] hover:text-[#3E4E88] hover:underline underline-offset-4 transition duration-300 font-semibold">
            Home
          </a>
          <a href="/about" className="text-[#333333] hover:text-[#3E4E88] hover:underline underline-offset-4 transition duration-300 font-semibold">
            About Us
          </a>
          <a href="/services" className="text-[#333333] hover:text-[#3E4E88] hover:underline underline-offset-4 transition duration-300 font-semibold">
            Services
          </a>
          <a href="/services" className="text-[#333333] hover:text-[#3E4E88] hover:underline underline-offset-4 transition duration-300 font-semibold">
            Contact Us
          </a>
        </div>

        {/* Call-to-Action Button */}
        <div>
        <a
  href="/contact"
  className="bg-[#F9F4EF] border-2 border-[#3E4E88] text-[#333333] px-8 py-3 rounded-full shadow-2xl hover:bg-[#fff] hover:text-[#3E4E88] hover:border-[#3E4E88] transition duration-300 font-bold text-lg"
>
  Let's Start a Project
</a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
