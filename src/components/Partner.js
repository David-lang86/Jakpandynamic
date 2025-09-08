import React, { useState } from 'react';
import './Partner.css';

const Partner = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="partner-container">
      <div className="partner-header">
        <h2 className="partner-title">Our Trusted Partner</h2>
        <div className="partner-logo">
          <span className="partner-logo-text">Jakpan Technicals</span>
          <div className="partner-badge">Partner</div>
        </div>
      </div>

      <div className="partner-content">
        <p className="partner-description">
          We're proud to partner with Jakpan Technicals to deliver exceptional technical solutions 
          and services to our clients.
        </p>

        <div className="partner-features">
          <div className="partner-feature">
            <i className="fas fa-shield-alt partner-icon"></i>
            <span>Enterprise-grade security</span>
          </div>
          <div className="partner-feature">
            <i className="fas fa-award partner-icon"></i>
            <span>Industry certified experts</span>
          </div>
          <div className="partner-feature">
            <i className="fas fa-users partner-icon"></i>
            <span>24/7 technical support</span>
          </div>
        </div>

        {expanded && (
          <div className="partner-details">
            <h3 className="partner-subtitle">About Jakpan Technicals</h3>
            <p>
              Jakpan Technicals is a leading provider of technical solutions with over 10 years 
              of industry experience. They specialize in enterprise software development, 
              cloud infrastructure, and cybersecurity solutions.
            </p>
            <p>
              Through our partnership, we're able to offer enhanced services and comprehensive 
              technical support to meet all your business needs.
            </p>
          </div>
        )}

        <button 
          className="partner-toggle-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Learn More'}
          <i className={`fas ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'} partner-toggle-icon`}></i>
        </button>

        <a 
          href="https://jakpantechnicals.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="partner-link"
        >
          Visit Jakpan Technicals
          <i className="fas fa-external-link-alt partner-link-icon"></i>
        </a>
      </div>
    </section>
  );
};

export default Partner;