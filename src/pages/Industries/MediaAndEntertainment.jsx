import React from 'react'
import { mediaObj } from '../../data/industries/industries'
import Hero from '../../components/Hero'
import IndustryCommon from '../../components/IndustryCommon'
const MediaAndEntertainment = () => {
  return (
    <div>
      <Hero heading={mediaObj.title} bgImage={mediaObj.src} content={mediaObj.description} />
      <IndustryCommon obj={mediaObj} />
    </div>
  )
}

export default MediaAndEntertainment