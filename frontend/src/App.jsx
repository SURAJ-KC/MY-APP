import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Showcase from "./components/Showcase";
import HowItWorks from "./components/HowItWorks";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <header className="flex-none z-10 shadow-md">
          <Navbar />
        </header>

        <main className="flex-grow overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default App;
