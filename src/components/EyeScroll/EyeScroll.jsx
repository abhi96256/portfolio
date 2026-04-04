import React, { useEffect, useState } from 'react';
import './EyeScroll.css';

const EyeScroll = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate rotation based on scroll percentage
      const h = document.documentElement;
      const b = document.body;
      const st = 'scrollTop';
      const sh = 'scrollHeight';
      const scrollPercent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
      
      // Map scroll percentage to 360 degrees
      setRotation(scrollPercent * 360);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="eye-scroll-container">
      <div className="eye" style={{ transform: `rotate(${rotation}deg)` }}>
        <div className="eye-iris"></div>
      </div>
      <div className="eye" style={{ transform: `rotate(${rotation}deg)` }}>
        <div className="eye-iris"></div>
      </div>
    </div>
  );
};

export default EyeScroll;
