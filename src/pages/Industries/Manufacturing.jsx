import React from 'react'
import Hero from '../../components/Hero'
import IndustryCommon from '../../components/IndustryCommon'
import { manufacturingObj } from '../../data/industries/industries'


const Manufacturing = () => {
  return (
    <div>
      <Hero heading={manufacturingObj.title} bgImage={manufacturingObj.src} content={manufacturingObj.description}/>
      <IndustryCommon obj={manufacturingObj} />
    </div>
  )
}

export default Manufacturing