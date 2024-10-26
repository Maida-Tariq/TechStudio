import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services'
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
