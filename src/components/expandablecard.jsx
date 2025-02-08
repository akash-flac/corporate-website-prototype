import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardDataArray = [
  {
    category: "Frontend",
    items: [
      { title: "HTML", content: "HTML is the structure of web pages." },
      { title: "CSS", content: "CSS is used to style web pages." },
      {
        title: "JavaScript",
        content: "JavaScript adds interactivity to websites.",
      },
      {
        title: "ReactJS",
        content: "ReactJS is a library for building UI components.",
      },
      {
        title: "ReactJS",
        content: "ReactJS is a library for building UI components.",
      },
      {
        title: "ReactJS",
        content: "ReactJS is a library for building UI components.",
      },
      {
        title: "ReactJS",
        content: "ReactJS is a library for building UI components.",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        title: "NodeJS",
        content: "NodeJS is a runtime for JavaScript on the server side.",
      },
      {
        title: "PHP",
        content: "PHP is a server-side scripting language for web development.",
      },
      {
        title: "MySQL",
        content: "MySQL is a relational database management system.",
      },
      {
        title: "Redis",
        content: "Redis is an in-memory key-value store for caching.",
      },
    ],
  },
  {
    category: "Databases and Storage",
    items: [
      {
        title: "MySQL",
        content: "MySQL is widely used for relational databases.",
      },
      {
        title: "NoSQL",
        content: "NoSQL is a database format for non-relational data.",
      },
      {
        title: "PostGreSQL",
        content: "PostGreSQL is an advanced open-source database.",
      },
      {
        title: "Redis",
        content: "Redis supports in-memory caching for high-speed access.",
      },
    ],
  },
];

