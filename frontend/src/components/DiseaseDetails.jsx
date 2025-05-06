import React from "react";
import { useLocation } from "react-router-dom";

const DiseaseDetails = () => {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="text-center text-orange-600 mt-10">
        <p>No disease data available. Please submit an image first.</p>
      </div>
    );
  }

  const {
    disease_name,
    overview,
    cause,
    cure,
    precautions,
    medications,
    consultations,
  } = state;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border border-orange-200 mt-12 mb-12">
      <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">
        Disease Information
      </h1>

      <div className="space-y-4 text-gray-800">
        <Detail label="Disease Name" value={disease_name} />
        <Detail label="Overview of Disease" value={overview} />
        <Detail label="How / Why it happens" value={cause} />
        <Detail label="Cure" value={cure} />
        <Detail label="Precautions" value={precautions} />
        <Detail label="Medications" value={medications} />
        <Detail label="Consultations" value={consultations} />
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div>
    <h2 className="text-xl font-semibold text-orange-700">{label}</h2>
    <p className="text-md mt-1">{value || "Information not available"}</p>
  </div>
);

export default DiseaseDetails;
