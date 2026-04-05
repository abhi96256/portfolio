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

export default function Hero() {
  const [roleIndex, setRoleIndex]   = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed]           = useState(110);

  const heroRef   = useRef(null);
  const nameRef   = useRef(null);
  const leftRef   = useRef(null);
  const rightRef  = useRef(null);
  const spotRef   = useRef(null);

  /* ── GSAP entrance timeline ── */
  useEffect(() => {
    const isMobile = window.innerWidth <= 600;
    const isTablet = window.innerWidth <= 900;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Hub & right stage animates first on mobile (it's order:1 at top)
      if (isMobile) {
        tl.fromTo('.hub-wrap', { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(2)' })
          .fromTo('.float-card', { opacity: 0, y: 30, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 }, '-=0.4')
          .fromTo('.hero-pill', { opacity: 0, y: -16 },
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
          .fromTo('.tech-row',     { opacity: 0, y: 20 },            { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
          .fromTo('.float-card',   { opacity: 0, x: isTablet ? 30 : 60, scale: 0.85 },
            { opacity: 1, x: 0, scale: 1, duration: 0.7, stagger: 0.12 }, '-=0.6')
          .fromTo('.hub-wrap',     { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(2)' }, '-=0.9')
          .fromTo('.code-snap',    { opacity: 0, y: 40 },            { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
          .fromTo('.stat-badge',   { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: 0.12, ease: 'back.out(1.8)' }, '-=0.4');
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
      if (rightRef.current) {
        gsap.to(rightRef.current, { rotateY: nx * 8, rotateX: -ny * 6, duration: 0.6, ease: 'power2.out' });
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

      {/* ── spotlight layer ── */}
      <div className="spotlight-layer" ref={spotRef} />

      {/* ── ambient blobs ── */}
      <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />

      {/* ── grid ── */}
      <div className="dot-grid" />

      {/* ── particles ── */}
      <div className="particles-wrap" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="pt" style={{ '--i': i }} />
        ))}
      </div>

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

        {/* ════ RIGHT — 3D Stage ════ */}
        <div className="hero-right" ref={rightRef} style={{ perspective: '1200px' }}>

          {/* Central Hub */}
          <div className="hub-wrap">
            <div className="hub-core">
              <FiZap className="hub-icon" />
            </div>
            <div className="hub-ring rg1" /><div className="hub-ring rg2" /><div className="hub-ring rg3" />
            {[0,1,2,3,4,5].map(i => <span key={i} className="orb-dot" style={{ '--oi': i }} />)}
          </div>

          {/* Floating Product Cards */}
          {productCards.map(({ Icon, title, sub, color }, idx) => (
            <div
              key={title}
              className="float-card"
              style={{ '--cc': color, '--fi': idx }}
            >
              <div className="fc-icon-wrap" style={{ background: `${color}18`, border: `1px solid ${color}40` }}>
                <Icon size={18} color={color} />
              </div>
              <div className="fc-info">
                <span className="fc-title">{title}</span>
                <span className="fc-sub">{sub}</span>
              </div>
              <span className="fc-live" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
            </div>
          ))}

          {/* Code Snapshot */}
          <div className="code-snap">
            <div className="cs-bar">
              <span className="csb r"/><span className="csb y"/><span className="csb g"/>
              <span className="cs-name">product.js</span>
            </div>
            <div className="cs-body">
              <div><span className="ck">const</span> idea <span className="co">=</span> <span className="cs">"yours"</span>;</div>
              <div><span className="ck">const</span> code <span className="co">=</span> <span className="cs">"mine"</span>;</div>
              <div className="cs-spacer"/>
              <div><span className="ck">return</span> <span className="cf">build</span>(idea, code);</div>
              <div className="cc">{'// → 🚀 Shipped!'}</div>
            </div>
          </div>




          {/* Tech icons orbiting right side */}
          <div className="right-tech-orbit">
            {techIcons.slice(0, 5).map(({ Icon, label, color }, i) => (
              <div key={label} className="rto-item" style={{ '--rti': i, '--rtc': color }}>
                <Icon size={20} color={color} />
              </div>
            ))}
          </div>

          {/* Animated SVG lines */}
          <svg className="stage-lines" viewBox="0 0 500 580" fill="none">
            <path d="M250 290 Q 340 180 390 90"  stroke="rgba(201,168,76,0.12)" strokeWidth="1.5" strokeDasharray="5 5">
              <animate attributeName="stroke-dashoffset" from="0" to="-50" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M250 290 Q 380 310 420 360" stroke="rgba(129,140,248,0.12)" strokeWidth="1.5" strokeDasharray="5 5">
              <animate attributeName="stroke-dashoffset" from="0" to="-50" dur="4s" repeatCount="indefinite"/>
            </path>
            <path d="M250 290 Q 320 400 310 480" stroke="rgba(52,211,153,0.12)" strokeWidth="1.5" strokeDasharray="5 5">
              <animate attributeName="stroke-dashoffset" from="0" to="-50" dur="3.5s" repeatCount="indefinite"/>
            </path>
            <path d="M250 290 Q 140 200 100 120"stroke="rgba(244,114,182,0.12)" strokeWidth="1.5" strokeDasharray="5 5">
              <animate attributeName="stroke-dashoffset" from="0" to="-50" dur="5s" repeatCount="indefinite"/>
            </path>
          </svg>
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
