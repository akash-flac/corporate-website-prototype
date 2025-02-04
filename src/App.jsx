import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AboutCompany from "./pages/About/AboutCompany";
import OurMission from "./pages/About/OurMission";
import FAQs from "./pages/About/FAQs";
import ClientReviews from "./pages/About/ClientReviews";
import BecomeOurAgent from "./pages/About/BecomeOurAgent";
import Careers from "./pages/About/Careers";
import SoftwareDevelopment from "./pages/Services/SoftwareDevelopment";
import ServicesMain from "./pages/Services/ServicesMain";
import IndustriesMain from "./pages/Industries/IndustriesMain";
import SolutionsMain from "./pages/Solutions/SolutionsMain";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
// import {user} from "./utils/data"
// import { ThemeProvider } from "./components/ThemeProvider";
function App() {
  // console.log(user);
  return (
    <div>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      {/* </ThemeProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-company" element={<AboutCompany />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/client-reviews" element={<ClientReviews />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/become-our-agent" element={<BecomeOurAgent />} />

          <Route
            path="/services/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/become-our-agent" element={<BecomeOurAgent />} />
          <Route path="/become-our-agent" element={<BecomeOurAgent />} />
          <Route path="/become-our-agent" element={<BecomeOurAgent />} />
          <Route path="/become-our-agent" element={<BecomeOurAgent />} />
          <Route path="/become-our-agent" element={<BecomeOurAgent />} />
          <Route path="/become-our-agent" element={<BecomeOurAgent />} />
          <Route path="/become-our-agent" element={<BecomeOurAgent />} />
          <Route path="/industries" element={<IndustriesMain />} />

          <Route path="/our-products" element={<SolutionsMain />} />

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
