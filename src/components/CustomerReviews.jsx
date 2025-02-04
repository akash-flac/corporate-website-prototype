import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import React, { useState } from "react";

export const reviews = [
  {
    name: "Imran Khan",
    review:
      "Without any doubt I recommend Markle Tech as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work tosomeone else.",
    id: 1,
    icon: "src/images/reviews/p1.jpeg",
    reviewerDesc: "Person"
  },
  {
    name: "Alok Aggarwal",
    review: "Smile, it's free therapy.",
    id: 2,
    icon: "src/images/reviews/p2.jpeg",
    reviewerDesc: "Backend Engineer"
  },
  {
    name: "Sourav Kumar",
    review:
      "Emancipate yourselves from mental slavery, none but ourselves can free our minds!",
    id: 3,
    icon: "src/images/reviews/p3.jpeg",
    reviewerDesc: "App Developer"
  },
  {
    name: "Heera Lal",
    review:
      "Expose yourself to your deepest fear; after that, fear has no power, and the fear of freedom shrinks and vanishes. You are free.",
    id: 4,
    icon: "src/images/reviews/p4.jpeg",
    reviewerDesc: "Senior FullStack Developer"
  },
  {
    name: "Vivek Raina",
    review:
      "Birds sing after a storm; why shouldn't people feel as free to delight in whatever sunlight remains to them?",
    id: 5,
    icon: "src/images/reviews/p5.jpeg",
    reviewerDesc: "Wordpress"
  },
  {
    name: "Vaibhav Kumar",
    review:
      "I believe that it is better to tell the truth than a lie. I believe it is better to be free than to be a slave. And I believe it is better to know than to be ignorant.",
    id: 6,
    icon: "src/images/reviews/p6.jpeg",
    reviewerDesc: "DevOps Engineer"
  },
];
const CustomerReviews = () => {
  const [currRev, setCurrRev] = useState(0);
  const totalReviews = reviews.length;
  const currentReviewer = reviews[currRev];
  const prevReviewer = reviews[(currRev - 1 + totalReviews) % totalReviews];
  const nextReviewer = reviews[(currRev + 1) % totalReviews];
  const nextToNextReviewer = reviews[(currRev + 2) % totalReviews];
  const prevToPrevReviewer =
    reviews[(currRev - 2 + totalReviews) % totalReviews];
  console.log(currentReviewer.id);
  const changeReview = (newIndex) => {
    setCurrRev((currRev) => (newIndex + totalReviews) % totalReviews);
  };
  // setInterval(() => changeReview(currRev + 1), 1000);
  return (
    <div className="m-5 mb-12 md:mb-20">
      <div className="">
        <h1 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed text-center pb-4 md:pb-3 font-semibold text-[#260651]">
          Why customers love{" "}
          <span className="font-bold lg:block"> working with us</span>
        </h1>
        <div className="flex justify-evenly items-center">
          <ArrowLeftCircle
            className="text-[#260651] md:hover:bg-gray-100 rounded-full cursor-pointer w-12 md:h-12"
            onClick={() => changeReview(currRev - 1)}
          ></ArrowLeftCircle>
          <div className="flex flex-col items-center w-md max-w-md sm:max-w-screen-sm sm:w-screen md:h-60">
            <p className="text-sm sm:text-xl h-40 max-h-40 max-w-sm sm:max-w-screen-sm sm:w-lg text-center font-normal font-serif">
              {currentReviewer.review}
            </p>
            <div className="flex items-center gap-3 md:gap-10">
              <div
                className="cursor-pointer hidden md:block"
                onClick={() => changeReview(currRev - 2)}
              >
                <img
                  src={prevToPrevReviewer.icon}
                  // src="src/images/reviews/p1.jpeg"
                  alt=""
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full opacity-20"
                />
                <h2 className="text-center w-16">{prevToPrevReviewer.name}</h2>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => changeReview(currRev - 1)}
              >
                <img
                  src={prevReviewer.icon}
                  // src="src/images/reviews/p1.jpeg"
                  alt=""
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full opacity-50"
                />
                <h2 className="text-center w-16">{prevReviewer.name}</h2>
              </div>

              <div className="cursor-pointer">
                <img
                  src={currentReviewer.icon}
                  // src="src/images/reviews/p1.jpeg"
                  alt=""
                  className="w-16 md:w-20 h-16 md:h-20 rounded-full"
                />
                <h2 className="text-center w-20">{currentReviewer.name}</h2>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => changeReview(currRev + 1)}
              >
                <img
                  src={nextReviewer.icon}
                  // src="src/images/reviews/p1.jpeg"
                  alt=""
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full opacity-50"
                />
                <h2 className="text-center w-16">{nextReviewer.name}</h2>
              </div>
              <div
                className="cursor-pointer hidden md:block"
                onClick={() => changeReview(currRev + 2)}
              >
                <img
                  src={nextToNextReviewer.icon}
                  // src="src/images/reviews/p1.jpeg"
                  alt=""
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full opacity-20"
                />
                <h2 className="text-center w-16">{nextToNextReviewer.name}</h2>
              </div>
            </div>
          </div>
          <ArrowRightCircle
            className="text-[#260651] md:hover:bg-gray-100 rounded-full cursor-pointer w-12 md:h-12"
            onClick={() => changeReview(currRev + 1)}
          ></ArrowRightCircle>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
