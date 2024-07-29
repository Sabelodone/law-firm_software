import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css'; // Ensure the correct path to your CSS file

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => setShowNav(!showNav);
  const handleClose = () => setShowNav(false);

  return (
    <Navbar expand="lg" className={`navbar ${showNav ? 'show' : ''}`}>
      <Navbar.Brand href="#home">SUITS SYSTEMS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" onClick={handleToggle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" onClick={handleClose}>Home</Nav.Link>
          <Nav.Link href="#features" onClick={handleClose}>Features</Nav.Link>
          <Nav.Link href="#pricing" onClick={handleClose}>Pricing</Nav.Link>
          <Nav.Link href="#contact" onClick={handleClose}>Contact</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown" className="nav-dropdown">
            <NavDropdown.Item href="#SignIn">Sign In</NavDropdown.Item>
            <NavDropdown.Item href="#SignUp">Sign Up</NavDropdown.Item><hr />
            <NavDropdown.Item href="#action">Something else here</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
