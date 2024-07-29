// src/components/Contact.js
import React, { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import ContactForm from './ContactForm'; // Import the ContactForm component
import './Contact.css'; // Import the CSS file for Contact section

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div id="contact" className="contact-section">
      <Container>
        <h2>Contact Us</h2>
        <div className="d-flex justify-content-center mb-4">
          <Button
            variant="primary"
            className="btn-primary"
            onClick={handleShow}
          >
            Contact Us
          </Button>
          <Button variant="secondary" className="btn-secondary" href="#home">
            Book a Demo
          </Button>
        </div>

        {/* Modal for Contact Form */}
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" form="contact-form">
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Contact;
