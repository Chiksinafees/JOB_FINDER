import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs, selectJob } from "./Store/jobStore";
import { useNavigate } from "react-router-dom";

const JobListings = ({ selectedLanguage }) => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.jobs);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        if (selectedLanguage) {
          const appId = "df44e1ce";
          const appKey = "1551e6209812e21ec6ed75aa3254f8ab";
          const apiUrl = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${appKey}&results_per_page=10&what=${selectedLanguage}`;

          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error(
              `Error fetching job listings. Status: ${response.status}, Text: ${response.statusText}`
            );
          }

          const data = await response.json();
          console.log(data.results);
          dispatch(setJobs(data.results));
        }
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };

    fetchJobs();
  }, [selectedLanguage, dispatch]);

  const handleJobSelect = (job) => {
    dispatch(selectJob(job));
    navigate(`/job/${job.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h2 className="text-5xl font-bold font-serif text-center mb-4">
          Job Listings for {selectedLanguage}
        </h2>
        <ul>
          {jobs.map((job) => (
            <li
              key={job.id}
              className="mb-4 border p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-600">{job.company.display_name}</p>
              <button
                onClick={() => handleJobSelect(job)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mt-4"
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobListings;
