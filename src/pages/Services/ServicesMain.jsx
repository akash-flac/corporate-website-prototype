import React from 'react'
import Services from "../../components/Services"
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const ServicesMain = () => {
  return (
    <div>
      <Hero bgImage={`src/images/services.jpeg`} />
      <Services />
      <Footer/>
    </div>
  )
}

export default ServicesMain