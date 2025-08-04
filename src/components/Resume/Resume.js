import React from 'react';
import './Resume.css';

const Resume = () => {
  // Static resume data for the portfolio
  const resumeData = "This is a static React portfolio application. The resume data would typically be fetched from a backend API, but this version has been converted to work statically without a backend server.";

  return (
    <section className="resume">
      <div className="resume-card">
        <h2>Resume</h2>
        <p>{resumeData}</p>
      </div>
    </section>
  );
};

export default Resume;
