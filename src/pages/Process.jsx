import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const steps = [
  { title: 'Discover', output: 'Discovery brief', desc: 'Align on goals, users and success.', artifact: 'brief' },
  { title: 'Understand', output: 'Workflow map', desc: 'Turn research into a shared plan.', artifact: 'research' },
  { title: 'Plan', output: 'Architecture plan', desc: 'Design the right structure to scale.', artifact: 'architecture' },
  { title: 'Design', output: 'Design system', desc: 'Create a consistent, flexible foundation.', artifact: 'design' },
  { title: 'Build', output: 'Working product', desc: 'Ship real software early and iterate.', artifact: 'build' },
  { title: 'Support', output: 'Release & learn', desc: 'Launch, measure and keep improving.', artifact: 'release' },
]

const principles = [
  { icon: 'visibility', title: 'Full Transparency', desc: 'You get access to progress reports, live staging environments, and direct communication with the team at every stage.' },
  { icon: 'timer', title: 'Velocity Without Compromise', desc: "We move fast because we've refined our process - not because we skip steps. Quality is non-negotiable." },
  { icon: 'sync', title: 'Iterative by Design', desc: 'Every project is built to evolve. We structure work in phases that deliver value incrementally.' },
  { icon: 'handshake', title: 'True Partnership', desc: "We treat your project as if it's our own. Your success metrics are our success metrics." },
]

function ProcessArtifact({ type }) {
  if (type === 'brief') {
    return (
      <div className="delivery-artifact delivery-artifact-brief" aria-hidden="true">
        <i /><i /><div><strong>Project brief</strong><span /><span /><span /><b /></div>
      </div>
    )
  }

  if (type === 'research') {
    return (
      <div className="delivery-artifact delivery-artifact-research" aria-hidden="true">
        <div className="research-top"><strong>User insights</strong><span>⌕</span></div>
        <div className="research-data"><div className="research-bars"><i /><i /><i /><i /></div><b>72<small>%</small></b></div>
        <div className="research-row"><i /><span>User needs</span><b /></div>
        <div className="research-row"><i /><span>Jobs to be done</span><b /></div>
      </div>
    )
  }

  if (type === 'architecture') {
    return (
      <div className="delivery-artifact delivery-artifact-architecture" aria-hidden="true">
        <strong>System architecture</strong>
        <div className="architecture-map"><span /><span /><span /><span /><span /><i /><i /><i /></div>
      </div>
    )
  }

  if (type === 'design') {
    return (
      <div className="delivery-artifact delivery-artifact-design" aria-hidden="true">
        <strong>Design tokens</strong>
        <div className="token-row"><i /><i /><i /><i /><i /><b>Aa</b></div>
        <small>UI components</small>
        <div className="component-row"><span>Button</span><i /><b /></div>
      </div>
    )
  }

  if (type === 'build') {
    return (
      <div className="delivery-artifact delivery-artifact-build" aria-hidden="true">
        <div className="build-sidebar"><b>W</b><i /><i /><i /><i /></div>
        <div className="build-canvas"><small>Working build</small><strong>Turn work<br />into progress</strong><span /><span /><div><i /><b /></div></div>
      </div>
    )
  }

  return (
    <div className="delivery-artifact delivery-artifact-release" aria-hidden="true">
      <div className="release-top"><strong>Live & learning</strong><span><i /> Live</span></div>
      <div className="release-chart"><svg viewBox="0 0 180 64" preserveAspectRatio="none"><path d="M2 56 C22 35 34 54 54 42 S83 38 99 29 S128 36 145 18 S164 22 178 4" /></svg><b>+42%</b></div>
      <div className="release-stats"><span><small>Users</small>12.4K</span><span><small>Activation</small>68%</span><span><small>Rating</small>4.8</span></div>
    </div>
  )
}

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

      {/* Connected delivery map */}
      <section className="delivery-map-wrap" aria-labelledby="delivery-map-title">
        <div className="delivery-map">
          <header className="delivery-map-heading">
            <span>The WorkAidly process</span>
            <h2 id="delivery-map-title">Six stages. One team.<br /><em>No handoff gaps.</em></h2>
          </header>

          <div className="delivery-map-canvas">
            <svg className="delivery-connections" viewBox="0 0 1200 640" preserveAspectRatio="none" aria-hidden="true">
              <path d="M125 152 C205 152 175 415 270 415" />
              <path d="M350 415 C430 415 395 165 485 165" />
              <path d="M565 165 C645 165 620 435 710 435" />
              <path d="M790 435 C865 435 835 155 925 155" />
              <path d="M1005 155 C1080 155 1055 420 1150 420" />
            </svg>

            {steps.map((step, index) => (
              <article key={step.title} className={`delivery-node delivery-node-${index + 1}`}>
                <ProcessArtifact type={step.artifact} />
                <div className="delivery-node-copy">
                  <span>{String(index + 1).padStart(2, '0')} · {step.title}</span>
                  <h3>{step.output}</h3>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="delivery-map-closing">The same product team stays close from the first question to the first release — and the next one.</p>
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
