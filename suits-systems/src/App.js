import React from 'react';
import Features from './components/Features';
import NavigationBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Body from './components/body';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';


const App = () => {
  return (
    <div>
      
      <NavigationBar />
      <LandingPage />
      <Body />
      <Pricing />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
