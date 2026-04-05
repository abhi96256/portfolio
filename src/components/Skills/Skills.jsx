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
      { name: "MongoDB", level: "93%" },
      { name: "MySQL", level: "90%" },
      { name: "PHP", level: "70%" },
      { name: "Laravel", level: "70%" },
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

const TOOLS_DATA = [
  { name: "React", sub: "Frontend Framework", icon: "react" },
  { name: "Node.js", sub: "Backend Runtime", icon: "nodedotjs" },
  { name: "MySQL", sub: "Database Management", icon: "mysql" },
  { name: "Next.js", sub: "Full-stack Framework", icon: "nextdotjs" },
  { name: "Tailwind", sub: "CSS Framework", icon: "tailwindcss" },
  { name: "MongoDB", sub: "NoSQL Database", icon: "mongodb" },
  { name: "PHP", sub: "Server Scripting", icon: "php" },
  { name: "Laravel", sub: "PHP Framework", icon: "laravel" },
  { name: "Firebase", sub: "BaaS Platform", icon: "firebase" },
  { name: "Figma", sub: "Design Tool", icon: "figma" }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding container">
      <h2 className="section-title">
        <span className="section-num">06 —</span> Technical Expertise
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

      <div className="mastered-tools">
         <h3>Mastered <span>Tools</span></h3>
         <p className="tools-subtitle">Proficient in industry-standard technologies and design tools.</p>
         
         <div className="tools-grid">
           {TOOLS_DATA.map(tool => (
             <div key={tool.name} className="tool-card">
               <div className="tool-icon-wrapper">
                 <img src={`https://cdn.simpleicons.org/${tool.icon}/white`} alt={tool.name} />
               </div>
               <div className="tool-info">
                 <span className="tool-name">{tool.name}</span>
                 <span className="tool-sub">{tool.sub}</span>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default Skills;
