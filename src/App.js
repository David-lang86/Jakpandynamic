import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Partner from './components/Partner';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MissionVision />
      <Gallery />
      <Reviews />
      <Contact />
      <Partner/>
      <Footer />
    </div>
  );
}

export default App;