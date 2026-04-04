import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Design Systems Expert'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

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

    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      if (hero) {
        const scrollY = window.scrollY;
        hero.style.setProperty('--scroll-y', `${scrollY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(150);

        if (displayText === currentRole) {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <header className="hero section-padding">
      {/* Multi-Layered Parallax Background */}
      <ul className="parallax-bg-layers">
        <li className="layer l1"></li>
        <li className="layer l2"></li>
        <li className="layer l3"></li>
        <li className="layer l4"></li>
        <li className="layer l5"></li>
        <li className="layer l6"></li>
      </ul>
      <div className="hero-mesh-overlay"></div>

      <div className="container hero-container">

        {/* Top Status */}
        <div className="status-container">
          <div className="status-badge">
            <span className="live-dot"></span>
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>
        </div>

        {/* Center Content */}
        <div className="hero-main-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Abhishek</h1>

          <div className="tagline-box">
            <span className="tagline-prefix">{">"}</span>
            <span className="tagline-text">{displayText}</span>
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
