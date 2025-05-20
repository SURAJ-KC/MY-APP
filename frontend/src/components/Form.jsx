import React, { useState, useRef } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { useLoader } from "../loaderContext/LoaderContext";

const Form = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { setLoading } = useLoader();

  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isResponse, setIsResponse] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);
    formData.append("category", category);

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/image_upload/", {
        method: "POST",
        body: formData,
      });

      const res = await response.json();
      setIsResponse(res);
      handleRemoveImage();

      navigate(`disease_details`, { state: res });
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isResponse && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-orange-300 shadow-lg p-6 sm:p-8 rounded-lg w-full max-w-xl mx-auto mt-8 mb-8 flex flex-col justify-between min-h-[600px] sm:min-h-[60 0px]"
        >
          <div>
            <h2 className="text-2xl font-semibold text-orange-600 mb-6 text-center">
              Upload {category.split("_")[1].toString().toUpperCase()} Image
            </h2>

            <div className="mb-4">
              <label className="block text-orange-700 font-medium mb-4">
                Select Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-orange-100 file:text-orange-700
                  hover:file:bg-orange-200"
              />
            </div>

            {previewUrl && (
              <div className="mb-4">
                <p className="text-sm text-orange-600 mb-2">Image Preview:</p>
                <div className="w-full h-52 sm:h-60 border border-orange-200 rounded overflow-hidden flex items-center justify-center bg-orange-50">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="text-sm text-red-500 hover:underline mt-2"
                >
                  Remove Image
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={!image}
            className={`w-full py-2 px-4 rounded font-semibold transition 
              ${image
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "bg-orange-200 text-white cursor-not-allowed"
              }`}
          >
            Submit
          </button>
        </form>
      )}
      <Outlet />
    </>
  );
};

export default Form;
