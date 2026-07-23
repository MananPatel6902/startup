import { useState } from 'react'
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
    stack: [
      { label: 'React', icon: '⚛' },
      { label: 'Node.js', icon: '⬢' },
      { label: 'PostgreSQL', icon: '🐘' },
      { label: 'Stripe', icon: '💳' },
      { label: 'AWS', icon: '☁' },
      { label: 'Docker', icon: '🐳' },
    ],
  },
  {
    id: 'custom',
    label: 'Custom Software',
    icon: 'code_blocks',
    headline: 'Custom Software',
    body: 'Bespoke applications engineered around your exact operational constraints. We reject generic templates and build precise tools that solve the problem you actually have - not one that fits a pre-packaged solution.',
    points: ['Domain-specific tooling', 'Legacy system modernisation', 'API-first architecture', 'Thorough documentation'],
    stack: [
      { label: 'Python', icon: '🐍' },
      { label: 'TypeScript', icon: '🔷' },
      { label: 'FastAPI', icon: '⚡' },
      { label: 'React', icon: '⚛' },
      { label: 'Redis', icon: '🔴' },
      { label: 'PostgreSQL', icon: '🐘' },
    ],
  },
  {
    id: 'web',
    label: 'Website & Web Apps',
    icon: 'web',
    headline: 'Website & Web Apps',
    body: 'From high-conversion landing pages to complex data-driven applications, we create digital experiences that feel intentional and perform flawlessly. Every pixel serves a purpose.',
    points: ['High-conversion landing pages', 'Complex web applications', 'CMS integration', 'Performance-first development'],
    stack: [
      { label: 'React', icon: '⚛' },
      { label: 'Next.js', icon: '▲' },
      { label: 'TailwindCSS', icon: '🌊' },
      { label: 'Framer Motion', icon: '🎞' },
      { label: 'Vercel', icon: '▲' },
      { label: 'Sanity', icon: '📐' },
    ],
  },
  {
    id: 'automation',
    label: 'Automation & Integration',
    icon: 'hub',
    headline: 'Automation & Integration',
    body: 'Connect your disparate tools into a single, intelligent workflow. We eliminate manual overhead by orchestrating APIs, webhooks, and data pipelines that run 24/7 without you touching them.',
    points: ['Workflow orchestration', 'Third-party API integration', 'Data pipeline automation', 'Custom webhook systems'],
    stack: [
      { label: 'n8n', icon: '🔗' },
      { label: 'Zapier', icon: '⚡' },
      { label: 'Python', icon: '🐍' },
      { label: 'Make', icon: '🔧' },
      { label: 'REST APIs', icon: '🌐' },
      { label: 'Webhooks', icon: '📡' },
    ],
  },
  {
    id: 'ai',
    label: 'AI / ML Development',
    icon: 'psychology',
    headline: 'AI / ML Development',
    body: 'We build intelligent systems that go beyond demos - production-grade AI features embedded into your product. From LLM-powered workflows to custom ML models, we ship AI that actually delivers value.',
    points: ['LLM integration & fine-tuning', 'RAG pipelines', 'ML model development', 'AI-powered automation'],
    stack: [
      { label: 'OpenAI', icon: '🤖' },
      { label: 'LangChain', icon: '🔗' },
      { label: 'Python', icon: '🐍' },
      { label: 'PyTorch', icon: '🔥' },
      { label: 'Pinecone', icon: '🌲' },
      { label: 'HuggingFace', icon: '🤗' },
    ],
  },
]

const edge = [
  { icon: 'architecture', title: 'Tailored Solutions', desc: 'No templates. We build specific tools for specific problems.' },
  { icon: 'layers', title: 'Cross-Domain', desc: 'Expertise spanning from simple web to complex AI automation.' },
  { icon: 'bolt', title: 'Clean Execution', desc: 'Readable code, maintainable systems, reliable delivery.' },
  { icon: 'monitoring', title: 'Scalable Systems', desc: 'Architectures that grow seamlessly with your user base.' },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const active = tabs.find((t) => t.id === activeTab)

  return (
    <div id="main-content" className="bg-background text-on-surface font-body">
      <Nav />

      {/* Page Hero */}
      <section className="pt-40 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 text-primary text-xs font-label tracking-widest font-semibold mb-6">
            WHAT WE DO
          </span>
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface leading-[1.1] mb-4">
            Our Core Ecosystem
          </h1>
          <p className="text-on-surface-variant text-lg font-light max-w-2xl">
            A focused range of digital services designed for high-impact execution - from product strategy and platform architecture to automation and applied AI.
          </p>
        </div>
      </section>

      {/* ── SECTION 1: Tabbed Services Panel ── */}
      <section className="py-16 px-8 bg-surface-container-lowest">
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

              {/* Tech Stack */}
              <div>
                <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-4">Tech Stack</p>
                <div className="flex flex-wrap gap-3">
                  {active.stack.map(({ label, icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:border-primary/30 hover:bg-primary/5 transition-all"
                    >
                      <span className="text-lg leading-none">{icon}</span>
                      <span className="text-xs font-semibold text-on-surface">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

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
              <div className="bg-primary/5 rounded-[4rem] p-12 aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="2 2" strokeWidth="0.1" />
                    <circle cx="50" cy="50" fill="none" r="30" stroke="currentColor" strokeWidth="0.1" />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-7xl font-headline font-extrabold text-primary block mb-2">99%</span>
                  <span className="text-on-surface-variant uppercase font-label tracking-widest text-xs">Uptime &amp; Reliability</span>
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
