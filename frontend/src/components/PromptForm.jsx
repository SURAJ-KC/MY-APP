import React, { useState } from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import { useLoader } from '../loaderContext/LoaderContext';
import { CircleX } from 'lucide-react';

export default function PromptForm() {
  const [prompt, setPrompt] = useState('');
  const { loading, setLoading } = useLoader();
  const [response, setResponse] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('http://localhost:5000/prompt/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      navigate('disease_details', { state: data });

    } catch (error) {
      setResponse(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setPrompt("");
    setResponse("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 px-6 py-6 sm:px-8 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
        <label className="flex flex-col gap-2 relative">
          <span className="text-gray-700 font-medium">Describe the problem</span>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-1 block w-full h-12 p-4 pr-12 rounded border border-gray-300 shadow-sm focus:ring focus:ring-orange-200 focus:outline-none"
            required
          />
          {prompt && (
            <button
              type="button"
              onClick={clearAll}
              className="absolute right-3 top-[58%] transform -translate-y-1/2 text-gray-500 hover:text-red-500 mt-3"
              aria-label="Clear input"
            >
              <CircleX className="w-5 h-5" />
            </button>
          )}
        </label>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-800 disabled:opacity-50 transition w-28 text-sm font-semibold"
            disabled={loading || !prompt}
          >
            Submit
          </button>
        </div>
      </form>

      {response && (
        <div className="mt-4 p-4 text-sm bg-gray-100 text-red-600 border border-red-200 rounded">
          {response}
        </div>
      )}

      <Outlet />
    </div>
  );
}
