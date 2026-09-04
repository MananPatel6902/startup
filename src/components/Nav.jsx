import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/process', label: 'Process' },
  { to: '/team', label: 'About' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [pathname])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link to="/" className="brand" aria-label="WorkAidly home">
          <picture>
            <source media="(min-width: 1200px)" srcSet="/WorkAidly_Concept3_Final_Checked/06_Web_Ready/navbar-960px.png" />
            <source media="(min-width: 600px)" srcSet="/WorkAidly_Concept3_Final_Checked/06_Web_Ready/navbar-480px.png" />
            <img
              className="brand-logo"
              src="/WorkAidly_Concept3_Final_Checked/06_Web_Ready/navbar-240px.png"
              alt="WorkAidly"
              width="240"
              height="50"
            />
          </picture>
        </Link>

        <div className="desktop-nav">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} aria-current={pathname === to ? 'page' : undefined} className={pathname === to ? 'active' : ''}>
              {label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="/contact" aria-current={pathname === '/contact' ? 'page' : undefined} className="nav-cta">
            Start a project <span aria-hidden="true">↗</span>
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        {links.map(({ to, label }) => (
          <Link key={to} to={to} aria-current={pathname === to ? 'page' : undefined} onClick={() => setMenuOpen(false)} className={pathname === to ? 'active' : ''}>
            {label}<span aria-hidden="true">↗</span>
          </Link>
        ))}
        <Link to="/contact" aria-current={pathname === '/contact' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>Start a project<span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  )
}
