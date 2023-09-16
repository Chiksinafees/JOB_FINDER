import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ onLanguageSelected }) => {
  const [programmingLanguage, setProgrammingLanguage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProgrammingLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    onLanguageSelected(programmingLanguage);
    navigate("/jobs");
    setProgrammingLanguage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-300 p-6 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-4xl font-serif font-bold mb-4 text-center ">
          Job Search Portal
        </h1>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="programmingLanguage"
            className="text-gray-800 text-2xl font-serif mb-4 block"
          >
            Enter a programming language:
          </label>
          <div className="flex">
            <input
              type="text"
              id="programmingLanguage"
              value={programmingLanguage}
              onChange={handleChange}
              className="w-full font-bold text-2xl px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 ml-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            >
              Search Jobs
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
