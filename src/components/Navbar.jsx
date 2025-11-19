import { Menu, PartyPopper } from "lucide-react";
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: -6, scale: 1.03 }}
            className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-300/50"
          >
            <PartyPopper className="h-6 w-6 text-emerald-950" />
          </motion.div>
          <div>
            <div className="text-lg font-extrabold tracking-tight text-emerald-100">NACOS FUTO</div>
            <div className="text-xs text-emerald-300/70">National Association of Computing Students</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-emerald-100/80">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#events" className="hover:text-white transition">Events</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        <div className="hidden md:block">
          <a href="#join" className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2 text-emerald-950 font-semibold shadow-[0_10px_30px_-10px] shadow-emerald-500/60 ring-1 ring-emerald-300 hover:brightness-95 transition">
            Join NACOS
          </a>
        </div>

        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 ring-1 ring-emerald-300/30 text-emerald-100">
          <Menu className="h-6 w-6" />
        </button>
      </motion.div>
    </header>
  );
}
