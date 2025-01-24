import React, { useState } from "react";

export default function ExpandableCard() {
  const [isExpanded, setIsExpanded] = useState(null);
  const [activeHeading, setActiveHeading] = useState("Frontend"); // Track the active heading

  const cardData = {
    Frontend: {
      heading: "Frontend",
      // index: 0,
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
    Backend: {
      heading: "Backend",
      // index: 1,
      items: [
        {
          title: "NodeJS",
          content: "NodeJS is a runtime for JavaScript on the server side.",
        },
        {
          title: "PHP",
          content:
            "PHP is a server-side scripting language for web development.",
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
    DatabasesandStorage: {
      heading: "Databases and Storage",
      // index: 2,
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
  };
  return (
    <div className="">
      <div className="m-8 sm:m-20">
        <div className="">
          <div className="">
            <h2 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed md:pb-3 font-semibold text-[#260651] text-center">
              Tools
            </h2>
            {/* <p className="text-center">
              Crafting innovative, scalable, and user-centric web applications
              requires a precise set of tools, ensuring seamless functionality,
              cutting-edge technology, and measurable growth for your business.
            </p> */}
            <div className="flex space-x-3 md:space-x-6 mb-6 justify-center items-center mt-4">
              {/* Tools Headings */}
              {Object.keys(cardData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveHeading(key)}
                  className={` px-3 md:py-1 rounded-lg group ${
                    activeHeading === key
                      ? "text-[#260651] bg-[#E9D9FF]"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {cardData[key].heading}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-2">
            {" "}
            {activeHeading &&
              cardData[activeHeading].items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (isExpanded == index) setIsExpanded(null);
                    else if (isExpanded != index) setIsExpanded(index);
                  }}
                  onMouseLeave={() => setIsExpanded(null)}
                  className={`w-60 border border-gray-300 cursor-pointer rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded === index ? "max-h-60 shadow-lg" : "max-h-16"
                  }`}
                >
                  {/* Card Title */}
                  <h3 className="font-bold text-lg p-4">{item.title}</h3>

                  {/* Card Content */}
                  <div
                    className={`p-4 text-gray-600 text-sm bg-[#E9D9FF] ${
                      isExpanded === index ? "block" : "hidden"
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
