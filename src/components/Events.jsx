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

  return (
    <section id="events" className="relative w-full bg-gradient-to-b from-emerald-950 to-emerald-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((ev) => (
            <div key={ev.title} className="rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-300/30 p-6 hover:bg-emerald-400/15 transition">
              <div className="text-emerald-300 text-sm font-medium">{ev.date}</div>
              <div className="text-white text-xl font-semibold mt-2">{ev.title}</div>
              <p className="text-emerald-100/80 mt-2 text-sm leading-relaxed">{ev.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
