import React, { useState } from 'react';

const plans = [
  { title: 'Basic', price: '$20/month', features: ['Responsive Website', 'Basic SEO', 'Contact Form'] },
  { title: 'Standard', price: '$50/month', features: ['Custom Domain', 'Advanced SEO', 'E-commerce Integration'] },
  { title: 'Premium', price: '$100/month', features: ['Full Website Design', 'Priority Support', 'Marketing & SEO'] },
];

const PricingPlans = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gray-100 py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-8 text-mid">Our Web Development Plans</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="w-full max-w-xs mx-auto h-auto rounded-lg overflow-hidden shadow-lg bg-white p-6">
            <h3 className="text-xl font-semibold text-black mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-4 text-black">{plan.price}</p>
            <ul className="mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-black text-sm mb-1">{feature}</li>
              ))}
            </ul>
            <button
              onClick={() => setShowModal(true)}
              className="bg-mid hover:bg-mid-dark text-white font-bold py-2 w-full rounded"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-96">
            <h2 className="text-2xl font-semibold mb-4">Complete Your Purchase</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <div className="space-y-2">
                <label className="block font-medium">Card Information</label>
                <input type="text" placeholder="Card Number" className="w-full px-4 py-2 border rounded-lg" />
                <div className="flex space-x-2">
                  <input type="text" placeholder="MM/YY" className="w-1/2 px-4 py-2 border rounded-lg" />
                  <input type="text" placeholder="CVC" className="w-1/2 px-4 py-2 border rounded-lg" />
                </div>
              </div>
              <input type="text" placeholder="Country" className="w-full px-4 py-2 border rounded-lg" />
              <button type="submit" className="w-full py-2 mt-4 bg-mid hover:bg-mid-dark text-white rounded-lg">
                Done
              </button>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPlans;
