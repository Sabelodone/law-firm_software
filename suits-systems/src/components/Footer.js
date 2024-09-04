import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import './Footer.css'; // Ensure this file exists and is correctly linked

const Footer = () => {
  return (

    <footer className="footer">
      <hr />
      <Container className="text-center">
        <p className="mb-2">© 2023 All rights reserved. Soft Techs</p>
        <p className="mb-3">
          <a href="#home" className="text-black">Terms & Privacy</a>
        </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
           </a>
           <a href="mailto:email@example.com" target="_blank" rel="noopener noreferrer">
             <i className="bi bi-envelope"></i>

          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
