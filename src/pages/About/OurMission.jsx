import React from "react";
import Hero from "/src/components/Hero.jsx";
import Footer from "/src/components/Footer";
const OurMission = () => {
  return (
    <div>
      <Hero
        bgImage={"/src/images/ourMission.jpeg"}
        heading={"Our Mission"}
        content={
          "Creating Impactful Tech Solutions that Empower Businesses and Shape the Future."
        }
      />
      <div className="flex flex-col lg:flex-row justify-evenly items-center my-10 lg:my-24 mx-8 md:mx-4">
        <img
          src="/src/images/missionImage.jpeg"
          alt=""
          className="rounded-2xl my-3 md:h-72"
        />
        <p className="max-w-xl text-md md:text-xl text-center lg:text-start md:mx-4">
          <h1 className="font-bold my-3">Our Mission</h1>
          At Markle Tech & Media, our mission extends beyond delivering
          technology solutions—we aim to create meaningful change that empowers
          businesses and individuals alike. We believe that every business has a
          unique story, and our role is to translate that vision into impactful
          digital experiences that drive growth, efficiency, and engagement.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default OurMission;
