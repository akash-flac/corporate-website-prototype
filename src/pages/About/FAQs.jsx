import React, { useState } from "react";
import Hero from "../../components/Hero";

import FAQ, { AccordionItem } from "../../components/FAQ";
import Footer from "../../components/Footer";
import faqSections from "../../data/about/faqs";
const FAQs = () => {
  const [open, setOpen] = useState(null);
  const handleOpen = (id) => setOpen(open === id ? null : id);
  return (
    <div className="">
      {/* Hero Section */}
      <Hero
        bgImage={`/src/images/faq-hero.jpeg`}
        heading={`Markle Tech answers FAQs`}
        content={`Markle Tech answers your go-to FAQs for quick solutions, expert insights, and all the information in place`}
      />
      {/* Heading */}
      <div className="m-4 md:m-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#330073] text-center">
          Frequently Asked <span className="font-bold">Questions</span>
        </h1>
        <p className="font-light text-gray-600 text-sm md:text-lg text-center">
          Here's a list of FAQs that will help you to know more about Markle
          Tech.
        </p>

        {Object.entries(faqSections).map(([section, faqs]) => (
          <div
            key={section}
            className="m-7 p-4 rounded-xl"
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px" }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#330073] text-center capitalize my-4">
              {section.replace(/([A-Z])/g, " $1").trim()}
            </h2>
            <div>
              {faqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  open={open}
                  handleOpen={handleOpen}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
