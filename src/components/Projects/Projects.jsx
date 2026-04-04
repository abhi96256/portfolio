import React, { useState } from 'react';
import './Projects.css';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Vortex Ecommerce",
    category: "Full Stack",
    desc: "A high-performance storefront optimized for massive traffic with edge caching and lightning-fast search.",
    tech: ["Next.js", "Zustand", "Redis"],
    links: { demo: "#", source: "#" }
  },
  {
    id: 2,
    title: "Aether AI Dashboard",
    category: "Frontend",
    desc: "An intelligent productivity assistant that uses natural language processing to automate complex workflows.",
    tech: ["React", "D3.js", "Firebase"],
    links: { demo: "#", source: "#" }
  },
  {
    id: 3,
    title: "NexGen Mobile App",
    category: "Mobile",
    desc: "A futuristic data visualization platform built with React Native for cross-platform efficiency.",
    tech: ["React Native", "Expo", "FastAPI"],
    links: { demo: "#", source: "#" }
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack', 'Frontend', 'Mobile'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding container">
      <h2 className="section-title">
        <span className="section-num">02 —</span> My Work
      </h2>
      
      <div className="filter-tabs">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-tab ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(proj => (
          <article key={proj.id} className="project-card">
            <div className="project-visual">
              <div className="visual-overlay">
                <div className="project-links">
                  <a href={proj.links.demo} className="link-icon">Demo</a>
                  <a href={proj.links.source} className="link-icon">Code</a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <span className="project-category">{proj.category}</span>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="project-tech-stack">
                {proj.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
