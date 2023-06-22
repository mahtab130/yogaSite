import { About } from "../components/sections/landing/About";
import { Home } from "../components/sections/landing/Home";
import { Team } from "../components/sections/landing/Team";
import { PricingPage } from "../components/sections/landing/PricingPage";
import { Footer } from "../components/common/Footer";
import { ContactUs } from "../components/sections/landing/ContactUs";


const Landing = () => {
  return (
    <div style={{ width: "100%" }}>
      <Home />
      <About />
      <Team />
      <PricingPage />
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default Landing;
