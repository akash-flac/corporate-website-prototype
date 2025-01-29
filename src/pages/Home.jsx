import React from 'react'
// import "./App.css";
import Achievements from "../components/Achievements.jsx";
// import Banner from "./components/Banner";
import CustomerReviews from "../components/CustomerReviews";
import ExpandableCard from "../components/ExpandableCard";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Goal from "../components/Goal";
import Hero from "../components/Hero";
import LeadingCompanies from "../components/LeadingCompanies";
// import NavBar from "./components/NavBar";
import NextGen from "../components/NextGen";
import ScrollingLogos from "../components/ScrollingLogos";
import Services from "../components/Services";
import SolutionsWeDeliver from "../components/SolutionsWeDeliver";

const Home = () => {
  return (
    <div>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      <Hero />
      <ScrollingLogos />
      <Services />
      <LeadingCompanies />
      <CustomerReviews/>
      <Goal />
      <NextGen />
      <ExpandableCard />
      <Achievements />
      <SolutionsWeDeliver />
      <FAQ />
      <Footer />
      {/* </ThemeProvider> */}
    </div>
  )
}

export default Home