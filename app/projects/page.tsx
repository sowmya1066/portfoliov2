'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-primary-50 to-primary-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700">
      <Header />
      <Projects />
      <Footer />
    </main>
  )
} 