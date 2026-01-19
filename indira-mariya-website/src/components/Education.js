// import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    {
      school: 'University of California, Santa Cruz',
      degree: 'Bachelor of Science (B.S.) in Computer Science and Applied Math',
      period: 'Sept 2024 - Jun 2028',
      gpa: '3.95 GPA',
      coursesLabel: 'Relevant Courses',
      courses: [
        'Intro to Hacking',
        'Computer Systems and Assembly Language',
        'C Programming',
        'Data Structures and Algorithms',
        'Computer Architechture',
      ]
    },
    {
      school: 'Foothill Community College, Los Altos',
      degree: 'Certificate of Achievement in Software Development in Java',
      period: 'Jun 2021 - Aug 2024',
      coursesLabel: 'Relevant Courses',
      courses: [
        'Intermediate Java',
        'Elementary Statistics',
        'Intro to Linux',
        'JavaScript for Programmers',
        'Discrete Mathematics',
        'Bash Scripting'
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="education-title">education</h2>
      
      <div className="education-list">
        {educationData.map((edu, index) => (
          <article key={index} className="education-card">
            <div className="education-header">
              <h3 className="school-name">{edu.school}</h3>
              <time className="education-period" dateTime={edu.period}>
                {edu.period}
              </time>
            </div>

            <div className="education-body">
              <p className="degree">{edu.degree}</p>
              
              {edu.gpa && (
                <p className="gpa-info">{edu.gpa}</p>
              )}

              <div className="courses-section">
                <span className="courses-label">{edu.coursesLabel}:</span>
                <p className="courses-list">
                  {edu.courses.join(', ')}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;