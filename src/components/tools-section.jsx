import React, { useState } from "react";

function ToolsSection() {
  const [activeHeading, setActiveHeading] = useState(null); // Track the active heading

  const cardData = {
    Frontend:{
        heading: "Frontend",
        index:0,
        items: ["HTML", "CSS", "Javascript", "ReactJS"]
    },
    Backend:{
        heading: "Backend",
        index:1,
        items: ["NodeJS", "php", "MySQL", "Redis"]
    },
    DatabsesandStorage:{
        heading: "Databases and Storage",
        index:2,
        items: ["MySQL", "NoSQL", "PostGreSQL", "Redis"]
    }
  };

  return (
    <div className="p-6">
    {/* Headings */}
    <div className="flex space-x-4 mb-6">
      {Object.keys(cardData).map((key, index) => (
        <button
          key={index}
          onClick={() => setActiveHeading(key)}
          className={`px-4 py-2 border rounded-lg ${
            activeHeading === key
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {cardData[key].heading}
        </button>
      ))}
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {activeHeading && 
        cardData[activeHeading].items.map((item, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-lg ">{item}</h3>
            {/* Optionally, you can add more content related to the item */}
          </div>
        ))}
    </div>
  </div>
);
}

export default ToolsSection;
