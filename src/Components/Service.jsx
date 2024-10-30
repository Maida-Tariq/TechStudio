import React from 'react';
// Import images at the top
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.jpg';

const Services = () => {
  return (
    <section className="py-10 bg-white" data-aos="fade-up" data-aos-duration="1000">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row items-center mb-10 w-full md:w-[80%] mx-auto">
          <h2 className="text-mid text-4xl md:text-5xl font-bold mb-4 text-center md:text-left md:mr-4"> 
            Our Services
          </h2>
          <p className="text-gray-700 text-justify md:ml-4 text-sm md:text-base"> 
            At TechStudio, we are dedicated to transforming ideas into innovative software solutions. As a leading software agency, we specialize in crafting bespoke applications that empower businesses to thrive in the digital era. Our team of skilled professionals is committed to delivering cutting-edge technology, tailored to meet your unique needs. Join us to elevate your digital presence and achieve success through smart software solutions.
          </p>
        </div>

        {/* Services Grid Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8"> 
          <div className="relative h-[200px] md:h-[300px] overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full md:w-[45%]"> 
            <img src={service1} alt="Web Development" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg md:text-xl font-bold">Web Development</h3>
            </div>
          </div>

          <div className="relative h-[200px] md:h-[300px] overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full md:w-[30%]"> 
            <img src={service2} alt="UX/UI Designing" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg md:text-xl font-bold">UX/UI Designing</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
