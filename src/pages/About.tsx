import React from 'react';
import './About.css';
import profilePicture from '../assets/images/profilepic.png';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-header">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <h1>Juan Luis Ramirez</h1>
        <p>Software Developer & AI Enthusiast</p>
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
        Passionate software developer with an entrepreneurial mindset, dedicated to using technology to create impactful solutions that make a difference. With a strong foundation in IT and a current focus on Artificial Intelligence, I’m driven by the challenge of solving complex problems and turning ideas into real-world innovations. 
          I am always eager to learn new skills and take on challenging projects.
        </p>
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>JavaScript, TypeScript, React, Node.js</li>
          <li>Python, Django, Flask</li>
          <li>Machine Learning, Data Science</li>
          <li>HTML, CSS, SASS</li>
          <li>Git, Docker, CI/CD</li>
        </ul>
        <h2>Experience</h2>
        <p>
        ⭐ HubSpot Developer at SweetasTravels: Enhancing digital experiences through SEO, front-end development, and data-driven analytics to elevate user engagement.

⭐Community Manager at Investor Community X: Fostering a dynamic community for students and investors by curating educational content, organizing events, and providing valuable support to help members succeed in their investment journey.

⭐ Open Source Developer at Hack for LA: Contributing to open-source projects for social good, honing project management, agile development, and collaborative coding skills.
        </p>
      </div>
     
    </div>
  );
};

export default About;