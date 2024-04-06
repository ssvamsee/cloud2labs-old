import React from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Expertise from './components/Expertise';
// import Community from './components/Community';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Expertise />
      {/* <Community /> */}
      <Contact />
    </>
  );
}

export default App;
