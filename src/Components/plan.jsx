
import React, { useState, useEffect } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



const plans = [
  { title: 'Basic', price: 200, features: ['Responsive Website', 'Basic SEO', 'Contact Form', 'Email Support'], tagColor: 'bg-gray-500' },
  { title: 'Standard', price: 500, features: ['E-commerce Integration', 'SEO Optimization', 'Custom Forms', 'Priority Support'], tagColor: 'bg-indigo-500' },
  { title: 'Premium', price: 1000, features: ['Full Stack Development', 'Advanced SEO', 'Custom Dashboard', '24/7 Premium Support'], tagColor: 'bg-indigo-500' },
];

// Map of currency symbols by country code
const currencyMap = {
    "$": "usd",
    "€": "eur",
    "₹": "inr",
    "£": "gbp",
    "¥": "jpy",
    "₣": "chf",
    "₱": "php",
};

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState('Card');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');
  const [currency, setCurrency] = useState('$');
  const [conversionRate, setConversionRate] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const openForm = (planTitle) => {
    setSelectedPlan(planTitle);
    setPaymentSuccess(false); // Reset payment success state
  };

  const closeForm = () => {
    setSelectedPlan(null);
    setEmail('');
    setCountry('');
    setError('');
    setPaymentSuccess(false);
  };

  useEffect(() => {
    const detectCountryAndCurrency = async () => {
      try {
        // Detect country
        const locationResponse = await fetch('https://ipinfo.io/json?token=YOUR_API_KEY');
        const locationData = await locationResponse.json();
        
        const userCountry = locationData.country;
        setCountry(userCountry);
        setCurrency(currencyMap[userCountry] || 'USD');

        // Fetch exchange rate
        const exchangeRateResponse = await fetch(`https://open.er-api.com/v6/latest/USD`);
        const exchangeData = await exchangeRateResponse.json();
        const rate = exchangeData.rates[userCountry] || 1; // Default to 1 if no rate found
        setConversionRate(rate);
      } catch (error) {
        console.error('Failed to fetch user location or exchange rate', error);
      }
    };
    detectCountryAndCurrency();
  }, []);
  const getPriceInLocalCurrency = (priceInUSD) => {
    return (priceInUSD * conversionRate).toFixed(2); // Round to 2 decimal places
  };
  const validateForm = () => {
    if (!email || !country) {
      setError('Please fill in all fields.');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Invalid email format.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    if (!validateForm()) return;

    setIsProcessing(true);
    setError('');

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError('Card element not found.');
      setIsProcessing(false);
      return;
    }

    if (selectedMethod === 'Card') {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          email,
          address: {
            country,
          },
        },
      });

      if (error) {
        setError(error.message);
        setIsProcessing(false);
        return;
      }

      const selectedPlanDetails = plans.find(plan => plan.title === selectedPlan);
      console.log(selectedPlanDetails);
      
      console.log('Request Payload:', {
        paymentMethodId: paymentMethod.id,
        email,
        planTitle: selectedPlan,
        amount: selectedPlanDetails.price * 100, // in cents
        currency: country === 'PK' ? 'PKR' : currencyMap[country],
      });
      try {
        const response = await fetch('http://localhost:4040/api/v1/payment/process-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            email,
            planTitle: selectedPlan,
            amount: selectedPlanDetails.price * 100, // Convert to cents
            currency: currency === '₨' ? 'PKR' : currency,
          }),
        });
        console.log('Response Status:', response.status);
        if (!response.ok) {
        const errorText = await response.text();
        console.log('Error Response Text:', errorText);
        setError('An error occurred while processing your payment.');
        setIsProcessing(false);
        return;
        }
        const result = await response.json();
        if (result.error) {
          setError(result.error);
        } else {
          setPaymentSuccess(true);
        }
      } catch (err) {
        setError('An error occurred while processing your payment.');
      }
    } else {
      setError('Selected payment method is not implemented yet.');
    }
    setIsProcessing(false);
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
            <h3 className="text-2xl font-semibold text-gray-800 text-center mt-8">
              {currency}{getPriceInLocalCurrency(plan.price)}<span className="text-sm text-gray-600">/month</span>
            </h3>
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
            
            <div className="bg-indigo-500 p-4 rounded-t-lg text-white text-center">
              <h2 className="text-lg font-semibold">Subscribe to {selectedPlan} Plan</h2>
              <p className="text-2xl font-bold">{currency} {getPriceInLocalCurrency(plans.find(plan => plan.title === selectedPlan).price)}</p>
              <p className="text-sm">Total payable today</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              

  <div className="flex flex-col space-y-4">
    <div className="flex flex-col">
      <label htmlFor="country" className="text-sm font-medium text-gray-700 mb-2">Country</label>
      <select
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
      >
        <option value="US">USA</option>
        <option value="DE">Germany</option>
        <option value="GB">UK</option>
        <option value="PK">Pakistan</option>
      </select>
    </div>
  </div>

              <div className="my-4">
              <label className="block text-sm font-medium text-gray-700">Card Details</label>
              <div className="p-4 border border-gray-300 rounded-lg mt-2">
                <CardElement />
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing || paymentSuccess}
                className={`w-full py-2 text-white rounded bg-indigo-500 ${isProcessing && 'bg-indigo-300'} ${paymentSuccess && 'bg-green-500'}`}
              >
                {paymentSuccess ? 'Payment Successful' : isProcessing ? 'Processing...' : 'Pay Now'}
              </button>

              {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};


export default PricingPlans;
