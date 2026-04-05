import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "CEO, TechFlow",
      text: "Abhishek is an exceptional developer. He took our vague ideas and turned them into a stunning, high-performance website that our users love. His attention to detail is unmatched.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Founder, CreativeMind",
      text: "Working with him was a breeze. He understands both design and development, which is rare. The project was delivered on time and exceeded our expectations in every way.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Product Manager, Startuply",
      text: "The UI/UX expertise Abhishek brought to the table helped us increase our conversion rate by 25%. He is not just a coder, but a problem solver who understands business needs.",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg"
    }
  ];

  return (
    <section className="testimonials-section container" id="testimonials">
      <h2 className="section-title">
        <span className="section-num">06 —</span> Client Success Stories
      </h2>
      
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="quote-icon">"</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-footer">
              <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
              <div className="testimonial-info">
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
