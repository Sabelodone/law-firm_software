// src/components/DocumentManagement.js

import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Result = styled.div`
  margin-top: 30px;
  width: 70%;
  padding: 20px;
  background-color: #fffbe0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Courier New', Courier, monospace;
`;

const DocumentManagement = () => {
  const [partyName, setPartyName] = useState('');
  const [otherParty, setOtherParty] = useState('');
  const [date, setDate] = useState('');
  const [terms, setTerms] = useState('');
  const [generatedDoc, setGeneratedDoc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const context = {
      party_name: partyName,
      other_party: otherParty,
      date: date,
      terms: terms,
    };

    try {
      const response = await axios.post('http://localhost:5000/generate', {
        template_name: 'contract',
        context: context,
      });

      setGeneratedDoc(response.data.document);
    } catch (error) {
      console.error('Error generating document:', error);
    }
  };

  return (
    <Container>
      <h1>Legal Document Generator</h1>
      <Form onSubmit={handleSubmit}>
        <Label>Party Name</Label>
        <Input
          type="text"
          value={partyName}
          onChange={(e) => setPartyName(e.target.value)}
          required
        />

        <Label>Other Party Name</Label>
        <Input
          type="text"
          value={otherParty}
          onChange={(e) => setOtherParty(e.target.value)}
          required
        />

        <Label>Agreement Date</Label>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <Label>Terms and Conditions</Label>
        <TextArea
          rows="4"
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
          required
        />

        <Button type="submit">Generate Document</Button>
      </Form>

      {generatedDoc && (
        <Result>
          <h2>Generated Document</h2>
          <pre>{generatedDoc}</pre>
        </Result>
      )}
    </Container>
  );
};

export default DocumentManagement;
