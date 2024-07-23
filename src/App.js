import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Button from './components/Button';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

function App() {
  const handleHeroButtonClick = () => {
    alert('Hero button clicked!');
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero
          title="Welcome to Web Courses"
          subtitle="Learn and grow with our comprehensive courses."
          buttonText="Get Started"
          onButtonClick={handleHeroButtonClick}
        />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
}

export default App;
