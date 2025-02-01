import { Code2 } from "lucide-react";
import React from "react";

const servicesObj = [
  {
    name: "Software Development",
    description:
      "Custom software solutions tailored to meet your unique business needs and challenges",
    icon: Code2,
    id: 1,
  },
  {
    name: "Web Development",
    description:
      "Create fast, secure, and scalable websites tailored to your business goals and user needs",
    icon: "",
    id: 2,
  },
  {
    name: "Digital Marketing",
    description:
      "We deliver targeted digital marketing strategies that drive traffic, boost engagement, and enhance brand visibility across all online channels.",
    icon: "",
    id: 3,
  },
  {
    name: "Mobile App Development",
    description:
      "We deliver targeted digital marketing strategies that drive traffic, boost engagement, and enhance brand visibility across all online channels.",
    icon: "",
    id: 4,
  },
  {
    name: "DevOps Consultation",
    description:
      "We deliver targeted digital marketing strategies that drive traffic, boost engagement, and enhance brand visibility across all online channels.",
    icon: "",
    id: 5,
  },
  {
    name: "MVP Development",
    description:
      "We deliver targeted digital marketing strategies that drive traffic, boost engagement, and enhance brand visibility across all online channels.",
    icon: "",
    id: 6,
  },
  {
    name: "e-Commerce",
    description:
      "We deliver targeted digital marketing strategies that drive traffic, boost engagement, and enhance brand visibility across all online channels.",
    icon: "",
    id: 7,
  },
  {
    name: "Low Code - No Code",
    description:
      "We deliver targeted digital marketing strategies that drive traffic, boost engagement, and enhance brand visibility across all online channels.",
    icon: "",
    id: 8,
  },
];
const Services = () => {
  return (
    <div>
      <div className="my-8">
        <h1 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed md:pb-2 font-semibold text-[#260651] text-center">
          Services We Offer
        </h1>
        <div className="flex justify-evenly flex-wrap mx-6">
          {servicesObj.map((service) => (
            <div class="group relative flex flex-col items-center shadow-sm m-2 hover:border border-slate-300 hover:shadow-md hover:bg-[#260651] hover:-translate-y-2 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out cursor-pointer w-72">
              <div class="p-4 flex flex-col items-center">
                {/* <service.icon/> */}
                <h5 class="mb-2 text-slate-800 text-xl text-center font-semibold group-hover:text-white">
                  {service.name}
                </h5>
                <p class="text-slate-600 leading-normal text-sm text-center font-light group-hover:text-slate-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          {/* 
          <div class="group relative flex flex-col my-2 shadow-sm hover:border border-slate-300 hover:shadow-md hover:bg-[#260651] hover:-translate-y-2 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out cursor-pointer w-96">
            <div class="p-4">
              <h5 class="mb-2 text-slate-800 text-xl text-center font-semibold group-hover:text-white">
                Digital Marketing Services
              </h5>
              <p class="text-slate-600 leading-normal text-center font-light group-hover:text-slate-300">
                We deliver targeted digital marketing strategies that drive
                traffic, boost engagement, and enhance brand visibility across
                all online channels.
              </p>
            </div>
          </div>
          <div class="group relative flex flex-col my-2 shadow-sm hover:border border-slate-300 hover:shadow-md hover:bg-[#260651] hover:-translate-y-2 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out cursor-pointer w-96">
            <div class="p-4">
              <h5 class="mb-2 text-slate-800 text-xl text-center font-semibold group-hover:text-white">
                IT Consulting Services
              </h5>
              <p class="text-slate-600 leading-normal text-center font-light group-hover:text-slate-300">
                We provide expert expert IT consulting to optimize your
                technology strategy, enahnce operational efficiency, and drive
                digital transformation.
              </p>
            </div>
          </div>
          <div class="group relative flex flex-col my-2 shadow-sm hover:border border-slate-300 hover:shadow-md hover:bg-[#260651] hover:-translate-y-2 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out cursor-pointer w-96">
            <div class="p-4">
              <h5 class="mb-2 text-slate-800 text-xl text-center font-semibold group-hover:text-white">
                IT Consulting Services
              </h5>
              <p class="text-slate-600 leading-normal text-center font-light group-hover:text-slate-300">
                We provide expert expert IT consulting to optimize your
                technology strategy, enahnce operational efficiency, and drive
                digital transformation.
              </p>
            </div>
          </div>
          <div class="group relative flex flex-col my-2 shadow-sm hover:border border-slate-300 hover:shadow-md hover:bg-[#260651] hover:-translate-y-2 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out cursor-pointer w-96">
            <div class="p-4">
              <h5 class="mb-2 text-slate-800 text-xl text-center font-semibold group-hover:text-white">
                IT Consulting Services
              </h5>
              <p class="text-slate-600 leading-normal text-center font-light group-hover:text-slate-300">
                We provide expert expert IT consulting to optimize your
                technology strategy, enahnce operational efficiency, and drive
                digital transformation.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
