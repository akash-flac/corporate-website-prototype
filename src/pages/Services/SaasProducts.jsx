import React from "react";
import ServicesCommon from "../../components/ServicesCommon";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { saasProductsObj } from "../../data/services/services";

const SaasProducts = () => {
  return (
    <div>
      <Hero heading={saasProductsObj.title} bgImage={saasProductsObj.src} content={saasProductsObj.description}/>
      <ServicesCommon obj={saasProductsObj} />
      <Footer />
    </div>
  );
};

export default SaasProducts;
