'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '15+' },
  ]

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Built and maintained multiple web applications with focus on performance and user experience.',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      description: 'Created responsive and interactive user interfaces using modern JavaScript frameworks.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating innovative solutions and exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white">
                Who I Am
              </h3>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                I'm a dedicated full-stack developer with over 5 years of experience in creating 
                modern web applications. I specialize in React, Node.js, and cloud technologies, 
                always striving to write clean, maintainable code and deliver exceptional user experiences.
              </p>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Personal Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                <span className="text-dark-700 dark:text-dark-300">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                <span className="text-dark-700 dark:text-dark-300">Available for new opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                <span className="text-dark-700 dark:text-dark-300">Computer Science Degree</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-dark-800 dark:to-dark-700 rounded-xl border border-accent-200 dark:border-dark-600"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white flex items-center space-x-2">
                <Briefcase className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                <span>Experience</span>
              </h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-white dark:bg-dark-800 rounded-lg border border-dark-200 dark:border-dark-700 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-dark-900 dark:text-white">{exp.title}</h4>
                      <span className="text-sm text-accent-600 dark:text-accent-400">{exp.period}</span>
                    </div>
                    <p className="text-sm text-accent-600 dark:text-accent-400 mb-2">{exp.company}</p>
                    <p className="text-sm text-dark-600 dark:text-dark-400">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 