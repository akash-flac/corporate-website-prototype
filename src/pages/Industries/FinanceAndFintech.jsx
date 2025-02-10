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
        heading={`Finance and Fintech`}
        bgImage={`src/images/industries/IndustriesHero/finance.jpg`}
        content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis aspernatur quasi optio maxime sed amet tenetur at. A, aspernatur.`}
      />
      <IndustryCommon obj={financeObj} />
      <Footer />
    </div>
  );
};

export default FinanceAndFintech;
