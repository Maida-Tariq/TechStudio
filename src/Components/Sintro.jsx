import React from 'react';

const Serviceintro = () => {
  return (
    <section className="relative overflow-hidden text-gray-800 py-12 px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 bg-gradient-to-r from-mid/5 to-transparent via-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-mid/10 to-transparent via-transparent"></div>
      <div className="relative max-w-4xl mx-auto z-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-7xl mb-6 mt-20">
          Elevating Your Online Presence
        </h2>
        <p className="text-lg md:text-xl lg:text-3xl mb-8">
          From initial concept to full-scale deployment, we’re here to guide you.
        </p>
        <p className="text-md md:text-lg lg:text-2xl mb-10">
          Are you just starting your web development journey? Looking to enhance your existing website? 
          Or do you need reliable support to maintain and optimize your online presence? We've got you covered.
        </p>
      </div>
    </section>
  );
};

export default Serviceintro;
