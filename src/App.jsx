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
import Pricing from "./pages/Pricing/Pricing";
import PricingTwo from "./pages/Pricing/PricingTwo";
import ContactUs from "./pages/ContactUs";
import CostCalculator from "./pages/Pricing/CostCalculator";
import FinanceAndFintech from "./pages/Industries/FinanceAndFintech";
import TravelAndHospitality from "./pages/Industries/TravelAndHospitality";
import Education from "./pages/Industries/Education";
import RealEstateAndConstruction from "./pages/Industries/RealEstateAndConstruction";
import TransportationAndLogistics from "./pages/Industries/TransportationAndLogistics";
import RetailAndEcommerce from "./pages/Industries/RetailAndEcommerce";
import HealthAndWellness from "./pages/Industries/HealthAndWellness";

// import { ThemeProvider } from "./components/ThemeProvider";
function App() {
  return (
    <div>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      {/* </ThemeProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About Section */}
          <Route path="/about-company" element={<AboutCompany />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/client-reviews" element={<ClientReviews />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/become-our-agent" element={<BecomeOurAgent />} />

          {/* Services */}
          <Route
            path="/services/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="/services" element={<ServicesMain />} />

          {/* Industries */}
          <Route path="/industries" element={<IndustriesMain />} />
          <Route
            path="/finance-and-fintech"
            element={<FinanceAndFintech />}
          />
          <Route
            path="/travel-and-hospitality"
            element={<TravelAndHospitality />}
          />
          <Route path="/industries/education" element={<Education />} />
          <Route
            path="/real-estate-and-construction"
            element={<RealEstateAndConstruction />}
          />
          <Route
            path="/health-and-wellness"
            element={<HealthAndWellness />}
          />
          <Route
            path="/industries/transportation-and-logistics"
            element={<TransportationAndLogistics />}
          />
          <Route
            path="/industries/retail-and-ecommerce"
            element={<RetailAndEcommerce />}
          />
  
          <Route path="/our-products" element={<SolutionsMain />} />

          {/* Pricing */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing-2" element={<PricingTwo />} />
          <Route path="/cost-calculator/:step" element={<CostCalculator />} />
          <Route path="*" element={<CostCalculator />} /> 

          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
