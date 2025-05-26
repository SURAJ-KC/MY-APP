import React from "react";

const About = () => {
  return (
    <section className="bg-gray-300 py-16 px-6 md:px-12 lg:px-24 mb-10">
      <div className="max-w-5xl mx-auto text-justify">
        <h2 className="text-4xl font-bold mb-6 text-center">
          About
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          <strong>Visionary Health</strong> is an AI-powered platform revolutionizing disease detection by bridging the gap between human and plant health. Our mission is to provide fast, reliable, and accessible diagnostics using advanced machine learning models and visual recognition technologies.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
          Whether you're a healthcare provider, a farmer, or just someone curious about a symptom, our platform empowers you with intelligent assessments and early detection — right from your device. With tailored solutions for both human conditions and plant diseases, we help prevent, protect, and promote healthier lives and ecosystems.
        </p>
      </div>
    </section>
  );
};

export default About;
