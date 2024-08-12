import React, { useState } from 'react';
import Features from './components/Features';
import NavigationBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Body from './components/body';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import DocumentManagement from './components/DocumentManagement'; // Import DocumentManagement

const App = () => {
  const [showMyWork, setShowMyWork] = useState(false);

  const handleMyWorkClick = () => {
    setShowMyWork(true);
  };

  const handleHideMyWork = () => {
    setShowMyWork(false);
  };

  return (
    <div>
      <NavigationBar onMyWorkClick={handleMyWorkClick} />
      {showMyWork ? (
        <div>
          <DocumentManagement />
          <button onClick={handleHideMyWork}>Back to Home</button> {/* Optional: To go back */}
        </div>
      ) : (
        <>
          <div id="landing-page">
            <LandingPage />
          </div>
          <div id="body">
            <Body />
          </div>
          <div id="pricing">
            <Pricing />
          </div>
          <div id="features">
            <Features />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;

