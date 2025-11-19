import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-[90vh] w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xm1zyUmdIZRP4-d1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* layered gradients for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 via-emerald-950/60 to-emerald-950/95 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_60%)]" />

      {/* floating orbs */}
      <motion.div
        className="absolute -left-10 top-24 h-28 w-28 rounded-full bg-emerald-400/20 blur-xl"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-10 bottom-24 h-24 w-24 rounded-full bg-lime-300/20 blur-xl"
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-300/30 mb-4"
          >
            Empowering Future Technologists
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            National Association of Computing Students
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.35 }}
            className="mt-4 max-w-2xl text-emerald-100/90 text-base md:text-lg"
          >
            FUTO Chapter • Building a vibrant community of developers, designers, and innovators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3"
          >
            <a href="#join" className="rounded-xl bg-emerald-400 px-5 py-3 text-emerald-950 font-semibold shadow-[0_10px_30px_-10px] shadow-emerald-500/60 ring-1 ring-emerald-300 hover:brightness-95 transition">
              Join the Community
            </a>
            <a href="#events" className="rounded-xl px-5 py-3 text-emerald-200 ring-1 ring-emerald-300/40 hover:bg-emerald-400/10 transition">
              Upcoming Events
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
