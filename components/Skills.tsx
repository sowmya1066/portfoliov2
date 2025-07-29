'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Zap,
  Shield,
  Palette,
  Cpu
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android", "Mobile UI/UX"]
    },
    {
      title: "DevOps & Tools",
      icon: Cloud,
      skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"]
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "User Research"]
    },
    {
      title: "Other Technologies",
      icon: Cpu,
      skills: ["MongoDB", "PostgreSQL", "Redis", "WebSocket", "PWA", "SEO"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I work with modern technologies to create efficient, scalable, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/20 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-accent-100 dark:hover:bg-accent-900/20 hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm constantly exploring new technologies and best practices to stay current in this fast-evolving field.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-accent-600 dark:text-accent-400">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">Fast Learning</span>
              </div>
              <div className="flex items-center space-x-2 text-accent-600 dark:text-accent-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Best Practices</span>
              </div>
              <div className="flex items-center space-x-2 text-accent-600 dark:text-accent-400">
                <GitBranch className="w-5 h-5" />
                <span className="text-sm font-medium">Version Control</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 