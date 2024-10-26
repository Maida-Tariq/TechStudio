import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-gray-100">
        {/* Hero Section */}
        <header className="bg-mid flex flex-col items-center justify-center py-20 text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Tech Studio</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Your partner in web development excellence, crafting custom solutions to meet your business needs.
          </p>
        </header>

        {/* Main Container */}
        <div className="container mx-auto p-6">
          {/* Our Story Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-mid mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2024, Tech Studio emerged from a shared vision to create stunning, high-performance websites.
              Our dedicated team combines technical expertise with creative insight to deliver exceptional results.
              We don’t just build websites; we build digital experiences that engage and inspire your audience.
            </p>
          </section>

          {/* Our Values Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-mid mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-mid">Quality</h3>
                <p className="text-gray-600">We strive for excellence in every project.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-mid">Collaboration</h3>
                <p className="text-gray-600">We believe in the power of teamwork.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-mid">Innovation</h3>
                <p className="text-gray-600">We embrace new technologies and ideas.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-mid">Client Success</h3>
                <p className="text-gray-600">Your success is our top priority.</p>
              </div>
            </div>
          </section>

          {/* Meet Our Team Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-mid mb-4">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Team Member Card */}
              {teamMembers.map(member => (
                <div key={member.name} className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="text-gray-500">{member.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-mid text-white rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              If you're ready to start your project or have any questions, don't hesitate to reach out!
            </p>
            <a href="mailto:info@techstudio.com" className="text-blue-300 underline">info@techstudio.com</a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const teamMembers = [
  { name: 'John Doe', role: 'Frontend Developer', description: 'Specializes in creating user-friendly interfaces.' },
  { name: 'Jane Smith', role: 'Backend Developer', description: 'Expert in server-side logic and database management.' },
  { name: 'Alice Johnson', role: 'UI/UX Designer', description: 'Passionate about crafting visually appealing designs.' },
];

export default AboutUs;
