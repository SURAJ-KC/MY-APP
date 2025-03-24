import React from 'react';

const ServicesComponent = ({ image, title, description, link }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg h-[40vh]">
      <a href={link} className="block">
        {/* Image */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[40vh] object-cover transition-transform duration-300 transform group-hover:scale-120"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-600 opacity-80 flex flex-col justify-center items-center text-white text-center p-4">
          <h5 className="text-xl font-semibold">{title}</h5>
          <p className="mt-2 text-sm">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ServicesComponent;
