import './Experience.css';

function Experience() {
  const experienceData = [
    {
      role: 'Research Intern',
      org: 'Overture Maps Foundation',
      period: 'Sep 2025 – Dec 2025',
      description: 'Academic partnership through a UCSC course. Built a scalable data conflation model using SLMs and fuzzy matching to resolve location edge cases, improving accuracy by 20%. Benchmarked 5+ SLM backends on cost and accuracy.',
    },
    {
      role: 'R&D Intern',
      org: 'Nice Actimize',
      period: 'Jun 2025 – Sep 2025',
      description: 'Engineered high-volume data pipelines and schemas for audit-log storage, and shipped an agentic AI app via REST API that cut manual log review by ~20 min per case.',
    },
    {
      role: 'Math Tutor',
      org: 'Mathnasium',
      period: 'Jul 2024 – Sep 2024',
      description: 'Tutored K–10 students from basic arithmetic through pre-calculus, diagnosing individual learning gaps and mentoring toward measurable academic gains.',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">experience</h2>

      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <article key={index} className="experience-card">
            <div className="experience-header">
              <h3 className="role-name">{exp.role}</h3>
              <span className="org-name">{exp.org}</span>
              <time className="experience-period" dateTime={exp.period}>
                {exp.period}
              </time>
            </div>

            <p className="experience-description">{exp.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
