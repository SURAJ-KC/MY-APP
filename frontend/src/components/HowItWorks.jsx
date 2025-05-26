import React from "react";
import { Bot, BriefcaseMedical, FileChartLine, FileCheck } from "lucide-react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-300">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <h4 className="text-3xl font-bold text-center mb-12">How it Works</h4>
        <div className="flex flex-col gap-8">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#023047", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #023047",
              }}
              
              iconStyle={{ background: "#023047", color: "#fff" }}
              icon={<FileChartLine />}
            >
              <h3 className="vertical-timeline-element-title">
                Step 1
              </h3>
              <p>
                Upload your medical image or symptom information through our secure platform.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
               contentStyle={{ background: "#023047", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #023047",
              }}
              
              iconStyle={{ background: "#023047", color: "#fff" }}
              icon={<Bot />}
            >
              <h3 className="vertical-timeline-element-title">Step 2</h3>
              
              <p>
                Our AI processes your data to detect symptoms baesd on input and identify diseases and conditions.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#023047", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #023047",
              }}

              iconStyle={{ background: "#023047", color: "#fff" }}
              icon={<FileCheck />}
            >
              <h3 className="vertical-timeline-element-title">Step 3</h3>
            
              <p>Receive a comprehensive health report with insights including the disease cure and prescriptions.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
                 contentStyle={{ background: "#023047", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #023047",
              }}
              iconStyle={{ background: "#023047", color: "#fff" }}
              icon={<BriefcaseMedical />}
            >
              <h3 className="vertical-timeline-element-title">Step 4</h3>
    
              <p>Connect with medical professionals for personalized advice.</p>
            </VerticalTimelineElement>
          
          </VerticalTimeline>
          {/* {[
          {
            icon: <FileChartLine/>,
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
            <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center border-2 border-orange-500 justify-center text-3xl">
              {step.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))} */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
