import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <div className="profile-header">
          <h1>D. ASHWIN</h1>
          <div className="contact-info">
            <p>📧 ashwin231193@gmail.com</p>
            <p>📍 Blk 504 #09-2644, Ang Mo kio Avenue 8, Singapore-560504</p>
            <p>📞 +65-93549767</p>
          </div>
        </div>
        
        <div className="professional-summary">
          <h2>Professional Summary</h2>
          <div className="summary-content">
            <ul>
              <li>8+ years of experience in Core Java, Java/J2EE, Servlet, JSP, JSON, JavaScript, HTML, CSS, Maven, Spring Boot, Rest API, KAFKA, DevOps</li>
              <li>Good understanding of Object Oriented Programming and databases</li>
              <li>Hands-on experience in creating Use Case diagrams and Detail design documents</li>
              <li>Highly adaptable to working in complex technical situations with superb work ethic</li>
              <li>Excellent organizational skills and quick adaptability to newly evolving technologies</li>
              <li>Good understanding of SDLC such as Agile and Waterfall</li>
              <li>Expert in version control tools like GIT and SVN, build tools like Maven and Gradle, continuous integration tools like Jenkins, and issue-tracking platform like JIRA</li>
            </ul>
          </div>
        </div>

        <div className="education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>B.Tech (IT)</h3>
            <p>Dr. Sivanthi Aditanar College of Engineering</p>
            <p>May 2015 (70%)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;