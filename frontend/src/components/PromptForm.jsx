import React, { useState } from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import { useLoader } from '../loaderContext/LoaderContext';
import { CircleX } from 'lucide-react';

export default function PromptForm() {
  const [prompt, setPrompt] = useState('');
  const { loading,setLoading } = useLoader();
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
    <div className="w-[800px] mt-10 p-6 bg-white rounded shadow">
  <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-6">
    <label className="flex flex-col gap-4 relative">
      <span className="text-gray-700">Describe the problem</span>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="mt-1 block w-full h-10 p-4 pr-10 rounded border shadow-sm focus:ring focus:ring-indigo-200"
        required
      />
      {prompt && (
        <button
          type="button"
          onClick={clearAll}
          className="absolute right-3 top-[52px] text-gray-500 hover:text-red-500"
          aria-label="Clear input"
        >
          <CircleX />
        </button>
      )}
    </label>
    <div className="flex flex-col items-center">
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-800 disabled:opacity-50 w-24"
        disabled={loading}
      >
        Submit
      </button>
    </div>
  </form>

  {response && (
    <div className="mt-4 p-3 text-sm bg-gray-100 rounded">
      {response}
    </div>
  )}

  <Outlet />
</div>
  );
}
