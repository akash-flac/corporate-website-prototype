import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { motion } from "motion/react";

const industriesObj = [
  {
    name: `manufacturing`,
    description: `Our manufacturing solutions integrate the latest technology to streamline production processes, optimize resources, and reduce costs. We provide automation, data analytics, and IoT-enabled solutions to help you meet industry standards and drive innovation.`,
    src: `src/images/industries/manufacturing.jpeg`,
    id: 1,
  },
  {
    name: `automotive`,
    description: `We support the automotive industry with advanced technology solutions that enhance both manufacturing and mobility services. From autonomous driving systems to supply chain optimization, we deliver solutions that keep your business at the forefront of innovation.`,
    src: `src/images/industries/automotive.jpeg`,
    id: 2,
  },
  {
    name: `Education & e-learning`,
    description: `Our e-learning platforms leverage AI and interactive technologies to make learning accessible, engaging, and efficient. We support schools, universities, and corporate training programs with solutions that facilitate remote learning and improve educational outcomes.`,
    src: `src/images/industries/education.jpeg`,
    id: 3,
  },
  {
    name: `agritech`,
    description: `In agritech, we empower farmers and agribusinesses with technology solutions that boost productivity, enhance resource management, and promote sustainability. Our tools include precision farming, crop monitoring, and supply chain tracking.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 4,
  },
  {
    name: `Media & Entertainment:`,
    description: `We create cutting-edge media and entertainment solutions, from content creation and distribution to audience analytics and engagement. Our technology enables seamless streaming, personalized experiences, and optimized workflows for media production companies.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 5,
  },
  {
    name: `Fintech`,
    description: `Our fintech solutions transform the financial services sector with secure and scalable platforms for payments, lending, digital banking, and blockchain. We help businesses modernize their financial services with a focus on security, compliance, and user experience.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 6,
  },
  {
    name: `Travel & Hospitality`,
    description: `We elevate travel and hospitality experiences with our custom solutions for booking, customer service, and hospitality management. Our technology helps you create memorable experiences for travelers while optimizing backend operations and customer engagement.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 7,
  },
  {
    name: `Transportation & Logistics`,
    description: `Our logistics solutions streamline transportation management, fleet tracking, and supply chain coordination. We empower companies to enhance operational efficiency, reduce costs, and ensure timely delivery through advanced analytics and IoT integrations.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 8,
  },
  {
    name: `Retail`,
    description: `Our retail technology solutions improve customer engagement and streamline inventory management. We help retailers enhance their online and in-store experiences with personalized recommendations, POS systems, and real-time inventory tracking.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 9,
  },
  {
    name: `Oil and Gas`,
    description: `In the oil and gas sector, we provide solutions for data management, predictive maintenance, and safety compliance. Our technology helps companies improve operational efficiency, enhance safety, and minimize environmental impact.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 10,
  },
  {
    name: `Healthcare`,
    description: `We develop healthcare solutions focused on patient management, diagnostics, and data security. Our technology supports telemedicine, electronic health records, and diagnostic tools to improve patient outcomes and streamline healthcare processes.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 11,
  },
  {
    name: `Oil and Gas`,
    description: `In the oil and gas sector, we provide solutions for data management, predictive maintenance, and safety compliance. Our technology helps companies improve operational efficiency, enhance safety, and minimize environmental impact.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 12,
  },
  {
    name: `Compliance`,
    description: `Our compliance solutions ensure your business adheres to regulatory standards with automated reporting, risk assessment, and data management. We help you navigate complex regulatory environments with ease and accuracy.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 13,
  },
  {
    name: `Banking`,
    description: `Our digital banking solutions modernize financial institutions with secure and innovative platforms for transactions, customer management, and fraud detection. We help banks improve customer satisfaction and streamline operations.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 14,
  },
  {
    name: `Insurance`,
    description: `Our insurance technology solutions support claims management, customer service, and data analytics. We help insurers optimize processes, enhance customer engagement, and leverage data for better decision-making.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 15,
  },
  {
    name: `E-commerce`,
    description: `Our e-commerce solutions enhance online retail with intuitive interfaces, secure payment systems, and personalized product recommendations. We help businesses create seamless shopping experiences that drive customer satisfaction and loyalty.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 16,
  },
  {
    name: `Real estate`,
    description: `We enable real estate businesses with solutions for property management, virtual tours, and customer relationship management. Our technology helps streamline transactions, enhance property listings, and improve client interactions.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 17,
  },
  {
    name: `Astrology and Horoscope`,
    description: `Our astrology solutions offer personalized readings, horoscope predictions, and other astrological services for users. We provide a platform for astrologers to connect with clients and deliver tailored experiences.`,
    src: `src/images/industries/agritech.jpeg`,
    id: 18,
  },
];
const IndustriesMain = () => {
  return (
    <div className="bg-gray-50">
      <Hero
        bgImage={`src/images/Industries/industries.jpeg`}
        heading={`Industries We Serve`}
        content={`Providing Tailored IT Solutions to Healthcare, Finance, Retail, and Beyond.`}
      />
      <h2 className="text-2xl font-bold text-purple-900 m-8 text-center uppercase">
        industries
      </h2>
      <div className="">
        {industriesObj.map((industry) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
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
              <p className="text-lg m-2 p-2 text-gray-800">
                {industry.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default IndustriesMain;
