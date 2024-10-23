import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Services from '../Components/Services'
import Build from '../Components/build'
import Choice from '../Components/Choice'
import Faq from '../Components/FAQ'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Build />
        <Choice />
        <Faq />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home