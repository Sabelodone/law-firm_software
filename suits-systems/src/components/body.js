import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './body.css'; // Import the CSS file for styles

const Body = () => {
  return (
    <div id="body" className="body-section">
      <Container>
        <Row className="body">
          <Col md={6} className="text-content">
            <h3>Efficient</h3>
            <p>Our Law Firm Management System is designed to streamline and optimize your law firm's operations, making it more efficient and productive.</p>
            <Button variant="primary">Learn More</Button>
          </Col>
          <Col md={6} className="image-content">
            <img src="tingey-injury-law-firm-yCdPU73kGSc-unsplash.jpg" alt="Efficient" />
          </Col>
        </Row>
        <Row className="body">
          <Col md={6} className="image-content">
            <img src="books.jpg" alt="Secure" />
          </Col>
          <Col md={6} className="text-content">
            <h3>Secure</h3>
            <p>Protecting your law firm's sensitive information is our top priority. Our Law Firm Management System uses advanced security measures to keep your data safe and secure.</p>
            <Button variant="primary">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Body;
