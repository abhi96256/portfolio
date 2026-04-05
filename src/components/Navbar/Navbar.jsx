import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const sections = ['home', 'about', 'experience', 'services', 'process', 'projects', 'skills', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => {
        const el = document.getElementById(section);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="logo-text">Abhi.<span>shek</span></a>
        
        <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)} className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)} className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
          <li><a href="#process" onClick={() => setMenuOpen(false)} className={activeSection === 'process' ? 'active' : ''}>Process</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="talk-btn">Let's Talk</a>
        </div>

        <div className={`hamburger ${menuOpen ? 'toggle' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
