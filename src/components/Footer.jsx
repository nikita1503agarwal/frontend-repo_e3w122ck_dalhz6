export default function Footer() {
  return (
    <footer id="contact" className="relative w-full bg-emerald-950">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="text-lg font-extrabold tracking-tight text-emerald-100">NACOS FUTO</div>
          <p className="text-emerald-100/80 mt-2 text-sm">National Association of Computing Students • Federal University of Technology Owerri</p>
        </div>
        <div className="text-emerald-100/80 text-sm">
          <div className="font-semibold text-emerald-200">Quick Links</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#events" className="hover:text-white transition">Events</a></li>
            <li><a href="#join" className="hover:text-white transition">Join</a></li>
          </ul>
        </div>
        <div className="text-emerald-100/80 text-sm">
          <div className="font-semibold text-emerald-200">Contact</div>
          <p className="mt-2">nacosfuto@example.com</p>
          <p>FUTO, Owerri, Imo State</p>
        </div>
      </div>
      <div className="border-t border-emerald-800/60">
        <div className="mx-auto max-w-7xl px-6 py-6 text-emerald-300/70 text-xs">
          © {new Date().getFullYear()} NACOS FUTO. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
