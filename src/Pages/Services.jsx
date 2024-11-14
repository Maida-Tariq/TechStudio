import React from 'react'
import Navbar from '../Components/Navbar'
import Serviceintro from '../Components/Sintro'
import Scircular from '../Components/Scircular'
import Goal from '../Components/Goal'
import Plan from '../Components/plan'
import Footer from '../Components/Footer'
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QJIiSA0lB0d0zAZI9e3l7FVE7ns4YC7xVbJHDZ1p4SNiAlIGu4W2SCVJVkwCP1S3a0W041WCjJfEOh3qYJgrJQ400wxQFt83Z');

const Services = () => {
  return (
    <div>
        <Navbar />
        <Serviceintro />
        <Scircular />
        <Elements stripe={stripePromise}>
        <Plan />
        </Elements>
        <Goal />
        <Footer />
    </div>
  )
}

export default Services


