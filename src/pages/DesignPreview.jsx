import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from '../components/Nav'
import SpotlightCard from '../components/SpotlightCard'
import heroMark from '../assets/hero.png'
import './DesignPreview.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const capabilities = [
  {
    icon: 'strategy',
    title: 'Product strategy',
    body: 'Clear priorities, practical scope, and a product model your team can build around.',
  },
  {
    icon: 'draw',
    title: 'Experience design',
    body: 'Interfaces that make complex work feel direct, calm, and easy to understand.',
  },
  {
    icon: 'code_blocks',
    title: 'Engineering',
    body: 'Reliable systems built for real users, real operations, and long-term change.',
  },
  {
    icon: 'hub',
    title: 'Automation',
    body: 'Connected workflows that remove repetition without adding another layer of friction.',
  },
]

const testimonials = [
  {
    quote: 'They understood the operational problem before they touched the interface.',
    name: 'Rohan Darji',
    role: 'Founder, Real Estate Business',
    image: '/team_profile_photos/Manan.jpeg',
  },
  {
    quote: 'The result feels considered from the workflow down to the smallest interaction.',
    name: 'Dilip Patel',
    role: 'Lawyer, Gujarat Bar Council',
    image: '/team_profile_photos/Sarthak.jpeg',
  },
  {
    quote: 'We can see the whole production process without chasing updates across tools.',
    name: 'Ayush Kumar',
    role: 'CineFlow OS user',
    image: '/team_profile_photos/Kartikey.jpeg',
  },
]

const work = [
  {
    title: 'CineFlow OS',
    body: 'A production workspace that keeps projects, clients, people, and finance moving together.',
    url: 'https://cineflow-os.workaidlywriters.chatgpt.site/',
    tone: 'indigo',
  },
  {
    title: 'LexFlow',
    body: 'A calm legal operations system for matters, hearings, tasks, and secure documents.',
    url: 'https://lexflow-legal-practice.workaidlywriters.chatgpt.site/',
    tone: 'slate',
  },
  {
    title: 'Silfira',
    body: 'A focused property discovery experience designed to turn browsing into confident enquiries.',
    url: 'https://www.silfira.co.in/',
    tone: 'teal',
  },
]

function ServiceAccordion() {
  const [active, setActive] = useState(0)

  return (
    <div className="preview-accordion" aria-label="WorkAidly capabilities">
      {capabilities.map((item, index) => (
        <button
          key={item.title}
          type="button"
          className={active === index ? 'is-active' : ''}
          aria-pressed={active === index}
          onClick={() => setActive(index)}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
          <span className="accordion-copy">
            <strong>{item.title}</strong>
            <small>{item.body}</small>
          </span>
        </button>
      ))}
    </div>
  )
}

