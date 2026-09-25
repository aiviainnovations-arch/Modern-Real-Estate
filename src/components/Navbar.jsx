import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Properties', to: '/properties' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ivory/95 backdrop-blur border-b border-line' : 'bg-ivory/0 border-b border-transparent'
      }`}
    >
      <nav className="container-edit flex items-center justify-between h-20 md:h-24">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-serif text-2xl md:text-[26px] tracking-wide text-charcoal"
        >
          Luxe <span className="text-bronze">Estates</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors duration-300 hover:text-bronze ${
                  isActive ? 'text-bronze' : 'text-charcoal-soft'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link to="/properties" className="hidden md:inline-flex btn-primary">
          Explore Properties
        </Link>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-charcoal p-2 -mr-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-20 bottom-0 bg-ivory transition-transform duration-300 ease-smooth ${
          open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-10 pb-10">
          <div className="flex flex-col gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-serif text-3xl ${isActive ? 'text-bronze' : 'text-charcoal'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <Link
            to="/properties"
            onClick={() => setOpen(false)}
            className="btn-primary mt-auto w-full"
          >
            Explore Properties
          </Link>
        </div>
      </div>
    </header>
  )
}
