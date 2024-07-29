import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div id="home" className="landing-page">
      <video autoPlay loop muted className="background-video">
        <source src="./5637951-sd_960_540_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <Container className="landing-text text-center my-5 py-5">
        <h1>Simplify Your Law Firm</h1>
        <p>Efficiently manage your law firm with our powerful Law Firm Management System.</p>
        <div className="button-group">
          <Button variant="light" href="#contact" className="custom-button btn-white">Contact Us</Button>
          <Button variant="dark" href="#features" className="custom-button btn-black">Features</Button>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
                                                   