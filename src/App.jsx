import "./App.css";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import LeadingCompanies from "./components/LeadingCompanies";
import NavBar from "./components/NavBar";
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
      </ThemeProvider>
    </div>
  );
}

export default App;
