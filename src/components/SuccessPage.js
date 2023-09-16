import React from "react";
import { useSelector } from "react-redux";

const SuccessPage = () => {
  const formData = useSelector((state) => state.form);

  const { name, email, coverLetter, resume } = formData;

  return (
    <div className="max-w-lg mx-auto mt-8 bg-gray-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">
        Application Submitted
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Applicant Information:</h3>
        <p className="text-gray-700">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Cover Letter Note:</span>{" "}
          {coverLetter}
        </p>
        {resume && (
          <p className="text-gray-700">
            <span className="font-semibold">Resume:</span> {resume.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default SuccessPage;
