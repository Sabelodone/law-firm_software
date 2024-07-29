import React from 'react';
import './Features.css'; // Make sure to create and style this CSS file

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container text-center">
        <h2 className="features-heading">Features</h2>
        <h3 className="features-subheading">
          Streamline your law firm with our comprehensive features.
        </h3>
        <div className="features-cards">
          <div className="feature-card">
            <div className="feature-icon">
              <p className="feature-number">1</p>
              <button className="feature-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                 
                </svg>
              </button>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Case Management</h3>
              <p className="feature-description">
                Easily keep track of all your cases and their details.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <p className="feature-number">2</p>
              <button className="feature-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                 
                </svg>
              </button>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Client Management</h3>
              <p className="feature-description">
                Effortlessly manage your clients' information and communication.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <p className="feature-number">3</p>
              <button className="feature-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                  
                </svg>
              </button>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Document Management</h3>
              <p className="feature-description">
                Organize and store all your legal documents in one secure location.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <p className="feature-number">4</p>
              <button className="feature-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                  
                </svg>
              </button>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Billing & Invoicing</h3>
              <p className="feature-description">
                Manage your firm's finances with integrated billing and invoicing features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
