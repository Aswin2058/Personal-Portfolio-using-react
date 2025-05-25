
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        <div className="about-content">
          <div className="about-image fade-in">
            <div className="image-container">
              <img src="/IMG_1062.JPG" alt="Portrait" />
              <div className="image-shape"></div>
            </div>
          </div>
          <div className="about-text">
            <p className="fade-in">
              Hello! I'm Aswin Thapa, a passionate programming student with a love for creating elegant solutions to complex problems. 
              My journey in the world of coding started three years ago, and I've been on an exciting learning adventure ever since.
            </p>
            <p className="fade-in">
              I specialize in front-end development with a focus on creating interactive, responsive, and user-friendly web applications. 
              I'm constantly exploring new technologies and frameworks to expand my skillset and stay up-to-date with industry trends.
            </p>
            <p className="fade-in">
              I am currently pursuing a diploma in Computer Programming at Robertson College in Calgary, AB. I am eager to apply the 
              knowledge and experience I have gained during my studies in a practical, real-world setting.
            </p>
            <div className="about-highlights fade-in">
              <div className="highlight">
                <span className="highlight-number">3+</span>
                <span className="highlight-text">Years Learning</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">10+</span>
                <span className="highlight-text">Projects</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">5+</span>
                <span className="highlight-text">Certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
