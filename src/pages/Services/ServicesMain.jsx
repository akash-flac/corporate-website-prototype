import React from "react";
import Services from "../../components/Services";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import WhyMarkle from "../../components/WhyMarkle";

const ServicesMain = () => {
  return (
    <div>
      <Hero
        bgImage={`src/images/services.jpeg`}
        heading={`Services We Provide`}
        content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`}
      />
      <Services />
      <WhyMarkle />
      <Footer />
    </div>
  );
};

export default ServicesMain;
