import { motion } from 'framer-motion'
import { useCallback } from 'react'

export default function Events() {
  const events = [
    {
      title: 'HackFUTO 2025',
      date: 'Mar 15, 2025',
      desc: 'A 24-hour campus-wide hackathon bringing innovative minds together to build impactful solutions.',
    },
    {
      title: 'AI Study Jam',
      date: 'Apr 8, 2025',
      desc: 'Hands-on workshop introducing ML fundamentals, model training, and deployment best practices.',
    },
    {
      title: 'Cybersecurity Bootcamp',
      date: 'May 3, 2025',
      desc: 'Learn ethical hacking, threat modeling, and blue-team tactics in a guided, lab-based format.',
    },
  ];

  const handleMove = useCallback((e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--x', `${x}px`);
    target.style.setProperty('--y', `${y}px`);
  }, [])

  return (
    <section id="events" className="relative w-full bg-gradient-to-b from-emerald-950 to-emerald-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Upcoming Events
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((ev, idx) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: 16, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -4, boxShadow: '0 10px 40px -12px rgba(16,185,129,0.45)' }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.08 + idx * 0.08, ease: 'easeOut' }}
              onMouseMove={handleMove}
              className="relative overflow-hidden rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-300/30 p-6 transition group"
              style={{ backgroundImage: 'radial-gradient(600px 200px at var(--x) var(--y), rgba(163,230,53,0.12), transparent 70%)' }}
            >
              <div className="text-emerald-300 text-sm font-medium">{ev.date}</div>
              <div className="text-white text-xl font-semibold mt-2">{ev.title}</div>
              <p className="text-emerald-100/80 mt-2 text-sm leading-relaxed">{ev.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
