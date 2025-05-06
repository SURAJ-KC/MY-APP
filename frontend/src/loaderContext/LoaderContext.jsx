import React, { createContext, useState, useContext } from "react";
import Loader from "../components/Loader";


const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
          <Loader />
        </div>
      )}
    </LoaderContext.Provider>
  );
};

export default LoaderContext;