function TestimonialCarousel() {
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]

  const move = (direction) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  return (
    <div className="preview-quote" aria-live="polite">
      <div className="quote-portrait-row" aria-hidden="true">
        {testimonials.map((item, index) => (
          <img key={item.name} src={item.image} alt="" className={active === index ? 'is-active' : ''} />
        ))}
      </div>
      <blockquote key={testimonial.name}>“{testimonial.quote}”</blockquote>
      <div className="quote-footer">
        <div>
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </div>
        <div className="quote-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial">
            <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next testimonial">
            <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function WorkStory() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const media = gsap.matchMedia()

    media.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
      ScrollTrigger.create({
        trigger: '.preview-work-grid',
        start: 'top top+=112',
        end: 'bottom bottom-=80',
        pin: '.preview-work-copy',
        pinSpacing: false,
      })

      gsap.utils.toArray('.preview-project-card').forEach((card) => {
        gsap.fromTo(card,
          { scale: 0.9, opacity: 0.42 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=80',
              end: 'center center',
              scrub: true,
            },
          },
        )

        gsap.to(card, {
          scale: 0.95,
          opacity: 0.28,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'bottom center',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    })

    return () => media.revert()
  }, { scope: sectionRef })

  return (
    <section className="preview-work" ref={sectionRef}>
      <div className="preview-shell preview-work-grid">
        <div className="preview-work-copy">
          <h2>Selected work, shown in motion.</h2>
          <p>The story stays readable while each product receives a focused, full-scale moment.</p>
          <Link to="/products" className="preview-text-link">Explore products <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="preview-projects">
          {work.map((project) => (
            <article className={`preview-project-card tone-${project.tone}`} key={project.title}>
              <div className="project-browser" aria-hidden="true">
                <div className="project-browser-bar"><i /><i /><i /><span>{project.title}</span></div>
                <iframe src={project.url} title="" loading="lazy" tabIndex="-1" />
              </div>
              <div className="project-card-copy">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.body}</p>
                </div>
                <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                  <span className="material-symbols-outlined" aria-hidden="true">north_east</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactPreview() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="preview-contact">
      <div className="preview-shell contact-grid">
        <SpotlightCard className="contact-intro-card" spotlightColor="rgba(79, 70, 229, 0.18)">
          <div>
            <h2>Bring us the hard part.</h2>
            <p>Tell us what needs to work better. We will reply with a clear next step within one business day.</p>
          </div>
          <div className="contact-detail-list">
            <a href="mailto:connect@workaidly.com">
              <span className="material-symbols-outlined" aria-hidden="true">mail</span>
              <span><small>Email</small><strong>connect@workaidly.com</strong></span>
            </a>
            <div>
              <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
              <span><small>Response</small><strong>Within one business day</strong></span>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="contact-form-card" spotlightColor="rgba(39, 199, 196, 0.14)">
          <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
            <h3>Start a project</h3>
            <div className="contact-field-row">
              <label>
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
              </label>
              <label>
                <span>Subject</span>
                <input name="subject" type="text" placeholder="Product or project" required />
              </label>
            </div>
            <label>
              <span>Work email</span>
              <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows="4" placeholder="What are you trying to improve?" required />
            </label>
            <button type="submit">Send inquiry <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button>
            {submitted && <p className="preview-form-note" role="status">Preview only. Your details were not sent.</p>}
          </form>
        </SpotlightCard>
      </div>
    </section>
  )
}

export default function DesignPreview() {
  return (
    <div className="design-preview-page">
      <Nav />
      <main id="main-content" tabIndex="-1">
        <section className="preview-hero">
          <div className="preview-grid-lines" aria-hidden="true" />
          <div className="preview-shell preview-hero-grid">
            <div className="preview-hero-copy">
              <span className="preview-kicker">Interaction preview</span>
              <h1>
                <span>Digital products <span className="inline-product-mark"><img src={heroMark} alt="" /></span></span>
                <span>that move work forward.</span>
              </h1>
              <p>WorkAidly brings product thinking, design, and engineering into one focused delivery team.</p>
              <div className="preview-actions">
                <a href="#preview-contact" onClick={(event) => { event.preventDefault(); document.querySelector('.preview-contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="preview-primary-button">Start a project <span aria-hidden="true">↗</span></a>
                <Link to="/" className="preview-secondary-button">View current site</Link>
              </div>
            </div>
            <SpotlightCard className="preview-hero-card" spotlightColor="rgba(79, 70, 229, 0.16)">
              <div className="hero-card-top">
                <span>One connected team</span>
                <span className="material-symbols-outlined" aria-hidden="true">all_inclusive</span>
              </div>
              <div className="hero-card-thread" aria-hidden="true">
                <span>Strategy</span><i /><span>Design</span><i /><span>Build</span><i /><span>Launch</span>
              </div>
              <div className="hero-card-outcome">
                <small>Built around</small>
                <strong>Your workflow</strong>
                <p>Clear decisions move through one system from the first brief to the final release.</p>
              </div>
            </SpotlightCard>
          </div>
        </section>

        <section className="preview-bento-section">
          <div className="preview-shell">
            <div className="preview-section-heading">
              <h2>Cards with a reason to exist.</h2>
              <p>Each surface groups a real decision, interaction, or story. Motion reinforces that hierarchy.</p>
            </div>
            <div className="preview-bento">
              <SpotlightCard className="bento-card bento-services" spotlightColor="rgba(79, 70, 229, 0.14)">
                <div className="bento-card-heading"><h3>One team, four connected capabilities.</h3></div>
                <ServiceAccordion />
              </SpotlightCard>
              <SpotlightCard className="bento-card bento-principle" spotlightColor="rgba(39, 199, 196, 0.13)">
                <span className="material-symbols-outlined principle-icon" aria-hidden="true">conversion_path</span>
                <div><h3>Fewer hand-offs.</h3><p>The same people stay close to the work from strategy through engineering.</p></div>
              </SpotlightCard>
              <SpotlightCard className="bento-card bento-testimonial" spotlightColor="rgba(79, 70, 229, 0.12)">
                <TestimonialCarousel />
              </SpotlightCard>
              <SpotlightCard className="bento-card bento-process" spotlightColor="rgba(79, 70, 229, 0.14)">
                <div className="process-card-copy"><h3>A clear path through complex work.</h3><p>Progress stays visible, decisions stay connected, and every stage ends with something useful.</p></div>
                <div className="process-card-track" aria-label="WorkAidly process">
                  {['Frame', 'Shape', 'Build', 'Improve'].map((item, index) => <span key={item}><i>{index + 1}</i>{item}</span>)}
                </div>
              </SpotlightCard>
            </div>
          </div>
        </section>

        <WorkStory />
        <div id="preview-contact"><ContactPreview /></div>

        <footer className="preview-footer">
          <div className="preview-shell">
            <img src="/WorkAidly_Concept3_Final_Checked/06_Web_Ready/navbar-240px.png" alt="WorkAidly" width="240" height="50" />
            <p>This preview is isolated. The current WorkAidly theme and pages remain unchanged.</p>
            <Link to="/">Return to current site</Link>
          </div>
        </footer>
      </main>
    </div>
  )
}
