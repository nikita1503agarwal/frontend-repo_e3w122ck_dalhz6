import { motion } from 'framer-motion'

const card = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.08, duration: 0.5, ease: 'easeOut' } })
}

export default function About() {
  const stats = [
    { label: 'Members', value: '800+' },
    { label: 'Events / Year', value: '25+' },
    { label: 'Clubs & Tracks', value: '6' },
    { label: 'Partners', value: '15+' },
  ]

  return (
    <section id="about" className="relative w-full bg-emerald-950">
      {/* soft grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who We Are</h2>
          <p className="text-emerald-100/90 leading-relaxed">
            We are the FUTO chapter of the National Association of Computing Students (NACOS). Our mission is to inspire, connect, and equip students with the skills and experiences they need to excel in the world of technology.
          </p>
          <p className="text-emerald-100/80 mt-4">
            Through workshops, hackathons, meetups, and mentorship, we foster a culture of collaboration and continuous learning across software engineering, cybersecurity, AI, data science, and more.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={card}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-300/30 p-6 hover:bg-emerald-400/15 transition"
            >
              <div className="text-3xl font-extrabold text-emerald-300">{stat.value}</div>
              <div className="text-emerald-200/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
