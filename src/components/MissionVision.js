import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision" id="mission">
      <div className="container">
        <h2>Our Mission & Vision</h2>
        <div className="mv-container">
          <div className="mv-card">
            <i className="fas fa-bullseye mv-icon"></i>
            <h3>Our Mission</h3>
            <p>To provide exceptional plumbing services through innovative solutions, skilled professionals, and unwavering commitment to quality, ensuring customer satisfaction and building lasting relationships.</p>
          </div>
          <div className="mv-card">
            <i className="fas fa-eye mv-icon"></i>
            <h3>Our Vision</h3>
            <p>To be the leading plumbing service provider recognized for excellence, reliability, and technological innovation, setting new standards in the industry while maintaining environmental sustainability.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;