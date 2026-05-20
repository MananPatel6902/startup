import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Our Services' },
  { to: '/process', label: 'Our Process' },
  { to: '/team', label: 'Our Team' },
  { to: '/contact', label: 'Contact Us' },
]

const serviceLinks = [
  { to: '/services', label: 'SaaS Development' },
  { to: '/services', label: 'Custom Software' },
  { to: '/services', label: 'Website & Web Apps' },
  { to: '/services', label: 'Automation & Integration' },
  { to: '/services', label: 'AI / ML Development' },
  { to: '/services', label: 'Academic Support' },
]

const offices = [
  {
    country: 'INDIA',
    flag: '🇮🇳',
    address: 'Digital First Operations\nMumbai, Maharashtra\nIndia',
  },
  {
    country: 'GLOBAL',
    flag: '🌐',
    address: 'Remote-First Team\nServing clients across\nUS · UK · AU · Middle East',
  },
]

const socials = [
  { icon: 'facebook', label: 'Facebook' },
  { icon: 'twitter', label: 'Twitter' },
  { icon: 'instagram', label: 'Instagram' },
  { icon: 'linkedin', label: 'LinkedIn' },
]

const reviews = [
  { name: 'Clutch', stars: 5 },
  { name: 'Glassdoor', stars: 5 },
  { name: 'Upwork', stars: 5 },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f0e17] text-white">
      {/* Main footer columns */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-12">
        {/* Brand row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-[#c3c0ff] text-2xl">grain</span>
              <span className="text-2xl font-headline font-bold tracking-[-0.02em]">WorkAidly</span>
            </Link>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
              Your end-to-end digital partner — building SaaS products, custom software, automation systems, and tailored solutions that actually work.
            </p>
            <a
              href="mailto:hello@workaidly.com"
              className="inline-flex items-center gap-2 text-[#c3c0ff] text-sm font-medium hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              hello@workaidly.com
            </a>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 flex-1 max-w-2xl">
            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-label uppercase tracking-widest text-white/40 mb-6 flex items-center gap-2">
                <span className="text-[#4f46e5]">◆</span> Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-white/60 hover:text-white transition-colors border-b border-dashed border-white/10 pb-2 block hover:border-white/30"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-xs font-label uppercase tracking-widest text-white/40 mb-6 flex items-center gap-2">
                <span className="text-[#4f46e5]">◆</span> Our Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-white/60 hover:text-white transition-colors border-b border-dashed border-white/10 pb-2 block hover:border-white/30"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices */}
            <div>
              <h4 className="text-xs font-label uppercase tracking-widest text-white/40 mb-6 flex items-center gap-2">
                <span className="text-[#4f46e5]">◆</span> Our Offices
              </h4>
              <div className="space-y-8">
                {offices.map(({ country, flag, address }) => (
                  <div key={country}>
                    <p className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <span>{flag}</span> {country}
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#c3c0ff] text-sm mt-0.5">location_on</span>
                      <p className="text-white/50 text-xs leading-relaxed whitespace-pre-line">{address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Review badges */}
          <div className="flex gap-4">
            {reviews.map(({ name, stars }) => (
              <div
                key={name}
                className="flex items-center gap-2 px-4 py-2.5 border border-white/15 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="text-xs font-bold text-white">{name}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/30 text-xs text-center">
            © 2024 WorkAidly. All rights reserved. · Built with precision.
          </p>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all text-xs font-bold"
              >
                {label[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
