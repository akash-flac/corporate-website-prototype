import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { mvpObj } from "../../data/services/services";
import ServicesCommon from "../../components/ServicesCommon";

const MVPDev = () => {
  return (
    <div>
      <Hero heading={mvpObj.title} bgImage={mvpObj.src} content={mvpObj.description}/>
      <ServicesCommon obj={mvpObj} />
      <Footer />
    </div>
  );
};

export default MVPDev;
