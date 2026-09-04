import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const products = [
  {
    id: 'cineflow',
    index: '01',
    name: 'CineFlow OS',
    category: 'Studio operations · SaaS platform',
    status: 'Live',
    icon: 'space_dashboard',
    statement: 'One operations hub connecting sales, clients, delivery, editors, finance, and reporting.',
    description:
      'CineFlow OS runs a production studio end to end. A lead becomes a client, a client becomes a project, and the project moves through a visible workflow while payouts, expenses, and studio economics stay attached to the work that produced them.',
    audience: 'Production studios, editing teams, and studio management',
    roles: ['Studio admin', 'Lead editor', 'Contributor', 'Client portal'],
    modules: ['Command Center', 'Sales Leads', 'Client CRM', 'Projects Database', 'Editor Workspaces', 'Studio Finance', 'Business Analytics'],
    features: [
      'Sales pipeline from lead to converted client',
      'Board, table, all-project, and Gantt views',
      'Editor workspaces with scoped portal access',
      'Finance, payouts, and tax-ready reporting',
    ],
    metricLabel: 'Core outcome',
    metric: 'Production under control',
    url: 'https://cineflow-os.workaidlywriters.chatgpt.site/',
    guide: '/guides/cineflow-client-guide.pdf',
    guideMeta: 'PDF · 4 pages',
    review:
      'CineFlow gives the studio one place to move every project from brief to final delivery while keeping clients, editors, and payments in sync.',
    reviewer: 'Ayush Kumar',
    reviewerRole: 'Freelancing Editor, CineFlow OS User',
  },
  {
    id: 'lexflow',
    index: '02',
    name: 'LexFlow',
    category: 'Legal operations · Practice management',
    status: 'Live',
    icon: 'account_tree',
    statement: 'One calm workspace to move a matter from intake to court dates, tasks, documents, and fees.',
    description:
      'LexFlow is a focused practice-management workspace for legal matters and the operational work around them. Every module follows the same shape - add a record at the top, review the structured register below - so the whole practice reads the same matter context without jumping between separate trackers.',
    audience: 'Law firms, advocates, and legal operations teams',
    roles: ['Administrator', 'Staff'],
    modules: ['Dashboard', 'Clients', 'Cases', 'Hearings', 'Tasks', 'Documents', 'Fees', 'Users'],
    features: [
      'Matter lifecycle from intake through collection',
      'Court calendar tied to each matter',
      'Secure PDF vault with explicit sharing state',
      'Administrator and Staff roles with scoped navigation',
    ],
    metricLabel: 'Core outcome',
    metric: 'Matters clearly in view',
    url: 'https://lexflow-legal-practice.workaidlywriters.chatgpt.site/',
    guide: '/guides/lexflow-client-guide.pdf',
    guideMeta: 'PDF · 10 pages',
    review:
      'LexFlow brings matters, hearings, tasks, fees, and secure documents into one calm workspace the whole practice can understand.',
    reviewer: 'Dilip Patel',
    reviewerRole: 'Lawyer, Gujarat Bar Council',
  },
  {
    id: 'aarogya',
    index: '03',
    name: 'Aarogya',
    category: 'Healthcare operations · Hospital management',
    status: 'Live',
    icon: 'local_hospital',
    statement: 'Reception, queues, clinical care, pharmacy, and inventory on one shared patient record.',
    description:
      'Aarogya is a role-based hospital workspace where every team works from the same visit record. The handoffs that usually happen verbally - registration to queue, consultation to pharmacy, dispensing to stock - are made visible, and every important action stays traceable in an append-only activity trail.',
    audience: 'Hospitals and clinics - reception, clinical, pharmacy, and inventory teams',
    roles: ['Administrator', 'Reception', 'Clinician', 'Pharmacy'],
    modules: ['Control Centre', 'Patient Registration', 'Live Queue', 'Consultation', 'Pharmacy', 'Inventory', 'Activity Trail'],
    features: [
      'Self-registration or desk arrival, confirmed by reception',
      'Doctor-specific live queue with token issue',
      'Signed consultations released to pharmacy',
      'Batch inventory with expiry and reorder thresholds',
    ],
    metricLabel: 'Core outcome',
    metric: 'One record, every team',
    url: 'https://aarogya-hospital-demo.prakhyat-qlb.chatgpt.site/',
    guide: '/guides/aarogya-client-guide.pdf',
    guideMeta: 'PDF · 5 pages',
    review: null,
    reviewer: null,
    reviewerRole: null,
  },
  {
    id: 'silfira',
    index: '04',
    name: 'Silfira',
    category: 'Luxury real estate · Web experience',
    status: 'Live',
    icon: 'hotel',
    statement: 'A premium property-discovery experience that turns browsing into confident enquiries.',
    description:
      'Silfira presents curated properties the way a buyer wants to meet them - unhurried, well photographed, and easy to compare. The experience is built so that interest converts into a real enquiry without friction.',
    audience: 'Real estate firms and property investors',
    roles: ['Buyer', 'Agent'],
    modules: ['Curated listings', 'Featured properties', 'Valuation request', 'Enquiry capture'],
    features: [
      'Curated property discovery',
      'Rich featured-property presentation',
      'Valuation and enquiry journeys',
      'Performance-first, mobile-ready build',
    ],
    metricLabel: 'Core outcome',
    metric: 'Discovery to enquiry',
    url: 'https://www.silfira.co.in/',
    guide: null,
    guideMeta: null,
    review:
      'Silfira Realtors made our investment property search seamless. Their market knowledge and professionalism are unmatched.',
    reviewer: 'Mithil Patel',
    reviewerRole: 'Property Investor',
  },
]

