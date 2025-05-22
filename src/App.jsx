import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './sections/about';
import Projects from './sections/project';
import Skills from './sections/skills';
// import Certificates from './sections/certificates'; // Temporarily disabled
import Footer from './components/footer';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Certificates /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;