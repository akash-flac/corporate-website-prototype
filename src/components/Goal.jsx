import React from "react";

const Goal = () => {
  return (
    <div>
      <div className="flex items-center justify-center mx-40 my-20">
        <div className="relative bg-[#260651] border rounded-2xl max-w-7xl">
          <div className="absolute right-3 bottom-44 animate-bounce">
            <img src="src\images\pink-cube.png" alt="" className="w-48 z-20" />
          </div>

          <p className="text-white px-6 py-2 text-4xl m-20">
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
