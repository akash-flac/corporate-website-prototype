import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { webObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const WebDevelopment = () => {
  return (
    <div>
      <Hero heading={webObj.title} bgImage={webObj.src} content={webObj.description}/>
      <ServicesCommon obj={webObj} />
      <Footer />
    </div>
  );
};

export default WebDevelopment;
