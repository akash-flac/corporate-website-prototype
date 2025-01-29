import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AboutCompany from "./pages/AboutCompany";
// import { ThemeProvider } from "./components/ThemeProvider";
function App() {
  return (
    <div>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      {/* </ThemeProvider> */}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutCompany" element={<AboutCompany />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