const commonGround = [
  {
    icon: 'design_services',
    title: 'Designed around real work',
    desc: 'Every screen mirrors how the team already works, so the product is understood on day one instead of learned over weeks.',
  },
  {
    icon: 'shield_lock',
    title: 'Built to be trusted',
    desc: 'Access control, secure documents, and dependable data handling are part of the foundation, not a later retrofit.',
  },
  {
    icon: 'trending_up',
    title: 'Made to evolve',
    desc: 'Clear architecture means new modules, roles, and integrations can be added without unpicking what already ships.',
  },
  {
    icon: 'speed',
    title: 'Fast where it matters',
    desc: 'Performance is treated as a feature - quick loads, responsive interfaces, and no waiting on the paths people use most.',
  },
]

export default function Products() {
  return (
    <div id="main-content" className="bg-background text-on-surface font-body">
      <Nav />

      {/* Page Hero */}
      <section className="pt-40 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 text-primary text-xs font-label tracking-widest font-semibold mb-6">
            WHAT WE'VE BUILT
          </span>
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface leading-[1.1] mb-4">
            Our Products
          </h1>
          <p className="text-on-surface-variant text-lg font-light max-w-2xl">
            Platforms and experiences we have designed, engineered, and shipped - each one solving a specific operational problem for the people who use it every day.
          </p>
        </div>
      </section>

      {/* Thread separator */}
      <div className="px-8">
        <div className="max-w-7xl mx-auto thread-line" />
      </div>

      {/* Product Showcase */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {products.map((product, i) => (
            <article key={product.id} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Copy */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">{product.icon}</span>
                  </div>
                  <div>
                    <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant block">
                      {product.index} · {product.category}
                    </span>
                    <div className="flex items-center gap-3 mt-1">
                      <h2 className="font-headline text-3xl font-bold text-on-surface leading-tight">{product.name}</h2>
                      {product.status && (
                        <span className="px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary text-[11px] font-semibold tracking-wide uppercase">
                          {product.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="font-headline text-xl font-semibold text-on-surface leading-snug mb-4">{product.statement}</p>
                <p className="text-on-surface-variant font-light leading-relaxed mb-8">{product.description}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-on-surface font-medium">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '14px' }}>check</span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-8">
                  <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-3">Who uses it</p>
                  <div className="flex flex-wrap gap-2.5">
                    {product.roles.map((label) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 px-4 py-2 bg-surface-container-low rounded-full border border-outline-variant/20 hover:border-primary/30 hover:bg-primary/5 transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shadow-[0_0_0_4px_rgba(79,70,229,0.08)]" aria-hidden="true" />
                        <span className="text-xs font-semibold text-on-surface">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {product.url && (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all"
                    >
                      View live product
                      <span className="material-symbols-outlined text-base">arrow_outward</span>
                    </a>
                  )}
                  {product.guide && (
                    <a
                      href={product.guide}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                        product.url
                          ? 'border border-outline-variant/40 text-on-surface hover:border-primary/40 hover:bg-primary/5'
                          : 'bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/20'
                      }`}
                    >
                      <span className="material-symbols-outlined text-base">picture_as_pdf</span>
                      Read the client guide
                      <span className="text-xs font-normal opacity-70">({product.guideMeta})</span>
                    </a>
                  )}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-on-surface font-semibold text-sm rounded-xl hover:bg-surface-container-low transition-all"
                  >
                    Discuss a similar build
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Panel */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="p-8 md:p-10 bg-surface-container-lowest rounded-3xl border border-outline-variant/20 shadow-sm">
                  <div className="pb-7 mb-7 border-b border-outline-variant/20">
                    <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">
                      {product.metricLabel}
                    </p>
                    <p className="font-headline text-2xl font-bold text-primary">{product.metric}</p>
                    <p className="text-on-surface-variant text-sm font-light mt-3">
                      <span className="font-medium text-on-surface">Built for:</span> {product.audience}
                    </p>
                  </div>

                  <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-4">Inside the product</p>
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2.5 ${product.review ? 'mb-8' : ''}`}>
                    {product.modules.map((module) => (
                      <div
                        key={module}
                        className="flex items-center gap-2.5 px-4 py-2.5 bg-surface-container-low rounded-xl text-sm font-medium text-on-surface"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary shrink-0" aria-hidden="true" />
                        {module}
                      </div>
                    ))}
                  </div>

                  {product.review && (
                    <blockquote className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                      <span className="font-headline text-3xl text-primary/40 leading-none block mb-1" aria-hidden="true">&ldquo;</span>
                      <p className="text-on-surface text-sm font-light leading-relaxed italic mb-4">{product.review}</p>
                      <footer className="not-italic">
                        <span className="block text-sm font-semibold text-on-surface">{product.reviewer}</span>
                        <span className="block text-xs text-on-surface-variant">{product.reviewerRole}</span>
                      </footer>
                    </blockquote>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* What they share */}
      <section className="py-24 px-8 bg-on-surface text-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-xl">
            <span className="text-secondary-fixed-dim font-label tracking-widest text-xs font-semibold uppercase mb-4 block">
              Common Ground
            </span>
            <h2 className="font-headline text-4xl font-bold leading-tight">
              Different industries. The same standard underneath.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {commonGround.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary-fixed-dim">{icon}</span>
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold mb-2">{title}</h3>
                  <p className="text-surface-variant font-light text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface leading-tight mb-6">
            Your product could be the <span className="text-primary">next one here</span>.
          </h2>
          <p className="text-on-surface-variant text-lg font-light mb-12 max-w-2xl mx-auto">
            Tell us the problem you are trying to solve. We will shape the platform that solves it - and build it end to end.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
            >
              Start a Project
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 text-on-surface font-semibold text-lg hover:bg-surface-container-low transition-all rounded-xl"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
