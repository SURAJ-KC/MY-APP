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
          particleColors={["#e84105"]}
          particleCount={600}
          particleSpread={20}
          speed={0}
          particleBaseSize={300}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>

      <header>
        <Navbar />
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
