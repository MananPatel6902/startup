import { Link } from 'react-router-dom'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/process', label: 'Process' },
  { to: '/team', label: 'About us' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <p className="eyebrow eyebrow-light">Have an ambitious idea?</p>
            <h2>Let’s turn it into something <em>remarkable.</em></h2>
          </div>
          <Link to="/contact" className="footer-cta">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand brand-light">
              <img
                className="brand-logo"
                src="/WorkAidly_Concept3_Final_Checked/06_Web_Ready/navbar-480px.png"
                alt="WorkAidly"
                width="480"
                height="100"
              />
            </Link>
            <p>Digital products, platforms, and automation built with clarity, craft, and commercial purpose.</p>
          </div>

          <div>
            <p className="footer-label">Explore</p>
            <div className="footer-links">
              {links.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
            </div>
          </div>

          <div>
            <p className="footer-label">Connect</p>
            <div className="footer-links">
              <a href="mailto:connect@workaidly.com">connect@workaidly.com</a>
              <span>India · Working globally</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} WorkAidly. All rights reserved.</span>
          <span>Strategy · Design · Engineering</span>
        </div>
      </div>
    </footer>
  )
}
