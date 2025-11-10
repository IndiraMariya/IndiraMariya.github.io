import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 'solar-flare',
      title: 'Solar Flare Prediction',
      description: "Predict solar flares to provide early warnings, helping to protect Earth's electrical infrastructure."
    },
    {
      id: 'double-scoop',
      title: 'The Double Scoop',
      description: 'An app made with machine learning to detects media bias, present a diverse range of American news articles to users.'
    },
    {
      id: 'lox-focus',
      title: 'LOX Focus Device',
      description: 'A smart lockbox designed to help you beat distractions by physically locking away your phone for a set period, so you can stay focused and productive without temptation.'
    },    
    {
      id: 'magic-mirror',
      title: 'Magic Mirror',
      description: 'A customized fork of the Magic Mirror project, this enhanced version offers a captivating smart mirror experience with personalized widgets.'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">recent projects</h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;