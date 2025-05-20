import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";

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
        <Showcase scrollToSection={scrollToSection} servicesRef={servicesRef}/>
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={howItWorksRef} className="opacity-90">
        <HowItWorks />
      </div>
      <div ref={aboutRef} className="opacity-90 py-16">
        <About />
      </div>
    </>
  );
};

export default Home;
