import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Services.css';

const Services = () => {
  const cardsRef = useRef([]);
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = React.useState(null);

  const services = [
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'Crafting mesmerizing digital interfaces where every pixel serves a purpose, ensuring an intuitive journey for your users.',
      features: ['Wireframing', 'Prototyping', 'Visual Design'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Web Engineering',
      description: 'Building robust, scalable architectures with cutting-edge tech stacks. Performance-first approach for modern web apps.',
      features: ['React/Next.js', 'API Integration', 'Cloud Native'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="12" y1="2" x2="12" y2="22" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'E-commerce',
      description: 'End-to-end commerce solutions designed to convert browsers into buyers with seamless checkout and inventory management.',
      features: ['Payment Gateways', 'CMS Strategy', 'Conversion Opt.'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Brand Activation',
      description: 'Synchronizing your digital presence with your brand values to create a cohesive and powerful market identity.',
      features: ['SEO Strategy', 'Digital Identity', 'Growth Hacking'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    // Staggered entry animation
    gsap.fromTo(".service-card-v2", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%"
        }
      }
    );

    // Vanta.js initialization
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x050505,
        color1: 0xffffff,
        color2: 0xc9a84c,
        birdSize: 1.8,
        wingSpan: 30.00,
        speedLimit: 4.00,
        separation: 40.00,
        alignment: 40.00,
        cohesion: 40.00,
        quantity: 4.00
      }));
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section className="services-section container" id="services" ref={vantaRef}>
      <div className="services-header" style={{ position: 'relative', zIndex: 10 }}>
        <h2 className="section-title">
          <span className="section-num">03 —</span> Services I Offer
        </h2>
        <p className="services-subtitle">Delivering high-impact solutions through technical excellence.</p>
      </div>
      
      <div className="services-v2-grid" style={{ position: 'relative', zIndex: 10 }}>
        {services.map((service, index) => (
          <div 
            className="service-card-v2" 
            key={service.id}
          >
            <div className="card-top">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <div className="service-num-v2">0{index + 1}</div>
            </div>
            
            <div className="card-content">
              <h3 className="service-title-v2">{service.title}</h3>
              <p className="service-desc-v2">{service.description}</p>
              
              <div className="service-features">
                {service.features.map(f => <span key={f} className="feature-tag">{f}</span>)}
              </div>
            </div>

            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
