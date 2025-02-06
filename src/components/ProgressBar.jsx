import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router";

const steps = [1, 2, 3, 4, 5, 6, 7];

const Step = ({ step }) => (
  <div className="text-center text-xl font-semibold text-purple-800">
    <p>Content for Step {step}</p>
  </div>
);

export default function ProgressBar() {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
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
                  ${currentStep > step ? "bg-purple-800" : "bg-gray-300"}
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
  );
}



// Code To Dynamically Detect the Current Path and Render accordingly

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";

// const steps = [1, 2, 3, 4, 5, 6, 7];

// const Step = ({ step }) => (
//   <div className="text-center text-xl font-semibold text-purple-800">
//     <p>Content for Step {step}</p>
//   </div>
// );

// const ProgressBar = ({ basePath = "" }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Extract current step dynamically based on the URL
//   const pathSegments = location.pathname.split("/").filter(Boolean);
//   const currentStep = parseInt(pathSegments[pathSegments.length - 1]) || 1;

//   const handleNext = () => {
//     if (currentStep < steps.length) navigate(`/${basePath}/${currentStep + 1}`);
//   };

//   const handlePrev = () => {
//     if (currentStep > 1) navigate(`/${basePath}/${currentStep - 1}`);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//       <h1 className="text-3xl font-bold text-purple-800 mb-6">Progress Bar</h1>

//       <div className="flex items-center w-full max-w-xl">
//         {steps.map((step, index) => (
//           <div key={step} className="flex items-center w-full">
//             <div
//               className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-bold
//                 ${currentStep >= step ? "bg-purple-800 text-white border-purple-800" : "border-gray-300 text-gray-500"}
//               `}
//             >
//               {step}
//             </div>

//             {index !== steps.length - 1 && (
//               <div
//                 className={`flex-1 h-1 transition-all duration-300 
//                   ${currentStep > step ? "bg-purple-800" : "bg-gray-300"}
//                 `}
//               ></div>
//             )}
//           </div>
//         ))}
//       </div>

//       <Routes>
//         {steps.map((step) => (
//           <Route key={step} path={`/${basePath}/${step}`} element={<Step step={step} />} />
//         ))}
//       </Routes>

//       <div className="mt-6 space-x-4">
//         <button
//           onClick={handlePrev}
//           className="px-4 py-2 bg-purple-800 text-white rounded-full disabled:opacity-50"
//           disabled={currentStep === 1}
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-purple-800 text-white rounded-full disabled:opacity-50"
//           disabled={currentStep === steps.length}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;