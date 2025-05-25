
import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setLoading(false);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset submission state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title fade-in">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info fade-in">
            <h3 className="contact-info-title">Get In Touch</h3>
            <p>
              I'm currently available for freelance work, internships, or entry-level positions.
              If you have a project that needs coding or would like to discuss potential collaborations,
              feel free to reach out!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email:</span>
                  <a href="mailto:john.doe@example.com">aswin00yt@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Phone:</span>
                  <a href="tel:+1234567890">+1 (672) 377-2001</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Location:</span>
                  <span>Calgary, AB</span>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/Aswin2058" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/aswin-thapa2001/" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/aswinthapa57/" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.96.24 2.412.403a4.902 4.902 0 011.737 1.124 4.902 4.902 0 011.124 1.737c.163.452.349 1.242.403 2.412.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.96-.403 2.412a4.902 4.902 0 01-1.124 1.737 4.902 4.902 0 01-1.737 1.124c-.452.163-1.242.349-2.412.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.412-.403a4.902 4.902 0 01-1.737-1.124 4.902 4.902 0 01-1.124-1.737c-.163-.452-.349-1.242-.403-2.412C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.96.403-2.412a4.902 4.902 0 011.124-1.737 4.902 4.902 0 011.737-1.124c.452-.163 1.242-.349 2.412-.403C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.735 0 8.332.014 7.052.072 5.773.13 4.792.335 4.002.629a7.07 7.07 0 00-2.57 1.636A7.07 7.07 0 00.629 4.002C.335 4.792.13 5.773.072 7.052.014 8.332 0 8.735 0 12s.014 3.668.072 4.948c.058 1.279.263 2.26.557 3.05a7.07 7.07 0 001.636 2.57 7.07 7.07 0 002.57 1.636c.79.294 1.771.499 3.05.557C8.332 23.986 8.735 24 12 24s3.668-.014 4.948-.072c1.279-.058 2.26-.263 3.05-.557a7.07 7.07 0 002.57-1.636 7.07 7.07 0 001.636-2.57c.294-.79.499-1.771.557-3.05.058-1.28.072-1.683.072-4.948s-.014-3.668-.072-4.948c-.058-1.279-.263-2.26-.557-3.05a7.07 7.07 0 00-1.636-2.57 7.07 7.07 0 00-2.57-1.636c-.79-.294-1.771-.499-3.05-.557C15.668.014 15.265 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
              </a>
            </div>
          </div>
          <div className="contact-form-container fade-in">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`submit-btn ${loading ? 'loading' : ''}`}
                disabled={loading || submitted}
              >
                {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
