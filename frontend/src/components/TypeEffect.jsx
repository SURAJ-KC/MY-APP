import { useEffect } from "react";
import React from "react";
import Typed from 'typed.js';


const TypingEffect = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
            "Early Detection Saves Lives.",
            "Manage your symptoms with AI.",
            "AI-Powered Diagnosis.",
            "Fast and Reliable Results.",
            "Comprehensive Health Screening.",
          ],
          typeSpeed: 60,
          loop: true,
          loopCount: Infinity,
          backSpeed: 20,
      });
  
      return () => {
        typed.destroy();
      };
      
    }, []);
  
    return (
      <div className="text-xl font-bold">
        <span ref={el} />
      </div>
    );
};

export default TypingEffect;
