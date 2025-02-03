import React from "react";
import Hero from "../../components/Hero";
import FAQ from "../../components/FAQ"
const FAQs = () => {
  return (
    <div>
      <Hero bgImage={`src/images/faq-hero.jpeg`} heading={`Markle answers FAQs`} content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quam, voluptatum repellendus vero laudantium magni voluptates voluptatibus aliquid soluta fuga vel ratione quaerat? Eligendi, cum ducimus laborum commodi placeat possimus?`}/>
      <FAQ/>
      
    </div>
  );
};

export default FAQs;
