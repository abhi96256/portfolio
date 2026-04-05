import React from 'react';
import './Process.css';

const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Understanding your goals, audience, and technical requirements.'
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Creating interactive wireframes and high-fidelity visual designs.'
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'Building responsive, scalable solutions using modern tech stacks.'
  },
  {
    num: '04',
    title: 'Deliver',
    desc: 'Thorough testing and deployment to ensure a smooth launch.'
  }
];

const Process = () => {
  return (
    <section id="process" className="process section-padding container">
      <h2 className="section-title">
        <span className="section-num">04 —</span> My Workflow
      </h2>
      <div className="process-grid">
        {STEPS.map(step => (
          <div key={step.num} className="process-step-card glass-card">
            <div className="step-count">{step.num}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
