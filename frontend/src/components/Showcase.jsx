import React from "react";
import TypingEffect from "./TypeEffect";

const Showcase = ({ scrollToSection, servicesRef }) => {
  return (
    <section
      id="showcase"
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('../hero-bg.jpg')",
      }}
    >
      {/* Background Overlay for Opacity */}
      <div className="absolute inset-0 bg-zinc-800 opacity-80"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center text-white gap-8 z-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-white">AI-Powered</span>{" "}
          <span className="text-orange-500">Health Assessment</span>
        </h1>
        <div>
          <TypingEffect />
        </div>
        <button
          onClick={() => {
            if (scrollToSection && servicesRef) {
              scrollToSection(servicesRef);
            }
          }}
          className="bg-orange-600 w-[250px] hover:bg-orange-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Start Assessment
        </button>
      </div>
    </section>
  );
};

export default Showcase;
