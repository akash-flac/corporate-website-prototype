import React from "react";

const IndustryCommon = ({ obj }) => {
  return (
    <div>
      <div className="bg-[#E9D9FF] text-gray-800 min-h-screen p-6 md:p-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {obj.sections.map((section, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-3xl p-8 md:p-12 border border-gray-300 transition-transform transform"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#330073] mb-3 border-b-4 border-[#330073] flex justify-center text-center pb-2">
                {section.title}
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed text-center">
                {section.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 text-[#330073] hover:bg-gray-100 bg-white transition rounded-xl shadow-sm shadow-[#330073] text-center font-semibold border hover:shadow-md hover:-translate-y-1"
                  >
                    <h3 className="text-md font-bold mb-2">{item.name}</h3>
                    <p className="text-xs text-gray-800">{item.info}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryCommon;
