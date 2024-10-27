import React from 'react';

const GoalCard = () => {
  return (
    <div className='mb-20 mt-20'>
      <div className="max-w-md mx-auto p-6 my-6 bg-white rounded-lg shadow-lg flex flex-col">
        <h3 className="text-mid text-2xl font-semibold mb-4 text-center">
          Our Goal is Simple
        </h3>
        <p className="text-gray-700 text-base text-center mb-6">
          We are here to help clients along their digital journeys, partnering with them to bring their business objectives to life. No matter the project, when you choose Arcurve, you can count on a consistent, thorough and client-centric approach, every time. And that's the Arcurve Way.
        </p>
      </div>
      <div className="text-center mt-[7%]">
        <h1 className="text-gray-700 lg:text-4xl">
          We would love to hear about your technology goals.
        </h1>
        <a 
          href="https://wa.me/923131744268" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="bg-mid text-white font-semibold py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-mid hover:border-2 hover:border-mid mt-10">
            Let's Chat
          </button>
        </a>
      </div>
    </div>
  );
};

export default GoalCard;
