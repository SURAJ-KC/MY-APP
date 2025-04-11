import React from 'react'
import { Bot, BriefcaseMedical, FileChartLine, FileCheck } from 'lucide-react'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-300">
    <div className="container mx-auto px-4 flex flex-col justify-center items-center">
      <h4 className="text-3xl font-bold text-center mb-12">HOW IT WORKS</h4>
      <div className="flex flex-col gap-8">
        {[
          {
            icon: <FileChartLine />,
            title: "Submit Data",
            desc: "Upload your medical image or symptom information through our secure platform.",
          },
          {
            icon: <Bot/>,
            title: "AI Analysis",
            desc: "Our AI processes your data to detect diseases and conditions.",
          },
          {
            icon: <FileCheck />,
            title: "Get Results",
            desc: "Receive a comprehensive health report with insights.",
          },
          {
            icon: <BriefcaseMedical />,
            title: "Consult Experts",
            desc: "Connect with medical professionals for personalized advice.",
          },
        ].map((step, index) => (
          <div key={index} className="flex items-center space-x-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl">
              {step.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default HowItWorks