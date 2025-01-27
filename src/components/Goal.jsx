import React from "react";

const Goal = () => {
  return (
    <div>
      <div className="flex items-center justify-center mx-20">
        <div className="relative bg-[#260651] border rounded-2xl">
          <div className="absolute invisible lg:visible md:right-3 md:bottom-20 animate-bounce">
            <img src="src\images\pink-cube.png" alt="" className="w-20 md:w-48 z-20" />
          </div>

          <p className="text-white px-10 py-5 text-xs md:text-4xl">
            Our goal is to develop custom software solutions that empower
            businesses, streamline processes and provide an opportunity to
            establish as renowned brands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
