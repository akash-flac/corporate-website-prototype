import React, { useState } from "react";

export default function ExpandableCard() {
  const [isExpanded, setIsExpanded] = useState(0);
  const [activeHeading, setActiveHeading] = useState(null); // Track the active heading

  const cardData = {
    Frontend: {
      heading: "Frontend",
      index: 0,
      items: ["HTML", "CSS", "Javascript", "ReactJS"],
    },
    Backend: {
      heading: "Backend",
      index: 1,
      items: ["NodeJS", "php", "MySQL", "Redis"],
    },
    DatabsesandStorage: {
      heading: "Databases and Storage",
      index: 2,
      items: ["MySQL", "NoSQL", "PostGreSQL", "Redis"],
    },
  };
  return (
    <div className="">
      <div className="m-8 sm:m-20">
        <div className="">
          <div className="md:flex">
            <h2 className="font-semibold text-3xl text-[#260651] my-3 uppercase font-sans text-center mx-3">
              Tools
            </h2>
            <div className="flex space-x-3 md:space-x-6 mb-6 justify-center items-center mt-4">
              {Object.keys(cardData).map((key, index) => (
                <button
                  key={index}
                  onClick={() => setActiveHeading(key)}
                  className={` px-3 md:py-1 ${
                    activeHeading === key
                      ? "text-[#260651] bg-[#E9D9FF] rounded-lg"
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
                  onMouseEnter={() => setIsExpanded(index)}
                  onMouseLeave={() => setIsExpanded(null)}
                  className={`w-60 border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ${
                    isExpanded === index ? "max-h-60 shadow-lg" : "max-h-16"
                  }`}
                >
                  <h3 className="font-bold text-lg p-4 bg-gray-100">{item}</h3>
                  <div
                    className={`p-4 text-gray-600 text-sm bg-[#E9D9FF] ${
                      isExpanded === index ? "block" : "hidden"
                    }`}
                  >
                    This is the additional content for {item}. Hover over this
                    card to see more details. You can customize this content as
                    needed.
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
