import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <Link href="/" className="text-lg font-extrabold tracking-tight text-white">
              CRVE<span className="text-neutral-600">.</span>
            </Link>
            <p className="text-sm text-neutral-600 mt-4 max-w-xs leading-relaxed">
              An independent design and development studio based in Port Harcourt.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-16">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li><Link href="/about" className="nav-link text-sm text-neutral-600 hover:text-white">About</Link></li>
                <li><Link href="/portfolio" className="nav-link text-sm text-neutral-600 hover:text-white">Portfolio</Link></li>
                <li><Link href="/services" className="nav-link text-sm text-neutral-600 hover:text-white">Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-4">Social</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="nav-link text-sm text-neutral-600 hover:text-white">Instagram</a></li>
                <li><a href="#" className="nav-link text-sm text-neutral-600 hover:text-white">Twitter</a></li>
                <li><a href="#" className="nav-link text-sm text-neutral-600 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-4">Contact</h4>
              <ul className="space-y-2.5">
                <li><a href="mailto:hello@crve.studio" className="nav-link text-sm text-neutral-600 hover:text-white">hello@crve.studio</a></li>
                <li><span className="text-sm text-neutral-600">Port Harcourt, Nigeria</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
          <p>&copy; 2026 CRVE. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="nav-link hover:text-white">Privacy</a>
            <a href="#" className="nav-link hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
