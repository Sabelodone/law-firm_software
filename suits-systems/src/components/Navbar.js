import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SignInForm from './SignInForm'; // Adjust the import path as needed
import SignUpForm from './SignUpForm'; // Adjust the import path as needed
import LogoutForm from './LogOutForm'; // Adjust the import path as needed
import './NavBar.css'; // Ensure the correct path to your CSS file

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleToggle = () => setShowNav(!showNav);
  const handleClose = () => setShowNav(false);

  const handleShowSignIn = () => setShowSignIn(true);
  const handleCloseSignIn = () => setShowSignIn(false);

  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  const handleShowLogout = () => setShowLogout(true);
  const handleCloseLogout = () => setShowLogout(false);

  return (
    <>
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
              <NavDropdown.Item onClick={handleShowSignIn}>Sign In</NavDropdown.Item>
              <NavDropdown.Item onClick={handleShowSignUp}>Sign Up</NavDropdown.Item>
              <hr />
              <NavDropdown.Item onClick={handleShowLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Modals for Sign In, Sign Up, and Logout */}
      <SignInForm show={showSignIn} handleClose={handleCloseSignIn} />
      <SignUpForm show={showSignUp} handleClose={handleCloseSignUp} />
      <LogoutForm show={showLogout} handleClose={handleCloseLogout} />
    </>
  );
};

export default NavigationBar;
