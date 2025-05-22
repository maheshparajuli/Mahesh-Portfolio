import { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsAnimating(false);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission status after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const contactElements = document.querySelectorAll('.contact-content, .contact-form');
    contactElements.forEach((el) => observer.observe(el));

    return () => contactElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="section-title">
            <span className="title-number">04.</span> Get In Touch
          </h2>
          <p className="contact-text">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll do my best to get back to you!
          </p>
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <span className="info-text">email@example.com</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <span className="info-text">+1 (123) 456-7890</span>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
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
            <label htmlFor="email">Email</label>
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
            <label htmlFor="message">Message</label>
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
            className={`submit-btn ${isAnimating ? 'animating' : ''}`}
            disabled={isAnimating}
          >
            {isAnimating ? (
              <span className="btn-loader"></span>
            ) : isSubmitted ? (
              'Message Sent!'
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;