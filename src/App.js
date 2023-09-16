import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import 'Routes'
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import LoginSignIn from "./components/LoginSignIn";
import JobListing from "./components/JobListing";
import JobDetails from "./components/JobDetails";
import ApplicationForm from "./components/ApplicationForm";
import SuccessPage from "./components/SuccessPage";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageSelected = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/Landing"
            element={
              <LandingPage onLanguageSelected={handleLanguageSelected} />
            }
          />
          <Route path="/" element={<LoginSignIn />} />
          <Route
            path="/jobs"
            element={
              selectedLanguage && (
                <JobListing selectedLanguage={selectedLanguage} />
              )
            }
          />
          <Route path="/job/:jobId" element={<JobDetails />} />
          <Route path="/apply/:jobId" element={<ApplicationForm />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>{" "}
    </div>
  );
}

export default App;
