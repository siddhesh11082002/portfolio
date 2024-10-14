import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Projects.css';

const projectData = [
  {
    title: 'Codify',
    description: 'A coding platform like LeetCode with JWT authentication and real-time feedback using CodeMirror and WebSocket.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/siddhesh11082002/codify'
  },
  {
    title: 'Blood Bank System',
    description: 'A web app for managing blood resources with a responsive frontend and efficient data management.',
    technologies: ['PHP', 'MySQL'],
    link: 'https://github.com/siddhesh11082002/blood-bank-system'
  },
  // Add more projects as needed
];

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      projectsRef.current.querySelectorAll('.project-card'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid" ref={projectsRef}>
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
