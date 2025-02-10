import { motion } from "motion/react";
import React from "react";

const ServicesCommon = ({ obj }) => {
  return (
    <div>
      <div className="min-h-screen bg-[#E9D9FF] flex items-center justify-center py-10 px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white text-[#330073] rounded-3xl p-10 shadow-2xl max-w-3xl w-full border border-[#330073] hover:shadow-3xl transition-shadow duration-300"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl drop-shadow-lg">{obj.icon}</span>
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight">
              {obj.title}
            </h1>
          </div>

          <p className="mb-4 text-xl font-semibold">{obj.description}</p>

          <p className="mb-4 text-lg leading-relaxed">{obj.details}</p>

          <p className="mb-4 text-lg leading-relaxed">{obj.extendedContent}</p>

          <div className="flex flex-wrap gap-3 mt-6">
            {obj.keywords.map((keyword, i) => (
              <span
                key={i}
                className="bg-[#330073] text-white px-4 py-2 text-sm rounded-full shadow-md hover:bg-white hover:text-[#330073] transition-colors duration-200 cursor-pointer border border-[#330073]"
              >
                {keyword}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesCommon;
