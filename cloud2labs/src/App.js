import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Expertise from './components/Expertise';
import Community from './components/Community';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Expertise />
      <Community />
      <Contact />
    </div>
  );
}

export default App;
