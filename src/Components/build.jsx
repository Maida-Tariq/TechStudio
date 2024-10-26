import React from "react";
import BuildImage from "../assets/build.png"; // Import your image here

const BuildSection = () => {
  return (
    <section className="py-16 bg-white" data-aos="zoom-out" data-aos-duration="1000"> 
      <div className="container mx-auto px-4">
        <div className="bg-mid text-white flex flex-col lg:flex-row items-center p-8 rounded-lg shadow-lg mx-4 lg:mx-32">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold">Let’s Build Something Incredible</h2>
            <p className="text-lg text-justify">
              Industries are transforming faster than lightspeed. And so are the technology principles. 
              With O16 Labs, your brand to knock out all other competitors. 
              Let’s join hands and build the next-best and groundbreaking project unlike anything ever.
            </p>
            {/* Button */}
            <button className="flex items-center justify-center px-6 py-3 bg-white text-[#3E4E88] rounded-md font-semibold hover:bg-indigo-200 transition">
              Find Out More
              <span className="ml-2">&rarr;</span> {/* Arrow symbol */}
            </button>
          </div>
          
          {/* Image */}
          <div className="flex-1 relative mt-8 lg:mt-0 lg:ml-2">
            <img
              src={BuildImage} // Use the imported image here
              alt="Build Something Incredible"
              className="hidden lg:block w-full h-[350px] object-cover rounded-lg" // Hide on small screens
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
