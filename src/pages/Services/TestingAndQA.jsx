import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { testingObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const TestingAndQA = () => {
  return (
    <div>
      <Hero heading={testingObj.title} bgImage={testingObj.src} content={testingObj.description}/>
      <ServicesCommon obj={testingObj} />
      <Footer />
    </div>
  );
};

export default TestingAndQA;
