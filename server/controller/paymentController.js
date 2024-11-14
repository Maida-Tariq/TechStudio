import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import  Payment  from "../models/paymentSchema.js";
import Stripe from 'stripe';

import { config } from "dotenv";
config({path:"./config/config.env"})

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const currencyMap = {
    "$": "usd",
    "€": "eur",
    "₹": "inr",
    "£": "gbp",
    "¥": "jpy",
    "₣": "chf",
    "₱": "php",
    "₣": "chf",
    
  };
  
  function convertCurrencySymbolToCode(symbol) {
    return currencyMap[symbol] || symbol.toLowerCase(); // Return the corresponding code or the symbol as is
  }

export const paymentNow = catchAsyncErrors( async (req, res) => {
    const { paymentMethodId, email, planTitle, amount, currency  } = req.body;
  
     // Convert currency symbol to ISO code (e.g., $ -> usd)
     const currencyCode = convertCurrencySymbolToCode(currency);
  
  
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: currencyCode,
        payment_method: paymentMethodId,
        confirm: true,
        description: `Payment for ${planTitle} plan`,
        automatic_payment_methods: {
          enabled: true,  // Automatically enable payment methods
          allow_redirects: 'never' // Disable redirect-based payment methods
        },
      });
  
      const payment = new Payment({
        email,
        planTitle,
        amount: amount / 100, // Stripe amounts are in cents
        currency,
        status: paymentIntent.status,
      });
  
      await payment.save(); // Save the payment information to the database
  
      res.json({
        success: true,
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error('Payment processing error:', error.message);
      res.status(400).json({ success: false, error: error.message });
    }
  });