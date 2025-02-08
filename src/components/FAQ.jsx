import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "motion/react";

export const faqObj = [
  {
    id: 1,
    question:
      "Why should I choose Markle for software engineering, consulting, and outsourcing?",
    answer: `We are a highly experienced and qualified team of professionals with a
          proven track record of delivering quality software solutions to
          clients. Here are a few reasons to choose us: 65+ software developers
          Expertise in different technologies Strong reputation for quality work
          Experience working on complex projects for different industry
          verticals`,
  },
  {
    id: 2,
    question: "What industries does Markle specialize in?",
    answer: `We specialize in a variety of industries, including:
    - Healthcare
    - FinTech
    - eCommerce
    - Education
    - Logistics & Supply Chain`,
  },
  {
    id: 3,
    question:
      "Why should I choose Markle for software engineering, consulting, and outsourcing?",
    answer: `We are a highly experienced and qualified team of professionals with a
          proven track record of delivering quality software solutions to
          clients. Here are a few reasons to choose us: 65+ software developers
          Expertise in different technologies Strong reputation for quality work
          Experience working on complex projects for different industry
          verticals`,
  },
  {
    id: 4,
    question:
      "Why should I choose Markle for software engineering, consulting, and outsourcing?",
    answer: `We are a highly experienced and qualified team of professionals with a
          proven track record of delivering quality software solutions to
          clients. Here are a few reasons to choose us: 65+ software developers
          Expertise in different technologies Strong reputation for quality work
          Experience working on complex projects for different industry
          verticals`,
  },
];

// Accordion
export const AccordionItem = ({ item, open, handleOpen }) => {
  return (
    <Accordion
      open={open === item.id}
      className={`mb-1 p-4 md:p-1 rounded-lg border border-blue-gray-100 md:px-6 ${
        open === item.id ? " bg-[#330073]" : " bg-[#E9D9FF]"
      }`}
    >
      <div
        onClick={() => handleOpen(item.id)}
        className="flex cursor-pointer items-center justify-between"
      >
        <AccordionHeader
          className={`border-b-0 text-sm sm:text-lg md:text-xl transition-colors ${
            open === item.id ? "text-white " : "text-[#330073]"
          }`}
        >
          {item.question}
        </AccordionHeader>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={open === item.id ? "#fff" : "#330073"}
          className="size-8 ml-1 sm:size-11 md:size-14 md:mx-2 md:mb-1"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: open === item.id ? 0 : 90,
          }}
          transition={{ duration: 0.2 }}
        >
          <path
            fillRule="evenodd"
            d={
              open === item.id
                ? "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                : "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            }
            clipRule="evenodd"
          />
        </motion.svg>
      </div>

      <AccordionBody
        className={`py-2 sm:pe-12 text-md sm:text-lg md:text-2xl font-light md:font-normal ${
          open === item.id ? "text-white" : ""
        }`}
      >
        {item.answer}
      </AccordionBody>
    </Accordion>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = (id) => setOpen(open === id ? null : id);
  return (
    <div className="m-4 md:m-8">
      {/* Heading */}
      <div className="">
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
          {faqObj.slice(0, window.innerWidth < 640 ? 3 : 5).map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              open={open}
              handleOpen={handleOpen}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <a
            href="/FAQs"
            className=" px-6 py-2 bg-[#260651] text-white text-center rounded-full hover:bg-[#3b0b7d] transition duration-300"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
