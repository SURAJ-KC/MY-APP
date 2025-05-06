import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Particles from "./components/Particles";
import { useLoader } from "./loaderContext/LoaderContext";
import { useEffect } from "react";

const App = () => {
  const { setLoading } = useLoader();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-gray-200">
        <Particles
          particleColors={["#000000", "#000000"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
