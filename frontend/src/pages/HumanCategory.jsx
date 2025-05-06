import React from 'react';
import ServicesComponent from '../components/ServicesComponent';
import { Outlet, useLocation } from 'react-router-dom';

const HumanCategory = () => {
  const location = useLocation();
  const isFormRoute = location.pathname.includes('/image_upload');
  const isPromptRoute = location.pathname.includes('/prompt');


  return (
    <section id="services" className="py-16">
      {(!isFormRoute && !isPromptRoute) && (
        <>
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServicesComponent 
                image="/eyes.jpg"
                title="Eyes Disease"
                description="Identify potential eye conditions and get care recommendations."
                link="image_upload/human_eyes"
              />

              <ServicesComponent 
                image="/skin.jpg"
                title="Skin Disease"
                description="Identify potential skin disease conditions and get care recommendations."
                link="image_upload/human_skin"
              />

              <ServicesComponent 
                image="/doctor_2.jpg"
                title="Symptom Based"
                description="Identify potential disease conditions by describing it and get care recommendations."
                link="prompt"
              />
            </div>
          </div>
        </>
      )}

      <div className="mt-12 flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </section>
  );
};

export default HumanCategory;
