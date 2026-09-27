import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

gsap.registerPlugin(useGSAP, ScrollTrigger)

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
    id: 'cineflow',
    index: '01',
    eyebrow: 'Studio operations · SaaS platform',
    name: 'CineFlow OS',
    statement: 'One operations hub connecting sales, clients, delivery, editors, finance, and reporting.',
    metricLabel: 'Core outcome',
    metric: 'Production under control',
    icon: 'space_dashboard',
    url: 'https://cineflow-os.workaidlywriters.chatgpt.site/',
  },
  {
    id: 'lexflow',
    index: '02',
    eyebrow: 'Legal operations · Practice management',
    name: 'LexFlow',
    statement: 'A secure, calm workspace that keeps matters, hearings, tasks, and documents in view.',
    metricLabel: 'Core outcome',
    metric: 'Matters clearly in view',
    icon: 'account_tree',
    url: 'https://lexflow-legal-practice.workaidlywriters.chatgpt.site/',
  },
  {
    id: 'aarogya',
    index: '03',
    eyebrow: 'Healthcare operations · Hospital management',
    name: 'Aarogya',
    statement: 'Reception, queues, clinical care, pharmacy, and inventory on one shared patient record.',
    metricLabel: 'Core outcome',
    metric: 'One record, every team',
    icon: 'local_hospital',
    url: 'https://aarogya-hospital-demo.prakhyat-qlb.chatgpt.site/',
  },
  {
    id: 'fitted-pos',
    index: '04',
    eyebrow: 'Retail operations · Point of sale',
    name: 'Fitted & Co. POS',
    statement: 'Fast counter billing, garment inventory, GST invoices, and store reporting in one focused workspace.',
    metricLabel: 'Core outcome',
    metric: 'Checkout and stock, connected',
    icon: 'point_of_sale',
    url: 'https://fitted-and-co-pos.workaidlywriters.chatgpt.site/',
  },
  {
    id: 'silfira',
    index: '05',
    eyebrow: 'Luxury real estate · Web experience',
    name: 'Silfira',
    statement: 'A premium property-discovery experience that turns browsing into confident enquiries.',
    metricLabel: 'Core outcome',
    metric: 'Discovery to enquiry',
    icon: 'hotel',
    url: 'https://www.silfira.co.in/',
  },
  {
    id: 'netrafly',
    index: '06',
    eyebrow: 'Global trade · Corporate web experience',
    name: 'Netra Fly Overseas',
    statement: 'A global trade presence that turns a broad export catalogue into clear, credible quote journeys.',
    metricLabel: 'Core outcome',
    metric: 'Catalogue to global enquiry',
    icon: 'public',
    url: 'https://netraflyoverseas.com/',
  },
  {
    id: 'ezee-controls',
    index: '07',
    eyebrow: 'Industrial engineering · OEM & ODM platform',
    name: 'Ezee Controls',
    statement: 'A technical B2B experience that clarifies the path from product brief to serial production.',
    metricLabel: 'Core outcome',
    metric: 'Concept to production, clarified',
    icon: 'precision_manufacturing',
    url: 'https://www.ezeecontrols.com/',
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
  local_hospital: 'M9 4h6v5h5v6h-5v5H9v-5H4V9h5V4Z',
  point_of_sale: 'M5 4h14v12H5zM8 8h2m4 0h2M8 12h8M7 20h10m-8-4v4m6-4v4',
  public: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-18c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21m0-18C9.8 5.4 8.7 8.4 8.7 12S9.8 18.6 12 21M3.5 9h17m-17 6h17',
  precision_manufacturing: 'M9 4h6l1 4 4 1v6l-4 1-1 4H9l-1-4-4-1V9l4-1 1-4Zm3 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
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

function ProductCardVisual({ project }) {
  const navigation = (
    <span className="product-card-nav">
      <span><Icon name={project.icon} /></span>
      <i /><i /><i />
    </span>
  )

  if (project.id === 'cineflow') {
    return (
      <span className="product-card-screen product-card-screen-cineflow" aria-hidden="true">
        {navigation}
        <span className="product-card-canvas">
          <span className="product-card-label">Project pipeline</span>
          <strong>04 active productions</strong>
          <span className="mini-production-board">
            <i><b /><b /></i><i><b /><b /><b /></i><i><b /></i>
          </span>
          <span className="mini-production-footer"><i /> Cuts in review <b>72%</b></span>
        </span>
      </span>
    )
  }

  if (project.id === 'lexflow') {
    return (
      <span className="product-card-screen product-card-screen-lexflow" aria-hidden="true">
        {navigation}
        <span className="product-card-canvas">
          <span className="product-card-label">Next hearing</span>
          <strong>Delhi High Court · 10:30</strong>
          <span className="mini-legal-date"><b>28</b><span><strong>LF-2026-001</strong><small>Brief ready</small></span></span>
          <span className="mini-legal-list"><i><b />Matter notes</i><i><b />Secure documents</i></span>
        </span>
      </span>
    )
  }

  if (project.id === 'aarogya') {
    return (
      <span className="product-card-screen product-card-screen-aarogya" aria-hidden="true">
        {navigation}
        <span className="product-card-canvas">
          <span className="product-card-label">Live patient queue</span>
          <strong>OPD · 12 waiting</strong>
          <span className="mini-patient-queue"><i>14</i><i className="active">15</i><i>16</i></span>
          <span className="mini-vitals"><span><b>98</b><small>SpO₂</small></span><span><b>72</b><small>BPM</small></span></span>
        </span>
      </span>
    )
  }

  if (project.id === 'fitted-pos') {
    return (
      <span className="product-card-screen product-card-screen-fitted" aria-hidden="true">
        {navigation}
        <span className="product-card-canvas">
          <span className="product-card-label">Current cart</span>
          <strong>3 items · ₹4,780</strong>
          <span className="mini-receipt"><i><b>Oxford shirt</b><em>×1</em></i><i><b>Linen trouser</b><em>×2</em></i><i><b>GST</b><em>₹516</em></i></span>
          <span className="mini-pay-row"><small>Invoice ready</small><b>Pay now</b></span>
        </span>
      </span>
    )
  }

  if (project.id === 'silfira') {
    return (
      <span className="product-card-screen product-card-screen-silfira" aria-hidden="true">
        {navigation}
        <span className="product-card-canvas">
          <span className="product-card-label">Featured property</span>
          <strong>Only ONE · Sargasan</strong>
          <span className="mini-property"><i /><i /><i /><i /><span /></span>
          <span className="mini-property-specs"><b>3 BHK</b><i />2,180 sq.ft.</span>
        </span>
      </span>
    )
  }

  if (project.id === 'netrafly') {
    return (
      <span className="product-card-screen product-card-screen-netrafly" aria-hidden="true">
        {navigation}
        <span className="product-card-canvas">
          <span className="product-card-label">Active trade route</span>
          <strong>India → Canada</strong>
          <span className="mini-trade-route"><i className="route-origin" /><i className="route-line" /><i className="route-destination" /><b>IN</b><b>CA</b></span>
          <span className="mini-trade-tags"><i>Textiles</i><i>Agri</i><i>Parts</i></span>
        </span>
      </span>
    )
  }

  return (
    <span className="product-card-screen product-card-screen-ezee" aria-hidden="true">
      {navigation}
      <span className="product-card-canvas">
        <span className="product-card-label">Production stage</span>
        <strong>Control unit · EVT 03</strong>
        <span className="mini-schematic"><i /><i /><i /><i /><b /><b /><b /></span>
        <span className="mini-production-progress"><span><i /></span><b>68%</b></span>
      </span>
    </span>
  )
}

function ProductOrbitCard({ project, duplicate = false }) {
  const cardClassName = `product-orbit-card product-orbit-${project.id}`
  const content = (
    <>
      <span className="product-card-topline">
        <span>{project.index}</span>
        <span><i aria-hidden="true" /> Live</span>
      </span>
      <ProductCardVisual project={project} />
      <span className="product-card-meta">
        <span>
          <strong>{project.name}</strong>
          <small>{project.eyebrow.split(' · ')[0]}</small>
        </span>
        <span aria-hidden="true">↗</span>
      </span>
      <span className="product-card-hover">
        <small>{project.eyebrow}</small>
        <strong>{project.name}</strong>
        <span className="product-card-statement">{project.statement}</span>
        <span className="product-card-hover-outcome">
          <small>{project.metricLabel}</small>
          <b>{project.metric}</b>
        </span>
        <span className="product-card-hover-link">View live <i aria-hidden="true">↗</i></span>
      </span>
    </>
  )

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      role={duplicate ? undefined : 'listitem'}
      tabIndex={duplicate ? -1 : undefined}
      className={cardClassName}
      aria-label={`View ${project.name} live`}
    >
      {content}
    </a>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const canvasRef = useRef(null)
  const workStageRef = useRef(null)
  const servicesRef = useRef(null)

  const handleCanvasPointerMove = (event) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const bounds = canvas.getBoundingClientRect()
    canvas.style.setProperty('--hero-spotlight-x', `${event.clientX - bounds.left}px`)
    canvas.style.setProperty('--hero-spotlight-y', `${event.clientY - bounds.top}px`)
  }

  const handleWorkPointerMove = (event) => {
    const stage = workStageRef.current
    if (!stage) return

    const bounds = stage.getBoundingClientRect()
    stage.style.setProperty('--work-spotlight-x', `${event.clientX - bounds.left}px`)
    stage.style.setProperty('--work-spotlight-y', `${event.clientY - bounds.top}px`)
  }

  useGSAP(() => {
    const motion = gsap.matchMedia()

    motion.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
      const canvas = canvasRef.current
      const viewport = canvas?.querySelector('.canvas-main')
      const track = canvas?.querySelector('.canvas-scroll-track')

      if (!canvas || !viewport || !track) return undefined

      const getTravel = () => Math.max(0, track.scrollHeight - viewport.clientHeight)

      gsap.set(canvas, {
        '--workflow-progress': '68%',
        '--playback-progress': 0,
      })
      gsap.set('.pulse-chart i', { transformOrigin: 'center bottom' })

      const productFilm = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero-layout',
          start: 'top 12%',
          end: '+=760',
          pin: '.hero-layout',
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      productFilm
        .to(canvas, { '--playback-progress': 1, duration: 1, ease: 'none' }, 0)
        .to(canvas, { '--workflow-progress': '100%', duration: 0.24, ease: 'none' }, 0.04)
        .to('.pulse-chart i', { scaleY: 1.18, stagger: 0.025, duration: 0.22, ease: 'none' }, 0.06)
        .to('.workflow-node:last-child i', { backgroundColor: '#4f46e5', color: '#ffffff', duration: 0.18 }, 0.2)
        .to('.canvas-scroll-track', { y: () => -getTravel(), duration: 0.58, ease: 'none' }, 0.3)
        .to('.note-one', { y: -18, opacity: 0.58, duration: 0.24, ease: 'none' }, 0.43)
        .to('.note-two', { y: 16, opacity: 0.34, duration: 0.24, ease: 'none' }, 0.43)
        .fromTo('.launch-check', { x: 16, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.045, duration: 0.22 }, 0.62)

      return () => productFilm.scrollTrigger?.kill()
    })

    return () => motion.revert()
  }, { scope: heroRef })

  useGSAP(() => {
    const motion = gsap.matchMedia()

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const pulsePaths = gsap.utils.toArray('.system-pulse')

      pulsePaths.forEach((path) => {
        const length = path.getTotalLength()
        gsap.set(path, {
          strokeDasharray: `${length * 0.2} ${length * 0.8}`,
          strokeDashoffset: 0,
        })
      })

      const riverCurrent = gsap.to('.system-stream', {
        strokeDashoffset: -36,
        duration: 1.25,
        ease: 'none',
        repeat: -1,
        scrollTrigger: {
          trigger: '.service-system',
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play pause resume pause',
        },
      })

      const flow = gsap.fromTo(pulsePaths,
        { strokeDashoffset: 0, opacity: 0.32 },
        {
          strokeDashoffset: (_, path) => -path.getTotalLength(),
          opacity: 1,
          duration: 2.8,
          stagger: 0.28,
          ease: 'none',
          repeat: -1,
          repeatDelay: 0.35,
          scrollTrigger: {
            trigger: '.service-system',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play pause resume pause',
          },
        },
      )

      const coreGlow = gsap.to('.system-core', {
        filter: 'drop-shadow(0 0 18px rgba(96,165,250,.34)) drop-shadow(0 0 30px rgba(167,139,250,.18))',
        duration: 1.55,
        ease: 'none',
        yoyo: true,
        repeat: -1,
        scrollTrigger: {
          trigger: '.service-system',
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play pause resume pause',
        },
      })

      return () => {
        riverCurrent.kill()
        flow.kill()
        coreGlow.kill()
      }
    })

    return () => motion.revert()
  }, { scope: servicesRef })

  return (
    <div className="home-page">
      <Nav />

      <main id="main-content" tabIndex="-1">
        <section className="home-hero" ref={heroRef}>
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
              <div
                className="product-canvas"
                ref={canvasRef}
                onPointerMove={handleCanvasPointerMove}
              >
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
                    <div className="canvas-scroll-track">
                      <div className="canvas-scene canvas-scene-primary">
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

                      <div className="canvas-scene canvas-scene-launch">
                        <div className="launch-heading">
                          <div>
                            <small>Launch command</small>
                            <strong>Ready for release.</strong>
                          </div>
                          <span><i /> All systems live</span>
                        </div>
                        <div className="launch-summary">
                          <div className="launch-score" aria-hidden="true">
                            <div><strong>96</strong><small>/ 100</small></div>
                          </div>
                          <div>
                            <small>Release confidence</small>
                            <strong>Everything is aligned.</strong>
                            <p>Product, design, and engineering checks are complete for the production handoff.</p>
                          </div>
                        </div>
                        <div className="launch-checks">
                          <div className="launch-check"><span><Icon name="check_circle" /></span><div><strong>Product experience</strong><small>Final flows approved</small></div><em>Complete</em></div>
                          <div className="launch-check"><span><Icon name="check_circle" /></span><div><strong>Production build</strong><small>Core journeys verified</small></div><em>Complete</em></div>
                          <div className="launch-check"><span><Icon name="check_circle" /></span><div><strong>Launch handoff</strong><small>Monitoring connected</small></div><em>Ready</em></div>
                        </div>
                        <div className="launch-footer">
                          <span>Release candidate</span>
                          <strong>WorkAidly 1.0 <i>Approved</i></strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="canvas-playback" aria-hidden="true">
                  <span>Product film</span>
                  <i><b /></i>
                  <strong>Scroll-controlled</strong>
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

        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="home-container">
            <div
              className="product-stage"
              ref={workStageRef}
              onPointerMove={handleWorkPointerMove}
            >
              <div className="product-stage-grid" aria-hidden="true" />
              <div className="product-stage-glow" aria-hidden="true" />

              <header className="product-stage-heading">
                <div className="product-stage-kicker">
                  <span>Selected systems</span>
                  <i aria-hidden="true" />
                  <span>{projects.length} live products</span>
                </div>
                <h2 id="work-title">Proof lives in the <em>product.</em></h2>
                <p>Real software, shaped around real work. Explore the systems we have taken from a difficult brief to a dependable product.</p>
                <div className="product-stage-actions">
                  <Link to="/products">Explore every product <span aria-hidden="true">↗</span></Link>
                  <Link to="/contact">Start a project <span aria-hidden="true">→</span></Link>
                </div>
              </header>

              <div className="product-orbit" role="list" aria-label="WorkAidly products">
                <div className="product-orbit-track">
                  <div className="product-orbit-set">
                    {projects.map((project) => (
                      <ProductOrbitCard
                        key={project.id}
                        project={project}
                      />
                    ))}
                  </div>
                  <div className="product-orbit-set product-orbit-set-clone" aria-hidden="true">
                    {projects.map((project) => (
                      <ProductOrbitCard
                        key={`loop-${project.id}`}
                        project={project}
                        duplicate
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="services-section" ref={servicesRef}>
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
                        <defs>
                          <linearGradient id="stream-research" x1="78" y1="35" x2="200" y2="105" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#5eead4" stopOpacity=".18" />
                            <stop offset="1" stopColor="#5eead4" stopOpacity="1" />
                          </linearGradient>
                          <linearGradient id="stream-design" x1="322" y1="35" x2="200" y2="105" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#60a5fa" stopOpacity=".18" />
                            <stop offset="1" stopColor="#60a5fa" stopOpacity="1" />
                          </linearGradient>
                          <linearGradient id="stream-build" x1="78" y1="175" x2="200" y2="105" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#a78bfa" stopOpacity=".18" />
                            <stop offset="1" stopColor="#a78bfa" stopOpacity="1" />
                          </linearGradient>
                          <linearGradient id="stream-scale" x1="322" y1="175" x2="200" y2="105" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#fbbf24" stopOpacity=".18" />
                            <stop offset="1" stopColor="#fbbf24" stopOpacity="1" />
                          </linearGradient>
                        </defs>
                        <path className="system-stream-base" d="M78 35 C150 35 150 105 200 105" />
                        <path className="system-stream-base" d="M322 35 C250 35 250 105 200 105" />
                        <path className="system-stream-base" d="M78 175 C150 175 150 105 200 105" />
                        <path className="system-stream-base" d="M322 175 C250 175 250 105 200 105" />
                        <path className="system-stream system-stream-research" d="M78 35 C150 35 150 105 200 105" />
                        <path className="system-stream system-stream-design" d="M322 35 C250 35 250 105 200 105" />
                        <path className="system-stream system-stream-build" d="M78 175 C150 175 150 105 200 105" />
                        <path className="system-stream system-stream-scale" d="M322 175 C250 175 250 105 200 105" />
                        <path className="system-pulse system-pulse-research" d="M78 35 C150 35 150 105 200 105" />
                        <path className="system-pulse system-pulse-design" d="M322 35 C250 35 250 105 200 105" />
                        <path className="system-pulse system-pulse-build" d="M78 175 C150 175 150 105 200 105" />
                        <path className="system-pulse system-pulse-scale" d="M322 175 C250 175 250 105 200 105" />
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
