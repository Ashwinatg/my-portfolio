import React, { useState, useEffect } from 'react';
import './Resume.css';

const Resume = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetch('/api/resume')
      .then(res => res.json())
      .then(data => setResumeData(data.message));
  }, []);

  return (
    <section className="resume">
      <div className="resume-card">
        <h2>Resume</h2>
        <p>{resumeData || 'Loading...'}</p>
      </div>
    </section>
  );
};

export default Resume;
