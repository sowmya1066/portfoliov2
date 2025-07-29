'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <main>
      <AnimatedBackground />
      <Header />
      <Hero />
      <Footer />
    </main>
  )
} 