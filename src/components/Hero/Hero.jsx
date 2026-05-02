import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  SiReact, SiNodedotjs, SiNextdotjs, SiMongodb, SiMysql,
  SiTypescript, SiPython,
} from 'react-icons/si';
import {
  FiMonitor, FiSmartphone, FiShoppingCart, FiBarChart2,
  FiZap, FiArrowRight, FiMail, FiLayout, FiLayers, FiSend
} from 'react-icons/fi';
import './Hero.css';

/* ─── Tech Icon Map ─────────────────────────────────── */
const techIcons = [
  { Icon: SiReact,     label: 'React',      color: '#61dafb' },
  { Icon: SiNodedotjs, label: 'Node.js',    color: '#68a063' },
  { Icon: SiNextdotjs, label: 'Next.js',    color: '#ffffff' },
  { Icon: SiMongodb,   label: 'MongoDB',    color: '#47a248' },
  { Icon: SiMysql,     label: 'MySQL',      color: '#4479a1' },
  { Icon: SiTypescript,label: 'TypeScript', color: '#3178c6' },
  { Icon: SiPython,    label: 'Python',     color: '#f7c948' },
];

/* ─── Product Cards ─────────────────────────────────── */
const productCards = [
  { Icon: FiSmartphone,  title: 'Mobile App',    sub: 'React Native',    color: '#818cf8', delay: 0    },
  { Icon: FiMonitor,     title: 'Web Platform',  sub: 'Next.js + Node',  color: '#c9a84c', delay: 0.15 },
  { Icon: FiShoppingCart,title: 'E-Commerce',    sub: 'Full Stack',       color: '#34d399', delay: 0.3  },
  { Icon: FiBarChart2,   title: 'Dashboard',     sub: 'Data & Charts',    color: '#f472b6', delay: 0.45 },
];

/* ─── Roles for typewriter ──────────────────────────── */
const roles = ['Full Stack Developer', 'Product Builder', 'UI/UX Enthusiast', 'Problem Solver'];

import Hyperspeed from './Hyperspeed';

/* ── Hyperspeed Effect Options ── */
const hyperspeedOptions = {
  onSpeedUp: () => { },
  onSlowDown: () => { },
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xFFFFFF,
    brokenLines: 0xFFFFFF,
    leftCars: [0xf5e09a, 0xc9a84c, 0xffffff],
    rightCars: [0xa07830, 0xc9a84c, 0xf5e09a],
    sticks: 0xc9a84c,
  }
};

