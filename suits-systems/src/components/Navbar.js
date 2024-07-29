import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css'; // Ensure the correct path to your CSS file

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="#home">SUITS SYSTEMS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto"> {/* This aligns the nav links to the right */}
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
