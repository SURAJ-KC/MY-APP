import React from 'react'
import ServicesComponent from '../components/ServicesComponent'

const HumanCategory = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <ServicesComponent 
          image="../../eyes.jpg"
          title="Eyes Disease"
          description="Identify potential eye conditions and get care recommendations."
          link="#"
        />

        <ServicesComponent 
          image="../../skin.jpg"
          title="Plant Pathology"
          description="Identify potential skin disease conditions and get care recommendations."
          link="#"
        />
         <ServicesComponent 
          image="../../doctor.jpg"
          title="Plant Pathology"
          description="Identify potential disease conditions by describing it and get care recommendations."
          link="#"
        />

      </div>
    </div>
  </section>
  )
}

export default HumanCategory