import React, { useState, useEffect } from 'react';

const Resume = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetch('/api/resume')
      .then(res => res.json())
      .then(data => setResumeData(data.message));
  }, []);

  return (
    <section>
      <h2>Resume</h2>
      <p>{resumeData}</p>
    </section>
  );
};

export default Resume;
