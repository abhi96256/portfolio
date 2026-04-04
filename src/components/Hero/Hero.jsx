import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Design Systems Expert'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const hero = document.querySelector('.hero');
      if (hero) {
        const { left, top } = hero.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        hero.style.setProperty('--mouse-x', `${x}px`);
        hero.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="hero section-padding">
      {/* Dynamic Background Effects */}
      <div className="hero-mesh-overlay"></div>
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>
      <div className="glow-blob blob-3"></div>

      <div className="container hero-container">
        
        {/* Top Status */}
        <div className="status-container">
          <div className="status-badge">
            <span className="sparkle">✨</span>
            Open to opportunities
          </div>
        </div>

        {/* Center Content */}
        <div className="hero-main-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Alex Chen</h1>
          
          <div className="tagline-box">
             <span className="tagline-prefix">{">"}</span>
             <span className="tagline-text">{roles[roleIndex]}</span>
             <span className="tagline-cursor">|</span>
          </div>

          <p className="hero-sub-description">
            I craft digital experiences that blend aesthetics with performance.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="gold-btn">View My Work {"—>"}</a>
            <a href="#contact" className="outline-btn">Get In Touch</a>
          </div>
        </div>

        {/* Vertical Side Elements */}
        <div className="side-code-snippet">
          <pre>
            {`const developer = {
  passion: "infinite",
  coffee: true,
};`}
          </pre>
        </div>
        <div className="side-year-text">
          PORTFOLIO 2025
        </div>

        {/* Bottom Background Labels */}
        <div className="hero-bg-labels">
          <div className="marquee-content">
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>MongoDB</span>
            {/* Duplicated for seamless loop */}
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>MongoDB</span>
          </div>
        </div>

        {/* Bottom Socials */}
        <div className="bottom-socials">
          <a href="#" className="social-icon">Gh</a>
          <a href="#" className="social-icon">Li</a>
          <a href="#" className="social-icon">Tw</a>
          <a href="#" className="social-icon">Em</a>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span className="scroll-text">SCROLL DOWN</span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
