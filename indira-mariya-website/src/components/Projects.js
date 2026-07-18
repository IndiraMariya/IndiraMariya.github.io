import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 'omf',
      title: 'Project Terraforma',
      description: 'Determine whether two Points of Interest (POI) refer to the same physical place using deterministic similarity scoring with SLM-based structured reasoning.',
      tags: ['Python', 'SLM', 'Data Conflation'],
      githubUrl: 'https://github.com/project-terraforma/indira-place-conflation',
      demoUrl: null,
    },
    {
      id: 'arduino-contest',
      title: 'IEEE Arduino Contest',
      description: 'Arduino-based Tactile Music Visualizer: A real-time audio-to-vibration interface for accessibility. Uses fixed-point FFT to map frequency bins (bass, sub-bass, treble) to motor haptics, enabling a physical experience of sound.',
      tags: ['Arduino', 'C', 'FFT', 'Haptics'],
      githubUrl: 'https://github.com/IndiraMariya/ArduinoContest',
      demoUrl: null,
    },
    {
      id: 'solar-flare',
      title: 'Solar Flare Prediction',
      description: "Predict solar flares to provide early warnings, helping to protect Earth's electrical infrastructure. Utilizes PINNs trained on the F10.7 Index and satellite imagery from the Solar Dynamics Observatory.",
      tags: ['PyTorch', 'PINNs', 'Astrophysics'],
      githubUrl: 'https://github.com/IndiraMariya/ASI',
      demoUrl: null,
    },
    {
      id: 'double-scoop',
      title: 'The Double Scoop',
      description: 'An app leveraging NLP techniques to detect media bias in news articles, presenting users with a diverse range of topics and perspectives for a more balanced view.',
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
