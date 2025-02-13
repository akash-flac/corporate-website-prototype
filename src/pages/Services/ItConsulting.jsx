import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import ServicesCommon from '../../components/ServicesCommon'
import { itConsultingObj } from '../../data/services/services'

const ItConsulting = () => {
  return (
    <div>
        <Hero heading={itConsultingObj.title} bgImage={itConsultingObj.src} content={itConsultingObj.description}/>
        <ServicesCommon obj={itConsultingObj} />
        <Footer />
    </div>
  )
}

export default ItConsulting