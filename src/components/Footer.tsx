import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Juan Luis Ramirez 🖳</h4>
          <p>Software Developer & AI Enthusiast</p>
         
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📧 <a href="mailto:juanramirezrueda11@gmail.com">juanramirezrueda11@gmail.com</a></p>
          <p>📍 Auckland, New Zealand</p>
        </div>

        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/juan-luis-ramirez/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/juanramirezwebdev" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.instagram.com/artist_lifeliver/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Juan Luis Ramirez. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;