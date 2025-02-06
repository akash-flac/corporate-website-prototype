import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import ProgressBar from "../../components/ProgressBar";
import Footer from "../../components/Footer";
import { Route, Routes, useNavigate } from "react-router";
import { Router } from "lucide-react";

const formObj = [
  {
    step: 1,
    content: "",
  },
  {
    step: 1,
    content: "",
  },
  {
    step: 1,
    content: "",
  },
  {
    step: 1,
    content: "",
  },
  {
    step: 1,
    content: "",
  },
  {
    step: 1,
    content: "",
  },
  {
    step: 1,
    content: "",
  },
];

const steps = [1, 2, 3, 4, 5, 6, 7];
const Step = ({ step }) => (
  <div className="text-center text-xl font-semibold text-purple-800">
    <p>Content for Step {step}</p>
  </div>
);
const CostCalculator = () => {
  const navigate = useNavigate();
  const currentStep = parseInt(window.location.pathname.split("/")[2]) || 1;

  const handleNext = () => {
    if (currentStep < steps.length)
      navigate(`/cost-calculator/${currentStep + 1}`);
  };

  const handlePrev = () => {
    if (currentStep > 1) navigate(`/cost-calculator/${currentStep - 1}`);
  };

  return (
    <div>
      <NavBar />
      {/* <Hero/> */}
      {/* <ProgressBar/> */}

      <div className="flex flex-col items-center justify-start max-h-screen bg-gray-50 p-4">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">
          Cost Calculator
        </h1>
        <div className="flex items-center w-full max-w-xl">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center w-full">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-bold
                        ${
                          currentStep >= step
                            ? "bg-purple-800 text-white border-purple-800"
                            : "border-gray-300 text-gray-500"
                        }
                      `}
              >
                {step}
              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`flex-1 h-1 transition-all duration-300 
                          ${
                            currentStep > step ? "bg-purple-800" : "bg-gray-300"
                          }
                        `}
                ></div>
              )}
            </div>
          ))}
        </div>

        <Routes>
          {steps.map((step) => (
            <Route
              key={step}
              path={`/cost-calculator/${step}`}
              element={<Step step={step} />}
            />
          ))}
        </Routes>

        <div className="mt-6 space-x-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-purple-800 text-white rounded-full disabled:opacity-50"
            disabled={currentStep === 1}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-purple-800 text-white rounded-full disabled:opacity-50"
            disabled={currentStep === steps.length}
          >
            Next
          </button>
        </div>
      </div>

      <div className="flex justify-center border">
        <ul>
            <li>Healthcare</li>
            <li>Healthcare</li>
            <li>Healthcare</li>
            <li>Healthcare</li>
            <li>Healthcare</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default CostCalculator;
