
// import React from 'react'; // ✅ Import React for JSX

// import Header from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// export default function App() {
//   return (
//     <div className="font-sans">
//       <Header />
//       <Hero />
//       <About />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }
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
   
      {/* <main className="p-4">
        {/*  content goes here */}
        {/* <h2 className="text-2xl mt-10 text-center text-lg">Welcome to Punam's Portfolio</h2> */}
      {/* </main> */} 
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
