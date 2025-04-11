import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  const showcaseRef = useRef(null);
  const servicesRef = useRef(null);
  const howItWorksRef = useRef(null);
  const aboutRef = useRef(null); // If you have an About section

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        showcaseRef={showcaseRef}
        servicesRef={servicesRef}
        howItWorksRef={howItWorksRef}
        aboutRef={aboutRef}
      />

      <div ref={showcaseRef}>
        <Showcase />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={howItWorksRef}>
        <HowItWorks />
      </div>
      <div ref={aboutRef}>
        <div className="h-screen bg-gray-200 flex items-center justify-center">
          <h2 className="text-3xl font-semibold">About Section</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
