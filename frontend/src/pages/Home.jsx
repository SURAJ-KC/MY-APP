import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";


const Home = () => {
  const showcaseRef = useRef(null);
  const servicesRef = useRef(null);
  const howItWorksRef = useRef(null);

  const scrollToSection = (section) => {
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div>
        <header>
          <Navbar scrollToSection={scrollToSection} showcaseRef={showcaseRef} servicesRef={servicesRef} howItWorksRef={howItWorksRef} />
        </header>
        
        <div>
          <div ref={showcaseRef}>
            <Showcase />
          </div>
          <div ref={servicesRef}>
            <Services />
          </div>
          <div ref={howItWorksRef}>
            <HowItWorks />
          </div>
        </div>

        <footer className="sticky bottom-0">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
