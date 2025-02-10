import React from "react";
import Hero from "../../components/Hero";
import { transportationObj } from "../../data/industries/industries";
import IndustryCommon from "../../components/IndustryCommon";

const TransportationAndLogistics = () => {
  return (
    <div>
      <Hero
        heading={transportationObj.title}
        bgImage={transportationObj.src}
        content={transportationObj.description}
      />
      <IndustryCommon obj={transportationObj} />
    </div>
  );
};

export default TransportationAndLogistics;
