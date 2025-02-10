import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import { educationObj } from '../../data/industries/industries'
import IndustryCommon from '../../components/IndustryCommon'

const Education = () => {
  return (
    <div>
      <Hero heading={educationObj.title} bgImage={educationObj.src} content={educationObj.description}/>
      <IndustryCommon obj={educationObj}/>
      <Footer />
    </div>
  )
}

export default Education