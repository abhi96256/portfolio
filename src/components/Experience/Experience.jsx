import React from 'react';
import './Experience.css';

const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Maydiv Infotech, Faridabad",
    period: "April 2025 – Present",
    desc: "Built dynamic and scalable web applications including CRM systems, e-commerce platforms, ERP solutions, and portfolio websites.",
    bullets: [
      "Developed full-stack solutions using React.js, Next.js, Node.js, Express.js, MongoDB, and REST APIs.",
      "Wrote clean, efficient, and reusable code following industry best practices."
    ]
  },
  {
    id: 2,
    role: "Software Developer",
    company: "3S Logics Pvt. Ltd., Gurugram",
    period: "October 2024 – April 2025",
    desc: "Designed and developed responsive, user-friendly, and scalable web applications with a focus on performance and usability.",
    bullets: [
      "Built modern front-end interfaces using React.js and Next.js with Tailwind CSS for utility-first UI design."
    ]
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
