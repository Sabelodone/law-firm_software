import React from 'react';
import { Form, Button } from 'react-bootstrap';

const DocumentUpload = () => {
  return (
    <Form>
      <Form.Group controlId="formFile">
        <Form.Label>Upload Document</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="primary" type="submit">Upload</Button>
    </Form>
  );
};

export default DocumentUpload;
