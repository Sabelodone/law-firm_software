import React from 'react';
import { ListGroup } from 'react-bootstrap';

const DocumentList = () => {
  const documents = [
    { id: 1, name: 'Document 1' },
    { id: 2, name: 'Document 2' },
  ];

  return (
    <ListGroup>
      {documents.map(doc => (
        <ListGroup.Item key={doc.id}>
          {doc.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DocumentList;
