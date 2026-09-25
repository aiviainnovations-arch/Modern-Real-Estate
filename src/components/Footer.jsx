import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="container-edit py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 md:gap-8">
        <div>
          <Link to="/" className="font-serif text-2xl text-ivory">
            Luxe <span className="text-bronze-light">Estates</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed max-w-xs text-ivory/60">
            A curated real estate practice representing distinctive residences
            and developments across Gujarat and Mumbai.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="text-ivory/60 hover:text-bronze-light transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-ivory/60 hover:text-bronze-light transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="text-ivory/60 hover:text-bronze-light transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-widest2 uppercase text-ivory/40 mb-5">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/properties" className="hover:text-bronze-light transition-colors">Properties</Link></li>
            <li><Link to="/projects" className="hover:text-bronze-light transition-colors">Projects</Link></li>
            <li><Link to="/about" className="hover:text-bronze-light transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-bronze-light transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest2 uppercase text-ivory/40 mb-5">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-bronze-light transition-colors">Our Story</Link></li>
            <li><Link to="/properties" className="hover:text-bronze-light transition-colors">Buy a Home</Link></li>
            <li><Link to="/projects" className="hover:text-bronze-light transition-colors">Developments</Link></li>
            <li><Link to="/contact" className="hover:text-bronze-light transition-colors">Enquire</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest2 uppercase text-ivory/40 mb-5">Contact</h3>
          <ul className="space-y-3 text-sm text-ivory/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-bronze-light" />
              <span>204 Alkapuri Avenue, Vadodara, Gujarat 390007</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-bronze-light" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-bronze-light" />
              <span>hello@luxeestates.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-edit py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/40">
          <p>© {year} Luxe Estates. All rights reserved.</p>
          <p>Designed for those who appreciate space.</p>
        </div>
      </div>
    </footer>
  )
}
