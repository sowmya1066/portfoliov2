'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-dark-800 py-6 border-t border-gray-200 dark:border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
            <span>© {currentYear} John Doe. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and lots of coffee.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 