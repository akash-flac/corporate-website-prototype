import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

const pricingComponentObj2 = [
  {
    heading: `By Platform`,
    desc: ``,
    items: [
      {
        title: "Enterprise Web App",
        src: `src/images/pricing/web.jpeg`,
      },
      {
        title: "Consumer-focused Web App",
        src: `src/images/pricing/crm.jpeg`,
      },
      {
        title: "Website",
        src: `src/images/pricing/bfsi.jpeg`,
      },
      {
        title: "Mobile Application",
        src: `src/images/pricing/aiml.jpeg`,
      },
      {
        title: "DWH",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
      {
        title: "Desktop and other types",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
    ],
  },
  {
    heading: `By Business Function`,
    desc: ``,
    items: [
      {
        title: "ERP Software",
        src: `src/images/pricing/web.jpeg`,
      },
      {
        title: "CRM Software",
        src: `src/images/pricing/crm.jpeg`,
      },
      {
        title: "Supply Chain Software",
        src: `src/images/pricing/bfsi.jpeg`,
      },
      {
        title: "Inventory Management Software",
        src: `src/images/pricing/aiml.jpeg`,
      },
      {
        title: "Order Management Software",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
      {
        title: "Corporate Finance Software",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
      {
        title: "Accounting Software",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
      {
        title: "BI Software",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
      {
        title: "Payment Software",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
      {
        title: "HR Software",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
      {
        title: "e-Learning Software",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
      {
        title: "Kiosk Software",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
      {
        title: "Content Management Software",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
      {
        title: "Other",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
    ],
  },
  {
    heading: `By Industry`,
    desc: ``,
    items: [
      {
        title: "ERP Software",
        src: `src/images/pricing/web.jpeg`,
      },
      {
        title: "CRM Software",
        src: `src/images/pricing/crm.jpeg`,
      },
      {
        title: "Supply Chain Software",
        src: `src/images/pricing/bfsi.jpeg`,
      },
      {
        title: "Inventory Management Software",
        src: `src/images/pricing/aiml.jpeg`,
      },
      {
        title: "Order Management Software",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
      {
        title: "Corporate Finance Software",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
    ],
  },
  {
    heading: `By Technology`,
    desc: ``,
    items: [
      {
        title: "ERP Software",
        src: `src/images/pricing/web.jpeg`,
      },
      {
        title: "CRM Software",
        src: `src/images/pricing/crm.jpeg`,
      },
      {
        title: "Supply Chain Software",
        src: `src/images/pricing/bfsi.jpeg`,
      },
      {
        title: "Inventory Management Software",
        src: `src/images/pricing/aiml.jpeg`,
      },
      {
        title: "Order Management Software",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
    ],
  },
  {
    heading: `Platform-Based Solutions`,
    desc: ``,
    items: [
      {
        title: "Sharepoint Software",
        src: `src/images/pricing/web.jpeg`,
      },
      {
        title: "Dynamics 365 Software",
        src: `src/images/pricing/crm.jpeg`,
      },
      {
        title: "ServiceNow Software",
        src: `src/images/pricing/bfsi.jpeg`,
      },
    ],
  },
];
const PricingTwo = () => {
  return (
    <div>
      <Hero
        bgImage={`/src/images/pricing/pricingPageTwo.jpeg`}
        heading={`What software do you need to develop?`}
        content={` From custom apps to complex systems, we build software designed for your unique needs`}
      />
      <div className="flex justify-evenly flex-wrap m-2 md:m-5 p-4 bg-gray-50">
        {pricingComponentObj2.map((component, index) => (
          <div
            key={index}
            className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-6 m-4"
          >
            {/* Heading */}
            <h2 className="text-xl md:text-3xl font-extrabold text-purple-800 m-4 text-center uppercase tracking-wide">
              {component.heading}
            </h2>

            {/* Description */}
            <p className="font-light text-lg md:text-xl text-gray-700 text-justify md:text-center p-4 leading-relaxed">
              {component.desc}
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 m-4">
              {component.items?.map((img, imgIndex) => (
                <a
                  key={imgIndex}
                  href="/cost-calculator"
                  className="relative w-48 h-48 cursor-pointer rounded-xl overflow-hidden shadow-md transform transition duration-300 group hover:scale-105"
                >
                  {/* Image */}
                  <img
                    src={img.src}
                    alt={img.alt || "Image"}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Overlay (Hover Effect Added) */}
                  <div className="absolute inset-0 bg-black group bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 ease-in-out"></div>

                  {/* Text Overlay */}
                  <p className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg px-3 text-center leading-tight">
                    {img.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PricingTwo;
