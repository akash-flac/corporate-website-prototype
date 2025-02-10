import React from "react";
import Hero from "../../components/Hero";
import { professionalObj } from "../../data/industries/industries";
import IndustryCommon from "../../components/IndustryCommon";

const ProfessionalServices = () => {
  return (
    <div>
      <Hero
        heading={professionalObj.title}
        bgImage={professionalObj.src}
        content={professionalObj.description}
      />
      <IndustryCommon obj={professionalObj} />
    </div>
  );
};

export default ProfessionalServices;
