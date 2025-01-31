import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AboutCompany from "./pages/AboutCompany";
import OurMission from "./pages/OurMission";
import FAQ from "/src/components/FAQ.jsx";
import {user} from "./utils/data"

// import { ThemeProvider } from "./components/ThemeProvider";
function App() {
  console.log(user)
  return (
    <div>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      {/* </ThemeProvider> */}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutCompany" element={<AboutCompany />} />
        <Route path="/ourMission" element={<OurMission />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
