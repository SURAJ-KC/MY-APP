import React from "react";
import ServicesComponent from "../components/ServicesComponent";

const PlantCategory = () => {
  return (
    <section id="services" className="py-16 bg-gray-300">
      <h2 className="text-3xl font-bold text-center my-16">Our Services</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServicesComponent
            image="../../leaf.jpg"
            title="Plant Disease"
            description="Identify potential plant disease and get care recommendations."
            link="#"
          />

          <ServicesComponent
            image="../../rice.jpg"
            title="Rice Disease"
            description="Identify potential rice disease conditions and get care recommendations."
            link="#"
          />

        </div>
      </div>
    </section>
  );
};

export default PlantCategory;
