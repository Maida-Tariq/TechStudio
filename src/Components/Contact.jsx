// src/components/ContactSection.js

import React, { useState } from 'react';

const ContactSection = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        country: 'Pakistan',
        phone: '',
        projectDescription: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validateForm = () => {
        let errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Email format validation
        const phonePattern = /^[0-9]*$/;

        if (!formValues.name) errors.name = 'Name is required.';
        if (!formValues.email) {
            errors.email = 'Email is required.';
        } else if (!emailPattern.test(formValues.email)) {
            errors.email = 'Please enter a valid email format.';
        }
        if (formValues.phone && !phonePattern.test(formValues.phone)) {
            errors.phone = 'Phone number must contain only numbers.';
        }
        if (!formValues.projectDescription) errors.projectDescription = 'Project description is required.';

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitted(true);
            // Handle form submission, e.g., send formValues to a server
            console.log('Form submitted:', formValues);
        }
    };

    const formStyle = "border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#3E4E88] transition duration-200";

    return (
        <div className="bg-gray-50 py-16" data-aos="fade-up" data-aos-duration="1000">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-center text-black mb-8">
                    Let’s Make Something Awesome Together!
                </h2>

                <form className="bg-white shadow-xl rounded-lg p-8 border border-gray-200 relative overflow-hidden" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className={formStyle}
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                        {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            className={formStyle}
                            value={formValues.email}
                            onChange={handleInputChange}
                        />
                        {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <select
                            name="country"
                            className={formStyle}
                            value={formValues.country}
                            onChange={handleInputChange}
                        >
                            <option value="">Select Country</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Brunei">Brunei</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            {/* Add all other countries similarly */}
                            <option value="United States">United States</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className={formStyle}
                            value={formValues.phone}
                            onChange={handleInputChange}
                        />
                        {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
                    </div>

                    <div className="mb-6">
                        <textarea
                            name="projectDescription"
                            placeholder="Describe Your Project"
                            rows="4"
                            className={`border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-mid transition duration-200 w-full`}
                            value={formValues.projectDescription}
                            onChange={handleInputChange}
                        />
                        {formErrors.projectDescription && <p className="text-red-500 text-sm">{formErrors.projectDescription}</p>}
                    </div>

                    <button
                        type="submit"
                        className="bg-mid text-white font-semibold py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105 w-full"
                    >
                        Send Inquiry
                    </button>
                    {isSubmitted && <p className="text-green-500 text-center mt-4">Form submitted successfully!</p>}
                </form>
            </div>
        </div>
    );
};

export default ContactSection;
