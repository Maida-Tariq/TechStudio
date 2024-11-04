import React from 'react';
import zohaibImage from '../assets/zohaib.png'; 
import Hey from '../assets/hey.png'; 

const teamMembers = [
  {
    name: "Maida Tariq",
    role: "Frontend Developer",
    github: "https://github.com/Maida-Tariq",
    image: Hey, 
  },
  {
    name: "Zohaib Khadim",
    role: "Backend Developer",
    github: "https://github.com/Zohaib-Khadim",
    image: zohaibImage,
  },
  {
    name: "Dua Ahtsham",
    role: "Wordpress Developer",
    github: "https://github.com/Dua-WebDesigner",
    image: Hey,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-mid-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-mid-600 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center border border-mid-100"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full border-4 border-mid-500 shadow-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-mid-600 font-medium">{member.role}</p>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-gradient-to-r from-mid from-500 to-mid to-600 text-white px-5 py-2 rounded-lg hover:from-mid hover:from-600 hover:to-indigo-500 transition ease-in-out duration-200"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
