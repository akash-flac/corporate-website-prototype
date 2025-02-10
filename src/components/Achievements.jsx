import React from "react";
const achievementsObj = [
  {
    id: 1,
    src: "src/images/microsoft.png",
  },
  {
    id: 2,
    src: "src/images/google-cloud.png",
  },
  {
    id: 3,
    src: "src/images/clutch.png",
  },
  {
    id: 4,
    src: "src/images/aws.png",
  },
];
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
      <div className="flex justify-evenly flex-wrap m-2 md:m-5 p-4">
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 gap-x-14 m-4">
          {achievementsObj.map((achievementsObj, imgIndex) => (
            <div
              key={imgIndex}
              className="w-full rounded-md transform transition duration-300 hover:scale-105"
            >
              {/* Image */}
              <img
                src={achievementsObj.src}
                alt={achievementsObj.alt || "Image"}
                className="w-full h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
