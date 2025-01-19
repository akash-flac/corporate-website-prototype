import "./App.css";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ScrollingLogos from "./components/ScrollingLogos";
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
      </ThemeProvider>
    </div>
  );
}

export default App;
