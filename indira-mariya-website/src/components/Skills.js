import React from 'react';
import AsciiImage from './ascii_image.js';
import star from '../images/star.png';
import { FaPython, FaJava, FaJsSquare, FaGitAlt, FaDatabase, FaBrain, FaTerminal, FaCalculator, FaAws } from 'react-icons/fa';
import { SiAwslambda, SiCplusplus, SiHuggingface, SiMysql, SiSqlite} from 'react-icons/si';

import { SiRiscv, SiC, SiHtml5, SiCss3, SiSvelte, SiTailwindcss, SiTensorflow, SiJupyter, SiReact, SiArduino } from 'react-icons/si';
import { MdComputer } from 'react-icons/md';
import './Skills.css';

function Skills() {
  const skillSections = [
    {
      id: 'programming',
      title: 'Languages',
      skills: [
        { icon: FaPython, label: 'Python', ariaLabel: 'Python programming language' },
        { icon: SiC, label: 'C/C++', ariaLabel: 'C programming language' },
        { icon: FaJava, label: 'Java', ariaLabel: 'Java programming language' },
        { icon: SiRiscv, label: 'RISC-V Assembly', ariaLabel: 'RISC-V Assembly language' },
        { icon: FaTerminal, label: 'Bash', ariaLabel: 'Bash scripting' },
        { icon: SiMysql, label: 'SQL', ariaLabel: 'SQL' },
        { icon: FaCalculator, label: 'MATLAB', ariaLabel: 'MATLAB' },
      ],
    },
    // {
    //   id: 'web-dev',
    //   title: 'Web Dev',
    //   skills: [
    //     { icon: FaJsSquare, label: 'JavaScript', ariaLabel: 'JavaScript programming language' },
    //     { icon: SiHtml5, label: 'HTML', ariaLabel: 'HTML markup language' },
    //     { icon: SiCss3, label: 'CSS', ariaLabel: 'CSS styling' },
    //     { icon: SiSvelte, label: 'Svelte', ariaLabel: 'Svelte framework' },
    //     { icon: SiTailwindcss, label: 'Tailwind', ariaLabel: 'Tailwind CSS framework' },
    //     { icon: SiReact, label: 'React', ariaLabel: 'React JS framework' },
    //   ],
    // },
    {
      id: 'tools',
      title: 'Tools',
      skills: [
        { icon: FaGitAlt, label: 'Git', ariaLabel: 'Git version control' },
        { icon: FaAws, label: 'AWS', ariaLabel: 'AWS' },
        { icon: SiSqlite, label: 'SQLite', ariaLabel: 'SQLite' },
        { icon: MdComputer, label: 'Jetson Nano', ariaLabel: 'NVIDIA Jetson Nano' },
        { icon: SiArduino, label: 'Arduino', ariaLabel: 'Arduino Board' },
        { icon: MdComputer, label: 'Solidworks', ariaLabel: 'Solidworks CAD software' },
      ],
    },
    {
      id: 'ai-ml',
      title: 'AI / ML',
      skills: [
        { icon: SiHuggingface, label: 'Hugging Face', ariaLabel: 'Natural Language Processing' },
        { icon: SiTensorflow, label: 'TensorFlow', ariaLabel: 'TensorFlow machine learning framework' },
        { icon: FaPython, label: 'NumPy', ariaLabel: 'NumPy library' },
        { icon: FaPython, label: 'Sci-Kit Learn', ariaLabel: 'Scikit-learn machine learning library' },
        { icon: FaPython, label: 'Pandas', ariaLabel: 'Pandas data analysis library' },

      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">
        technical skills
        {/* <AsciiImage file={star} id="star_img" /> */}
      </h2>
      <div className="skills-grid">
        {skillSections.map((section) => (
          <article key={section.id} className="skill-category">
            <h3 className="category-title">{section.title}</h3>
            
            <ul className="skills-list" role="list">
              {section.skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <li key={skill.label} className="skill-item">
                    <span className="skill-icon" aria-hidden="true">
                      <IconComponent />
                    </span>
                    <span className="skill-label" aria-label={skill.ariaLabel}>
                      {skill.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;