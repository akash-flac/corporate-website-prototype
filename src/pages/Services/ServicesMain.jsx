import React from "react";
import Services from "../../components/Services";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import WhyMarkle from "../../components/WhyMarkle";
import {
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassMinusIcon } from "@heroicons/react/20/solid";
import { PenTool, SettingsIcon } from "lucide-react";

const ServicesMain = () => {
  return (
    <div>
      <Hero
        bgImage={`src/images/services.jpeg`}
        heading={`Services We Provide`}
        content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`}
      />
      <Services />
      {/*  */}

      <div className="flex flex-col items-center p-8 mx-10">
        <h2 className="text-2xl font-semibold text-purple-900 mb-8">
          How it Works
        </h2>

        <div className="relative flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center bg-purple-100 p-6 rounded-2xl shadow-lg w-64">
            <div className="bg-white text-black p-4 rounded-xl shadow-md">
              <MagnifyingGlassIcon className="text-[#330073] w-10 h-10"/>
            </div>
            <h3 className="text-lg font-semibold mt-4">Define the problem</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:block absolute left-56 z-10 top-1/2 transform -translate-y-1/2">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 20 Q40 5, 75 20"
                stroke="#A78BFA"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="transparent"
              />
              <polygon points="75,20 68,16 68,24" fill="#A78BFA" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center bg-purple-100 p-6 rounded-2xl shadow-lg w-64">
            <div className="bg-white p-4 rounded-xl shadow-md">
              {/* <img
                src="/icons/solution-icon.svg"
                alt="Develop a Solution"
                className="w-10 h-10"
              /> */}
              <SettingsIcon className="text-[#330073] w-10 h-10"/>
            </div>
            <h3 className="text-lg font-semibold mt-4">Develop a Solution</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:block absolute right-56 top-1/2 z-10 transform -translate-y-1/2">
            <svg
              width="80"
              height="40"
              viewBox="0 0 80 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 20 Q40 5, 75 20"
                stroke="#A78BFA"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="transparent"
              />
              <polygon points="75,20 68,16 68,24" fill="#A78BFA" />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center bg-purple-100 p-6 rounded-2xl shadow-lg w-64">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <PenTool className="text-[#330073] w-10 h-10"/>
            </div>
            <h3 className="text-lg font-semibold mt-4">Refine</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <WhyMarkle />
      <Footer />
    </div>
  );
};

export default ServicesMain;
