import Link from "next/link"
import { Instagram, Twitter, Linkedin, Globe, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="relative pt-48 pb-32 px-6 md:px-12 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        
        <div className="flex-1">
          <h2 className="text-[14vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-white mb-12 select-none">
            LET&apos;S<br />TALK.
          </h2>
          <div className="flex flex-col gap-6">
            <a href="mailto:hello@crve.studio" className="text-3xl md:text-4xl font-semibold hover:text-[#FF6B50] transition-all w-fit">
              hello@crve.studio
            </a>
            <p className="text-[#666666] flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Available for worldwide collaborations.
            </p>
          </div>
        </div>

        <div className="flex gap-4 md:mb-6">
          <a href="#" className="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2">
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-40 pt-10 border-t border-[#111111] flex flex-col md:flex-row justify-between text-[#333333] text-[10px] font-bold uppercase tracking-widest">
        <p>&copy; 2024 CRVE Agency. All rights reserved.</p>
        <div className="flex gap-10 mt-6 md:mt-0">
          <a href="#" className="hover:text-[#666666] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#666666] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
