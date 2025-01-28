import React from "react";

const LeadingCompanies = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 max-w-full mx-10 md:mx-20 md:my-8">
        <div className="md:px-6 col-span-1">
          <hr class="w-28 h-1 my-4 bg-gray-100 border-0 rounded mx-auto md:mx-0 md:my-5 dark:bg-gray-700"></hr>
          <h1 className="row-span-1 text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed md:pb-3 font-semibold text-[#260651]">
            Leading companies trust us{" "}
            <span className="font-bold lg:block"> to develop software</span>
          </h1>
          <p className="row-span-1 text-lg sm:text-xl md:text-2xl md:pt-3 text-justify">
            We <span className="text-[#260651]">add development capacity</span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
          <h1 className="row-span-1 text-[#260651] font-semibold pt-5">
            See More Information &rarr;
          </h1>
        </div>
        <div className="my-4 md: px-4">
          <img
            src="src\images\leading.jpeg"
            alt=""
            className="border rounded-2xl"
          />
        </div>
      </div>
      <hr class="w-28 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-700"></hr>
    </div>
  );
};

export default LeadingCompanies;
