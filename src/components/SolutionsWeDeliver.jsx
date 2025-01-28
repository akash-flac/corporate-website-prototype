import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

const solutions = [
  {
    name: "Enterprise Applications",
    id: 1,
  },
  {
    name: "ERP",
    id: 1,
  },
  {
    name: "Financial Management",
    id: 1,
  },
  {
    name: "Supply Chain Management",
    id: 1,
  },
  {
    name: "Asset Management",
    id: 1,
  },
  {
    name: "Fleet Management",
    id: 1,
  },
  {
    name: "HR Software",
    id: 1,
  },
  {
    name: "e-learning Software",
    id: 1,
  },
];
const SolutionsWeDeliver = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed md:pb-0 font-semibold text-[#260651] text-center">
          <span className="font-bold">Solutions</span> We Deliver
        </h1>
        <div className="flex justify-center">
          <p className="font-light text-gray-600 text-sm px-8 md:text-lg md:max-w-7xl text-center">
            We IT-enable all kinds of B2B, B2C interactions and internal
            operations.
          </p>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-content-center max-w-7xl mx-auto lg:mx-44 my-5"> */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:mx-10 lg:mx-6 gap-5 justify-center items-center my-5">
          {solutions.map((solution) => (
            <a
              href="/"
              key={solution.id}
              className="flex items-center justify-center border-2 rounded-full border-[#260651] w-60 h-16 px-10 relative group hover:bg-[#260651] hover:text-white"
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
