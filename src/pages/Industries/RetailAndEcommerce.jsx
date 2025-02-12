import React from "react";
import Hero from "../../components/Hero";
import { retailingObj } from "../../data/industries/industries";
import IndustryCommon from "../../components/IndustryCommon";
import Footer from "../../components/Footer";

const RetailAndEcommerce = () => {
  return (
    <div>
      <Hero
        heading={retailingObj.title}
        bgImage={retailingObj.src}
        content={retailingObj.description}
      />
      <IndustryCommon obj={retailingObj} />
    </div>
  );
};

export default RetailAndEcommerce;
