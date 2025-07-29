'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
}

const ProjectCard = ({ title, description, technologies, image, liveUrl, githubUrl }: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative w-full h-80 cursor-pointer perspective-1000"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="w-full h-48 bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{title}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">{description}</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-accent-500 rounded-xl shadow-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
              <p className="text-white/90 text-sm mb-4">{description}</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/20 text-white text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Live</span>
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard