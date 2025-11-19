export default function About() {
  return (
    <section id="about" className="relative w-full bg-emerald-950">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who We Are</h2>
          <p className="text-emerald-100/90 leading-relaxed">
            We are the FUTO chapter of the National Association of Computing Students (NACOS). Our mission is to inspire, connect, and equip students with the skills and experiences they need to excel in the world of technology.
          </p>
          <p className="text-emerald-100/80 mt-4">
            Through workshops, hackathons, meetups, and mentorship, we foster a culture of collaboration and continuous learning across software engineering, cybersecurity, AI, data science, and more.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Members', value: '800+' },
            { label: 'Events / Year', value: '25+' },
            { label: 'Clubs & Tracks', value: '6' },
            { label: 'Partners', value: '15+' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-300/30 p-6">
              <div className="text-3xl font-extrabold text-emerald-300">{stat.value}</div>
              <div className="text-emerald-200/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
