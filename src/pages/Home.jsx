import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const capabilities = [
  { icon: 'cloud_sync', label: 'SaaS products' },
  { icon: 'web', label: 'Web experiences' },
  { icon: 'code_blocks', label: 'Custom software' },
  { icon: 'hub', label: 'Automation' },
  { icon: 'psychology', label: 'Applied AI' },
]

const services = [
  {
    number: '01',
    icon: 'cloud_sync',
    title: 'SaaS products',
    description: 'Multi-tenant platforms designed around a clear product model, dependable architecture, and room to scale.',
    tags: ['Product strategy', 'UX systems', 'Full-stack build'],
    featured: true,
  },
  {
    number: '02',
    icon: 'web',
    title: 'Web experiences',
    description: 'High-conversion websites and web apps where narrative, usability, and performance work together.',
    tags: ['Web design', 'Development'],
  },
  {
    number: '03',
    icon: 'code_blocks',
    title: 'Custom software',
    description: 'Purpose-built internal tools and operational platforms shaped around how your team actually works.',
    tags: ['System design', 'Engineering'],
  },
  {
    number: '04',
    icon: 'hub',
    title: 'Automation & AI',
    description: 'Connected workflows and practical intelligence that remove repetition without creating new complexity.',
    tags: ['Integrations', 'Applied AI'],
  },
]

const projects = [
  {
    id: 'flowdesk',
    index: '01',
    eyebrow: 'SaaS · Product design',
    name: 'FlowDesk',
    statement: 'One calm workspace for distributed teams to plan, align, and deliver.',
    metricLabel: 'Core outcome',
    metric: 'Clarity at scale',
    tone: 'indigo',
    icon: 'dashboard',
    columns: [
      { label: 'To plan', items: ['Research synthesis', 'Release brief'] },
      { label: 'In progress', items: ['Dashboard system', 'Team roles'] },
      { label: 'Complete', items: ['Product strategy', 'User journeys'] },
    ],
  },
  {
    id: 'opslink',
    index: '02',
    eyebrow: 'Automation · Applied AI',
    name: 'OpsLink',
    statement: 'An intelligent operations layer that keeps tools, data, and teams in sync.',
    metricLabel: 'Core outcome',
    metric: 'Connected operations',
    tone: 'teal',
    icon: 'hub',
    columns: [
      { label: 'Signals', items: ['New opportunity', 'Support request'] },
      { label: 'Automations', items: ['Enrich & route', 'Create workflow'] },
      { label: 'Outcomes', items: ['Team notified', 'Record updated'] },
    ],
  },
  {
    id: 'guestbrief',
    index: '03',
    eyebrow: 'Hospitality · Web platform',
    name: 'GuestBrief',
    statement: 'A more thoughtful digital guest journey, from first booking to final follow-up.',
    metricLabel: 'Core outcome',
    metric: 'Better guest journeys',
    tone: 'violet',
    icon: 'hotel',
    columns: [
      { label: 'Before stay', items: ['Welcome guide', 'Preferences'] },
      { label: 'During stay', items: ['Local services', 'Live requests'] },
      { label: 'After stay', items: ['Feedback loop', 'Return offer'] },
    ],
  },
]

const process = [
  { number: '01', title: 'Frame the right problem', body: 'We align on the commercial goal, user need, and technical constraints before choosing a solution.' },
  { number: '02', title: 'Shape the experience', body: 'Flows, interfaces, and architecture evolve together so the product feels coherent from every angle.' },
  { number: '03', title: 'Build in clear cycles', body: 'You see working progress early and often, with decisions documented and quality built into delivery.' },
  { number: '04', title: 'Launch, learn, improve', body: 'We stay close after release, using real signals to strengthen the product and plan what comes next.' },
]

