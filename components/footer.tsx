import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CRVE</h3>
            <p className="text-background/70 text-sm">
              Creative agency specializing in design, branding, web development, app development, and digital strategy.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-background/70 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-background/70 hover:text-background transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-background/70 hover:text-background transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-background/70 hover:text-background transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/70 hover:text-background transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/70 hover:text-background transition-colors">
                  Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@studio.com"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  hello@studio.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-background/70 hover:text-background transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
          <p>&copy; 2025 CRVE. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
