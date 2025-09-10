import React, { useState } from 'react';
import './Partner.css';

const Partner = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="partner-container">
      <div className="partner-header">
        <h2 className="partner-title">Our Trusted Partner</h2>
        <div className="partner-logo">
          {/* ✅ Clickable Grainger logo */}
          <a 
            href="https://www.grainger.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img
              src="images/Grainger.jpg"
              alt="Grainger USA Logo"
              className="partner-logo-img"
            />
          </a>
          <div className="partner-badge">Partner</div>
        </div>
      </div>

      <div className="partner-content">
        <p className="partner-description">
          We're proud to partner with <strong>Grainger USA</strong> to deliver exceptional
          industrial supplies, tools, and technical solutions to our clients.
        </p>

        <div className="partner-features">
          <div className="partner-feature">
            <i className="fas fa-shield-alt partner-icon"></i>
            <span>Enterprise-grade reliability</span>
          </div>
          <div className="partner-feature">
            <i className="fas fa-award partner-icon"></i>
            <span>Industry certified quality</span>
          </div>
          <div className="partner-feature">
            <i className="fas fa-users partner-icon"></i>
            <span>24/7 customer support</span>
          </div>
        </div>

        {expanded && (
          <div className="partner-details">
            <h3 className="partner-subtitle">About Grainger</h3>
            <p>
              Grainger is a leading supplier of industrial products and MRO
              (maintenance, repair, and operations) equipment in the USA.
              They provide businesses with the tools, safety gear, and
              technical support needed to operate efficiently and securely.
            </p>
            <p>
              Through our partnership, we extend Grainger’s trusted resources
              and expertise, ensuring our clients have access to world-class
              solutions.
            </p>
          </div>
        )}

        <button
          className="partner-toggle-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Learn More'}
          <i
            className={`fas ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'} partner-toggle-icon`}
          ></i>
        </button>

        <a
          href="https://www.grainger.com"
          target="_blank"
          rel="noopener noreferrer"
          className="partner-link"
        >
          Visit Grainger USA
          <i className="fas fa-external-link-alt partner-link-icon"></i>
        </a>
      </div>
    </section>
  );
};

export default Partner;
