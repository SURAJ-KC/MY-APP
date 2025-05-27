import React from "react";
import ServicesComponent from "../components/ServicesComponent";
import { Outlet, useLocation } from "react-router-dom";

const PlantCategory = () => {
  const location = useLocation();
  const isFormRoute = location.pathname.includes("/image_upload");
  const isPromptRoute = location.pathname.includes('/prompt');


  return (
    <section id="services" className="py-16 bg-gray-300">
      {!isFormRoute && !isPromptRoute && (
        <>
          <h2 className="text-3xl font-bold text-center my-16">Our Services</h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServicesComponent
                image="../../potato_leaf.jpg"
                title="Potato Disease"
                description="Identify potential potato plant disease and get care recommendations."
                link="image_upload/plant_potato"
              />

              <ServicesComponent
                image="../../rice.jpg"
                title="Rice Disease"
                description="Identify potential rice disease conditions and get care recommendations."
                link="image_upload/plant_rice"
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

export default PlantCategory;
