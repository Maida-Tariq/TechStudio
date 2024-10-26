import React from "react";
import roomImage from "../assets/card1.jpg";

const AboutSection = () => {
  return (
    <div
      className="bg-gray-50 min-h-screen flex items-center justify-center"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      {/* Adjusted width to a smaller max-w */}
      <div className="max-w-4xl mx-auto w-[90%] p-4">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Left Side: Cards */}
          <div className="relative flex flex-col lg:flex-row lg:space-x-4 mb-8">
            <div className="bg-mid rounded-lg shadow-lg p-4 text-white w-full h-[300px] lg:w-64 transform transition-all duration-300 hover:-translate-x-2 hover:-translate-y-1 hover:shadow-xl relative z-30 mb-4 lg:mb-0">
              <img
                src={roomImage}
                alt="Tailored Web Solutions"
                className="rounded-lg mb-4 w-full h-[270px] object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="mt-8 lg:mt-0 lg:ml-8 flex-1 text-justify">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-yellow-200 px-2 py-1">Who We Are - Our Story</span>
            </h2>
            <p className="text-gray-700 text-lg mb-4">
            Founded in 2024, Tech Studio emerged from a shared vision to create stunning, high-performance websites. Our dedicated team combines technical expertise with creative insight to deliver exceptional results. We don’t just build websites; we build digital experiences that engage and inspire your audience.
            </p>
            <p className="text-gray-700 text-lg">
              At Tech Studio, we believe that every project is a chance to innovate and exceed expectations. Let us help you transform your ideas into reality with our tailored solutions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
