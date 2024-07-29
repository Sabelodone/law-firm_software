import React from 'react';
import { Button } from 'react-bootstrap';

const DocumentViewer = ({ document }) => {
  return (
    <div>
      <h2>{document.name}</h2>
      <Button variant="primary">Download</Button>
    </div>
  );
};

export default DocumentViewer;
