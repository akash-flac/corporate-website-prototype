import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { financeObj } from "../../data/industries/industries";

const FinanceAndFintech = () => {
  return (
    <div>
      <Hero
        heading={`Finance and Fintech`}
        bgImage={`src/images/industries/IndustriesHero/finance.jpg`}
        content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis aspernatur quasi optio maxime sed amet tenetur at. A, aspernatur.`}
      />
      <div className="bg-gray-100 text-gray-800 min-h-screen p-6 md:p-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {financeObj.map((section, index) => (
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
      <Footer />
    </div>
  );
};

export default FinanceAndFintech;
