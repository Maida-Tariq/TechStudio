import mongoose from 'mongoose';


const PaymentSchema = new mongoose.Schema({
    email: String,
    planTitle: String,
    amount: Number,
    currency: String,
    status: String,
    createdAt: { type: Date, default: Date.now },
  });

  const Payment = mongoose.model('Payment', PaymentSchema);
  export default Payment;