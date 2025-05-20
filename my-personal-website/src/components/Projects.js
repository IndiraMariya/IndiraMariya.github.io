import React from 'react';
import ProjectTitle from '../ProjectTitle.js';
import Project from './Project';

function Projects() {
  const projects = [
    {
      title: "The Double Scoop",
      description: "An app made with machine learning to detects media bias, present a diverse range of American news articles to users."
    },
    {
      title: "Magic Mirror",
      description: "A customized fork of the Magic Mirror project, this enhanced version offers a captivating smart mirror experience with personalized widgets."
    },
    {
      title: "Shopping-Cart Detection",
      description: "Detect ghosted shopping carts, leveraging Jetson Nano and real-time image detection for proactive e-commerce optimization."
    },
    {
      title: "Solar Flare Prediction",
      description: "Detect ghosted shopping carts, leveraging Jetson Nano and real-time image detection for proactive e-commerce optimization."
    },
    {
      title: "LOX",
      description: "Detect ghosted shopping carts, leveraging Jetson Nano and real-time image detection for proactive e-commerce optimization."
    }
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
