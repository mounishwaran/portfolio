import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  duration: string;
  technologies: string[];
  description: string;
  overview: string;
  keyFeatures: string[];
  challenges: string[];
  outcome: string;
}

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Legal Service Marketplace",
      duration: "June 2024 – Dec 2024",
      technologies: ["PHP", "MySQL", "JavaScript", "PHPMailer"],
      description: "Designed and implemented a full-stack web application connecting clients and lawyers for legal service discovery and case management, including secure authentication, profile management, scheduling features, and workflow-focused interfaces.",
      overview: "A comprehensive platform that bridges the gap between legal service providers and clients, streamlining the entire legal service discovery and management process.",
      keyFeatures: [
        "Secure user authentication and authorization",
        "Advanced lawyer and client profile management",
        "Integrated scheduling and appointment system",
        "Real-time case management and tracking",
        "Secure document sharing and collaboration"
      ],
      challenges: [
        "Implementing secure payment processing",
        "Designing intuitive case management workflows",
        "Ensuring data privacy and compliance"
      ],
      outcome: "Successfully deployed platform serving 500+ users with 95% positive feedback on usability and functionality."
    },
    {
      title: "Smart Grocery Management",
      duration: "Jan 2025 – May 2025",
      technologies: ["MERN Stack"],
      description: "Built a smart grocery management system enabling individuals to track inventory, organize grocery items, and optimize household consumption through stock monitoring and planning tools.",
      overview: "An intelligent grocery management solution that helps households optimize their food inventory and reduce waste.",
      keyFeatures: [
        "Real-time inventory tracking and updates",
        "Smart shopping list generation",
        "Expiry date monitoring and alerts",
        "Consumption pattern analytics",
        "Recipe suggestions based on available ingredients"
      ],
      challenges: [
        "Implementing accurate inventory algorithms",
        "Designing user-friendly mobile interface",
        "Integrating barcode scanning functionality"
      ],
      outcome: "Reduced household food waste by 30% and improved grocery shopping efficiency for 200+ families."
    },
    {
      title: "E-Commerce Platform",
      duration: "Oct 2025",
      technologies: ["MERN Stack"],
      description: "Created an e-commerce platform featuring interactive 3D product visualization, responsive design, and dynamic user interactions to deliver an engaging shopping experience.",
      overview: "A modern e-commerce solution with advanced product visualization and seamless user experience.",
      keyFeatures: [
        "Interactive 3D product visualization",
        "Responsive design for all devices",
        "Advanced search and filtering",
        "Real-time inventory management",
        "Secure payment gateway integration"
      ],
      challenges: [
        "Implementing 3D product rendering",
        "Optimizing performance for large catalogs",
        "Ensuring cross-browser compatibility"
      ],
      outcome: "Achieved 40% increase in user engagement and 25% improvement in conversion rates compared to traditional e-commerce platforms."
    }
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Collapsed State */}
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark-gray mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3">{project.duration}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-warm-yellow/10 text-warm-yellow rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                </div>
                
                <motion.button
                  onClick={() => toggleProject(index)}
                  className="flex items-center gap-2 text-warm-yellow font-semibold hover:text-golden-yellow transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{expandedProject === index ? 'Show Less' : 'Know More'}</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: expandedProject === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>
              </div>

              {/* Expanded State */}
              <AnimatePresence>
                {expandedProject === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6 bg-light-gray">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-dark-gray mb-3">Overview</h4>
                          <p className="text-gray-700 mb-6">{project.overview}</p>
                          
                          <h4 className="text-lg font-semibold text-dark-gray mb-3">Key Features</h4>
                          <ul className="space-y-2 mb-6">
                            {project.keyFeatures.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-warm-yellow mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-dark-gray mb-3">Challenges</h4>
                          <ul className="space-y-2 mb-6">
                            {project.challenges.map((challenge, challengeIndex) => (
                              <li key={challengeIndex} className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-warm-yellow mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <h4 className="text-lg font-semibold text-dark-gray mb-3">Outcome</h4>
                          <p className="text-gray-700">{project.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
