import React from "react";

const Services = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-center text-4xl font-bold p-4 py-8">
          Services We Offer
        </h1>
        <div className="flex justify-evenly flex-wrap mx-6">
          <div class="group relative flex flex-col my-6 bg-slate-50 shadow-sm hover:border border-slate-300 hover:shadow-md hover:bg-[#260651] hover:-translate-y-2 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out cursor-pointer w-96">
            <div class="p-4">
              <h5 class="mb-2 text-slate-800 text-xl font-semibold group-hover:text-white">
                Software Development
              </h5>
              <p class="text-slate-600 leading-normal font-light group-hover:text-slate-400">
                Crafting tailored software systems that solve complex
                challenges, automate tasks & achieve business efficiency
              </p>
            </div>
          </div>
          <div class="group relative flex flex-col my-6 bg-slate-50 shadow-sm hover:border border-slate-300 hover:shadow-md hover:bg-[#260651] hover:-translate-y-2 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out cursor-pointer w-96">
            <div class="p-4">
              <h5 class="mb-2 text-slate-800 text-xl font-semibold group-hover:text-white">
                Website Development
              </h5>
              <p class="text-slate-600 leading-normal font-light group-hover:text-slate-300">
                We creare custom, responsive webites that elevate your brand and
                engage users, ensuring a seamless online experience.
              </p>
            </div>
          </div>
          <div class="group relative flex flex-col my-6 bg-slate-50 shadow-sm hover:border border-slate-300 hover:shadow-md hover:bg-[#260651] hover:-translate-y-2 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out cursor-pointer w-96">
            <div class="p-4">
              <h5 class="mb-2 text-slate-800 text-xl font-semibold group-hover:text-white">
                Digital Marketing Services
              </h5>
              <p class="text-slate-600 leading-normal font-light group-hover:text-slate-300">
                We deliver targeted digital marketing strategies that drive
                traffic, boost engagement, and enhance brand visibility across
                all online channels.
              </p>
            </div>
          </div>
          <div class="group relative flex flex-col my-6 bg-slate-50 shadow-sm hover:border border-slate-300 hover:shadow-md hover:bg-[#260651] hover:-translate-y-2 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out cursor-pointer w-96">
            <div class="p-4">
              <h5 class="mb-2 text-slate-800 text-xl font-semibold group-hover:text-white">
                IT Consulting Services
              </h5>
              <p class="text-slate-600 leading-normal font-light group-hover:text-slate-300">
                We provide expert expert IT consulting to optimize your
                technology strategy, enahnce operational efficiency, and drive
                digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
