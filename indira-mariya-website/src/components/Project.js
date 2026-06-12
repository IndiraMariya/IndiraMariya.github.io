import React from 'react';
import './Projects.css';

function Projects() {
  
  const projects = [
    {
      id: 'omf',
      title: 'Project Terraforma',
      date: 'Jan 2025',
      description: 'Determine whether two Points of Interest (POI) refer to the same physical place using deterministic similarity scoring with SLM-based structured reasoning.',
      githubUrl: 'https://github.com/project-terraforma/indira-place-conflation'
    },    
    {
      id: 'arduino-contest',
      title: 'IEEE Arduino Contest',
      date: 'Nov 2024',
      description: 'Arduino-based Tactile Music Visualizer: A real-time audio-to-vibration interface for accessibility. Uses fixed-point FFT to map frequency bins (bass, sub-bass, treble) to motor haptics, enabling a physical experience of sound.',
      githubUrl: 'https://github.com/IndiraMariya/ArduinoContest'
    },
    {
      id: 'solar-flare',
      title: 'Solar Flare Prediction',
      date: 'Mar 2024',
      description: "Predict solar flares to provide early warnings, helping to protect Earth's electrical infrastructure. Utilizes PINNs trained on F10.7 Index and satellite imagery from the Solar Dynamics Observatory.",
      githubUrl: 'https://github.com/IndiraMariya/ASI'
    },
    {
      id: 'double-scoop',
      title: 'The Double Scoop',
      date: 'Oct 2023',
      description: 'An app leveraging NLP techniques to detect media bias in news articles, presenting users with a diverse range of topics and perspectives for a more balanced view',
      githubUrl: 'https://github.com/The-Double-Scoop/the-double-scoop'
    },
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">recent projects</h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <article 
            key={project.id} 
            className="project-card"
            onClick={() => handleCardClick(project.githubUrl)}
            style={{ cursor: 'pointer' }}
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-date">{project.date}</span>
            </div>
            <p className="project-description">{project.description}</p>
            
            <div className="learn-more">
              <span>Learn more</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;