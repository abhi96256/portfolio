import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
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
      <main>
        <section id="home" className="reveal"><Hero /></section>
        <section className="reveal"><About /></section>
        <section className="reveal"><Experience /></section>
        <section className="reveal"><Projects /></section>
        <section className="reveal"><Skills /></section>
        <section className="reveal"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
