import { FaPython, FaJava, FaJsSquare, FaGitAlt, FaDatabase, FaBrain, FaTerminal } from 'react-icons/fa';
import { SiRiscv, SiC, SiHtml5, SiCss3, SiSvelte, SiTailwindcss, SiTensorflow, SiJupyter } from 'react-icons/si';
import { MdComputer } from 'react-icons/md';

const skillSections = [
  {
    title: 'Programming Languages:',
    skills: [
      { icon: <FaPython title="Python" />, label: 'Python' },
      { icon: <FaJava title="Java" />, label: 'Java' },
      { icon: <SiRiscv title="RISC-V Assembly" />, label: 'RISC-V Assembly' },
      { icon: <FaTerminal title="Bash" />, label: 'Bash' },
      { icon: <SiC title="C" />, label: 'C' },
    ],
  },
  {
    title: 'Web Development:',
    skills: [
      { icon: <FaJsSquare title="JavaScript" />, label: 'JavaScript' },
      { icon: <SiHtml5 title="HTML" />, label: 'HTML' },
      { icon: <SiCss3 title="CSS" />, label: 'CSS' },
      { icon: <SiSvelte title="Svelte" />, label: 'Svelte' },
      { icon: <SiTailwindcss title="Tailwind" />, label: 'Tailwind' },
    ],
  },
  {
    title: 'Tools & Environments:',
    skills: [
      { icon: <FaGitAlt title="Git" />, label: 'Git' },
      { icon: <SiJupyter title="Jupyter Notebooks" />, label: 'Jupyter Notebooks' },
      { icon: <FaDatabase title="Supabase" />, label: 'Supabase' },
      { icon: <MdComputer title="Eclipse" />, label: 'Eclipse' },
      { icon: <MdComputer title="Jetson Nano" />, label: 'Jetson Nano' },
      { icon: <MdComputer title="Solidworks" />, label: 'Solidworks' },
    ],
  },
  {
    title: 'AI / Machine Learning:',
    skills: [
      { icon: <FaBrain title="Machine Learning" />, label: 'Machine Learning' },
      { icon: <FaBrain title="NLP" />, label: 'NLP' },
      { icon: <SiTensorflow title="TensorFlow" />, label: 'TensorFlow' },
      { icon: <FaPython title="NumPy" />, label: 'NumPy' },
      { icon: <FaPython title="Sci-Kit Learn" />, label: 'Sci-Kit Learn' },
      { icon: <FaPython title="Pandas" />, label: 'Pandas' },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" style={{ padding: 20 }}>
      <h2 style={{ marginBottom: 24}}>technical skills</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 40,
        }}
      >
        {skillSections.map(({ title, skills }) => (
          <div key={title}>
            <h3 style={{ marginBottom: 12 }}>{title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {skills.map(({ icon, label }) => (
                <div
                  key={label}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16 }}
                >
                  <span style={{ fontSize: 20 }}>{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;