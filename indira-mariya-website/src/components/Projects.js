import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 'omf',
      title: 'Project Terraforma',
      description: 'Matches Points of Interest to the same real-world place using similarity scoring + SLM reasoning.',
      tags: ['Python', 'SLM', 'Data Conflation'],
      githubUrl: 'https://github.com/project-terraforma/indira-place-conflation',
      demoUrl: null,
    },
    {
      id: 'arduino-contest',
      title: 'IEEE Arduino Contest',
      description: 'Tactile music visualizer that turns audio into haptic vibration via fixed-point FFT.',
      tags: ['Arduino', 'C', 'FFT', 'Haptics'],
      githubUrl: 'https://github.com/IndiraMariya/ArduinoContest',
      demoUrl: null,
    },
    {
      id: 'solar-flare',
      title: 'Solar Flare Prediction',
      description: 'Early-warning model for solar flares using PINNs on F10.7 Index and SDO imagery.',
      tags: ['PyTorch', 'PINNs', 'Astrophysics'],
      githubUrl: 'https://github.com/IndiraMariya/ASI',
      demoUrl: null,
    },
    {
      id: 'double-scoop',
      title: 'The Double Scoop',
      description: 'NLP app that detects media bias and surfaces balanced perspectives on the news.',
      tags: ['NLP', 'ML', 'Web App'],
      githubUrl: 'https://github.com/The-Double-Scoop/the-double-scoop',
      demoUrl: null,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">recent projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            {project.tags && project.tags.length > 0 && (
              <div className="tech-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            )}

            <div className="project-links">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source on GitHub`}
              >
                <FaGithub aria-hidden="true" /> Code
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                >
                  <FaExternalLinkAlt aria-hidden="true" /> Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
