import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[#F9F4EF] py-20 lg:py-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0">

        {/* Main Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6 lg:mr-5 ml-[15%]">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Building <span className="text-[#3E4E88] text-600">Quality Web Apps</span> For Engaging
            Digital Experiences
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We just don’t create average apps but craft digital experiences that stir emotions and resonate your business with human psychology, for a lasting and meaningful brand.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="px-6 py-3 bg-[#3E4E88] text-white rounded-md hover:bg-[#334B72] transition duration-300">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-300 text-white rounded-md bg-[#AAB4C0] hover:bg-[#B7BEC3] transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Circular Button with Arrow on the Right */}
        <div className="flex items-center lg:ml-10 mb-0 lg:mt-8" style={{ marginTop: '100px' }}> {/* Adjust margin-top here */}
          <div className="relative">
            <a
              href="#"
              className="flex items-center justify-center w-24 h-24 bg-[#3E4E88] text-white rounded-full shadow-md hover:bg-[#334B72] transition duration-300"
            >
              <span className="text-base text-center">Let's Discuss<br /> Your Project</span>
            </a>
            {/* Arrow pointing from the button */}
            <div className="absolute left-28 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3E4E88"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow"
              >
                <line x1="0" y1="12" x2="24" y2="12" />
                <polyline points="16 6 22 12 16 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
