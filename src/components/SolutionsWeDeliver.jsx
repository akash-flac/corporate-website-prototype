import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

const solutions = [
  {
    name: "Enterprise Applications",
    id: 1,
  },
  {
    name: "ERP",
    id: 2,
  },
  {
    name: "CRM",
    id: 3,
  },
  {
    name: "e-Commerce",
    id: 4,
  },
  {
    name: "Financial Management",
    id: 5,
  },
  {
    name: "Data Analytics",
    id: 6,
  },
  {
    name: "Supply Chain Management",
    id: 7,
  },
  {
    name: "Web Portals",
    id: 8,
  },
  {
    name: "Fleet Management",
    id: 9,
  },
  {
    name: "e-Learning Software",
    id: 10,
  },
  {
    name: "Marketing & Advertising",
    id: 11,
  },
  {
    name: "HR Software",
    id: 12,
  },
  {
    name: "Asset Management",
    id: 13,
  },
  {
    name: "Mobile Applications",
    id: 14,
  },
  {
    name: "Content Management",
    id: 15,
  },
  {
    name: "Document Management",
    id: 16,
  },
];
const SolutionsWeDeliver = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed font-semibold text-[#260651] text-center">
          <span className="font-bold">Solutions</span> We Deliver
        </h1>
        <div className="flex justify-center">
          <p className="font-light text-gray-600 text-sm px-8 md:text-lg md:max-w-7xl text-center">
            We IT-enable all kinds of B2B, B2C interactions and internal
            operations.
          </p>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-content-center max-w-7xl mx-auto lg:mx-44 my-5"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center my-4 mx-28">
          {solutions.map((solution) => (
            <a
              href="/"
              key={solution.id}
              className="flex items-center justify-center border-2 rounded-full border-[#260651] w-60 h-16 px-10 relative group hover:bg-[#260651] hover:text-white transition"
            >
              {" "}
              <span className="text-center">{solution.name}</span>
              <ArrowTopRightOnSquareIcon className="absolute right-4 w-6 text-[#260651] group-hover:text-white" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsWeDeliver;
