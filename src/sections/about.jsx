import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const About = () => {
  const experiences = [
    { year: '2023', title: 'Full Stack Developer', company: 'Tech Company', description: 'Developed and maintained web applications using MERN stack' },
    { year: '2022', title: 'Frontend Developer', company: 'Digital Agency', description: 'Created responsive and interactive user interfaces' },
    { year: '2021', title: 'Backend Developer', company: 'Startup', description: 'Built RESTful APIs and database architectures' },
  ];

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Ganti dengan Service ID, Template ID, dan Public Key Anda
      const result = await emailjs.sendForm(
        'service_ptm2zhc', // Ganti dengan Service ID Anda
        'template_m2bgo3t', // Ganti dengan Template ID Anda
        formRef.current,
        'AStyL5gBM6DLPrpI1' // Ganti dengan Public Key Anda
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="about" className="py-20 relative bg-black">
      {/* Background effect */}
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Kiri: Profile Window + Divider */}
          <div className="flex flex-col gap-8 items-center lg:items-start">
            <div className="flex flex-row items-stretch w-full max-w-md mx-auto lg:mx-0">
              {/* Profile Window */}
              <div className="relative flex-shrink-0" style={{ width: '100%' }}>
                <div className="futuristic-window h-full flex flex-col">
                  {/* Window Header */}
                  <div className="flex items-center gap-2 p-2 border-b border-cyan-500/20">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                    </div>
                    
                  </div>
                  {/* Profile Image Container */}
                  <div className="relative p-3 flex-1 flex flex-col justify-center">
                    <div className="relative aspect-square rounded-lg overflow-hidden border border-cyan-500/20">
                      <img
                        src="myprofile.jpg"
                        alt="myprofile.jpg"
                        className="w-full h-full object-cover"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="text-white text-xs">
                            <p className="font-bold">Dinul Islam Alfatiha</p>
                            <p className="text-cyan-300">MERN Stack Developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-3 -right-3 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
                  </div>
                  {/* Window Footer */}
                  <div className="p-2 border-t border-cyan-500/20 flex justify-between items-center text-xs text-gray-400">
                    <span>Portfolio 2024</span>
                    <span>MERN Stack</span>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-500/20 rounded-lg rotate-12 animate-float"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-lg -rotate-12 animate-float-delayed"></div>
              </div>
            </div>
            {/* Contact Information */}
            <div className="futuristic-card w-full">
              <h3 className="text-xl font-bold mb-4 text-gradient">Contact Information</h3>
              <div className="space-y-4">
                <a href="dinulisl4m@gmail.com" className="flex items-center gap-4 group">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h4 className="text-gray-400 text-sm">Email</h4>
                    <p className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">dinulisl4m@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+628114358811" className="flex items-center gap-4 group">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h4 className="text-gray-400 text-sm">Phone</h4>
                    <p className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">+62 811435 8811</p>
                  </div>
                </a>
                <a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h4 className="text-gray-400 text-sm">Location</h4>
                    <p className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">Jakarta, Indonesia</p>
                  </div>
                </a>
              </div>
            </div>
            {/* Connect With Me */}
            <div className="futuristic-card w-full">
              <h3 className="text-xl font-bold mb-4 text-gradient">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="futuristic-button text-sm bg-transparent border border-cyan-500/50 hover:border-cyan-500"><span className="mr-2">💼</span>LinkedIn</a>
                <a href="#" className="futuristic-button text-sm bg-transparent border border-cyan-500/50 hover:border-cyan-500"><span className="mr-2">📚</span>GitHub</a>
                <a href="#" className="futuristic-button text-sm bg-transparent border border-cyan-500/50 hover:border-cyan-500"><span className="mr-2">📷</span>Instagram</a>
              </div>
            </div>
          </div>
          {/* Divider Futuristik Ganda di Tengah */}
          <div className="hidden lg:flex flex-col items-center absolute left-1/2 top-0 z-10 h-full pointer-events-none" style={{ transform: 'translateX(-50%)' }}>
            <div className="flex flex-row gap-2 h-full items-center">
              <div className="w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent rounded-full shadow-lg animate-futuristic-divider" />
              <div className="w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent rounded-full shadow-lg animate-futuristic-divider" />
            </div>
          </div>
          {/* Kanan: About Me */}
          <div className="flex flex-col gap-8">
            {/* About Me */}
            <div className="futuristic-card">
              <h3 className="text-2xl font-bold mb-6 text-gradient">About Me</h3>
              <p className="text-gray-300 leading-relaxed">
              Fullstack Developer with 3+ years of experience specializing in building scalable applications using the MERN stack).
               Skilled in designing RESTful APIs, implementing modern UI with TailwindCSS and React Hooks, and managing data with Mongoose. 
               Proficient in Git, Postman, and deploying fullstack apps using platforms like Vercel and Render. Experienced in integrating third-party APIs,
                developing authentication systems, and optimizing performance for e-commerce and AI-powered platforms.
              </p>
              
            </div>
            {/* Send Message */}
            <div className="futuristic-card">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Send Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800/50 border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-white transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800/50 border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-white transition-colors duration-300"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800/50 border border-green-500/20 rounded-lg focus:border-green-500 focus:outline-none text-white transition-colors duration-300"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="futuristic-button w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/40 rounded-lg text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/20 border border-red-500/40 rounded-lg text-red-400 text-center">
                    Failed to send message. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
