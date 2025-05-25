
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <p className="footer-tagline">Crafting digital experiences with code.</p>
          </div>
          <div className="footer-links">
            <div className="footer-nav">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-nav">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://github.com/Aswin2058">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/aswin-thapa2001/">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/aswinthapa57/">Instagram</a></li>
                <li><a href="https://www.facebook.com/share/16BKYhbQSK/?mibextid=wwXIfr">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">&copy; {currentYear} Aswin Thapa Portfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
