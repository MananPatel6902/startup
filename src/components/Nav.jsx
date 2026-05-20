import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/team', label: 'Team' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf9f8]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <span className="material-symbols-outlined text-[#4f46e5] text-2xl">grain</span>
          <span className="text-2xl font-headline font-bold tracking-[-0.02em] text-[#1C1B1B]">WorkAidly</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors ${
                pathname === to ? 'text-[#4f46e5]' : 'text-[#1C1B1B]/70 hover:text-[#4f46e5]'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-semibold hover:-translate-y-px transition-all duration-200"
          >
            Contact
          </Link>
        </div>

        <button className="md:hidden text-on-surface" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#fcf9f8]/95 backdrop-blur-xl px-8 pb-6 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#1C1B1B]/70 hover:text-[#4f46e5] transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="self-start px-5 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-semibold"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
