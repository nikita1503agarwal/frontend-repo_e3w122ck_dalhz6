import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="join" className="relative w-full bg-emerald-900 overflow-hidden">
      {/* subtle moving gradient */}
      <motion.div
        aria-hidden
        className="absolute -inset-16 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.08),transparent_30%,rgba(163,230,53,0.08),transparent_70%)] blur-2xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Ready to build with us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-emerald-100/90"
        >
          Become a member and get access to workshops, mentorship, and career opportunities.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <a href="#" className="rounded-xl bg-emerald-400 px-5 py-3 text-emerald-950 font-semibold shadow-[0_10px_30px_-10px] shadow-emerald-500/60 ring-1 ring-emerald-300 hover:brightness-95 transition">
            Join NACOS FUTO
          </a>
          <a href="#contact" className="rounded-xl px-5 py-3 text-emerald-200 ring-1 ring-emerald-300/40 hover:bg-emerald-400/10 transition">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
