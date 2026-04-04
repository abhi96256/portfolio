import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "5+", label: "Satisfied Clients" }
  ];

  return (
    <section id="about" className="section-padding container">
      <h2 className="section-title">
        <span className="section-num">01 —</span> About Me
      </h2>
      <div className="about-layout">
        <div className="about-text">
          <p>
            I'm a passionate developer with a keen eye for detail and a love for creating 
            seamless digital experiences. My journey in tech started with a curiosity 
            for how things work, and it's evolved into a career dedicated to 
            building high-performance web applications.
          </p>
          <p>
            I specialize in modern frontend technologies, always striving to stay 
            at the forefront of industry trends and best practices.
          </p>
          <a href="#" className="gold-btn">Download Resume</a>
        </div>
        <div className="about-stats">
          {stats.map(s => (
            <div key={s.label} className="stat-card">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
