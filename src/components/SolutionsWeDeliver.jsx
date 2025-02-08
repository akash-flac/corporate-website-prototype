import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

//Data
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

//Functions
const renderSolutions = (solutionsToDisplay) => {
  return solutionsToDisplay.map((solution) => (
    <a
      href="/"
      key={solution.id}
      className="flex items-center justify-center border-2 rounded-full border-[#260651] w-52 h-14 px-6 relative group hover:bg-[#260651] hover:text-white transition duration-300"
    >
      <span className="text-center text-sm font-medium mx-2">{solution.name}</span>
      <ArrowTopRightOnSquareIcon className="absolute right-3 w-5 text-[#260651] group-hover:text-white transition duration-300" />
    </a>
  ));
};

const SolutionsWeDeliver = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedSolutions =
    showAll || !isMobile ? solutions : solutions.slice(0, 8);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#260651] text-center">
        <span className="font-extrabold">Solutions</span> We Deliver
      </h1>
      <p className="text-gray-600 text-center text-sm md:text-lg max-w-3xl mx-auto mt-2">
        We IT-enable all kinds of B2B, B2C interactions and internal operations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-x-16 justify-items-center my-6">
        {renderSolutions(displayedSolutions)}
      </div>

      {isMobile && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-[#260651] text-white rounded-full hover:bg-[#3b0b7d] transition duration-300"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SolutionsWeDeliver;
