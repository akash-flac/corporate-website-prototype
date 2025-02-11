import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

const pricingComponentObj = [
  {
    heading: `Software Development Cost Calculators`,
    desc: `Click on the card to reach the cost calculator for your required solution type (30+ options to choose from)`,
    items: [
      {
        title: "Web, Mobile, Desktop, DWH",
        src: `src/images/pricing/web.jpeg`,
      },
      {
        title: "ERP, CRM, SCM, accounting, etc.",
        src: `src/images/pricing/crm.jpeg`,
      },
      {
        title: "BFSI, Healthcare, Retail, & Other",
        src: `src/images/pricing/bfsi.jpeg`,
      },
      {
        title: "AI/ML, AR, Blockchain, And More",
        src: `src/images/pricing/aiml.jpeg`,
      },
      {
        title: "SharePoint, ServiceNow, Dynamics 365",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
    ],
  },
  {
    heading: `Data Analytics Cost Calculators`,
    desc: `In data analytics and AI since ScienceSoft’s inception, we help businesses organize even the most voluminous and high-velocity data at an optimal cost .`,
    items: [
      {
        title: "Data management services",
        src: `src/images/pricing/web.jpeg`,
      },
      {
        title: "Data analytics & BI implementation",
        src: `src/images/pricing/crm.jpeg`,
      },
      {
        title: "Big data consulting and implementation",
        src: `src/images/pricing/bfsi.jpeg`,
      },
      {
        title: "Data science services",
        src: `src/images/pricing/aiml.jpeg`,
      },
      {
        title: "Data warehouse services",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
      {
        title: " Data visualization services",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
    ],
  },
  {
    heading: `Managed IT Service Cost Calculators`,
    desc: `A trusted partner to monitor, troubleshoot, and evolve any components of your IT infrastructure, we always keep the costs transparent by fixing the prices and KPIs in an SLA.`,
    items: [
      {
        title: "Software maintenance",
        src: `src/images/pricing/web.jpeg`,
      },
      {
        title: "IT Infrastructure Management",
        src: `src/images/pricing/crm.jpeg`,
      },
      {
        title: "Help Desk Services",
        src: `src/images/pricing/bfsi.jpeg`,
      },
      {
        title: "Cloud Migration",
        src: `src/images/pricing/aiml.jpeg`,
      },
    ],
  },
  {
    heading: `QA and Cyber Security Cost Calculators`,
    desc: ``,
    items: [
      {
        title: "QA Consulting",
        src: `src/images/pricing/web.jpeg`,
      },
      {
        title: "Software Testing",
        src: `src/images/pricing/crm.jpeg`,
      },
      {
        title: "Security Testing",
        src: `src/images/pricing/bfsi.jpeg`,
      },
      {
        title: "Compliance assessment: HIPAA, PCI, etc.",
        src: `src/images/pricing/aiml.jpeg`,
      },
      {
        title: "SIEM Implementation",
        src: `src/images/pricing/sharepoint.jpeg`,
      },
    ],
  },
  {
    heading: `Other Cost Calculators`,
    desc: ``,
    items: [
      {
        title: "IT Consulting",
        src: `src/images/pricing/web.jpeg`,
      },
      {
        title: "Staff Augmentation",
        src: `src/images/pricing/crm.jpeg`,
      },
    ],
  },
];
const Pricing = () => {
  return (
    <div className="bg-gray-50">
      <Hero
        bgImage={`/src/images/pricing.jpeg`}
        heading={`how much will your project cost?`}
        content={`Pricing is customized to fit your unique project requirements. Contact us for a detailed estimate!`}
      />
      <div className="flex justify-evenly flex-wrap m-2 md:m-5 p-4 bg-gray-50">
        {pricingComponentObj.map((component, index) => (
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
                  href="/pricing-2"
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
      <div className="flex justify-evenly flex-wrap m-2 md:m-5 p-4 bg-gray-50">
        <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-6 m-4">
          {/* Heading */}
          <h2 className="text-xl md:text-3xl font-extrabold text-purple-800 m-4 text-center uppercase tracking-wide">
            Pricing Models We Rely On
          </h2>

          {/* Description */}
          <p className="font-medium text-md md:text-xl text-gray-700 text-justify md:text-center p-4 leading-relaxed">
            Markle offers flexible pricing models tailored to the cooperation
            scope and the client’s budget limitations. Depending on the required
            services, we employ time and materials (T&M), time and materials
            (T&M) with a cap, fixed-price, subscription-based,
            per-ticket, or mixed model. Explore our dedicated page to learn how
            we select an optimal pricing model for each particular case.
          </p>
        </div>
      </div>

      <div className="flex justify-evenly flex-wrap m-2 md:m-5 p-4 bg-gray-50">
        <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-6 m-4">
          {/* Heading */}
          <h2 className="text-xl md:text-3xl font-extrabold text-purple-800 m-4 text-center uppercase tracking-wide">
            Check Our Sample Estimates
          </h2>

          {/* Description */}
          <p className="font-medium text-md md:text-xl text-gray-700 text-justify md:text-center p-4 leading-relaxed">
            The estimates provided here are not ScienceSoft's official pricing.
            We assess the cost of each project individually, based on our
            clients' specific situations and needs. Feel free to use our cost
            calculators to estimate the cost of your project.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
