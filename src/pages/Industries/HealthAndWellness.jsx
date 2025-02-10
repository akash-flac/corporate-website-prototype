import React from 'react'

//components
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import IndustryCommon from '../../components/IndustryCommon'

//data
import { healthObj } from '../../data/industries/industries'

const HealthAndWellness = () => {
  return (
    <div>
      <Hero heading={healthObj.title} bgImage={healthObj.src}/>
      <IndustryCommon obj={healthObj.sections} />
      <Footer/>
    </div>
  )
}

export default HealthAndWellness