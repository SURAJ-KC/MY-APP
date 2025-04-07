import React, { useRef, useEffect, useState } from "react";
import Showcase from "../components/Showcase";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <Showcase />
          </div>
          <div>
            <Services />
          </div>
          <div>
            <HowItWorks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
