import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { eCommerceObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const ECommerce = () => {
  return (
    <div>
      <Hero
        heading={eCommerceObj.title}
        bgImage={eCommerceObj.src}
        content={eCommerceObj.description}
      />
      <ServicesCommon obj={eCommerceObj} />
      <Footer />
    </div>
  );
};

export default ECommerce;
