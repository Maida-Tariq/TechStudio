import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white py-20 lg:py-32" data-aos="zoom-in" data-aos-duration="3000">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 mt-[-50px]">

        {/* Main Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6 lg:mr-5 ml-[5%]">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Building <span className="text-mid text-600">Quality Web Apps</span> For Engaging
            Digital Experiences
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We just don’t create average apps but craft digital experiences that stir emotions and resonate your business with human psychology, for a lasting and meaningful brand.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="px-4 py-3 bg-mid text-white rounded-md hover:bg-mid transition duration-300">
              Get Started
            </button>
            <button className="px-6 py-3 border border-mid border-300 text-black rounded-md bg-gry hover:bg-[#B7BEC3] transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Circular Button with Arrow on the Right */}
        <div className="flex items-center lg:ml-20 mb-0 lg:mt-8" style={{ marginTop: '100px' }}>
          <div className="relative">
            <a
              href="#"
              className="hidden sm:flex items-center justify-center w-[200px] h-[200px] bg-[white] text-mid border-2 border-mid rounded-full shadow-md hover:bg-mid transition duration-300 hover:text-[white]"
            >
              <span className="text-base font-bold text-center">Let's Discuss<br /> Your Project</span>
            </a>
            {/* Arrow pointing from the button */}
            <div className="hidden sm:absolute sm:left-[150px] sm:top-1/2 sm:transform sm:-translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3E4E88"
                strokeWidth="3"
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
