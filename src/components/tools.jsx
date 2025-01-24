import React, { useState } from "react";

export default Tools = () => {
  const [isExpanded, setIsExpanded] = useState(0);

  return (
    <div className="m-20 border">
      <div className="">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-5xl text-[#260651]">Tools</h2>
          <h3 className="font-light text-4xl text-gray-400">Frontend</h3>
          <h3 className="font-light text-4xl text-gray-400">Backend</h3>
          <h3 className="font-light text-4xl text-gray-400">Deployment</h3>
          <h3 className="font-light text-4xl text-gray-400">
            Application Monitoring
          </h3>
          <h3 className="font-light text-4xl text-gray-400">Build Languages</h3>
        </div>
        <div className="flex justify-evenly my-7 mx-5 px-0 py-3 border">
          <div
            onMouseEnter={() => setIsExpanded(1)}
            onMouseLeave={() => setIsExpanded(0)}
            className={`w-80 border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ${
              isExpanded === 1 ? "max-h-60 shadow-lg" : "max-h-16"
            }`}
          >
            {/* Card Header */}
            <div className="bg-[#E9D9FF] p-4 font-bold text-gray-800 uppercase">
              java
            </div>

            {/* Card Content */}
            <div
              className={`bg-[#E9D9FF] p-4 text-gray-600 text-sm ${
                isExpanded === 1 ? "block" : "hidden"
              }`}
            >
              This is the content of the card. It becomes visible when you hover
              over the card. You can customize this content further as needed.
            </div>
          </div>
          <div
            className={`w-80 border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ${
              isExpanded == 2 ? "max-h-60 shadow-lg" : "max-h-16"
            }`}
            onMouseEnter={() => setIsExpanded(2)}
            onMouseLeave={() => setIsExpanded(0)}
          >
            {/* Card Header */}
            <div className="bg-white p-4 font-bold text-gray-800 border-b border-gray-200 uppercase">
              JAVASCRIPT
            </div>

            {/* Card Content */}
            <div
              className={`bg-gray-100 p-4 text-gray-600 text-sm ${
                isExpanded === 2 ? "block" : "hidden"
              }`}
            >
              This is the content of the card. It becomes visible when you hover
              over the card. You can customize this content further as needed.
            </div>
          </div>
          <div
            className={`w-80 border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ${
              isExpanded === 3 ? "max-h-60 shadow-lg" : "max-h-16"
            }`}
            onMouseEnter={() => setIsExpanded(3)}
            onMouseLeave={() => setIsExpanded(0)}
          >
            {/* Card Header */}
            <div className="bg-white p-4 font-bold text-gray-800 border-b border-gray-200 uppercase">
              Card Heading
            </div>

            {/* Card Content */}
            <div
              className={`bg-gray-100 p-4 text-gray-600 text-sm ${
                isExpanded === 3 ? "block" : "hidden"
              }`}
            >
              This is the content of the card. It becomes visible when you hover
              over the card. You can customize this content further as needed.
            </div>
          </div>
          <div
            className={`w-80 border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 ${
              isExpanded === 4 ? "max-h-60 shadow-lg" : "max-h-16"
            }`}
            onMouseEnter={() => setIsExpanded(4)}
            onMouseLeave={() => setIsExpanded(0)}
          >
            {/* Card Header */}
            <div className="bg-white p-4 font-bold text-gray-800 border-b border-gray-200 uppercase">
              Card Heading
            </div>

            {/* Card Content */}
            <div
              className={`bg-gray-100 p-4 text-gray-600 text-sm ${
                isExpanded === 4 ? "block" : "hidden"
              }`}
            >
              This is the content of the card. It becomes visible when you hover
              over the card. You can customize this content further as needed.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

