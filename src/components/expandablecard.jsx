import React, { useState } from "react";

const cardDataArray = [
  {
    category: "Frontend",
    items: [
      { title: "HTML", content: "HTML is the structure of web pages." },
      { title: "CSS", content: "CSS is used to style web pages." },
      {
        title: "JavaScript",
        content: "JavaScript adds interactivity to websites.",
      },
      {
        title: "ReactJS",
        content: "ReactJS is a library for building UI components.",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        title: "NodeJS",
        content: "NodeJS is a runtime for JavaScript on the server side.",
      },
      {
        title: "PHP",
        content: "PHP is a server-side scripting language for web development.",
      },
      {
        title: "MySQL",
        content: "MySQL is a relational database management system.",
      },
      {
        title: "Redis",
        content: "Redis is an in-memory key-value store for caching.",
      },
    ],
  },
  {
    category: "Databases and Storage",
    items: [
      {
        title: "MySQL",
        content: "MySQL is widely used for relational databases.",
      },
      {
        title: "NoSQL",
        content: "NoSQL is a database format for non-relational data.",
      },
      {
        title: "PostGreSQL",
        content: "PostGreSQL is an advanced open-source database.",
      },
      {
        title: "Redis",
        content: "Redis supports in-memory caching for high-speed access.",
      },
    ],
  },
];

// TOOLS section
export default function ExpandableCard() {
  const [isExpanded, setIsExpanded] = useState(null);
  const [activeHeading, setActiveHeading] = useState("Frontend"); // Track the active heading

  return (
    // <div className="">
    <div className="m-8 px-8 sm:m-10 md:h-64">
      <div className="">
        {/* <div className=""> */}
        <h2 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed font-bold text-[#260651] text-center">
          Tools We Use
        </h2>
        <div className="flex space-x-3 md:space-x-6 mb-6 justify-center items-center mt-4">
          {/* Tools Headings */}
          {cardDataArray.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveHeading(category.category)}
              className={`px-3 md:py-1 rounded-lg font-mono font-semibold group ${
                activeHeading === category.category
                  ? "text-[#260651]"
                  : " text-gray-500"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>
        {/* </div> */}

        {/* Cards */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center my-4 mx-11 p-2">
          {" "}
          {cardDataArray
            .find((category) => category.category === activeHeading)
            .items.map((item, index) => (
              <div
                key={index}
                // onClick={() => {
                //   if (isExpanded == index) setIsExpanded(null);
                //   else if (isExpanded != index) setIsExpanded(index);
                // }}
                onMouseEnter={() => setIsExpanded(index)}
                onMouseLeave={() => setIsExpanded(null)}
                onClick={() =>
                  isExpanded === index
                    ? setIsExpanded(null)
                    : setIsExpanded(index)
                }
                className={`w-60 cursor-pointer overflow-hidden transition-all duration-700 ease-in-out ${
                  isExpanded === index ? "max-h-64" : "max-h-16"
                }`}
              >
                {/* Card Title */}
                <h3
                  className={`font-bold text-lg p-4 transition-colors rounded-t-2xl ${
                    isExpanded === index
                      ? "bg-[#260651] text-[#E9D9FF]"
                      : "bg-[#E9D9FF] rounded-xl"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Card Content */}
                <div
                  className={`p-4 text-sm text-[#E9D9FF] bg-[#260651] rounded-b-2xl transition-opacity duration-500 ${
                    isExpanded === index ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
    // </div>
  );
}
