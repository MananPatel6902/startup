import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const projects = [
  {
    id: 1,
    tags: ['SAAS', 'WEB'],
    name: 'FlowDesk',
    tagline: 'Next-gen project management for distributed teams',
    bg: 'from-indigo-900 to-violet-950',
    accent: '#c3c0ff',
    icon: 'dashboard',
  },
  {
    id: 2,
    tags: ['EDTECH', 'WEB'],
    name: 'StudyThread',
    tagline: "Australia's leading adaptive learning platform",
    bg: 'from-slate-800 to-indigo-900',
    accent: '#ffb695',
    icon: 'school',
  },
  {
    id: 3,
    tags: ['AUTOMATION', 'AI'],
    name: 'OpsLink',
    tagline: 'AI-powered workflow automation for SMEs',
    bg: 'from-violet-950 to-purple-900',
    accent: '#c3c0ff',
    icon: 'hub',
  },
  {
    id: 4,
    tags: ['HOSPITALITY', 'WEB'],
    name: 'GuestBrief',
    tagline: 'Discover a better way to enhance your guest experience',
    bg: 'from-amber-900 to-orange-950',
    accent: '#ffb695',
    icon: 'hotel',
  },
  {
    id: 5,
    tags: ['FINTECH', 'SAAS'],
    name: 'PayFlow',
    tagline: 'Intelligent invoicing & payment orchestration platform',
    bg: 'from-emerald-900 to-teal-950',
    accent: '#c3c0ff',
    icon: 'payments',
  },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(1)

  const prev = () => setActiveSlide((s) => (s - 1 + projects.length) % projects.length)
  const next = () => setActiveSlide((s) => (s + 1) % projects.length)

  const getPos = (idx) => {
    const diff = (idx - activeSlide + projects.length) % projects.length
    if (diff === 0) return 'center'
    if (diff === 1 || diff === projects.length - 4) return 'right'
    if (diff === projects.length - 1 || diff === 4) return 'left'
    return 'hidden'
  }
  return (
    <div className="bg-background text-on-surface font-body">
      <Nav />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden px-8">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100,200 C200,150 400,450 600,300 S900,100 1100,250" fill="none" stroke="#c3c0ff" strokeWidth="0.5"/>
            <path d="M-100,500 C150,550 450,250 700,450 S950,600 1100,550" fill="none" stroke="#c3c0ff" strokeWidth="0.5"/>
            <path d="M-100,800 C300,700 500,900 800,750 S1000,600 1100,700" fill="none" stroke="#c3c0ff" strokeWidth="0.5"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 text-primary text-xs font-label tracking-widest font-semibold mb-6">
              REDEFINING EXECUTION
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-[1.1] mb-8">
              One partner for{' '}
              <span className="text-primary italic font-medium">digital solutions</span>,
              built around your needs.
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
              WorkAidly builds SaaS products, custom software, websites, automation systems, and tailored digital solutions for businesses and individuals who need reliable execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-on-primary rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center gap-2"
              >
                Book a Consultation
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 text-on-surface font-semibold text-lg hover:bg-surface-container-low transition-all rounded-xl"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-24 px-8 bg-surface-container-low/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden group shadow-2xl">
            <img
              alt="Modern architectural workspace"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuColJQfDj75CqJa7HEGS_XdFzyGIhNm22Yo4Hp9c2O9uDjRU5Ii7hRiX2vTpgzTfMPi5K8GxIncMSl977JQkdm_tW9JkWUWBG1jJXPLyHxTPt7ugy9JnEuD9j01-EZwwYRw7S54axO8Hk6IdW1n-ZSg2_f_dyZtPx-5--ZkGMB1Hj0GUG0TIXN_rk6qRyrGRI0YMCnkD74K--QxKdgNSUjFUkZuDdaI3W9zQGzDB6G2C78gAJXp5gL2triSj9l1Yfo68xPFf8NJrfSy"
            />
          </div>
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6 leading-tight">
              Adaptable. Credible.<br />Solution-First.
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg font-light">
              <p>WorkAidly emerged from a foundation of specialized support to become a full-spectrum digital partner. We don't just build; we solve.</p>
              <p>In a world of fragmented services, we act as the connective tissue between your ideas and their digital reality. Our approach is rooted in technical excellence and the understanding that every business requires a unique thread of strategy.</p>
            </div>
            <Link to="/team" className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all">
              Meet the team
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Core Ecosystem</h2>
              <p className="text-on-surface-variant text-lg font-light">A curated range of technical services designed for high-impact execution.</p>
            </div>
            <Link to="/services" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all whitespace-nowrap">
              View all services
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-10 bg-surface-container-lowest rounded-3xl group hover:bg-primary transition-all duration-500">
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-8 transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white">cloud_sync</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface group-hover:text-white mb-4">SaaS Development</h3>
              <p className="text-on-surface-variant group-hover:text-white/80 text-lg font-light leading-relaxed">End-to-end multi-tenant platform architecture. We build scalable, secure, and user-centric subscription models that drive recurring value.</p>
            </div>
            <div className="p-10 bg-surface-container-low rounded-3xl hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-primary text-4xl mb-8 block">code_blocks</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Custom Software</h3>
              <p className="text-on-surface-variant text-base font-light leading-relaxed">Bespoke applications designed to solve specific operational bottlenecks with precision engineering.</p>
            </div>
            <div className="p-10 bg-surface-container-low rounded-3xl hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-primary text-4xl mb-8 block">hub</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Automation</h3>
              <p className="text-on-surface-variant text-base font-light leading-relaxed">Connect your disparate tools into a single, cohesive workflow that eliminates manual overhead.</p>
            </div>
            <div className="md:col-span-2 p-10 bg-[#fcf9f8] border border-outline-variant/30 rounded-3xl group hover:shadow-xl transition-all overflow-hidden relative">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary text-4xl mb-8 block">web</span>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Website &amp; Web Apps</h3>
                <p className="text-on-surface-variant text-lg font-light leading-relaxed max-w-md">From high-conversion landing pages to complex, data-driven web applications with pixel-perfect modern UX.</p>
              </div>
              <div className="absolute right-[-10%] bottom-[-20%] w-3/4 opacity-10 group-hover:opacity-20 transition-opacity">
                <img alt="UI Design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIv8xQ4vZf9_2zR0klckh8sb_NK60jTALEKJr1ReKIn9p2MD4uMJNSrrQ2Dj3xlj8tbFBE4MwSiXhmpGZjqdlXfJCZk3Cjb2DG6sX69ecbHosc0QQFhwbi4BeuptiH31EqwMEdQHhzOc2tuDOrJ4aAvBpmIeT1cIyUQ9_TQq_fQFCbfo6dxTq71hnNJNAOSJZxTa_9DEDY7ImTXC2Lms-PQJI7fKUUUZjwbB0twkHyvw4rxOUUpeaabu1txakPzo7ubva_JkYF3hlq" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution-First */}
      <section className="py-24 bg-on-surface text-surface overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-headline text-4xl md:text-6xl font-bold mb-10 leading-tight">
                Built to adapt to what your business{' '}
                <span className="text-secondary-fixed-dim italic">needs next.</span>
              </h2>
              <p className="text-surface-variant text-xl leading-relaxed font-light mb-12">
                We don't believe in static solutions. Your digital infrastructure should breathe and grow as you do. Our strategy-first mindset ensures every line of code serves a future-proof purpose.
              </p>
              <ul className="space-y-6 mb-10">
                {['Strategic Technical Roadmapping', 'High-Velocity Execution Cycles', 'Cross-Domain Technical Expertise'].map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-secondary-fixed-dim">check_circle</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/process" className="inline-flex items-center gap-2 text-secondary-fixed-dim font-semibold hover:gap-3 transition-all">
                See our process
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all rounded-full" />
              <img
                alt="Cybersecurity and technology"
                className="relative rounded-2xl w-full h-full object-cover grayscale brightness-125"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFe3EMVJKwje08ohXXbd2UBTt_IYFA7lvluunMDUQOwl4a1P3Af8IngDJD89EtPlEF7UbPXzWV0nj9uQoxgHNgtGwwYIIaY7Csw-XJC0qe1E_clgHA5rm9fvtIi_1CoY7WEpHjuXZ3A3TGkvwQLskuXayE5XllaOeO8nS2i4ZPxT6fJYsxXg1kqmP8KTw18NDWdag5P89KQjU-rBX61T8e0eG3E55JIa3snm0IIA7mkBvzu5ZtsJX9N5b0y2HfAyKfttY40B47LX-d"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-32 px-8 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface leading-tight">
            WorkAidly <span className="text-primary">connects ideas</span>, systems, and execution into solutions that{' '}
            <span className="italic underline decoration-primary-container decoration-4 underline-offset-8">actually work.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-12 px-8 py-4 bg-primary text-on-primary rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
          >
            Start a conversation
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* ── SECTION 2: Portfolio Slider ── */}
      <section className="py-24 px-8 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-10 h-10 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-xl">work</span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-4">
              Turning Ideas into Digital Success Stories
            </h2>
            <p className="text-on-surface-variant text-xs font-label tracking-widest uppercase">
              OUR WORK SPEAKS ABOUT THE QUALITY OF OUR EXECUTION AND OUR COMMITMENT TO DELIVERING RESULTS.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative flex items-center justify-center h-[380px]">
            {projects.map((project, idx) => {
              const pos = getPos(idx)
              const isCenter = pos === 'center'
              const isLeft = pos === 'left'
              const isRight = pos === 'right'
              const isHidden = pos === 'hidden'

              return (
                <div
                  key={project.id}
                  onClick={() => !isCenter && setActiveSlide(idx)}
                  className={`absolute transition-all duration-500 rounded-3xl overflow-hidden cursor-pointer select-none
                    ${isCenter ? 'w-[360px] md:w-[420px] h-[340px] z-20 scale-100 opacity-100' : ''}
                    ${isLeft ? 'w-[280px] md:w-[340px] h-[280px] z-10 scale-95 opacity-60 -translate-x-[220px] md:-translate-x-[300px]' : ''}
                    ${isRight ? 'w-[280px] md:w-[340px] h-[280px] z-10 scale-95 opacity-60 translate-x-[220px] md:translate-x-[300px]' : ''}
                    ${isHidden ? 'opacity-0 scale-90 pointer-events-none' : ''}
                  `}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${project.bg} p-8 flex flex-col justify-between relative overflow-hidden`}>
                    {/* Background icon watermark */}
                    <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '180px' }}>{project.icon}</span>
                    </div>

                    <div>
                      <div className="flex gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold border border-white/20 text-white/80 bg-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-headline text-2xl font-bold text-white mb-2">{project.name}</h3>
                      <p className="text-white/60 text-sm font-light leading-relaxed max-w-[260px]">{project.tagline}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white">{project.icon}</span>
                      </div>
                      <Link
                        to="/contact"
                        onClick={(e) => e.stopPropagation()}
                        className="px-5 py-2 rounded-xl text-xs font-bold text-white border border-white/30 hover:bg-white/20 transition-all"
                      >
                        VIEW MORE
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Dots + Nav */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-outline-variant hover:border-primary hover:text-primary transition-all flex items-center justify-center text-on-surface-variant">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`rounded-full transition-all duration-300 ${i === activeSlide ? 'bg-primary w-6 h-2.5' : 'bg-outline-variant w-2.5 h-2.5'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-outline-variant hover:border-primary hover:text-primary transition-all flex items-center justify-center text-on-surface-variant">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile FAB */}
      <div className="fixed bottom-8 right-8 z-40 md:hidden">
        <Link to="/contact" className="w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
        </Link>
      </div>
    </div>
  )
}
