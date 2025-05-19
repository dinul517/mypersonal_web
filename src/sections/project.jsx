import React, { useState } from 'react';

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative task management platform with real-time updates and team collaboration features.",
      image: "/projects/taskmanager.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "fullstack",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and reporting.",
      image: "/projects/dashboard.jpg",
      technologies: ["React", "Express", "MongoDB", "Chart.js"],
      category: "frontend",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center mb-16">Featured Projects</h2>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300
                ${activeFilter === filter.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group">
              <div className="futuristic-card h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-video bg-gray-800 relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gradient">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-gray-800/50 text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={project.liveLink}
                      className="futuristic-button text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      className="futuristic-button text-sm bg-transparent border border-cyan-500/50 hover:border-cyan-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="#"
            className="futuristic-button inline-flex items-center gap-2"
          >
            View All Projects
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
