import React from "react";

const imgs = [
  {
    name: "Tech Experts on Board",
    id: 1,
    number: 250,
    src: "src/images/techExperts.png",
  },
  {
    name: "Tech Experts on Board",
    id: 2,
    number: 250,
    src: "src/images/skills.jpeg",
  },
  {
    name: "Tech Experts on Board",
    id: 3,
    number: 250,
    src: "src/images/projectManagement.jpeg",
  },
  {
    name: "Tech Experts on Board",
    id: 4,
    number: 250,
    src: "src/images/happyClients.jpeg",
  },
];
const WhyChooseMarkle = () => {
  return (
    <div className="m-6">
      <h1 className="row-span-1 text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed md:pb-3 font-semibold text-[#260651] text-center uppercase">
        Why choose <span className="font-bold"> Markle</span>?
      </h1>
      <div className="flex justify-evenly flex-wrap m-5 p-3">
        {imgs.map((img) => (
          <div className="">
            <img src={img.src} key={img.id} alt="" className="w-36 h-36" />
            <p className=""></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseMarkle;
