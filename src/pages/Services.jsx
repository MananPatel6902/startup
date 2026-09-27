import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* ── Tabbed Services Data ──────────────────────────── */
const tabs = [
  {
    id: 'saas',
    label: 'SaaS Development',
    icon: 'cloud_sync',
    headline: 'SaaS Development',
    body: 'We architect end-to-end multi-tenant platforms built for scale. From billing & auth to role-based dashboards, our SaaS foundations are engineered to grow with your user base - and your revenue.',
    points: ['Multi-tenant architecture', 'Subscription & billing integration', 'Role-based access control', 'Usage analytics & metering'],
  },
  {
    id: 'custom',
    label: 'Custom Software',
    icon: 'code_blocks',
    headline: 'Custom Software',
    body: 'Bespoke applications engineered around your exact operational constraints. We reject generic templates and build precise tools that solve the problem you actually have - not one that fits a pre-packaged solution.',
    points: ['Domain-specific tooling', 'Legacy system modernisation', 'API-first architecture', 'Thorough documentation'],
  },
  {
    id: 'web',
    label: 'Website & Web Apps',
    icon: 'web',
    headline: 'Website & Web Apps',
    body: 'From high-conversion landing pages to complex data-driven applications, we create digital experiences that feel intentional and perform flawlessly. Every pixel serves a purpose.',
    points: ['High-conversion landing pages', 'Complex web applications', 'CMS integration', 'Performance-first development'],
  },
  {
    id: 'automation',
    label: 'Automation & Integration',
    icon: 'hub',
    headline: 'Automation & Integration',
    body: 'Connect your disparate tools into a single, intelligent workflow. We eliminate manual overhead by orchestrating APIs, webhooks, and data pipelines that run 24/7 without you touching them.',
    points: ['Workflow orchestration', 'Third-party API integration', 'Data pipeline automation', 'Custom webhook systems'],
  },
  {
    id: 'ai',
    label: 'AI / ML Development',
    icon: 'psychology',
    headline: 'AI / ML Development',
    body: 'We build intelligent systems that go beyond demos - production-grade AI features embedded into your product. From LLM-powered workflows to custom ML models, we ship AI that actually delivers value.',
    points: ['LLM integration & fine-tuning', 'RAG pipelines', 'ML model development', 'AI-powered automation'],
  },
]

const stackCells = [1, 4, 7, 10, 12, 15, 18, 21, 23, 24, 25, 34, 35, 36, 37, 46, 47, 48, 51, 56, 59, 61, 64, 67, 70]

const stackTechnologies = [
  { name: 'React', icon: 'hub' },
  { name: 'Node.js', mark: 'JS' },
  { name: 'PostgreSQL', icon: 'database' },
  { name: 'Stripe', mark: 'S' },
  { name: 'AWS', icon: 'cloud' },
  { name: 'Docker', icon: 'deployed_code' },
  { name: 'Python', mark: 'Py' },
  { name: 'TypeScript', mark: 'TS' },
  { name: 'FastAPI', icon: 'bolt' },
  { name: 'Redis', icon: 'layers' },
  { name: 'Next.js', mark: 'N' },
  { name: 'Tailwind CSS', icon: 'air' },
  { name: 'Framer Motion', icon: 'motion_mode' },
  { name: 'Vercel', icon: 'change_history' },
  { name: 'Sanity', mark: 'S' },
  { name: 'n8n', icon: 'schema' },
  { name: 'Zapier', icon: 'asterisk' },
  { name: 'Make', icon: 'conversion_path' },
  { name: 'REST APIs', icon: 'api' },
  { name: 'Webhooks', icon: 'webhook' },
  { name: 'OpenAI', icon: 'psychology' },
  { name: 'LangChain', icon: 'link' },
  { name: 'PyTorch', icon: 'local_fire_department' },
  { name: 'Pinecone', icon: 'park' },
  { name: 'Hugging Face', icon: 'sentiment_satisfied' },
].map((technology, index) => ({ ...technology, cell: stackCells[index] }))

const stackTechnologyByCell = new Map(stackTechnologies.map((technology) => [technology.cell, technology]))

function StackMark({ technology }) {
  if (technology.icon) {
    return <span className="material-symbols-outlined" aria-hidden="true">{technology.icon}</span>
  }

  return <strong aria-hidden="true">{technology.mark}</strong>
}

