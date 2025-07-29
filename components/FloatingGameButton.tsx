'use client'

import { motion } from 'framer-motion'
import { Gamepad2 } from 'lucide-react'

const FloatingGameButton = () => {
  return (
    <motion.a
      href="/game"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer transition-all duration-300"
    >
      <Gamepad2 className="w-6 h-6" />
    </motion.a>
  )
}

export default FloatingGameButton 