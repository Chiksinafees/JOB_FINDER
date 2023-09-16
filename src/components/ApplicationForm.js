import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFormData } from "./Store/formStore";
import SuccessPage from "./SuccessPage";

const ApplicationForm = () => {

    const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { name, email, coverLetter, resume } = formData;

  const setName = (newName) => dispatch(updateFormData({ name: newName }));
  const setEmail = (newEmail) => dispatch(updateFormData({ email: newEmail }));

  const setCoverLetter = (newCoverLetter) =>
    dispatch(updateFormData({ coverLetter: newCoverLetter }));

  const setResume = (newResume) =>
    dispatch(updateFormData({ resume: newResume }));

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateFormData({ name, email, coverLetter, resume }));
    setFormSubmitted(true);
  };

  return (
    <div>
      {formSubmitted ? (
        <SuccessPage />
      ) : (
        <div className="max-w-lg mx-auto mt-8 bg-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Apply for the Job</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-800 font-medium mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-800 font-medium mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="coverLetter"
                className="block text-gray-800 font-medium mb-2"
              >
                Cover Letter Note:
              </label>
              <textarea
                id="coverLetter"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-gray-800 font-medium mb-2"
              >
                Resume (Optional):
              </label>
              <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResume(e.target.files[0])}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            >
              Apply
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;
