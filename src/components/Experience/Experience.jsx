import React from 'react';
import './Experience.css';

const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Senior Frontend Lead",
    company: "TechNova Inc.",
    period: "2021 — Present",
    desc: "Led the development of a flagship SaaS platform, improving performance by 40%.",
    bullets: ["Architected scalable React apps", "Mentored 10+ junior developers", "Optimized CI/CD pipelines"]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "PixelForge Studio",
    period: "2019 — 2021",
    desc: "Built modern e-commerce sites using Next.js and Node.js.",
    bullets: ["Integrated Stripe payments", "Implemented Redux for state", "Refactored legacy code"]
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Spark Digital",
    period: "2018 — 2019",
    desc: "Developed responsive landing pages for international clients.",
    bullets: ["Converted designs to HTML/CSS", "Maintained client portals", "Assisted in SEO optimization"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding container">
      <h2 className="section-title">
        <span className="section-num">02 —</span> Experience
      </h2>
      <div className="experience-list">
        {EXPERIENCE_DATA.map(exp => (
          <div key={exp.id} className="experience-item">
            <div className="exp-meta">
              <h3>{exp.role}</h3>
              <span className="exp-company">{exp.company}</span>
              <span className="exp-period">{exp.period}</span>
            </div>
            <div className="exp-content">
              <p>{exp.desc}</p>
              <ul>
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