const iconPaths = {
  cloud_sync: 'M6.5 18.5h10a4 4 0 0 0 .8-7.92A6 6 0 0 0 5.85 9.5 4.5 4.5 0 0 0 6.5 18.5Zm3-4 2 2 3.5-4M15 9.5l-2-2-3.5 4',
  web: 'M3.5 5.5h17v13h-17zM3.5 9h17M7 7.2h.01M10 7.2h.01',
  code_blocks: 'm8 8-4 4 4 4m8-8 4 4-4 4m-2.5-10-3 12',
  hub: 'M12 8v4m0 0-5 3m5-3 5 3M12 4a2 2 0 1 0 0 .01M7 15a2 2 0 1 0 0 .01M17 15a2 2 0 1 0 0 .01',
  psychology: 'M9.5 18.5h5m-4 2h3M8 15.5c-1.5-1.1-2.5-3-2.5-5a6.5 6.5 0 0 1 13 0c0 2-1 3.9-2.5 5-.8.6-1.2 1.2-1.3 2H9.3c-.1-.8-.5-1.4-1.3-2Z',
  dashboard: 'M4 4h7v7H4zm9 0h7v4h-7zm0 6h7v10h-7zM4 13h7v7H4z',
  hotel: 'M5 20V5h10v15M9 8h2m-2 3h2m-2 3h2m4-5h4v11H3m12-7h2m-2 3h2',
  space_dashboard: 'M4 4h7v8H4zm9 0h7v5h-7zm0 7h7v9h-7zM4 14h7v6H4z',
  account_tree: 'M6 5v7m0 0h11m-5 0V8m5 4v4M4 3h4v4H4zm6 3h4v4h-4zm5 8h4v4h-4z',
  data_object: 'M8 4C5 4 4 6 4 8s1 4 4 4m8-8c3 0 4 2 4 4s-1 4-4 4M8 12c-3 0-4 2-4 4s1 4 4 4m8-8c3 0 4 2 4 4s-1 4-4 4',
  monitoring: 'M4 18V9m5 9V5m5 13v-6m5 6V3',
  lightbulb: 'M9 18h6m-5 2h4M8 15c-1.2-1-2-2.5-2-4.2a6 6 0 0 1 12 0c0 1.7-.8 3.2-2 4.2-.7.6-1 1.1-1 2H9c0-.9-.3-1.4-1-2Z',
  draw: 'm5 18 1-4L16 4l4 4-10 10-5 1Zm9-12 4 4',
  code: 'm8 7-5 5 5 5m8-10 5 5-5 5m-2.5-12-3 14',
  rocket_launch: 'M14 5c3-2 5-2 5-2s0 2-2 5l-4 4-5-1-1-5 4-4 3 3ZM8 12l-3 1-2 4 5-2m4 1-1 5 4-2 1-3M6 18l-2 2',
  check_circle: 'M20 11a8 8 0 1 1-4.5-7.2M8 11.5l2.5 2.5L20 4.5',
  auto_awesome: 'm12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3ZM6 13l.8 2.2L9 16l-2.2.8L6 19l-.8-2.2L3 16l2.2-.8L6 13Zm11 1 .8 2.2L20 17l-2.2.8L17 20l-.8-2.2L14 17l2.2-.8L17 14Z',
}

