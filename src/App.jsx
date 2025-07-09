
import React from 'react'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      <Navbar /> 
     
       <Hero />
       
      <About />
      <Gallery/>
      <Projects />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
