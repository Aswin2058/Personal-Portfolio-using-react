
import React, { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const skills = {
    frontend: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
      { name: 'Bootstrap', level: 90 }
    ],
    backend: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 75 },
      { name: 'MongoDB', level: 65 },
      { name: 'SQL', level: 80 },
    ],
    tools: [
      { name: 'Git', level: 80 },
      { name: 'Webpack', level: 60 },
      { name: 'Figma', level: 65 },
      { name: 'VS Code', level: 90 },
      { name: 'Terminal', level: 80 }
    ]
  };
  
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title fade-in">My Skills</h2>
        <div className="skills-content">
          <div className="skills-tabs fade-in">
            <button 
              className={`tab-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
              onClick={() => setActiveCategory('frontend')}
            >
              Frontend
            </button>
            <button 
              className={`tab-btn ${activeCategory === 'backend' ? 'active' : ''}`}
              onClick={() => setActiveCategory('backend')}
            >
              Backend
            </button>
            <button 
              className={`tab-btn ${activeCategory === 'tools' ? 'active' : ''}`}
              onClick={() => setActiveCategory('tools')}
            >
              Tools
            </button>
          </div>
          
          <div className="skills-grid fade-in">
            {skills[activeCategory].map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="skills-summary fade-in">
            <div className="summary-card">
              <div className="summary-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3>Self-learning</h3>
              <p>In addition to my college coursework, I actively pursue continuous learning through online courses, technical documentation, and hands-on projects.</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
              </div>
              <h3>Fast Learner</h3>
              <p>Quickly adapt to new technologies and programming languages as needed.</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
              </div>
              <h3>Problem Solver</h3>
              <p>Passionate about finding efficient solutions to challenging programming problems.</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 100-6 3 3 0 000 6zM9 12a3 3 0 100-6 3 3 0 000 6zM4.5 19.5V18a4.5 4.5 0 014.5-4.5h6a4.5 4.5 0 014.5 4.5v1.5" />
              </svg>
              </div>
              <h3>Team Player</h3>
              <p>Enjoys working collaboratively in diverse teams, contributing ideas, supporting peers, and achieving shared goals through effective communication and cooperation.</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223a9 9 0 0114.097-2.383M20.02 15.777a9 9 0 01-14.097 2.383M4.5 9V3h6M19.5 15v6h-6" />
              </svg>
              </div>
              <h3>Adaptable</h3>
              <p>Thrives in dynamic environments by quickly adjusting to new tools, technologies, and team workflows while maintaining productivity and focus.</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75L18.75 6M15 9.75L12.5 4.5 6 9l5.25 2.5M15 9.75l-2.25 3M12.75 12.75L9 15.75v2.25h2.25l3.75-3.75m-6 3L3 21" />
              </svg>
              </div>
              <h3>Self-Motivated</h3>
              <p>Demonstrates a strong drive to learn and improve independently, consistently taking initiative to expand knowledge and tackle challenges head-on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
