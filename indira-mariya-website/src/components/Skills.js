import React from 'react';
import { FaPython, FaJava, FaGitAlt, FaBrain, FaTerminal, FaAws, FaDocker } from 'react-icons/fa';
import { SiHuggingface, SiC, SiCmake, SiPytorch, SiTensorflow, SiNumpy, SiNvidia, SiLinux } from 'react-icons/si';
import { MdMemory, MdSpeed } from 'react-icons/md';
import './Skills.css';

function Skills() {
  const skillSections = [
    {
      id: 'languages',
      title: 'Languages',
      skills: [
        { icon: SiC, label: 'C / C++' },
        { icon: FaPython, label: 'Python' },
        { icon: FaJava, label: 'Java' },
        { icon: FaTerminal, label: 'Bash' },
      ],
    },
    {
      id: 'hpc',
      title: 'HPC & Parallel',
      skills: [
        { icon: SiNvidia, label: 'CUDA' },
        { icon: MdMemory, label: 'OpenMP' },
        { icon: MdSpeed, label: 'MPI' },
        { icon: FaTerminal, label: 'Slurm' },
        { icon: SiLinux, label: 'Linux' },
      ],
    },
    {
      id: 'ai-ml',
      title: 'AI / ML',
      skills: [
        { icon: SiPytorch, label: 'PyTorch' },
        { icon: SiTensorflow, label: 'TensorFlow' },
        { icon: FaBrain, label: 'Triton' },
        { icon: SiHuggingface, label: 'Hugging Face' },
        { icon: SiNumpy, label: 'NumPy' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools',
      skills: [
        { icon: FaGitAlt, label: 'Git' },
        { icon: SiCmake, label: 'CMake' },
        { icon: FaDocker, label: 'Docker' },
        { icon: FaAws, label: 'AWS' },
        { icon: FaTerminal, label: 'GDB' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">technical skills</h2>

      <div className="skills-rows">
        {skillSections.map((section) => (
          <div key={section.id} className="skill-row">
            <div className="skill-row-label">
              <span className="category-title">{section.title}</span>
              <span className="skill-count">{section.skills.length}</span>
            </div>
            <div className="skills-pills">
              {section.skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <span key={skill.label} className="skill-pill">
                    <IconComponent className="pill-icon" aria-hidden="true" />
                    {skill.label}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
