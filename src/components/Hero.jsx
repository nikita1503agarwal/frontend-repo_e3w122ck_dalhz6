import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xm1zyUmdIZRP4-d1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-emerald-950/60 to-emerald-950/90 pointer-events-none" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-300/30 mb-4">
            Empowering Future Technologists
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            National Association of Computing Students
          </h1>
          <p className="mt-4 max-w-2xl text-emerald-100/90 text-base md:text-lg">
            FUTO Chapter • Building a vibrant community of developers, designers, and innovators.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="#join" className="rounded-xl bg-emerald-400 px-5 py-3 text-emerald-950 font-semibold shadow-[0_10px_30px_-10px] shadow-emerald-500/60 ring-1 ring-emerald-300 hover:brightness-95 transition">
              Join the Community
            </a>
            <a href="#events" className="rounded-xl px-5 py-3 text-emerald-200 ring-1 ring-emerald-300/40 hover:bg-emerald-400/10 transition">
              Upcoming Events
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
