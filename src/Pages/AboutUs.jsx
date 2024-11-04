import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Team from '../Components/team'
import About from '../Components/About'

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-gray-100">
        {/* Hero Section */}
        <header className="relative overflow-hidden text-gray-800 py-12 px-6 md:px-12 lg:px-24">
          <div className="absolute inset-0 bg-gradient-to-r from-mid/5 to-transparent via-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-mid/10 to-transparent via-transparent"></div>
          <div className="relative max-w-4xl mx-auto z-10 text-center">
            <h1 className="text-6xl font-bold md:text-5xl lg:text-6xl mb-4 underline">Welcome to Tech Studio</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Your partner in web development excellence, crafting custom solutions to meet your business needs.
            </p>
          </div>
        </header>

        <div className="container mx-auto p-6">
          <About />
          
          {/* Our Values Section */}
          <section className="bg-white rounded-lg p-8 mb-8">
            <h2 className="text-4xl font-semibold text-mid text-center mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-mid">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <Team />

          {/* Contact Section */}
          <section className="bg-mid text-white rounded-lg p-8 mb-8">
            <h2 className="text-4xl font-semibold text-center mb-4">Get in Touch</h2>
            <p className="text-center mb-4">
              If you're ready to start your project or have any questions, don't hesitate to reach out!
            </p>
            <a href="mailto:info@techstudio.com" className="text-blue-300 underline text-center block">
              info@techstudio.com
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const values = [
  { title: 'Quality', description: 'We strive for excellence in every project.' },
  { title: 'Collaboration', description: 'We believe in the power of teamwork.' },
  { title: 'Innovation', description: 'We embrace new technologies and ideas.' },
  { title: 'Client Success', description: 'Your success is our top priority.' },
];

export default AboutUs;
