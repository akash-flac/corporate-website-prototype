import React from "react";

//components
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import IndustryCommon from "../../components/IndustryCommon";

//data

import { financeObj } from "../../data/industries/industries";

const FinanceAndFintech = () => {
  return (
    <div>
      <Hero
        heading={financeObj.title}
        bgImage={financeObj.src}
        content={financeObj.description}
      />
      <IndustryCommon obj={financeObj} />
      <Footer />
    </div>
  );
};

export default FinanceAndFintech;
