export default function CTA() {
  return (
    <section id="join" className="relative w-full bg-emerald-900">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to build with us?</h2>
        <p className="mt-3 text-emerald-100/90">Become a member and get access to workshops, mentorship, and career opportunities.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#" className="rounded-xl bg-emerald-400 px-5 py-3 text-emerald-950 font-semibold shadow-[0_10px_30px_-10px] shadow-emerald-500/60 ring-1 ring-emerald-300 hover:brightness-95 transition">
            Join NACOS FUTO
          </a>
          <a href="#contact" className="rounded-xl px-5 py-3 text-emerald-200 ring-1 ring-emerald-300/40 hover:bg-emerald-400/10 transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
