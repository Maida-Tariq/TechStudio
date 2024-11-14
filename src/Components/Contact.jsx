import React, { useState } from 'react';
import axios from 'axios';

const countryList = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", 
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", 
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", 
  "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", 
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", 
  "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", 
  "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", 
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", 
  "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
  "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", 
  "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", 
  "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", 
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", 
  "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", 
  "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
  "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", 
  "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", 
  "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", 
  "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
  "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", 
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
  "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", 
  "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", 
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", 
  "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", 
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

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
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Form submitted:', formValues);
    }
    try {
      const response = await axios.post("http://localhost:4040/api/v1/contact/send", {
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone,
        country: formValues.country,
        projectDescription: formValues.projectDescription, 
      });
      console.log('Form submitted:', response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const formStyle = "border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#3E4E88] transition duration-200";

  return (
    <div className="bg-gray-50 py-16" data-aos="fade-up" data-aos-duration="1000">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-black mb-8">
          Let’s Make Something Awesome Together!
        </h2>

        <form  className="bg-white shadow-xl rounded-lg p-8 border border-gray-200 relative overflow-hidden" onSubmit={handleSubmit}>
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
              {countryList.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
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
