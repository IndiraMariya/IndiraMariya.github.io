import React from 'react';
import { FaPython, FaJava, FaGitAlt, FaBrain, FaTerminal, FaCalculator, FaAws, FaDocker } from 'react-icons/fa';
import { SiHuggingface, SiMysql, SiSqlite, SiC, SiArduino, SiCmake, SiJupyter, SiPytorch, SiTensorflow, SiNumpy, SiPandas, SiScikitlearn, SiNvidia, SiLinux, SiRaspberrypi } from 'react-icons/si';
import { MdComputer, MdMemory, MdSpeed } from 'react-icons/md';
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
        { icon: FaCalculator, label: 'MATLAB' },
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
        { icon: MdSpeed, label: 'SIMD' },
        { icon: FaTerminal, label: 'Slurm / PBS' },
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
        { icon: SiPandas, label: 'Pandas' },
        { icon: SiScikitlearn, label: 'Scikit-learn' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Hardware',
      skills: [
        { icon: FaGitAlt, label: 'Git' },
        { icon: SiCmake, label: 'CMake' },
        { icon: FaDocker, label: 'Docker' },
        { icon: FaAws, label: 'AWS' },
        { icon: FaTerminal, label: 'GDB' },
        { icon: FaTerminal, label: 'Valgrind' },
        { icon: SiJupyter, label: 'Jupyter' },
        { icon: SiSqlite, label: 'SQLite' },
        { icon: SiMysql, label: 'MySQL' },
        { icon: SiArduino, label: 'Arduino' },
        { icon: MdComputer, label: 'Jetson Nano' },
        { icon: SiRaspberrypi, label: 'Raspberry Pi' },
        { icon: MdComputer, label: 'Solidworks' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">technical skills</h2>
      <div className="skills-grid">
        {skillSections.map((section) => (
          <article key={section.id} className="skill-category">
            <h3 className="category-title">{section.title}</h3>
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
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;