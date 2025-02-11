import React from "react";
import Hero from "../../components/Hero";
import WhyChooseMarkle from "../../components/WhyChooseMarkle";
import Footer from "/src/components/Footer";
import Services from "/src/components/Services";
import SolutionsWeDeliver from "/src/components/SolutionsWeDeliver";

const AboutCompany = () => {
  return (
    <div>
      <Hero
        bgImage={"/src/images/aboutUs.jpeg"}
        heading={"About Us"}
        content={"Driving Success Through Innovative IT Solutions"}
      />
      <WhyChooseMarkle />
      <Services />
      <SolutionsWeDeliver />
      <Footer />
    </div>
  );
};

export default AboutCompany;
