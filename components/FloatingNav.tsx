'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, Code, Folder, Mail } from 'lucide-react'

const FloatingNav = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Skills', href: '/skills', icon: Code },
    { name: 'Projects', href: '/projects', icon: Folder },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={item.href}
                className={`p-3 rounded-full transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-accent-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-400'
                }`}
              >
                <item.icon className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-accent-500 rounded-full"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.nav>
  )
}

export default FloatingNav 