import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { mobileAppObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const MobileAppDevelopment = () => {
  return (
    <div>
      <Hero heading={mobileAppObj.title} bgImage={mobileAppObj.src} content={mobileAppObj.description}/>
      <ServicesCommon obj={mobileAppObj} />
      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;
