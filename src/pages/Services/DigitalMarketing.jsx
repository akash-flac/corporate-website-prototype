import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { digitalMarketingObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const DigitalMarketing = () => {
  return (
    <div>
      <Hero
        heading={digitalMarketingObj.title}
        bgImage={digitalMarketingObj.src}
        content={digitalMarketingObj.description}
      />
      <ServicesCommon obj={digitalMarketingObj} />
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
