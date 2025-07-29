'use client'

import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Color Overlays */}
      <motion.div
        animate={{
          background: [
            'linear-gradient(45deg, rgba(147, 51, 234, 0.05) 0%, rgba(202, 5, 77, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
            'linear-gradient(45deg, rgba(202, 5, 77, 0.05) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(147, 51, 234, 0.05) 100%)',
            'linear-gradient(45deg, rgba(236, 72, 153, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(202, 5, 77, 0.05) 100%)',
            'linear-gradient(45deg, rgba(147, 51, 234, 0.05) 0%, rgba(202, 5, 77, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0"
      />

      {/* Subtle Floating Geometric Shapes */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-red-500/15 to-pink-500/15 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/15 to-red-500/15 rounded-full blur-3xl"
      />

      {/* Animated Color Patches */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-r from-purple-500/15 to-red-500/15 rounded-full blur-2xl"
      />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-2">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Animated Color Lines */}
      <motion.div
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
      />

      <motion.div
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 0.15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
          delay: 3
        }}
        className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"
      />

      {/* Diagonal Color Streaks */}
      <motion.div
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-pink-500/10 to-transparent"
      />

      <motion.div
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 4.5
        }}
        className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-transparent via-red-500/10 to-transparent"
      />
    </div>
  )
}

export default AnimatedBackground 