import React from "react";

const reviews = [
  {
    reviewer:"Imran Khan",
    review:"Without any doubt I recommend Markle Tech as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work tosomeone else.",
    id:1,
    icon:"src\images\reviews\p1.jpeg"
  }
]
const CustomerReviews = () => {
  return (
    <div className="m-5 mb-20">
      <div className="">
      <h1 className="row-span-1 text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed text-center md:pb-3 font-semibold text-[#260651]">
            Why customers love{" "}
            <span className="font-bold lg:block"> working with us</span>
          </h1>
        <div className="flex flex-col items-center">
          <p className="text-xl max-w-screen-sm text-center font-light mb-10">
            Without any doubt I recommend Markle Tech as one of the best web
            design and digital marketing agencies. One of the best agencies I’ve
            came across so far. Wouldn’t be hesitated to introduce their work to
            someone else.
          </p>
          <div className="flex justify-center">
            <img src="src\images\reviews\p1.jpeg" alt="" className="w-20 h-20 rounded-full opacity-50" />
            <img src="src\images\reviews\p2.jpeg" alt="" className="w-20 h-20 rounded-full" />
            <img src="src\images\reviews\p3.jpeg" alt="" className="w-20 h-20 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
