import React from 'react'
import Hero from '../components/Hero'
import WhyChooseMarkle from '../components/whyChooseMarkle'
import Footer from "/src/components/Footer";
import Services from "/src/components/Services";
import SolutionsWeDeliver from "/src/components/SolutionsWeDeliver";

const AboutCompany = () => {

  
  return (
    <div>
      <Hero bgImage={"src/images/aboutUs.jpeg"} heading={"About Us"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa eveniet optio tempore enim voluptatum odit natus nihil culpa neque, impedit dicta, commodi quos ratione earum explicabo dignissimos. Vel, sequi."}/>
      <WhyChooseMarkle/>
      <Services/>
      <SolutionsWeDeliver/>
      <Footer/>
    </div>
  )
}

export default AboutCompany