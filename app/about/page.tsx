'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-primary-50 to-primary-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700">
      <Header />
      <About />
      <Footer />
    </main>
  )
} 