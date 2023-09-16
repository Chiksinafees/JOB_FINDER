import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  const jobDetails = useSelector((state) => {
    const selectedJob = state.job.selectedJob;
    return selectedJob && selectedJob.id === jobId ? selectedJob : null;
  });
  const navigate = useNavigate();

  useEffect(() => {}, [jobId]);

  const ShowFormHandler = () => {
    navigate(`/apply/${jobId}`);
  };

  return (
    <div className="bg-blue-900 text-white min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-serif">
      {jobDetails ? (
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">
            {jobDetails.title}
          </h2>
          <p className="text-2xl font-bold text-gray-800 mb-2">Company:</p>
          <p className="text-gray-600 text-xl ml-8">
            {jobDetails.company.display_name}
          </p>
          <div className="mt-6">
            <p className="text-2xl font-semibold mb-2 text-gray-800">
              Location:
            </p>
            <p className="text-gray-800 text-xl">
              {jobDetails.location.display_name}
            </p>
          </div>
          <div className="mt-6">
            <p className="text-2xl font-semibold text-gray-800 mb-2">
              Salary Range:
            </p>
            <p className="text-gray-800 text-xl">
              ${jobDetails.salary_min} - ${jobDetails.salary_max}
            </p>
          </div>
          <div className="mt-6">
            <p className="text-2xl font-semibold text-gray-800 mb-6">
              Description:
            </p>
            <p className="text-gray-800 text-xl">{jobDetails.description}</p>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={ShowFormHandler}
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold"
            >
              Apply for this job
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-200">Loading job details...</div>
      )}
    </div>
  );
};

export default JobDetails;
