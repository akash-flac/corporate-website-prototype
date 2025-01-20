import "./App.css";
import Banner from "./components/Banner";
import CustomerReviews from "./components/CustomerReviews";
import FAQ from "./components/FAQ";
import Goal from "./components/Goal";
import Hero from "./components/Hero";
import LeadingCompanies from "./components/LeadingCompanies";
import NavBar from "./components/NavBar";
import NextGen from "./components/NextGen";
import ScrollingLogos from "./components/ScrollingLogos";
import Services from "./components/Services";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <div className="scroll-smooth">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header>
        <Banner />
        <NavBar />
      </header>
      <Hero/>
      <ScrollingLogos/>
      <Services/>
      <LeadingCompanies/>
      {/* <CustomerReviews/> */}
      <Goal/>
      <NextGen/>
      <FAQ/>
      </ThemeProvider>
    </div>
  );
}

export default App;
