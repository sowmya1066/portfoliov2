'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "AI Chat Platform",
      description: "Built a ChatGPT-like interface with custom AI models and voice interaction.",
      technologies: ["Next.js", "OpenAI", "WebRTC", "Redis"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      liveUrl: "https://ai-chat-demo.com",
      githubUrl: "https://github.com/username/ai-chat"
    },
    {
      title: "Crypto Trading Bot",
      description: "Automated trading system with 15% monthly returns using ML algorithms.",
      technologies: ["Python", "TensorFlow", "Binance API", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1621416894567-71976c3c3d8c?w=800&h=400&fit=crop",
      liveUrl: "https://trading-bot-demo.com",
      githubUrl: "https://github.com/username/trading-bot"
    },
    {
      title: "3D Portfolio Experience",
      description: "Immersive 3D portfolio with interactive elements and VR support.",
      technologies: ["Three.js", "WebGL", "VR", "React"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      liveUrl: "https://3d-portfolio-demo.com",
      githubUrl: "https://github.com/username/3d-portfolio"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment processing and inventory management.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/username/ecommerce"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <Sparkles className="w-6 h-6 text-accent-500" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating meaningful applications.
          </p>
        </motion.div>

        {/* Dynamic Layout */}
        <div className="space-y-8">
          {/* First Project - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-full overflow-hidden">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{projects[0].title}</h3>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-dark-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {projects[0].liveUrl && (
                    <motion.a
                      href={projects[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  )}
                  {projects[0].githubUrl && (
                    <motion.a
                      href={projects[0].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">View Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second Row - Two Medium Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(1, 3).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">View Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third Project - Large (Reversed) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 flex flex-col justify-center order-2 lg:order-1">
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                  {projects[3].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[3].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-dark-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {projects[3].liveUrl && (
                    <motion.a
                      href={projects[3].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  )}
                  {projects[3].githubUrl && (
                    <motion.a
                      href={projects[3].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">View Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
              <div className="relative h-64 lg:h-full overflow-hidden order-1 lg:order-2">
                <img
                  src={projects[3].image}
                  alt={projects[3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{projects[3].title}</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always working on new projects. Let's discuss how I can help bring your ideas to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 