export default function Hero() {
  const [roleIndex, setRoleIndex]   = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed]           = useState(110);

  const heroRef   = useRef(null);
  const nameRef   = useRef(null);
  const leftRef   = useRef(null);
  const spotRef   = useRef(null);


  /* ── GSAP entrance timeline ── */
  useEffect(() => {
    const isMobile = window.innerWidth <= 600;
    const isTablet = window.innerWidth <= 900;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Hub & right stage animates first on mobile (it's order:1 at top)
      if (isMobile) {
        tl.fromTo('.hero-pill', { opacity: 0, y: -16 },
            { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
          .fromTo('.hero-greeting', { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
          .fromTo('.hero-name', { opacity: 0, scale: 0.9, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.8 }, '-=0.4')
          .fromTo('.tw-wrap', { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
          .fromTo('.hero-tagline', { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
          .fromTo('.journey-row', { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
          .fromTo('.cta-row', { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
          .fromTo('.tech-row', { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.4 }, '-=0.2');
      } else {
        tl.fromTo('.hero-pill',    { opacity: 0, y: -20 },           { opacity: 1, y: 0, duration: 0.8 })
          .fromTo('.hero-greeting',{ opacity: 0, x: -40 },           { opacity: 1, x: 0, duration: 0.7 }, '-=0.4')
          .fromTo('.hero-name',    { opacity: 0, scale: 0.85, y: 30 },{ opacity: 1, scale: 1, y: 0, duration: 1 }, '-=0.5')
          .fromTo('.tw-wrap',      { opacity: 0, y: 20 },            { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
          .fromTo('.hero-tagline', { opacity: 0, y: 20 },            { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
          .fromTo('.journey-row',  { opacity: 0, y: 20 },            { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
          .fromTo('.cta-row',      { opacity: 0, y: 20 },            { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
          .fromTo('.tech-row',     { opacity: 0, y: 20 },            { opacity: 1, y: 0, duration: 0.5 }, '-=0.2');
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  /* ── Mouse spotlight + 3D tilt (desktop only) ── */
  useEffect(() => {
    // Disable on touch/mobile devices
    if (window.matchMedia('(hover: none)').matches || window.innerWidth <= 900) return;

    const hero = heroRef.current;
    const onMove = (e) => {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const nx = (x / width  - 0.5) * 2;
      const ny = (y / height - 0.5) * 2;

      if (spotRef.current) {
        spotRef.current.style.background =
          `radial-gradient(600px circle at ${x}px ${y}px, rgba(201,168,76,0.07), transparent 60%)`;
      }
      if (nameRef.current) {
        gsap.to(nameRef.current, { x: nx * 12, y: ny * 6, duration: 0.8, ease: 'power2.out' });
      }
    };
    hero.addEventListener('mousemove', onMove);
    return () => hero.removeEventListener('mousemove', onMove);
  }, []);

  /* ── Typewriter ── */
  useEffect(() => {
    const cur = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(cur.substring(0, displayText.length + 1));
        setSpeed(110);
        if (displayText === cur) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setDisplayText(cur.substring(0, displayText.length - 1));
        setSpeed(40);
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, speed]);

  return (
    <header className="hero-v3" ref={heroRef} id="home">
      <Hyperspeed effectOptions={hyperspeedOptions} />

      {/* ── spotlight layer ── */}
      <div className="spotlight-layer" ref={spotRef} />

      {/* ── ambient blobs ── */}
      <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />

      <div className="hero-v3-inner">

        {/* ════ LEFT ════ */}
        <div className="hero-left" ref={leftRef}>

          {/* Pill */}
          <div className="hero-pill">
            <span className="pill-pulse" />
            <span className="pill-green" />
            <span>Available for new projects</span>
          </div>

          {/* Greeting + Name */}
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name" ref={nameRef}>
            <span className="n-outline">Abhi</span><span className="n-gold">shek</span>
          </h1>

          {/* Typewriter */}
          <div className="tw-wrap">
            <span className="tw-dollar">$</span>
            <span className="tw-text">{displayText}</span>
            <span className="tw-bar" />
          </div>

          {/* Tagline */}
          <p className="hero-tagline">
            I turn your <em>ideas</em> into full-scale{' '}
            <em>digital products</em> — from concept to launch.
          </p>

          {/* Idea → Product journey */}
          <div className="journey-row">
            {[
              { label: 'Idea', Icon: FiZap, color: '#f59e0b' },
              { label: 'Design', Icon: FiLayout, color: '#8b5cf6' },
              { label: 'Build', Icon: FiLayers, color: '#3b82f6' },
              { label: 'Ship', Icon: FiSend, color: '#10b981' },
            ].map((step, i) => (
              <React.Fragment key={step.label}>
                <span className="j-chip">
                  <step.Icon size={14} style={{ color: step.color, marginRight: '8px' }} />
                  {step.label}
                </span>
                {i < 3 && <span className="j-arrow"><FiArrowRight size={13}/></span>}
              </React.Fragment>
            ))}
          </div>

          {/* CTAs */}
          <div className="cta-row">
            <a href="#projects" className="cta-gold" id="hero-view-work">
              <span className="cta-shine" />
              <span>View My Work</span>
              <FiArrowRight className="cta-icon" />
            </a>
            <a href="#contact" className="cta-ghost" id="hero-contact">
              <FiMail size={16} />
              Get In Touch
            </a>
          </div>


        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="scroll-hint-v3">
        <div className="sh-mouse"><div className="sh-wheel"/></div>
        <span>Scroll</span>
      </div>

      {/* ── Bottom marquee ── */}
      <div className="mq-bar">
        <div className="mq-track">
          {[...techIcons, ...techIcons].map(({ Icon, label, color }, i) => (
            <span key={i} className="mq-it">
              <Icon size={14} color={color} style={{ opacity: 0.5 }}/> {label}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
