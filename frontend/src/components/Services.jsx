import React from 'react';
import ServicesComponent from './ServicesComponent';

const Services = () => {
  return (
    <section id="services" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service 1 - Pathology */}
          <ServicesComponent 
            image="../../doctor.jpg"
            title="Human Category"
            description="Identify potential health conditions and get care recommendations."
            link="/human_category"
          />

          {/* Service 2 - Plant Pathology */}
          <ServicesComponent 
            image="../../crop.jpg"
            title="Plant Category"
            description="Identify potential crop disease conditions and get care recommendations."
            link="/plant_category"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
