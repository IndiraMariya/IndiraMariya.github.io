import React from 'react';
import ProjectTitle from '../ProjectTitle.js';
import Project from './Project';

function Projects() {
  const projects = [
    {
      title: "Solar Flare Prediction",
      description: "Predict solar flares to provide early warnings, helping to protect Earth’s electrical infrastructure."
    },
    {
      title: "The Double Scoop",
      description: "An app made with machine learning to detects media bias, present a diverse range of American news articles to users."
    },
    {
      title: "LOX Focus Device",
      description: "A smart lockbox designed to help you beat distractions by physically locking away your phone for a set period, so you can stay focused and productive without temptation."
    },    
    {
      title: "Magic Mirror",
      description: "A customized fork of the Magic Mirror project, this enhanced version offers a captivating smart mirror experience with personalized widgets."
    },
  ];

  return (
    <section id="projects">
      <ProjectTitle />
      {projects.map((proj, idx) => (
        <Project key={idx} title={proj.title} description={proj.description} />
      ))}
    </section>
  );
}

export default Projects;
