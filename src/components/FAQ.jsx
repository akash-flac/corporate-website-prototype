import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "motion/react";
const FAQ = () => {
  const [open, setOpen] = useState(0);
  const [isIcon, setIcon] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="m-10 md:m-5">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center my-5 md:my-10">
        <h1 className="text-2xl mb-3 md:text-3xl/relaxed lg:text-3xl/relaxed md:pb-1 font-semibold text-[#260651] text-center">
          Frequently Asked <span className="font-bold">Questions</span>{" "}
        </h1>
        <p className="font-light text-xl md:text-2xl md:max-w-7xl text-justify md:text-center">
          Here's a list of FAQs that will help you to know more about Markle
          Tech.
        </p>
      </div>

      {/* Accordion for FAQs */}
      <Accordion
        open={open === 1}
        className={`mb-1 p-4 md:p-1 rounded-lg border border-blue-gray-100 md:px-6 ${
          open === 1 ? " bg-[#260651]" : " bg-[#E9D9FF]"
        }`}
      >
        <div
          onClick={() => {
            handleOpen(1);
            setIcon((isIcon) => {
              1;
            });
          }}
          className="flex cursor-pointer"
        >
          <AccordionHeader
            className={`border-b-0 text-sm sm:text-lg md:text-xl transition-colors ${
              open === 1 ? "text-white " : "text-[#260651]"
            }`}
          >
            Why should I choose Markle for software engineering, consulting, and
            outsourcing?
          </AccordionHeader>
          <div>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={`${open === 1 ? "#fff" : "#260651"}`}
              className="size-8 ml-1 sm:size-11 md:size-14 md:mx-2 md:mb-1"
              initial={
                open === 1
                  ? { opacity: 0, scale: 0.8, rotate: 90 }
                  : { opacity: 0, scale: 0.8, rotate: 0 }
              }
              animate={
                open === 1
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : { opacity: 1, scale: 0.8, rotate: 90 }
              }
              exit={
                open === 1
                  ? { opacity: 0, scale: 0.8 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={open === 1 ? { duration: 0.2 } : { duration: 0.2 }}
            >
              <path
                fillRule="evenodd"
                d={`${
                  open === 1
                    ? "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                    : "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                }`}
                clipRule="evenodd"
              />
            </motion.svg>
          </div>
        </div>
        <AccordionBody
          open={open === 1}
          className={`py-2 sm:pe-12 text-md sm:text-lg md:text-2xl font-light md:font-normal ${
            open === 1 ? " text-white" : " "
          }`}
        >
          We are a highly experienced and qualified team of professionals with a
          proven track record of delivering quality software solutions to
          clients. Here are a few reasons to choose us: 65+ software developers
          Expertise in different technologies Strong reputation for quality work
          Experience working on complex projects for different industry
          verticals
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 2}
        className={`mb-1 p-4 md:p-1 rounded-lg border border-blue-gray-100 md:px-6 ${
          open === 2 ? " bg-[#260651]" : " bg-[#E9D9FF]"
        }`}
      >
        <div
          onClick={() => {
            handleOpen(2);
            setIcon((isIcon) => {
              2;
            });
          }}
          className="flex cursor-pointer"
        >
          <AccordionHeader
            className={`border-b-0 text-sm sm:text-lg md:text-xl transition-colors ${
              open === 2 ? "text-white " : "text-[#260651]"
            }`}
          >
            Why should I choose Markle for software engineering, consulting, and
            outsourcing?
          </AccordionHeader>
          <div>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={`${open === 2 ? "#fff" : "#260651"}`}
              className="size-8 ml-1 sm:size-11 md:size-14 md:mx-2 md:mb-1"
              initial={
                open === 2
                  ? { opacity: 0, scale: 0.8, rotate: 90 }
                  : { opacity: 0, scale: 0.8, rotate: 0 }
              }
              animate={
                open === 2
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : { opacity: 1, scale: 0.8, rotate: 90 }
              }
              exit={
                open === 2
                  ? { opacity: 0, scale: 0.8 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={open === 2 ? { duration: 0.2 } : { duration: 0.2 }}
            >
              <path
                fillRule="evenodd"
                d={`${
                  open === 2
                    ? "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                    : "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                }`}
                clipRule="evenodd"
              />
            </motion.svg>
          </div>
        </div>
        <AccordionBody
          open={open === 2}
          className={`py-2 sm:pe-12 text-md sm:text-lg md:text-2xl font-light md:font-normal ${
            open === 2 ? " text-white" : " "
          }`}
        >
          We are a highly experienced and qualified team of professionals with a
          proven track record of delivering quality software solutions to
          clients. Here are a few reasons to choose us: 65+ software developers
          Expertise in different technologies Strong reputation for quality work
          Experience working on complex projects for different industry
          verticals
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default FAQ;