function Icon({ name, className = '' }) {
  return (
    <svg className={`ui-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={iconPaths[name] ?? iconPaths.auto_awesome} />
    </svg>
  )
}

function WorkflowPreview({ project }) {
  return (
    <div className={`work-preview work-preview-${project.tone}`}>
      <div className="preview-topbar">
        <div className="preview-brand">
          <span className="preview-logo"><i /><i /><i /></span>
          <span>{project.name}</span>
        </div>
        <div className="preview-status"><span /> Live workspace</div>
      </div>
      <div className="preview-body">
        <aside className="preview-sidebar" aria-hidden="true">
          <span className="active" />
          <span />
          <span />
          <span />
        </aside>
        <div className="preview-content">
          <div className="preview-heading">
            <div>
              <small>Workspace</small>
              <strong>Delivery overview</strong>
            </div>
            <button type="button" tabIndex="-1">+ Add item</button>
          </div>
          <div className="preview-columns">
            {project.columns.map((column, columnIndex) => (
              <div className="preview-column" key={column.label}>
                <div className="preview-column-title">
                  <span>{column.label}</span>
                  <small>0{columnIndex + 2}</small>
                </div>
                {column.items.map((item, itemIndex) => (
                  <div className="preview-task" key={item}>
                    <span className={`preview-task-icon icon-${itemIndex}`} />
                    <p>{item}</p>
                    <div className="preview-task-meta"><i /><i /></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0].id)
  const selectedProject = projects.find((project) => project.id === activeProject) ?? projects[0]

  return (
    <div className="home-page">
      <Nav />

      <main id="main-content" tabIndex="-1">
        <section className="home-hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />

          <div className="home-container hero-layout">
            <div className="hero-copy">
              <div className="hero-eyebrow">
                <span className="eyebrow-pulse" />
                Digital product partner
                <span className="eyebrow-rule" />
              </div>
              <h1>
                Ideas become<br />
                <em>useful digital</em><br />
                products here.
              </h1>
              <p>
                Strategy, design, and engineering in one focused team. We turn ambitious ideas into software people understand, trust, and use.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="button button-primary">
                  Start a project <span aria-hidden="true">↗</span>
                </Link>
                <Link to="/services" className="button button-quiet">
                  Explore our work <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="hero-proof">
                <div className="proof-avatars" aria-hidden="true">
                  <span>ST</span><span>UX</span><span>EN</span>
                </div>
                <p><strong>One connected team</strong><br />Strategy · UX · Engineering</p>
              </div>
            </div>

            <div className="hero-visual" aria-label="A connected digital product workflow">
              <div className="visual-caption caption-top">
                <span className="caption-dot" />
                From idea to launch
              </div>
              <div className="product-canvas">
                <div className="canvas-topbar">
                  <div className="canvas-dots"><i /><i /><i /></div>
                  <div className="canvas-title">WorkAidly / Delivery OS</div>
                  <div className="canvas-live"><span /> Live</div>
                </div>
                <div className="canvas-body">
                  <aside className="canvas-sidebar">
                    <div className="canvas-mini-brand"><i /><i /><i /></div>
                    <span className="active"><Icon name="space_dashboard" /></span>
                    <span><Icon name="account_tree" /></span>
                    <span><Icon name="data_object" /></span>
                    <span><Icon name="monitoring" /></span>
                  </aside>
                  <div className="canvas-main">
                    <div className="canvas-heading">
                      <div><small>Product command center</small><strong>Good morning, team.</strong></div>
                      <div className="canvas-avatar">WA</div>
                    </div>
                    <div className="canvas-stats">
                      <div><small>Product strategy</small><strong>Aligned</strong><span className="status-positive">Ready</span></div>
                      <div><small>Current sprint</small><strong>04 / Build</strong><span>On track</span></div>
                      <div><small>Launch status</small><strong>Quality check</strong><span>In review</span></div>
                    </div>
                    <div className="workflow-card">
                      <div className="workflow-title"><span>Connected delivery</span><small>This week</small></div>
                      <div className="workflow-track" aria-hidden="true">
                        <div className="workflow-line" />
                        <div className="workflow-node node-done"><i><Icon name="lightbulb" /></i><span>Strategy</span><small>Complete</small></div>
                        <div className="workflow-node node-done"><i><Icon name="draw" /></i><span>Design</span><small>Complete</small></div>
                        <div className="workflow-node node-active"><i><Icon name="code" /></i><span>Build</span><small>In progress</small></div>
                        <div className="workflow-node"><i><Icon name="rocket_launch" /></i><span>Launch</span><small>Next</small></div>
                      </div>
                    </div>
                    <div className="canvas-bottom-row">
                      <div className="activity-card">
                        <div className="mini-label">Recent decisions</div>
                        <p><span className="activity-icon">✓</span> Onboarding flow approved</p>
                        <p><span className="activity-icon">✓</span> API architecture aligned</p>
                      </div>
                      <div className="pulse-card">
                        <div className="mini-label">Delivery pulse</div>
                        <div className="pulse-chart" aria-hidden="true">
                          <i style={{ height: '38%' }} /><i style={{ height: '52%' }} /><i style={{ height: '44%' }} />
                          <i style={{ height: '72%' }} /><i style={{ height: '64%' }} /><i style={{ height: '88%' }} />
                          <i style={{ height: '78%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-note note-one">
                <Icon name="check_circle" className="note-status-icon" />
                <div><small>System status</small><strong>Everything connected</strong></div>
              </div>
              <div className="floating-note note-two">
                <div className="note-icon"><Icon name="auto_awesome" /></div>
                <div><small>Built around</small><strong>Your workflow</strong></div>
              </div>
            </div>
          </div>

          <div className="home-container capability-rail" aria-label="Our capabilities">
            <span className="rail-intro">What we build</span>
            {capabilities.map((item) => (
              <div key={item.label} className="rail-item">
                <Icon name={item.icon} />
                {item.label}
              </div>
            ))}
          </div>
        </section>

        <section className="work-section">
          <div className="home-container">
            <div className="section-heading work-heading">
              <div>
                <span className="section-kicker">Selected work</span>
                <h2>Proof lives in the <em>product.</em></h2>
              </div>
              <p>We connect strategic thinking with careful execution-creating digital products that are useful on day one and adaptable long after.</p>
            </div>

            <div className="work-showcase">
              <div className="work-copy">
                <div className="work-tabs" role="tablist" aria-label="Featured projects">
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      type="button"
                      role="tab"
                      aria-selected={activeProject === project.id}
                      aria-controls="project-panel"
                      className={activeProject === project.id ? 'active' : ''}
                      onClick={() => setActiveProject(project.id)}
                    >
                      <span>{project.index}</span>
                      <strong>{project.name}</strong>
                      <Icon name={project.icon} />
                    </button>
                  ))}
                </div>

                <div className="work-description" aria-live="polite">
                  <span>{selectedProject.eyebrow}</span>
                  <h3>{selectedProject.statement}</h3>
                  <div className="work-outcome">
                    <small>{selectedProject.metricLabel}</small>
                    <strong>{selectedProject.metric}</strong>
                  </div>
                  <Link to="/contact">Discuss a similar project <span aria-hidden="true">↗</span></Link>
                </div>
              </div>

              <div id="project-panel" role="tabpanel" className="work-visual">
                <WorkflowPreview project={selectedProject} />
                <span className="work-stamp">Designed to<br />move work forward</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="home-container">
            <div className="section-heading services-heading">
              <div>
                <span className="section-kicker">Capabilities</span>
                <h2>Different needs.<br /><em>One joined-up team.</em></h2>
              </div>
              <Link to="/services" className="text-link">Explore all services <span aria-hidden="true">↗</span></Link>
            </div>

            <div className="services-bento">
              {services.map((service) => (
                <article className={`service-card ${service.featured ? 'service-featured' : ''}`} key={service.title}>
                  <div className="service-card-top">
                    <span>{service.number}</span>
                    <i><Icon name={service.icon} /></i>
                  </div>
                  {service.featured && (
                    <div className="service-system" aria-hidden="true">
                      <div className="system-core"><span className="brand-mark"><span /><span /><span /></span></div>
                      <div className="system-node system-node-one"><i />Research</div>
                      <div className="system-node system-node-two"><i />Design</div>
                      <div className="system-node system-node-three"><i />Build</div>
                      <div className="system-node system-node-four"><i />Scale</div>
                      <svg viewBox="0 0 400 210" preserveAspectRatio="none">
                        <path d="M200 105 C150 105 150 35 78 35" />
                        <path d="M200 105 C250 105 250 35 322 35" />
                        <path d="M200 105 C150 105 150 175 78 175" />
                        <path d="M200 105 C250 105 250 175 322 175" />
                      </svg>
                    </div>
                  )}
                  <div className="service-card-copy">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="process-orbit" aria-hidden="true" />
          <div className="home-container process-layout">
            <div className="process-intro">
              <span className="section-kicker section-kicker-light">How we work</span>
              <h2>A clear path through <em>complex work.</em></h2>
              <p>No black boxes and no unnecessary layers. You always know what we’re solving, what is moving, and what comes next.</p>
              <Link to="/process" className="button button-light">See our process <span aria-hidden="true">↗</span></Link>
            </div>

            <ol className="process-list">
              {process.map((step, index) => (
                <li key={step.number}>
                  <div className="process-marker">
                    <span>{step.number}</span>
                    {index < process.length - 1 && <i />}
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="principles-section">
          <div className="home-container principles-layout">
            <div className="principles-label">
              <span className="section-kicker">Why WorkAidly</span>
              <span className="principles-index">05 / 05</span>
            </div>
            <div className="principles-main">
              <h2>Built with the care of a product team, not the hand-offs of an agency.</h2>
              <div className="principles-grid">
                <div>
                  <span>01</span>
                  <h3>Senior attention</h3>
                  <p>The people shaping the work stay close to it-from first decision to final detail.</p>
                </div>
                <div>
                  <span>02</span>
                  <h3>Useful over impressive</h3>
                  <p>Every feature and interaction must earn its place by making the product clearer or more valuable.</p>
                </div>
                <div>
                  <span>03</span>
                  <h3>Made to evolve</h3>
                  <p>We build strong foundations so the product can adapt as your users, team, and ambition grow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