// TOOLS section
export default function ExpandableCard() {
  const [activeHeading, setActiveHeading] = useState("Frontend");
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollCarousel = (direction) => {
    const scrollAmount = 300;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const startDrag = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const handleDrag = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Adjust scrolling speed
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") scrollCarousel("left");
      if (e.key === "ArrowRight") scrollCarousel("right");
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const currentItems = cardDataArray.find(
    (category) => category.category === activeHeading
  ).items;
  const showArrows = currentItems.length > 4;

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#260651] mb-4">
        Tools We Use
      </h2>
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
        {cardDataArray.map((category) => (
          <button
            key={category.category}
            onClick={() => setActiveHeading(category.category)}
            className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold font-mono transition-colors duration-300 ${
              activeHeading === category.category
                ? "text-[#260651] "
                : "text-gray-400"
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      <div className="relative">
        {showArrows && (
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-1 sm:p-2 rounded-full z-10 hover:bg-gray-200"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div
          ref={carouselRef}
          className="flex space-x-2 sm:space-x-4 overflow-x-auto px-4 sm:px-10 scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={startDrag}
          onMouseLeave={stopDrag}
          onMouseUp={stopDrag}
          onMouseMove={handleDrag}
        >
          <style>
            {`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {cardDataArray
            .find((category) => category.category === activeHeading)
            .items.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="min-w-[200px] sm:min-w-[250px] lg:min-w-[300px] bg-[#E9D9FF] rounded-2xl shadow-md m-4 p-6 cursor-pointer scroll-snap-align-start transition-transform duration-300"
              >
                <h3 className="font-bold text-lg sm:text-xl text-[#260651] mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {item.content}
                </p>
              </motion.div>
            ))}
        </div>

        {showArrows && (
          <button
            onClick={() => scrollCarousel("right")}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-1 sm:p-2 rounded-full z-10 hover:bg-gray-200"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
  // return (
  //   <div className="">
  //     <div className="m-8 px-8 sm:m-10 md:h-64">
  //       <div className="">
  //         {/* <div className=""> */}
  //         <h2 className="text-2xl md:text-3xl/relaxed lg:text-4xl/relaxed font-bold text-[#260651] text-center">
  //           Tools We Use
  //         </h2>
  //         <div className="flex space-x-3 md:space-x-6 mb-6 justify-center items-center mt-4">
  //           {/* Tools Headings */}
  //           {cardDataArray.map((category) => (
  //             <button
  //               key={category.category}
  //               onClick={() => setActiveHeading(category.category)}
  //               className={`px-3 md:py-1 rounded-lg font-mono font-semibold group ${
  //                 activeHeading === category.category
  //                   ? "text-[#260651]"
  //                   : " text-gray-500"
  //               }`}
  //             >
  //               {category.category}
  //             </button>
  //           ))}
  //         </div>
  //         {/* </div> */}

  //         {/* Cards */}

  //         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center my-4 mx-11 p-2"> */}
  //         <div className="relative">
  //           {" "}
  //           <button
  //             onClick={() => scrollCarousel("left")}
  //             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-gray-200"
  //           >
  //             <ChevronLeft size={24} />
  //           </button>
  //           <div
  //             ref={carouselRef}
  //             className="flex space-x-4 overflow-x-auto px-10 scrollbar-hide"
  //             style={{
  //               scrollSnapType: "x mandatory",
  //               scrollbarWidth: "none",
  //               msOverflowStyle: "none",
  //             }}
  //             onMouseDown={startDrag}
  //             onMouseLeave={stopDrag}
  //             onMouseUp={stopDrag}
  //             onMouseMove={handleDrag}
  //           >
  //             <style>
  //               {`
  //             .scrollbar-hide::-webkit-scrollbar {
  //               display: none;
  //             }
  //           `}
  //             </style>
  //             {cardDataArray
  //               .find((category) => category.category === activeHeading)
  //               .items.map((item, index) => (
  //                 // <div
  //                 //   key={index}
  //                 //   // onClick={() => {
  //                 //   //   if (isExpanded == index) setIsExpanded(null);
  //                 //   //   else if (isExpanded != index) setIsExpanded(index);
  //                 //   // }}
  //                 //   onMouseEnter={() => setIsExpanded(index)}
  //                 //   onMouseLeave={() => setIsExpanded(null)}
  //                 //   onClick={() =>
  //                 //     isExpanded === index
  //                 //       ? setIsExpanded(null)
  //                 //       : setIsExpanded(index)
  //                 //   }
  //                 //   className={`w-60 cursor-pointer overflow-hidden transition delay-150 duration-500 ease-in-out ${
  //                 //     isExpanded === index ? "max-h-64" : "max-h-16"
  //                 //   }`}
  //                 // >
  //                 //   {/* Card Title */}
  //                 //   <h3
  //                 //     className={`font-bold text-lg p-4 rounded-t-2xl duration-100 ease-in-out ${
  //                 //       isExpanded === index
  //                 //         ? "bg-[#260651] text-[#E9D9FF]"
  //                 //         : "bg-[#E9D9FF] rounded-xl"
  //                 //     }`}
  //                 //   >
  //                 //     {item.title}
  //                 //   </h3>

  //                 //   {/* Card Content */}
  //                 //   <div
  //                 //     className={`p-4 text-sm text-[#E9D9FF] bg-[#260651] rounded-b-2xl duration-500 ease-in-out ${
  //                 //       isExpanded === index ? "opacity-100" : "opacity-0 hidden"
  //                 //     }`}
  //                 //   >
  //                 //     {item.content}
  //                 //   </div>
  //                 // </div>

  //                 <motion.div
  //                   key={index}
  //                   whileHover={{ scale: 1.05 }}
  //                   className="min-w-[240px] bg-[#E9D9FF] rounded-2xl shadow-md p-4 cursor-pointer scroll-snap-align-start transition-transform duration-300"
  //                 >
  //                   <h3 className="font-bold text-xl text-[#260651] mb-2">
  //                     {item.title}
  //                   </h3>
  //                   <p className="text-gray-700">{item.content}</p>
  //                 </motion.div>
  //               ))}
  //           </div>
  //           <button
  //             onClick={() => scrollCarousel("right")}
  //             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-gray-200"
  //           >
  //             <ChevronRight size={24} />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
