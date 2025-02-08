import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

const industriesObj = [
  {
    name: `manufacturing`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi laboriosam expedita perferendis veniam, modi officiis aspernatur consectetur omnis? Sapiente, quas adipisci omnis voluptates obcaecati, provident ad minima odio, nostrum temporibus saepe praesentium blanditiis possimus exercitationem hic quae perferendis quod ipsam architecto qui neque ratione harum culpa asperiores! Ab iusto consequatur dolore veniam optio cum quas consectetur corporis, earum, blanditiis, repellendus ut deserunt dolor eligendi ratione? Qui distinctio veritatis veniam repudiandae culpa commodi`,
    src: `src/images/industries/manufacturing.jpeg`,
    id: 1,
  },
  {
    name: `automotive`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis libero nihil quos atque vel consequatur inventore accusantium eum iste?`,
    src: `src/images/industries/automotive.jpeg`,
    id: 2,
  },
  {
    name: `Education & e-learning`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis libero nihil quos atque vel consequatur inventore accusantium eum iste?`,
    src: `src/images/industries/education.jpeg`,
    id: 3,
  },
  {
    name: `agritech`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis libero nihil quos atque vel consequatur inventore accusantium eum iste?`,
    src: `src/images/industries/agritech.jpeg`,
    id: 4,
  },
];
const IndustriesMain = () => {
  return (
    <div>
      <Hero
        bgImage={`src/images/Industries/industries.jpeg`}
        heading={`Industries We Serve`}
        content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, architecto, voluptatem eum dicta accusamus ex dolores incidunt facilis maxime facere commodi inventore totam aspernatur ratione explicabo corporis mollitia? Esse ex ipsa, suscipit eum quasi velit ab repudiandae, incidunt vel iste voluptatem impedit, perferendis deleniti tenetur? Fugit libero tempora ipsum maxime!`}
      />
      <h2 className="text-2xl font-bold text-purple-900 m-8 text-center uppercase">
        industries
      </h2>
      <div className="">
        {industriesObj.map((industry) => (
          <div
            className="flex flex-col md:flex-row items-center rounded-lg p-4 my-6 max-w-6xl mx-auto"
            key={industry.id}
          >
            {/* Image Section (Always First on Mobile) */}
            <div
              className={`w-full md:w-1/2 mb-4 md:mb-0 ${
                industry.id % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <img
                src={industry.src}
                alt={industry.name}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>

            {/* Text Section */}
            <div
              className={`w-full md:w-1/2 text-center md:text-left ${
                industry.id % 2 === 0
                  ? "md:order-2 md:pl-6"
                  : "md:order-1 md:pr-6"
              }`}
            >
              <h2 className="text-2xl font-bold text-purple-900 mx-4 mb-4 uppercase">
                {industry.name}
              </h2>
              <p className="text-lg m-2 p-2">{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default IndustriesMain;
