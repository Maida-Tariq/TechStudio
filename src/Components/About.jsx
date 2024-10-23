import React from 'react';
import aboutImage from '../assets/about.png'; // Import your image

const AboutUs = () => {
    return (
        <section className="flex justify-center items-center h-screen bg-white">
            <div className="text-center">
                {/* Text Section */}
                <div className="-mb-[90px]">
                    {/* Flexbox for heading and paragraph */}
                    <div className="flex items-center justify-center space-x-4 mr-[20%]">
                        <h2 className="text-xl font-medium text-[#3E4E88] w-[17%] text-justify"> {/* Increased font size */}
                            WebStudio, Web & App Development Company
                        </h2>
                        <p className="text-[10px] text-gray-600 w-[34%] text-justify"> {/* Added text-justify */}
                            As a web, app, and digital transformation company, we have been changing the technology landscape for more than a decade.
                            Our custom mobile app development services are tailored to your business process and brand ethos, fulfilling the needs of valuable clients and customers across the globe.
                            We serve start-ups, mid-levels, and even Fortune 500 companies.
                        </p>
                    </div>
                </div>
                {/* Image Section */}
                <div>
                    <img 
                        src={aboutImage} 
                        alt="O16 Labs" 
                        className="w-full md:w-[95%] lg:w-[90%] xl:w-[65%] mx-auto" 
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
