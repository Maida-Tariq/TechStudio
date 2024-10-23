import React from "react";
import roomImage from "../assets/card1.jpg"; // Adjust the path as necessary
import onlineEducationImage from "../assets/card2.jpg"; // Adjust the path as necessary
import teamImage from "../assets/card3.jpg"; // Adjust the path as necessary

const AboutSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
      <div className="max-w-6xl mx-auto w-[90%] p-4"> {/* Changed width to 90% for smaller screens */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Left Side: Cards */}
          <div className="relative flex flex-col lg:flex-row lg:space-x-4">
            {/* Card 1 */}
            <div className="bg-[#3E4E88] rounded-lg shadow-lg p-6 text-white w-full lg:w-64 transform transition-all duration-300 hover:-translate-x-8 hover:-translate-y-2 hover:shadow-xl relative z-30 mb-4 lg:mb-0"> {/* Added margin bottom for spacing */}
              <img
                src={roomImage}
                alt="Tailored Web Solutions"
                className="rounded-lg mb-4"
              />
              <h3 className="font-semibold text-xl">Tailored Web Solutions</h3>
              <p className="text-sm mt-1">
                Custom web applications designed for your unique needs, enhancing user experience and engagement.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#3E4E88] rounded-lg shadow-lg p-6 text-white w-full lg:w-64 transform transition-all duration-300 hover:-translate-x-[50%] hover:-translate-y-2 hover:shadow-xl absolute -mt-[20%] lg:-mt-10 z-20">
              <img
                src={onlineEducationImage}
                alt="Innovative Learning Platforms"
                className="rounded-lg mb-4"
              />
              <h3 className="font-semibold text-xl">Innovative Learning Platforms</h3>
              <p className="text-sm mt-1">
                Developing comprehensive online education solutions to empower learners around the globe.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#3E4E88] rounded-lg shadow-lg p-6 text-white w-full lg:w-64 transform transition-all duration-300 hover:-translate-x-[50%] hover:-translate-y-2 hover:shadow-xl absolute -mt-[32%] lg:-mt-30 z-10 left-4">
              <img
                src={teamImage}
                alt="Expert Development Team"
                className="rounded-lg mb-4"
              />
              <h3 className="font-semibold text-xl">Expert Development Team</h3>
              <p className="text-sm mt-1">
                A passionate team of developers, designers, and strategists dedicated to delivering quality solutions.
              </p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="mt-8 lg:mt-0 lg:ml-[10%] flex-1 text-justify">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4"> {/* Adjusted font size for smaller screens */}
              <span className="bg-yellow-200 px-2 py-1">Who We Are</span>
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              At [Your Company Name], we specialize in creating innovative web applications that drive business success. Our expert team harnesses the latest technologies to deliver customized solutions tailored to your specific needs.
            </p>
            <p className="text-gray-700 text-lg">
              With a strong focus on user experience and functionality, we develop platforms that empower businesses to thrive in the digital age. From startups to established enterprises, we are committed to helping you achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
