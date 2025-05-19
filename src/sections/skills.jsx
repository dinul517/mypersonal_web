import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "Redux", level: 90, icon: "🔄" },
        { name: "Material UI", level: 85, icon: "🎯" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 95, icon: "🟢" },
        { name: "Express.js", level: 95, icon: "🚂" },
        { name: "MongoDB", level: 90, icon: "🍃" },
        { name: "REST APIs", level: 95, icon: "🌐" },
        { name: "GraphQL", level: 85, icon: "📊" },
        { name: "Socket.io", level: 80, icon: "🔌" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90, icon: "📦" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "CI/CD", level: 85, icon: "🔄" },
        { name: "Jest", level: 85, icon: "🧪" },
        { name: "Webpack", level: 80, icon: "📦" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center mb-16">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="futuristic-card">
              <h3 className="text-xl font-bold mb-6 text-gradient">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gradient">Additional Expertise</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Responsive Design",
              "Performance Optimization",
              "Security Best Practices",
              "Database Design",
              "API Integration",
              "State Management",
              "Testing & Debugging",
              "Code Review"
            ].map((skill, index) => (
              <div 
                key={index}
                className="tech-stack-item justify-center text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="futuristic-card text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-xl font-bold mb-2">Fast Development</h4>
            <p className="text-gray-300">Quick implementation of features with clean, maintainable code</p>
          </div>
          
          <div className="futuristic-card text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h4 className="text-xl font-bold mb-2">Secure Code</h4>
            <p className="text-gray-300">Implementation of security best practices and data protection</p>
          </div>
          
          <div className="futuristic-card text-center">
            <div className="text-4xl mb-4">📱</div>
            <h4 className="text-xl font-bold mb-2">Responsive Design</h4>
            <p className="text-gray-300">Creating applications that work seamlessly across all devices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 