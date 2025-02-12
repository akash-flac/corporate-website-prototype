import React from "react";
// import "./App.css";
import Achievements from "/src/components/Achievements.jsx";
// import Banner from "./components/Banner";
import CustomerReviews from "/src/components/CustomerReviews";
import Tools from "/src/components/Tools"
import FAQ from "/src/components/FAQ";
import Footer from "/src/components/Footer";
import Goal from "/src/components/Goal";
import Hero from "/src/components/Hero";
import LeadingCompanies from "/src/components/LeadingCompanies";
// import NavBar from "./components/NavBar";
import NextGen from "/src/components/NextGen";
import ScrollingLogos from "/src/components/ScrollingLogos";
import Services from "/src/components/Services";
import SolutionsWeDeliver from "/src/components/SolutionsWeDeliver";
import heroImage from "/src/images/hero-image.png";

const Home = () => {
  return (
    <div>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      <Hero
        bgImage={heroImage}
        heading={"Transforming Ideas Into Digital Solutions"}
        content={
          "As a leading software development establishment, we turn complex challenges into innovative digital solutions. Be it website development or app development, we empower organizations toinnovate, automate, and grow in today’s fast-paced digital ecosystem."
        }
      />
      <ScrollingLogos />
      <Services renderComplete={false}/>
      <LeadingCompanies />
      <CustomerReviews />
      <Goal />
      <NextGen />
      <Tools/>
      <Achievements />
      <SolutionsWeDeliver />
      <FAQ />
      <Footer />
      {/* </ThemeProvider> */}
    </div>
  );
};

export default Home;
