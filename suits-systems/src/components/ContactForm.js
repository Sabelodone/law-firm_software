// src/components/ContactForm.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css'; // Ensure this path is correct

const ContactForm = () => {
  return (
    <Form id="contact-form" className="contact-form">
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required />
      </Form.Group>
      <Form.Group controlId="formEmail" className="mt-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" required />
      </Form.Group>
      <Form.Group controlId="formDate" className="mt-3">
        <Form.Label>Preferred Date</Form.Label>
        <Form.Control type="date" required />
      </Form.Group>
      <Form.Group controlId="formTime" className="mt-3">
        <Form.Label>Preferred Time</Form.Label>
        <Form.Control type="time" required />
      </Form.Group>
      <Form.Group controlId="formMessage" className="mt-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Any additional details" />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;

