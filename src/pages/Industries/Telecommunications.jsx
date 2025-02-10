import React from 'react'
import Hero from '../../components/Hero'
import IndustryCommon from '../../components/IndustryCommon'
import { telecommunicationsObj } from '../../data/industries/industries'

const Telecommunications = () => {
  return (
    <div>
      <Hero heading={telecommunicationsObj.title} bgImage={telecommunicationsObj.src} content={telecommunicationsObj.description}/>
      <IndustryCommon obj={telecommunicationsObj} />
    </div>
  )
}

export default Telecommunications