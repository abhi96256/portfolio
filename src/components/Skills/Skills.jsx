import React from 'react';
import './Skills.css';

const SKILLS_DATA = [
  {
    category: "Frontend Architecture",
    skills: [
      { name: "React / Next.js", level: "95%" },
      { name: "TypeScript", level: "90%" },
      { name: "Tailwind CSS", level: "85%" }
    ]
  },
  {
    category: "Backend & Cloud",
    skills: [
      { name: "Node.js", level: "80%" },
      { name: "PostgreSQL", level: "75%" },
      { name: "AWS / Vercel", level: "70%" }
    ]
  },
  {
    category: "Design & UX",
    skills: [
      { name: "Figma", level: "85%" },
      { name: "Framer Motion", level: "90%" },
      { name: "System Design", level: "80%" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding container">
      <h2 className="section-title">
        <span className="section-num">05 —</span> Technical Expertise
      </h2>
      <div className="skills-grid-layout">
        {SKILLS_DATA.map(cat => (
          <div key={cat.category} className="skill-category-card glass-card">
            <h3 className="category-title">{cat.category}</h3>
            <div className="skill-bars">
              {cat.skills.map(s => (
                <div key={s.name} className="skill-bar-item">
                  <div className="skill-info">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-level">{s.level}</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: s.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
