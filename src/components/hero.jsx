import React, { useCallback } from 'react';
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  

  return (
    <section
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-black" // Changed background to black
    >
      
      
      <div className="relative z-30 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Welcome Text with Type Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <TypeAnimation
              sequence={[
                'Welcome to my personal web, my name is Dinul Islam Alfatiha as a ',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-lg md:text-xl text-green-600 font-light tracking-wider"
              cursor={true}
              repeat={0}
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4 animate-soft-fade-in"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            <span className="text-green-600">FULLSTACK</span>{' '}
            <span className="text-gray-300">ENGINERR</span>
          </motion.h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-soft-fade-in">
            Building modern, scalable, and performant web applications
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-soft-fade-in">
            <div className="tech-stack-item">
              <span className="text-cyan-400">MongoDB</span>
            </div>
            <div className="tech-stack-item">
              <span className="text-green-400">Express.js</span>
            </div>
            <div className="tech-stack-item">
              <span className="text-blue-400">React</span>
            </div>
            <div className="tech-stack-item">
              <span className="text-yellow-400">Node.js</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-soft-fade-in">
            <a href="#projects" className="futuristic-button">
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      {/* Removed decorative elements */}
    </section>
  );
};

export default Hero;