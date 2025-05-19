import React, { useState } from 'react';

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const certificates = [
    {
      id: 1,
      title: "MERN Stack Development",
      issuer: "Meta",
      date: "2023",
      image: "/certificates/mern.jpg",
      category: "development",
      credentialLink: "#",
      description: "Comprehensive certification in full-stack development using MongoDB, Express.js, React, and Node.js"
    },
    {
      id: 2,
      title: "Advanced React Development",
      issuer: "Meta",
      date: "2023",
      image: "/certificates/react.jpg",
      category: "frontend",
      credentialLink: "#",
      description: "Master advanced React concepts including hooks, context, and performance optimization"
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      issuer: "Meta",
      date: "2023",
      image: "/certificates/node.jpg",
      category: "backend",
      credentialLink: "#",
      description: "Expert-level certification in building scalable backend services with Node.js"
    },
    {
      id: 4,
      title: "MongoDB Database Design",
      issuer: "MongoDB University",
      date: "2023",
      image: "/certificates/mongodb.jpg",
      category: "database",
      credentialLink: "#",
      description: "Professional certification in MongoDB database design and optimization"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Certificates' },
    { id: 'development', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' }
  ];

  const filteredCertificates = activeCategory === 'all'
    ? certificates
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <section id="certificates" className="py-20 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center mb-16">Certifications</h2>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300
                ${activeCategory === category.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Certificates grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCertificates.map(certificate => (
            <div key={certificate.id} className="group">
              <div className="futuristic-card h-full">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-video bg-gray-800 relative">
                    <img 
                      src={certificate.image} 
                      alt={certificate.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gradient">{certificate.title}</h3>
                    <span className="text-cyan-400">{certificate.date}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-gray-400">Issued by:</span>
                    <span className="text-gray-300">{certificate.issuer}</span>
                  </div>

                  <p className="text-gray-300 mb-6">{certificate.description}</p>

                  <a 
                    href={certificate.credentialLink}
                    className="futuristic-button text-sm inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Credential
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="futuristic-card text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h4 className="text-xl font-bold mb-2">Industry Recognition</h4>
            <p className="text-gray-300">Certified by leading technology companies and educational institutions</p>
          </div>
          
          <div className="futuristic-card text-center">
            <div className="text-4xl mb-4">📚</div>
            <h4 className="text-xl font-bold mb-2">Continuous Learning</h4>
            <p className="text-gray-300">Regularly updating skills through professional certifications</p>
          </div>
          
          <div className="futuristic-card text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h4 className="text-xl font-bold mb-2">Expert Validation</h4>
            <p className="text-gray-300">Verified expertise in modern web development technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates; 