import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Process from './components/Process/Process';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import EyeScroll from './components/EyeScroll/EyeScroll';
import './App.css';

function App() {

  useEffect(() => {
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      <EyeScroll />
      <main>
        <section id="home" className="reveal"><Hero /></section>
        <div id="about" className="reveal"><About /></div>
        <div id="experience" className="reveal"><Experience /></div>
        <div id="process" className="reveal"><Process /></div>
        <div id="projects" className="reveal"><Projects /></div>
        <div id="skills" className="reveal"><Skills /></div>
        <div id="contact" className="reveal"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
