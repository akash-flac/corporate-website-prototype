import { Cog6ToothIcon, DevicePhoneMobileIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { Code2, LucideCloudLightning, MegaphoneIcon, ShoppingBagIcon } from "lucide-react";
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
    icon: MegaphoneIcon,
    id: 3,
  },
  {
    name: "Mobile App Development",
    description:
      "We deliver targeted digital marketing strategies that drive traffic, boost engagement, and enhance brand visibility across all online channels.",
    icon: DevicePhoneMobileIcon,
    id: 4,
  },
  {
    name: "DevOps Consultation",
    description:
      "We deliver targeted digital marketing strategies that drive traffic, boost engagement, and enhance brand visibility across all online channels.",
    icon: Cog6ToothIcon,
    id: 5,
  },
  {
    name: "MVP Development",
    description:
      "We deliver targeted digital marketing strategies that drive traffic, boost engagement, and enhance brand visibility across all online channels.",
    icon: RocketLaunchIcon,
    id: 6,
  },
  {
    name: "e-Commerce",
    description:
      "We deliver targeted digital marketing strategies that drive traffic, boost engagement, and enhance brand visibility across all online channels.",
    icon: ShoppingBagIcon,
    id: 7,
  },
  {
    name: "Low Code - No Code",
    description:
      "We deliver targeted digital marketing strategies that drive traffic, boost engagement, and enhance brand visibility across all online channels.",
    icon: LucideCloudLightning,
    id: 8,
  },
];
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
