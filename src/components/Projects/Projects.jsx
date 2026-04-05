import React, { useState } from 'react';
import './Projects.css';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Fika-India Ecommerce",
    category: "Full Stack",
    image: "/6.7.png",
    desc: "A premium e-commerce platform specializing in lifestyle and fashion, featuring a robust backend for seamless product management and user experience.",
    tech: ["React", "Node.js", "MySQL"],
    links: { demo: "https://fika-india.com/", source: "#" }
  },
  {
    id: 2,
    title: "TractoWeave ERP",
    category: "Full Stack",
    image: "/trac.png",
    desc: "A comprehensive Enterprise Resource Planning (ERP) solution designed for textile and weave management, streamlining industrial workflows with real-time data tracking.",
    tech: ["Laravel", "PHP", "MySQL"],
    links: { demo: "http://tractoweave.cloud/", source: "#" }
  },
  {
    id: 3,
    title: "IT Agency Workflow",
    category: "Full Stack",
    image: "/it.png",
    desc: "A specialized agency management software designed to streamline digital agency workflows and project management.",
    tech: ["React", "Node.js", "MySQL"],
    links: { demo: "https://it-agency-gold.vercel.app/", source: "#" }
  },
  {
    id: 4,
    title: "Job-Processing CRM",
    category: "Full Stack",
    image: "/Jms.png",
    desc: "A comprehensive applicant tracking and job management CRM featuring a 5-stage workflow for seamless recruitment and application monitoring.",
    tech: ["React", "Node.js", "MySQL"],
    links: { demo: "https://maytm.online/", source: "#" }
  },
  {
    id: 5,
    title: "Modern Portfolio",
    category: "Frontend",
    image: "/MAYDIV.png",
    desc: "A sleek, high-performance personal portfolio built with Next.js, showcasing modern frontend architecture and smooth animations.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    links: { demo: "https://www.maydiv.com/", source: "#" }
  },
  {
    id: 6,
    title: "Tvara India",
    category: "Frontend",
    image: "/Tvara.png",
    desc: "A modern web platform for Tvara India, featuring a sleek ReactJS interface for a premium branding experience.",
    tech: ["ReactJS", "CSS3", "Framer Motion"],
    links: { demo: "https://www.tvaraindia.com/", source: "#" }
  },
  {
    id: 7,
    title: "Melanie India",
    category: "Frontend",
    image: "/3.7.png",
    desc: "An elegant digital showcase for Melanie India, built with ReactJS for smooth performance and high responsiveness.",
    tech: ["ReactJS", "SASS", "JavaScript"],
    links: { demo: "https://www.melanieindia.com/", source: "#" }
  },
  {
    id: 8,
    title: "GridZero",
    category: "Frontend",
    image: "/Grid Zero-02.png",
    desc: "A futuristic web experience for GridZero, utilizing ReactJS to deliver a clean and modern user interface.",
    tech: ["ReactJS", "Tailwind CSS"],
    links: { demo: "https://gridzero.in/", source: "#" }
  },
  {
    id: 9,
    title: "Hotel Royal Grand Barsana",
    category: "Frontend",
    image: "/logo10.png",
    desc: "A premium hospitality website for Hotel Royal Grand, offering an interactive and seamless booking experience.",
    tech: ["ReactJS", "CSS Modules"],
    links: { demo: "https://hotelroyalgrandbarsana.com/", source: "#" }
  },
  {
    id: 10,
    title: "A2P Realtech",
    category: "Full Stack",
    image: "/290126125406LOGO.png",
    desc: "A robust real estate management platform built with PHP and MySQL for high scalability and secure data handling.",
    tech: ["PHP", "MySQL", "JavaScript"],
    links: { demo: "https://a2prealtech.com/", source: "#" }
  },
  {
    id: 11,
    title: "Pomp & Pepper",
    category: "Frontend",
    image: "/logo99.png",
    desc: "A vibrant and engaging web application for Pomp & Pepper, built using ReactJS for dynamic content delivery.",
    tech: ["ReactJS", "Redux", "Tailwind"],
    links: { demo: "https://pompnpepper.com/", source: "#" }
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
        <span className="section-num">05 —</span> My Work
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
          <a 
            key={proj.id} 
            href={proj.links.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-visual">
              {proj.image && <img src={proj.image} alt={proj.title} className="project-image" />}
            </div>
            <div className="project-info">
              <span className="project-category">{proj.category}</span>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="project-tech-stack">
                {proj.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
