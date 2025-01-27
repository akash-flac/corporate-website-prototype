import "./App.css";
import Banner from "./components/Banner";
import BlurReveal from "./components/blur-reveal";
// import { CardSpotlightDemo } from "./components/card";
import CustomerReviews from "./components/CustomerReviews";
import ExpandableCard from "./components/expandablecard";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Goal from "./components/Goal";
import Hero from "./components/Hero";
import LeadingCompanies from "./components/LeadingCompanies";
import NavBar from "./components/NavBar";
import NextGen from "./components/NextGen";
import ScrollingLogos from "./components/ScrollingLogos";
import Services from "./components/Services";
import { ThemeProvider } from "./components/ThemeProvider";
import ToolsSection from "./components/tools-section";

function App() {
  return (
    <div>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      {/* <header> */}
        
      {/* </header> */}
      <Hero/>
      <ScrollingLogos/>
      <Services/>
      <LeadingCompanies/>
      {/* <CustomerReviews/> */}
      <Goal/>
      <NextGen/>
      {/* <CardSpotlightDemo/> */}
      {/* <BlurReveal/> */}
      {/* <ExpandableCardDemo/> */}
      <ExpandableCard/>
      {/* <ToolsSection/> */}
      <FAQ/>
      <Footer/>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
