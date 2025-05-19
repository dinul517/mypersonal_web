import React from 'react';

const Hero = () => {
  return (
    <section
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/40 to-gray-900/80" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 text-gradient hero-title-outline"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          FULLSTACK ENGINERR
        </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Building modern, scalable, and performant web applications
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="futuristic-button">
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default Hero;