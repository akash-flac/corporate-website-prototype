import React, { useState } from "react";
import Hero from "../../components/Hero";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "motion/react";
import FAQ, { AccordionItem, faqObj } from "../../components/FAQ";
import Footer from "../../components/Footer";

const FAQs = () => {
  const [open, setOpen] = useState(null);
  const handleOpen = (id) => setOpen(open === id ? null : id);
  return (
    <div className="">
      {/* Hero Section */}
      <Hero
        bgImage={`src/images/faq-hero.jpeg`}
        heading={`Markle answers FAQs`}
        content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quam, voluptatum repellendus vero laudantium magni voluptates voluptatibus aliquid soluta fuga vel ratione quaerat? Eligendi, cum ducimus laborum commodi placeat possimus?`}
      />
      {/* Heading */}
      <div className="m-4 md:m-8">
        <h1 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed font-semibold text-[#330073] text-center">
          Frequently Asked <span className="font-bold">Questions</span>{" "}
        </h1>
        <div className="flex justify-center">
          <p className="font-light text-gray-600 text-sm md:text-lg md:max-w-7xl text-center">
            Here's a list of FAQs that will help you to know more about Markle
            Tech.
          </p>
        </div>

        {/* Accordion for FAQs */}
        <div className="m-4">
          {faqObj.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              open={open}
              handleOpen={handleOpen}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FAQs;
