import React, { useState } from 'react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We offer a wide range of services including web development, mobile application development, and digital marketing."
        },
        {
            question: "How can I contact support?",
            answer: "You can contact support via email at support@techstudio.com or through our contact form on the website."
        },
        {
            question: "What is your pricing model?",
            answer: "We offer competitive pricing based on the scope and requirements of each project. Please contact us for a custom quote."
        }
    ];

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-5xl mx-auto py-10 px-6"> 
            <h2 className="text-3xl font-bold text-center mb-6 text-black">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg shadow-lg overflow-hidden bg-white"> 
                        <button
                            className="flex justify-between items-center w-full p-4 text-left text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3E4E88]"
                            onClick={() => toggleAnswer(index)}
                        >
                            <span className="text-lg font-semibold">{faq.question}</span>
                            <svg
                                className={`w-6 h-6 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        {openIndex === index && (
                            <div className="p-4 bg-gray-50 text-gray-700">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
