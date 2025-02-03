import React from "react";
import Hero from "/src/components/Hero.jsx";
import Footer from "/src/components/Footer";
const OurMission = () => {
  return (
    <div>
      <Hero
        bgImage={"src/images/ourMission.jpeg"}
        heading={"Our Mission"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa eveniet optio tempore enim voluptatum odit natus nihil culpa neque, impedit dicta, commodi quos ratione earum explicabo dignissimos. Vel, sequi."
        }
      />
      <div className="flex flex-col lg:flex-row justify-evenly items-center my-10 lg:my-24 mx-8 md:mx-4">
        <img
          src="src\images\missionImage.jpeg"
          alt=""
          className="rounded-2xl my-3 md:h-72"
        />
        <p className="max-w-xl text-md md:text-xl text-center lg:text-start md:mx-4">
          <h1 className="font-bold my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptatum.</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa maxime
          molestias beatae, eos iusto quia exercitationem quaerat tempora
          incidunt, aliquid nulla, repellendus id doloremque placeat aut est
          maiores neque dignissimos error quae quo debitis? Veritatis quasi
          ratione saepe hic. Adipisci optio deserunt molestias mollitia corrupti
          fugiat veritatis odit ad laboriosam?
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default OurMission;
