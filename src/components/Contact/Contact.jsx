import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding container">
      <div className="contact-header">
        <h2 className="section-title">
          <span className="section-num">06 —</span> Contact
        </h2>
        <h1 className="contact-main-title">Let's <span>connect</span></h1>
        <p className="contact-subtitle">
          Have a project in mind or just want to chat? Drop me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>NAME</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>EMAIL</label>
                <input type="email" placeholder="your@email.com" />
              </div>
            </div>
            
            <div className="form-group">
              <label>SUBJECT</label>
              <input type="text" placeholder="What's this about?" />
            </div>

            <div className="form-group">
              <label>MESSAGE</label>
              <textarea placeholder="Tell me about your project..." rows="6"></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message <span className="plane-icon">✈</span>
            </button>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="contact-info-sidebar">
          <div className="info-card glass-card">
            <div className="info-icon">
              <img src="https://img.icons8.com/ios-filled/50/C9A84C/email.png" alt="Email" style={{ width: '24px' }} />
            </div>
            <div className="info-text">
              <label>Email</label>
              <p>akay13230@gmail.com</p>
            </div>
          </div>

          <div className="info-card glass-card">
            <div className="info-icon">
              <img src="https://img.icons8.com/ios-filled/50/C9A84C/marker.png" alt="Location" style={{ width: '24px' }} />
            </div>
            <div className="info-text">
              <label>Location</label>
              <p>Faridabad, India</p>
            </div>
          </div>

          <div className="info-card glass-card social-sidebar">
             <label className="sidebar-label">Find me on</label>
             <div className="sidebar-social-grid">
                <a href="https://github.com/abhi96256" target="_blank" rel="noopener noreferrer" className="sidebar-social-btn"><img src="https://cdn.simpleicons.org/github/white" alt="GitHub" /> GitHub</a>
                <a href="https://www.linkedin.com/in/abhishek-kumar-326939291/" target="_blank" rel="noopener noreferrer" className="sidebar-social-btn"><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" /> LinkedIn</a>
                <a href="mailto:akay13230@gmail.com" className="sidebar-social-btn"><img src="https://cdn.simpleicons.org/gmail/white" alt="Email" /> Email</a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
