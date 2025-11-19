import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-500"
        style={{ scaleX }}
      />

      {/* Decorative background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Events />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
