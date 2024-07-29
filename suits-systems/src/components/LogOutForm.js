// LogoutForm.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const LogoutForm = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <p>Are you sure you want to log out?</p>
          <Button variant="danger" onClick={handleClose}>
            Log out
          </Button>
          <Button variant="secondary" onClick={handleClose} className="ml-2">
            Cancel
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LogoutForm;
