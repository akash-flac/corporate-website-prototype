import React from "react";

const Achievements = () => {
  return (
    <div className="m-10">
      <div className="">
        <h1 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed md:pb-0 font-semibold text-[#260651] text-center">
          Our <span className="font-bold">Achievements</span>
        </h1>
        <div className="flex justify-center">
          <p className="font-light text-gray-600 text-sm md:text-lg md:max-w-7xl text-center">
            We are empowering businesses of all sizes to achieve digital
            dominance.
          </p>
        </div>
      </div>
      <div className="flex justify-evenly flex-wrap gap-4 my-5">
        <img src="src\images\microsoft.png" alt="" className="" />
        <img src="src\images\google-cloud.png" alt="" className="" />
        <img src="src\images\clutch.png" alt="" className="" />
        <img src="src\images\aws.png" alt="" className="" />
      </div>
    </div>
  );
};

export default Achievements;
