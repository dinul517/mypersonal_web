import React, { useState } from 'react';

const Project = () => {
  // Removed state for activeFilter

  const projects = [
    {
      id: 1,
      title: "E-Commerce-ai platform",
      description: "E-commerce AI App is a full-stack MERN application with AI features like smart product recommendations, chatbot support, and intelligent search. It includes user authentication, a responsive UI, shopping cart, and admin dashboard..",
      image: "/public/image.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      liveLink: "https://ecomerce-ai.vercel.app/",
      githubLink: "https://github.com/dinul517/ecommerce-ai"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative task management platform with real-time updates and team collaboration features.",
      image: "",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "fullstack",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "finwise-ai",
      description: "finwise-ai is a full-stack MERN application that helps users manage income, expenses, and savings efficiently. Integrated with AI, the app provides smart budgeting insights, automated spending analysis, and personalized financial recommendations. It features secure authentication, a responsive UI, and interactive financial dashboards.",
      image: "/public/finwise.png",
      technologies: ["React", "Express", "MongoDB", "Chart.js"],
      category: "frontend",
      liveLink: "https://fortofolio2-github-io.vercel.app/",
      githubLink: ""
    }
  ];

  // Removed filters array

  // Removed filteredProjects constant and logic

  return (
    <section id="projects" className="py-20 relative bg-black">
      {/* Background effect */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center mb-16">Featured Projects</h2>
      
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => ( // Directly map over projects
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
                      Link project
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

        
        
      </div>
    </section>
  );
};

export default Project;
