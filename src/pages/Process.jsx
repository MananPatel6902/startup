import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const steps = [
  { icon: 'search', title: 'Discover', sub: 'Audit & Scope', desc: 'We start by deeply understanding your current state - auditing your existing systems, workflows, and pain points to scope the right engagement.' },
  { icon: 'forum', title: 'Understand', sub: 'Strategy Alignment', desc: 'Through structured sessions, we align on your goals, constraints, and success metrics. Strategy before execution.' },
  { icon: 'edit_note', title: 'Plan', sub: 'Architecture', desc: 'We design the technical architecture and project roadmap, breaking work into clear, deliverable milestones.' },
  { icon: 'palette', title: 'Design', sub: 'Visual & UX', desc: 'Pixel-perfect interfaces grounded in user research. We design experiences that feel intuitive and intentional.' },
  { icon: 'rocket_launch', title: 'Build', sub: 'Engineering', desc: 'Clean, documented, maintainable code. We build fast without cutting corners - tested and reviewed at every step.' },
  { icon: 'support_agent', title: 'Support', sub: 'Lifecycle Growth', desc: "Post-launch isn't the end. We provide ongoing support, monitoring, and iterative improvements as your product scales." },
]

const principles = [
  { icon: 'visibility', title: 'Full Transparency', desc: 'You get access to progress reports, live staging environments, and direct communication with the team at every stage.' },
  { icon: 'timer', title: 'Velocity Without Compromise', desc: "We move fast because we've refined our process - not because we skip steps. Quality is non-negotiable." },
  { icon: 'sync', title: 'Iterative by Design', desc: 'Every project is built to evolve. We structure work in phases that deliver value incrementally.' },
  { icon: 'handshake', title: 'True Partnership', desc: "We treat your project as if it's our own. Your success metrics are our success metrics." },
]

export default function Process() {
  return (
    <div id="main-content" className="bg-background text-on-surface font-body">
      <Nav />

      {/* Page Hero */}
      <section className="pt-40 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 text-primary text-xs font-label tracking-widest font-semibold mb-6">
            HOW WE WORK
          </span>
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface leading-[1.1] mb-4">
            The Delivery Thread
          </h1>
          <p className="text-on-surface-variant text-lg font-light max-w-2xl">
            A six-stage process designed for clarity, velocity, and outcomes that actually last.
          </p>
        </div>
      </section>

      {/* Thread Steps */}
      <section className="py-16 px-8 bg-surface-container-low/20">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-8 right-8 h-px border-t border-dashed border-primary/30 -z-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map(({ icon, title, sub, desc }, i) => (
                <div key={title} className="relative flex flex-col group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg border border-primary/10 flex items-center justify-center z-10 group-hover:scale-110 transition-transform shrink-0">
                      <span className="material-symbols-outlined text-primary">{icon}</span>
                    </div>
                    <div>
                      <span className="text-xs text-on-surface-variant uppercase tracking-widest font-label block mb-1">Step {i + 1}</span>
                      <h3 className="font-bold text-lg leading-tight">{title}</h3>
                      <p className="text-xs text-primary font-medium uppercase tracking-wider">{sub}</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm font-light leading-relaxed pl-20">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Principles */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-xl">
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Why Our Process Works</h2>
            <p className="text-on-surface-variant text-lg font-light">Built on years of refining what it takes to deliver digital solutions that last.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {principles.map(({ icon, title, desc }) => (
              <div key={title} className="p-8 bg-surface-container-lowest rounded-3xl hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">{icon}</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">{title}</h3>
                <p className="text-on-surface-variant font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="py-24 px-8 bg-on-surface">
        <div className="max-w-5xl mx-auto text-center text-surface">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to start your <span className="text-secondary-fixed-dim italic">thread</span>?
          </h2>
          <p className="text-surface-variant text-xl font-light mb-12 max-w-2xl mx-auto">
            Every great product begins with a conversation. Let's discover what you're building.
          </p>
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