const edge = [
  { icon: 'architecture', title: 'Tailored Solutions', desc: 'No templates. We build specific tools for specific problems.' },
  { icon: 'layers', title: 'Cross-Domain', desc: 'Expertise spanning from simple web to complex AI automation.' },
  { icon: 'bolt', title: 'Clean Execution', desc: 'Readable code, maintainable systems, reliable delivery.' },
  { icon: 'monitoring', title: 'Scalable Systems', desc: 'Architectures that grow seamlessly with your user base.' },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [dialVisible, setDialVisible] = useState(() => typeof window !== 'undefined' && !('IntersectionObserver' in window))
  const dialRef = useRef(null)
  const active = tabs.find((t) => t.id === activeTab)

  useEffect(() => {
    const dial = dialRef.current
    if (!dial) return undefined

    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setDialVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.35 })

    observer.observe(dial)
    return () => observer.disconnect()
  }, [])

  return (
    <div id="main-content" className="services-page bg-background text-on-surface font-body">
      <Nav />

      {/* Page Hero */}
      <section className="services-stack-hero" aria-labelledby="services-stack-title">
        <div className="services-stack-shell">
          <div className="services-stack-grid" aria-label="Languages, platforms, and tools we work with">
            {Array.from({ length: 72 }, (_, index) => {
              const technology = stackTechnologyByCell.get(index)
              const row = Math.floor(index / 12)
              const column = index % 12
              const centerVoid = (row === 2 || row === 3) && column >= 2 && column <= 9

              if (!technology) {
                return <span key={index} className={`services-stack-tile services-stack-tile-empty ${centerVoid ? 'is-center' : ''}`} aria-hidden="true" />
              }

              return (
                <div
                  key={technology.name}
                  className="services-stack-tile services-stack-logo"
                  data-name={technology.name}
                  aria-label={technology.name}
                  title={technology.name}
                >
                  <StackMark technology={technology} />
                </div>
              )
            })}
          </div>

          <div className="services-stack-copy">
            <span>Languages · platforms · delivery</span>
            <h1 id="services-stack-title">One team for your <em>whole stack.</em></h1>
            <p>From interface to infrastructure and applied AI, we choose tools around the product—not the other way around.</p>
            <Link to="#service-catalog">Explore our services <span aria-hidden="true">↓</span></Link>
          </div>

          <div className="services-stack-count" aria-hidden="true">
            <span>{stackTechnologies.length}</span>
            <small>technologies<br />one delivery system</small>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: Tabbed Services Panel ── */}
      <section id="service-catalog" className="py-20 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden shadow-lg border border-outline-variant/20">

            {/* Sidebar */}
            <div className="lg:w-72 shrink-0 bg-surface-container-low">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-7 py-5 flex items-center gap-3 transition-all duration-200 border-b border-outline-variant/15 last:border-b-0
                    ${activeTab === tab.id
                      ? 'bg-primary text-on-primary font-semibold'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                    }`}
                >
                  <span className={`material-symbols-outlined text-xl ${activeTab === tab.id ? 'text-on-primary' : 'text-primary'}`}>
                    {tab.icon}
                  </span>
                  <span className="text-sm font-medium leading-tight">{tab.label}</span>
                  {activeTab === tab.id && (
                    <span className="material-symbols-outlined text-sm ml-auto">chevron_right</span>
                  )}
                </button>
              ))}
            </div>

            {/* Detail Panel */}
            <div className="flex-1 p-10 md:p-14 bg-surface-container-lowest">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-5">{active.headline}</h2>
              <p className="text-on-surface-variant text-base font-light leading-relaxed mb-8 max-w-2xl">{active.body}</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {active.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-sm text-on-surface font-medium">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: '14px' }}>check</span>
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-primary text-on-primary rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                Start a {active.label} project
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WorkAidly Edge */}
      <section className="py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-12">The WorkAidly Edge</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {edge.map(({ icon, title, desc }) => (
                  <div key={title} className="space-y-3">
                    <span className="material-symbols-outlined text-primary">{icon}</span>
                    <h4 className="font-bold text-lg">{title}</h4>
                    <p className="text-on-surface-variant text-sm font-light">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                ref={dialRef}
                className={`edge-reliability-dial aspect-square rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] ${dialVisible ? 'is-visible' : ''}`}
                role="img"
                aria-label="99 percent uptime and reliability"
              >
                <svg className="edge-reliability-rings" viewBox="0 0 100 100" aria-hidden="true">
                  <circle className="edge-dial-track edge-dial-track-outer" cx="50" cy="50" r="42" pathLength="100" />
                  <circle className="edge-dial-ring edge-dial-ring-outer" cx="50" cy="50" r="42" pathLength="100" strokeDasharray="96.5 100" />
                  <circle className="edge-dial-track edge-dial-track-inner" cx="50" cy="50" r="32.5" pathLength="100" />
                  <circle className="edge-dial-ring edge-dial-ring-inner" cx="50" cy="50" r="32.5" pathLength="100" strokeDasharray="96.5 100" />
                </svg>

                <div className="edge-reliability-copy" aria-hidden="true">
                  <span className="edge-reliability-value">99<span>%</span></span>
                  <span className="edge-reliability-label">Uptime &amp; Reliability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-surface-container-low/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">Ready to build something that actually works?</h2>
          <p className="text-on-surface-variant text-lg font-light mb-10">Tell us what you need. We'll shape the right solution.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
          >
            Book a Consultation
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
