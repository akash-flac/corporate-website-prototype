import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { uiuxObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const UiUxDesign = () => {
  return (
    <div>
      <Hero heading={uiuxObj.title} bgImage={uiuxObj.src} content={uiuxObj.description}/>
      <ServicesCommon obj={uiuxObj} />
      <Footer />
    </div>
  );
};

export default UiUxDesign;
