import React, { useState, useRef } from 'react';
import './Projects.css';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Fika-India Ecommerce",
    category: "Full Stack",
    image: "/6.7.png",
    desc: "A premium e-commerce platform specializing in lifestyle and fashion.",
    tech: ["React", "Node.js", "MySQL", "Redux"],
    links: { demo: "https://fika-india.com/", source: "#" },
    featured: true
  },
  {
    id: 2,
    title: "TractoWeave ERP",
    category: "Full Stack",
    image: "/trac.png",
    desc: "A comprehensive Enterprise Resource Planning (ERP) solution for textile management.",
    tech: ["Laravel", "PHP", "MySQL", "AWS"],
    links: { demo: "http://tractoweave.cloud/", source: "#" },
    featured: true
  },
  {
    id: 3,
    title: "IT Agency Workflow",
    category: "Full Stack",
    image: "/it.png",
    desc: "A specialized agency management software designed to streamline digital agency workflows.",
    tech: ["React", "Node.js", "MySQL"],
    links: { demo: "https://it-agency-gold.vercel.app/", source: "#" }
  },
  {
    id: 4,
    title: "Job-Processing CRM",
    category: "Full Stack",
    image: "/Jms.png",
    desc: "Applicant tracking and job management CRM with 5-stage automated workflows.",
    tech: ["React", "Node.js", "MySQL"],
    links: { demo: "https://maytm.online/", source: "#" }
  },
  {
    id: 5,
    title: "Modern Portfolio",
    category: "Frontend",
    image: "/MAYDIV.png",
    desc: "Sleek, high-performance personal portfolio built with Next.js and Framer Motion.",
    tech: ["Next.js", "Tailwind CSS", "GSAP"],
    links: { demo: "https://www.maydiv.com/", source: "#" }
  },
  {
    id: 6,
    title: "Tvara India",
    category: "Frontend",
    image: "/Tvara.png",
    desc: "A modern web platform for Tvara India, featuring a sleek branding experience.",
    tech: ["ReactJS", "CSS3", "Framer Motion"],
    links: { demo: "https://www.tvaraindia.com/", source: "#" }
  },
  {
    id: 7,
    title: "Melanie India",
    category: "Frontend",
    image: "/3.7.png",
    desc: "Elegant digital showcase for Melanie India, built for high performance.",
    tech: ["ReactJS", "SASS", "JavaScript"],
    links: { demo: "https://www.melanieindia.com/", source: "#" }
  },
  {
    id: 8,
    title: "GridZero",
    category: "Frontend",
    image: "/Grid Zero-02.png",
    desc: "Futuristic web experience for GridZero with a clean modern user interface.",
    tech: ["ReactJS", "Tailwind CSS"],
    links: { demo: "https://gridzero.in/", source: "#" }
  },
  {
    id: 9,
    title: "Hotel Royal Grand Barsana",
    category: "Frontend",
    image: "/logo10.png",
    desc: "Premium hospitality website offering an interactive and seamless booking experience.",
    tech: ["ReactJS", "CSS Modules"],
    links: { demo: "https://hotelroyalgrandbarsana.com/", source: "#" }
  },
  {
    id: 10,
    title: "A2P Realtech",
    category: "Full Stack",
    image: "/290126125406LOGO.png",
    desc: "Robust real estate management platform for high scalability and secure data.",
    tech: ["PHP", "MySQL", "JavaScript"],
    links: { demo: "https://a2prealtech.com/", source: "#" }
  },
  {
    id: 11,
    title: "Pomp & Pepper",
    category: "Frontend",
    image: "/logo99.png",
    desc: "Vibrant and engaging web application for dynamic content delivery.",
    tech: ["ReactJS", "Redux", "Tailwind"],
    links: { demo: "https://pompnpepper.com/", source: "#" }
  },
  {
    id: 12,
    title: "Ledel Enterprises",
    category: "Full Stack",
    image: "/logo (1).png",
    desc: "Premium LED enterprise platform integrated with Supabase for data management.",
    tech: ["React", "Supabase", "Tailwind CSS"],
    links: { demo: "https://ledel.vercel.app/", source: "#" }
  },
  {
    id: 13,
    title: "MedCare Clinic",
    category: "Demo Websites",
    image: "/clinic_logo.svg",
    desc: "Medical clinic portal for seamless scheduling and patient management.",
    tech: ["React", "CSS Modules", "Modern UI"],
    links: { demo: "https://clindemo.vercel.app/", source: "#" }
  },
  {
    id: 14,
    title: "SavoryBite Restaurant",
    category: "Demo Websites",
    image: "/restaurant_logo.svg",
    desc: "Dining platform featuring digital menus and elegant reservation systems.",
    tech: ["React", "Styled Components", "Animation"],
    links: { demo: "https://resdemo-mauve.vercel.app/", source: "#" }
  },
  {
    id: 15,
    title: "NeoClass Coaching",
    category: "Demo Websites",
    image: "/neoclass_coaching_logo.svg",
    desc: "Educational hub for coaching centers to manage courses and interactive learning.",
    tech: ["React", "Context API", "Responsive"],
    links: { demo: "https://classes-teal.vercel.app/", source: "#" }
  },
  {
    id: 16,
    title: "GlowStyle Salon",
    category: "Demo Websites",
    image: "/salon_logo.svg",
    desc: "Premium beauty platform for salons with online booking and stylist profiles.",
    tech: ["React", "Framer Motion", "Tailwind"],
    links: { demo: "https://demo-p6hb.vercel.app/", source: "#" }
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack', 'Frontend', 'Demo Websites'];

  const filteredProjects = filter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="section-padding container">
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-num">05 —</span> Projects
        </h2>
        <p className="section-subtitle">Crafting digital experiences with precision and passion</p>
      </div>

      <div className="filter-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-tab ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
            <span className="tab-dot"></span>
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((proj, idx) => (
          <a 
            key={proj.id} 
            href={proj.links.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`project-card ${proj.featured ? 'featured' : ''}`}
            onMouseMove={handleMouseMove}
          >
            <div className="card-border-glow"></div>
            <div className="card-content">
              <div className="project-visual">
                <div className="visual-overlay"></div>
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} className="project-image" />
                ) : (
                  <div className="project-placeholder">
                    <span>{proj.title.charAt(0)}</span>
                  </div>
                )}
                <div className="project-hover-info">
                  <span className="view-project">View Project →</span>
                </div>
              </div>
              <div className="project-info">
                <div className="info-top">
                  <span className="project-category">{proj.category}</span>
                </div>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="project-tech-labels">
                  {proj.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

