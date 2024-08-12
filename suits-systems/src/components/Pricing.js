import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import './Pricing.css'; // Ensure this file exists and is correctly linked

const Pricing = () => {
  return (
    <div id="pricing" className="pricing-section">
      <Container>
        <h2>Our Pricing</h2>
        <p>
         Our simple straight <span className="highlight-blue">forward</span> pricing that suits you!
        </p>

        <Row className="justify-content-center flex-wrap">
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <Card className="pricing-card">
              <Card.Body>
                <Card.Title className="pricing-card-title">Free</Card.Title>
                <Card.Text className="pricing-card-price">$0</Card.Text>
                <ul>
                  <li><i className="bi bi-check-circle"></i> Email support</li>
                  <li><i className="bi bi-check-circle"></i> Help center access</li>
                  <li><i className="bi bi-check-circle"></i> 24/7 support</li>
                </ul>
                <Button variant="primary">Sign up for free</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <Card className="pricing-card">
              <Card.Body>
                <Card.Title className="pricing-card-title">Basic</Card.Title>
                <Card.Text className="pricing-card-price">$99/month</Card.Text>
                <ul>
                  <li><i className="bi bi-check-circle"></i> All features included</li>
                  <li><i className="bi bi-check-circle"></i> Up to 10 users</li>
                  <li><i className="bi bi-check-circle"></i> Phone support</li>
                </ul>
                <Button variant="primary">Get started</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <Card className="pricing-card">
              <Card.Body>
                <Card.Title className="pricing-card-title">Premium</Card.Title>
                <Card.Text className="pricing-card-price">$199/month</Card.Text>
                <ul>
                  <li><i className="bi bi-check-circle"></i> All features included</li>
                  <li><i className="bi bi-check-circle"></i> Unlimited users</li>
                  <li><i className="bi bi-check-circle"></i> Priority support</li>
                </ul>
                <Button variant="primary">Upgrade now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;