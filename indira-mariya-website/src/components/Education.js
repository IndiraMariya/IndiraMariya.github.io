import './Education.css';

function Education() {
  const educationData = [
    {
      school: 'UC Santa Cruz',
      degree: 'B.S. Computer Science & Applied Mathematics',
      period: 'Sept 2024 – Jun 2028',
      gpa: '3.95 GPA',
      coursesLabel: 'Key coursework',
      courses: [
        'GPU Programming',
        'Computer Architecture',
        'Analysis of Algorithms',
        'Data Structures',
        'Advanced Math Methods',
        '...'
      ]
    },
    {
      school: 'Foothill College',
      degree: 'Certificate — Software Development in Java',
      period: 'Jun 2021 – Aug 2024',
      gpa: 'Dual Enrollment',
      coursesLabel: 'Key coursework',
      courses: [
        'Cloud Computing (AWS)',
        'Linux & Bash',
        'Linear Algebra',
        'Discrete Mathematics',
        '...'
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
