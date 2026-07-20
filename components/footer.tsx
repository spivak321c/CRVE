import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="text-lg font-extrabold tracking-tight text-white">
              CRVE<span className="text-[#a6a6a6]">.</span>
            </Link>
            <p className="text-sm text-[#a6a6a6] mt-4 leading-relaxed">
              An independent design and development studio based in Port Harcourt.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="nav-link text-sm text-[#a6a6a6] hover:text-white transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="nav-link text-sm text-[#a6a6a6] hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="nav-link text-sm text-[#a6a6a6] hover:text-white transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">Social</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="nav-link text-sm text-[#a6a6a6] hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="nav-link text-sm text-[#a6a6a6] hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="nav-link text-sm text-[#a6a6a6] hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li><a href="mailto:hello@crve.studio" className="nav-link text-sm text-[#a6a6a6] hover:text-white transition-colors">hello@crve.studio</a></li>
              <li><span className="text-sm text-[#a6a6a6]">Port Harcourt, Nigeria</span></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-[#a6a6a6]">
          <p>&copy; 2026 CRVE. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="nav-link hover:text-white transition-colors">Privacy</a>
            <a href="#" className="nav-link hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
