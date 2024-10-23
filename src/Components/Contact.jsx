// src/components/ContactSection.js

import React, { useState } from 'react';

const ContactSection = () => {
    const [activeCategory, setActiveCategory] = useState('UI/UX Design');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const isActive = (category) => activeCategory === category;

    const formStyle = "border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#3E4E88] transition duration-200";
    
    return (
        <div className="bg-gray-50 py-16" data-aos="fade-up" data-aos-duration="1000">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-center text-black mb-8">
                    Let’s Make Something Awesome Together!
                </h2>

                <form className="bg-white shadow-xl rounded-lg p-8 border border-gray-200 relative overflow-hidden">
                    {/* Background shapes */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#3E4E88] opacity-20 rounded-full transform -translate-x-20 -translate-y-20"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#3E4E88] opacity-20 rounded-full transform translate-x-20 translate-y-20"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className={formStyle}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            className={formStyle}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <select
                            name="country"
                            className={formStyle}
                        >
                            <option value="Pakistan">Pakistan</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            {/* Add more countries as needed */}
                        </select>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className={formStyle}
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            name="projectDescription"
                            placeholder="Describe Your Project"
                            rows="4"
                            required
                            className={`border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#3E4E88] transition duration-200 w-full`}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#3E4E88] text-white font-semibold py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105 w-full"
                    >
                        Send Inquiry
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;
