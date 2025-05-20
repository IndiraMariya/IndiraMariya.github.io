function Education() {
  return (
    <section id="education">
      <h2>education</h2>
      <div className="education-entry" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>University of California, Santa Cruz</h3>
          <p className="date" style={{ margin: 0, fontStyle: 'italic', color: '#555' }}>Sept 2024 - Jun 2028</p>
        </div>
        <p><strong>Bachelor of Science (B.S.) in Computer Science</strong></p>
        <p>3.91 UC GPA | Junior Standing</p>
        <p>
          <strong>Relevant Courses:</strong> Math Methods I, Math Methods II, Intro to Hacking,
          Computer Systems and Assembly Language, Computer Systems and C Programming,
          Programming Abstractions in Python, Machine Learning Basics
        </p>
      </div>

      <div className="education-entry" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>Foothill Community College, Los Altos</h3>
          <p className="date" style={{ margin: 0, fontStyle: 'italic', color: '#555' }}>Jun 2021 - Aug 2024</p>
        </div>
        <p><strong>COA Software Development in Java</strong></p>
        <p>
          <strong>Courses Taken:</strong> Intermediate Java, Elementary Statistics, Graphic Design Studio,
          Intro to Linux, JavaScript for Programmers, Discrete Mathematics, Bash Programming
        </p>
      </div>
    </section>
  );
}

export default Education;
