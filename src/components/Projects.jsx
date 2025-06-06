import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'Food Blog: Crave culture',
      category: 'Web Development',
      image: '/crave.png',
      description: 'This is our recent full stack group project, people share memories of foods and culture. and i have 2 3 more full stack projects i have not deployed yet but available in the github',
      technologies: ['Typescript', 'React', 'CSS', 'JavaScript' ],
      link: '#'
    },
    {
      id: 2,
      title: 'Personal-Dashboard',
      category: 'Web Development',
      image: '/dashboard.png',
      description: 'A personal dashboard with live weather forecast, calenders, todo lists etc for daily usage. Also contains games, music player and quoets platform. ',
      technologies: ['Typescript', 'React', 'CSS', 'JavaScript' ],
      link: 'https://personal-dashboard-aswin-thapas-projects.vercel.app/'
    },
    {
      id: 6,
      title: 'Step It Up',
      category: 'Web Application',
      image: '/step.png',
      description: 'Complete responsive and functional e-commerce web app. ',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://aswin2058.github.io/Step-it-up/Step%20it%20up.html'
    },
    {
      id: 3,
      title: 'Art Gallery',
      category: 'Website',
      image: '/art.png',
      description: 'Very beautiful website of art galleries around the world. It was our very first project after learning HTML, CSS and JS.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://aswin2058.github.io/First-Project/main.html'
    },
    {
      id: 4,
      title: 'Simple personal portfolio',
      category: 'Website',
      image: '/portfolio.png',
      description: 'This was the first portfolio design I created using HTML, CSS and JS. Then I replaced it with my current using react + typescript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://aswin2058.github.io/My-Portpolio-/'
    },
    {
      id: 5,
      title: 'ChronoLux_OMart',
      category: 'Full Stack e-Commerce Web App',
      image: '/ChronoLux.png',
      description: 'This is a full stact e-commerce app as my C# final project. It has very good UI/UX design but it is not deployed yet just uploaded to github.',
      technologies: ['C#.Net', 'HTML', 'CSS', 'JSON', 'JS'],
      link: '#'
    }
  ];
  
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`project-card ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-category">{project.category}</div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={`${project.id}-${tech}`} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
