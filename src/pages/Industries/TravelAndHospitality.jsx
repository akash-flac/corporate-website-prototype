import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const TravelAndHospitality = () => {
  return (
    <div>
      <Hero bgImage={`src/images/industries/IndustriesHero/finance.jpg`}/>
      <div className="bg-green-500 m-10">
      CRAZY
      <img src="src/images/industries/IndustriesHero/finance.jpg" alt="" className="w-20 h-96" />
      </div>
      <Footer/>
    </div>
  )
}

export default TravelAndHospitality