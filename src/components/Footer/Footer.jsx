import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="footer-top">
          {/* Logo & Tagline */}
          <div className="footer-brand">
            <h2 className="footer-logo">Abhi.<span>shek</span></h2>
            <p className="footer-tagline">
              I craft digital experiences that blend aesthetics with performance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-group">
            <h4 className="footer-title">QUICK LINKS</h4>
            <div className="footer-links-grid">
              <ul className="footer-col">
                <li><a href="#home">Home</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#process">Process</a></li>
              </ul>
              <ul className="footer-col">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#skills">Skills</a></li>
              </ul>
            </div>
          </div>

          {/* Connect */}
          <div className="footer-social-group">
            <h4 className="footer-title">CONNECT</h4>
            <div className="social-badge-grid">
              <a href="https://github.com/abhi96256" target="_blank" rel="noopener noreferrer" className="social-badge">
                <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/abhishek-kumar-326939291/" target="_blank" rel="noopener noreferrer" className="social-badge">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" /> LinkedIn
              </a>
              <a href="mailto:akay13230@gmail.com" className="social-badge">
                <img src="https://cdn.simpleicons.org/gmail/white" alt="Email" /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="built-by">Built with ♡ by Abhishek</p>
          <div className="scroll-top-wrapper">
             <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="scroll-top-btn">
                ↑
             </button>
          </div>
          <p className="copyright">© 2026 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
