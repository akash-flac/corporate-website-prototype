import { Cog6ToothIcon, DevicePhoneMobileIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { Code2, LucideCloudLightning, MegaphoneIcon, ShoppingBagIcon } from "lucide-react";
import React from "react";

import { servicesObj } from "../data/services/services";

const Services = () => {
  return (
    <div>
      <div className="my-8">
        <h1 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed md:pb-2 font-semibold text-[#330073] text-center">
          Services We Offer
        </h1>
        <div className="flex justify-evenly flex-wrap mx-6">
          {servicesObj.slice(0,8).map((service, id) => (
            <div
              key={id}
              class="group relative flex flex-col items-center shadow-sm shadow-gray-300 m-2 hover:border border-slate-300 hover:shadow-md hover:bg-[#330073] hover:-translate-y-2 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out cursor-pointer w-72"
            >
              <div class="p-4 flex flex-col items-center">
                {service.icon ? (
                  <service.icon className="size-6 text-[#330073] group-hover:text-white mb-2" />
                ) : (
                  <Code2 className="size-6 text-[#330073] group-hover:text-white mb-2" />
                )}
                <h5 class="mb-2 text-slate-800 text-xl text-center font-semibold group-hover:text-white">
                  {service.name}
                </h5>
                <p class="text-slate-700 leading-normal text-sm text-center font-light group-hover:text-slate-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
