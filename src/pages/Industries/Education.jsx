import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import { educationObj } from '../../data/industries/industries'

const Education = () => {
  return (
    <div>
      <Hero heading={educationObj.title}/>
      <Footer />
    </div>
  )
}

export default Education