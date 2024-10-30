import React from 'react';

const TechStudioCards = () => {
    return (
        <div className="py-10 w-[77%] mx-auto" data-aos="fade-right" data-aos-duration="1000">
            {/* Header and Paragraph Section */}
            <section className="flex flex-col md:flex-row justify-between items-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold w-full md:w-1/3 text-left mb-4 md:mb-0">What Makes Us the #1 Choice</h2>
                <p className="text-base md:text-lg text-gray-700 w-full md:w-2/3 text-justify ml-0 md:ml-4">
                    With every project and each tap into the digital world, we come closer to being the #1 choice for experts who just don’t settle for common. We make, break, create and challenge ourselves with exceptional and ultra-futuristic tech that promise unimagined success. And we’ve been doing this religiously for 10+ years.
                </p>
            </section>

            {/* Cards Section */}
            <div className="flex md:justify-center gap-4 overflow-x-scroll md:overflow-visible md:gap-8 scrollbar-hide">
                {/* Card 1 */}
                <div className="bg-mid text-white rounded-lg shadow-lg flex flex-col items-center justify-center min-w-[250px] md:w-50 h-40 p-4 transition-transform duration-300 hover:scale-105">
                    <h3 className="text-lg md:text-xl font-semibold">Innovative Visionaries</h3>
                    <p className="text-center text-sm md:text-base">Harnessing cutting-edge technology to design transformative solutions.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-mid text-white rounded-lg shadow-lg flex flex-col items-center justify-center min-w-[250px] md:w-50 h-40 p-4 transition-transform duration-300 hover:scale-105">
                    <h3 className="text-lg md:text-xl font-semibold">Bespoke Solutions</h3>
                    <p className="text-center text-sm md:text-base">Offering tailored services that fit your business objectives seamlessly.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-mid text-white rounded-lg shadow-lg flex flex-col items-center justify-center min-w-[250px] md:w-50 h-40 p-4 transition-transform duration-300 hover:scale-105">
                    <h3 className="text-lg md:text-xl font-semibold">Agile Methodologies</h3>
                    <p className="text-center text-sm md:text-base">Employing agile techniques to ensure rapid progress and adaptability.</p>
                </div>
            </div>
        </div>
    );
};

export default TechStudioCards;
