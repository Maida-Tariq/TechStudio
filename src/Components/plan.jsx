import React, { useState } from 'react';

const plans = [
  { title: 'Basic', price: '200', features: ['Responsive Website', 'Basic SEO', 'Contact Form', 'Email Support'], tagColor: 'bg-gray-500' },
  { title: 'Standard', price: '500', features: ['E-commerce Integration', 'SEO Optimization', 'Custom Forms', 'Priority Support'], tagColor: 'bg-indigo-500' },
  { title: 'Premium', price: '1000', features: ['Full Stack Development', 'Advanced SEO', 'Custom Dashboard', '24/7 Premium Support'], tagColor: 'bg-indigo-500' },
];

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState('Card');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');

  const openForm = (planTitle) => setSelectedPlan(planTitle);
  const closeForm = () => {
    setSelectedPlan(null);
    setError('');
  };

  const validateForm = () => {
    if (!email || !cardNumber || !expiryDate || !cvc || !country) {
      setError('Please fill in all fields.');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Invalid email format.');
      return false;
    }
    if (!/^\d{16}$/.test(cardNumber)) {
      setError('Card number must be 16 digits.');
      return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      setError('Expiry date format should be MM/YY.');
      return false;
    }
    if (!/^\d{3}$/.test(cvc)) {
      setError('CVC must be 3 digits.');
      return false;
    }
    return true;
  };

  const handlePurchase = () => {
    if (validateForm()) {
      alert(`Purchase complete for the ${selectedPlan} plan using ${selectedMethod}`);
      closeForm();
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-mid from-600 via-transparent to-indigo-200 py-16 px-4">
      <div className="text-center text-black">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Our Pricing & Plans</h2>
        <p className="text-md sm:text-lg mb-12">Choose the best plan that suits your business needs</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="w-full sm:w-64 md:w-1/3 lg:w-64 rounded-xl overflow-hidden shadow-lg bg-white p-6 transform hover:scale-105 transition-transform">
            <div className={`absolute top-0 left-0 px-4 py-1 text-white text-xs font-bold ${plan.tagColor} rounded-br-xl`}>
              {plan.title}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 text-center mt-8">${plan.price}<span className="text-sm text-gray-600">/month</span></h3>
            <ul className="text-gray-600 my-6 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => openForm(plan.title)} className="w-full py-2 bg-gradient-to-r from-mid from-500 to-indigo-500 text-white font-semibold rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full sm:max-w-md p-6 relative">
            <button onClick={closeForm} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">✕</button>
            
            {/* Header Section */}
            <div className="bg-indigo-500 p-4 rounded-t-lg text-white text-center">
              <h2 className="text-lg font-semibold">Subscribe to {selectedPlan} Plan</h2>
              <p className="text-2xl font-bold">$ {selectedPlan === 'Basic' ? '200' : selectedPlan === 'Standard' ? '500' : '1000'}</p>
              <p className="text-sm">Total payable today</p>
            </div>
            
            {/* Form Fields */}
            <div className="mt-4">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              
              <div className="flex space-x-2 mb-4">
                {['Card', 'Afterpay', 'Klarna', 'Affirm'].map((method) => (
                  <button key={method} onClick={() => setSelectedMethod(method)} className={`flex-1 py-2 ${selectedMethod === method ? 'border-b-2 border-indigo-500 text-indigo-500 font-semibold' : 'text-gray-500'}`}>
                    {method}
                  </button>
                ))}
              </div>
              
              <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="Card Number" className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <div className="flex space-x-2 mb-4">
                <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM/YY" className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="CVC" className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              
              <button onClick={handlePurchase} className="w-full bg-indigo-500 text-white font-bold py-2 sm:py-3 rounded hover:bg-indigo-600">Complete Purchase</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPlans;
