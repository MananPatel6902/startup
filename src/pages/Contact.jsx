import { useEffect, useRef, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const inquirySteps = [
  {
    field: 'name',
    label: 'Your name',
    shortLabel: 'You',
    title: 'What should we call you?',
    description: 'Let’s start with a name so the conversation feels personal.',
    placeholder: 'Aarav Mehta',
    type: 'text',
    autoComplete: 'name',
  },
  {
    field: 'subject',
    label: 'Project type',
    shortLabel: 'Project',
    title: 'What are you hoping to build?',
    description: 'A short description is enough. We’ll unpack the details together.',
    placeholder: 'A customer portal for our operations team',
    type: 'text',
  },
  {
    field: 'email',
    label: 'Work email',
    shortLabel: 'Contact',
    title: 'Where can we reach you?',
    description: 'We’ll only use this to reply to your inquiry.',
    placeholder: 'aarav@company.com',
    type: 'email',
    autoComplete: 'email',
  },
  {
    field: 'message',
    label: 'Project details',
    shortLabel: 'Details',
    title: 'Tell us a little more.',
    description: 'Share the problem, timeline, or anything that will help us prepare.',
    placeholder: 'We need help turning an internal workflow into a product our clients can use…',
    multiline: true,
  },
]

const testimonials = [
  {
    quote: "WorkAidly didn't just deliver the product — they understood the problem. That's rare.",
    name: 'Rohan Darji',
    role: 'Founder, Real Estate Business',
  },
  {
    quote: 'They turned a complicated operating process into software our whole team understood from day one.',
    name: 'Neha Kapoor',
    role: 'COO, Logistics Platform',
  },
  {
    quote: 'The team moved quickly without cutting corners. Every decision felt thoughtful and grounded in our goals.',
    name: 'Michael Chen',
    role: 'Product Lead, B2B SaaS',
  },
]

const faqs = [
  { q: 'How quickly can you start?', a: 'Most projects kick off within 1–2 weeks of initial alignment. We keep capacity available for ready-to-move clients.' },
  { q: 'Do you work with startups?', a: 'Absolutely. We work with founders at every stage — from pre-product ideation to scaling established platforms.' },
  { q: 'What is your pricing model?', a: "We offer both project-based and retainer engagements depending on scope. We'll propose the right model after discovery." },
  { q: 'Can you work with my existing team?', a: 'Yes. We integrate cleanly as an extension of your in-house team or operate fully independently — your call.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', subject: '', email: '', message: '' })
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [currentStep, setCurrentStep] = useState(0)
  const [fieldError, setFieldError] = useState('')
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [typedQuote, setTypedQuote] = useState(testimonials[0].quote)
  const [isTyping, setIsTyping] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const fieldRef = useRef(null)
  const hasNavigated = useRef(false)
  const isFirstTestimonial = useRef(true)

  const step = inquirySteps[currentStep]
  const testimonial = testimonials[testimonialIndex]

  useEffect(() => {
    const rotation = window.setTimeout(() => {
      setTestimonialIndex((index) => (index + 1) % testimonials.length)
    }, 20000)

    return () => window.clearTimeout(rotation)
  }, [testimonialIndex])

  useEffect(() => {
    if (isFirstTestimonial.current) {
      isFirstTestimonial.current = false
      return undefined
    }

    const quote = testimonials[testimonialIndex].quote
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setTypedQuote(quote)
      setIsTyping(false)
      return undefined
    }

    let character = 0
    setTypedQuote('')
    setIsTyping(true)

    const typing = window.setInterval(() => {
      character += 1
      setTypedQuote(quote.slice(0, character))

      if (character >= quote.length) {
        window.clearInterval(typing)
        setIsTyping(false)
      }
    }, 26)

    return () => window.clearInterval(typing)
  }, [testimonialIndex])

  useEffect(() => {
    if (hasNavigated.current) fieldRef.current?.focus()
  }, [currentStep])

  const handleChange = (e) => {
    setSubmitStatus('idle')
    setFieldError('')
    setForm((currentForm) => ({ ...currentForm, [e.target.name]: e.target.value }))
  }

  const validateStep = () => {
    const value = form[step.field].trim()

    if (!value) {
      setFieldError(`Please enter ${step.label.toLowerCase()} to continue.`)
      return false
    }

    if (step.field === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
      setFieldError('Please enter a valid work email address.')
      return false
    }

    setFieldError('')
    return true
  }

  const goToStep = (nextStep) => {
    hasNavigated.current = true
    setFieldError('')
    setSubmitStatus('idle')
    setCurrentStep(nextStep)
  }

  const advanceStep = () => {
    if (!validateStep()) return
    goToStep(Math.min(currentStep + 1, inquirySteps.length - 1))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (currentStep < inquirySteps.length - 1) {
      advanceStep()
      return
    }

    if (!validateStep()) return
    setSubmitStatus('submitting')

    try {
      if (import.meta.env.DEV) {
        await new Promise((resolve) => window.setTimeout(resolve, 450))
        setSubmitStatus('success')
        return
      }

      const body = new URLSearchParams({
        'form-name': 'contact',
        ...form,
      })

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (!response.ok) throw new Error('Form submission failed')
      setSubmitStatus('success')
    } catch {
      setSubmitStatus('error')
    }
  }

  const startAnotherInquiry = () => {
    setForm({ name: '', subject: '', email: '', message: '' })
    setSubmitStatus('idle')
    goToStep(0)
  }

  return (
    <div id="main-content" className="bg-background text-on-surface font-body">
      <Nav />

      {/* Page Hero */}
      <section className="pt-40 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 text-primary text-xs font-label tracking-widest font-semibold mb-6">
            GET IN TOUCH
          </span>
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface leading-[1.1] mb-4">
            Tell us what you need.<br />
            <span className="text-primary italic font-medium">We'll shape the solution.</span>
          </h1>
          <p className="text-on-surface-variant text-lg font-light max-w-2xl">
            Whether it's a new SaaS venture, a complex integration, or an AI-powered workflow - we're ready to execute.
          </p>
        </div>
      </section>

      {/* Contact Block */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-on-surface rounded-[3rem] p-12 md:p-20 text-surface grid lg:grid-cols-2 gap-20">
            {/* Left: Info */}
            <div>
              <h2 className="font-headline text-3xl font-bold mb-6">
                One conversation can change everything.
              </h2>
              <p className="text-surface-variant text-lg font-light mb-12">
                We respond to every inquiry within one business day. No generic templates - just a real conversation about your goals.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-surface/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-surface">mail</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-label tracking-widest text-surface-variant mb-1">Email us</p>
                    <p className="text-lg font-medium">connect@workaidly.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-surface/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-surface">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-label tracking-widest text-surface-variant mb-1">Global HQ</p>
                    <p className="text-lg font-medium">Digital First · Operations Global</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-surface/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-surface">schedule</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-label tracking-widest text-surface-variant mb-1">Response Time</p>
                    <p className="text-lg font-medium">Within 1 Business Day</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10 min-h-[9.25rem] flex flex-col justify-between" aria-label="Client testimonials">
                <div className="min-h-[3.6rem]">
                  <p className="sr-only" aria-live="polite">
                    {testimonial.quote} — {testimonial.name}, {testimonial.role}
                  </p>
                  <p aria-hidden="true" className="text-surface-variant font-light text-sm leading-relaxed italic">
                    “{typedQuote}<span className={`testimonial-cursor ${isTyping ? 'is-typing' : ''}`} />”
                  </p>
                </div>
                <div className="flex items-end justify-between gap-4 mt-4">
                  <div className="flex items-center gap-3 testimonial-author" key={testimonial.name}>
                    <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm text-inverse-primary">person</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-surface-variant">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 pb-1" aria-label="Choose a testimonial">
                    {testimonials.map((item, index) => (
                      <button
                        key={item.name}
                        type="button"
                        aria-label={`Show testimonial ${index + 1}`}
                        aria-current={index === testimonialIndex ? 'true' : undefined}
                        onClick={() => setTestimonialIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === testimonialIndex ? 'w-5 bg-inverse-primary' : 'w-1.5 bg-white/25 hover:bg-white/50'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-surface rounded-3xl p-7 md:p-8 text-on-surface shadow-2xl min-h-[39rem] flex flex-col overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-7">
                <div>
                  <p className="text-[0.68rem] font-label uppercase tracking-[0.18em] text-primary font-bold mb-1">Send an inquiry</p>
                  <p className="text-sm text-on-surface-variant tabular-nums">Step {currentStep + 1} of {inquirySteps.length}</p>
                </div>
                <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                  <span className="material-symbols-outlined text-primary">chat_bubble</span>
                </div>
              </div>

              <ol className="flex items-start mb-10" aria-label="Inquiry progress">
                {inquirySteps.map((item, index) => {
                  const isComplete = index < currentStep
                  const isCurrent = index === currentStep

                  return (
                    <li key={item.field} className={`relative flex-1 ${index === inquirySteps.length - 1 ? 'flex-none' : ''}`} aria-current={isCurrent ? 'step' : undefined}>
                      <div className="flex items-center">
                        <button
                          type="button"
                          disabled={index > currentStep}
                          onClick={() => index < currentStep && goToStep(index)}
                          className={`relative z-10 w-8 h-8 rounded-full grid place-items-center text-xs font-bold transition-all duration-300 ${
                            isComplete
                              ? 'bg-primary text-on-primary cursor-pointer hover:scale-105'
                              : isCurrent
                                ? 'bg-on-surface text-surface ring-4 ring-primary/15'
                                : 'bg-surface-container-high text-on-surface-variant/60 cursor-default'
                          }`}
                          aria-label={`${item.shortLabel}${isComplete ? ', completed' : isCurrent ? ', current step' : ''}`}
                        >
                          {isComplete ? <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">check</span> : index + 1}
                        </button>
                        {index < inquirySteps.length - 1 && (
                          <span className="h-px flex-1 mx-2 bg-surface-container-high overflow-hidden" aria-hidden="true">
                            <span className={`block h-full bg-primary transition-transform duration-500 origin-left ${index < currentStep ? 'scale-x-100' : 'scale-x-0'}`} />
                          </span>
                        )}
                      </div>
                      <span className={`hidden sm:block absolute top-10 left-0 text-[0.65rem] font-semibold whitespace-nowrap ${isCurrent || isComplete ? 'text-on-surface' : 'text-on-surface-variant/50'}`}>
                        {item.shortLabel}
                      </span>
                    </li>
                  )
                })}
              </ol>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="flex-1 flex flex-col"
                onSubmit={handleSubmit}
                noValidate
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>Don’t fill this out: <input name="bot-field" /></label>
                </p>
                {submitStatus === 'success' ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center inquiry-step-enter">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full bg-primary/10 flex items-center justify-center mb-5 sm:mb-6" aria-hidden="true">
                      <span className="material-symbols-outlined text-2xl sm:text-3xl text-primary">check</span>
                    </div>
                    <h3 className="font-headline text-2xl font-bold mb-3">Your inquiry is in.</h3>
                    <p className="text-on-surface-variant font-light max-w-sm leading-relaxed mb-8" role="status">
                      Thanks, {form.name}. We’ll reply to {form.email} within one business day.
                    </p>
                    <button type="button" onClick={startAnotherInquiry} className="text-primary font-semibold text-sm hover:underline underline-offset-4">
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 inquiry-step-enter" key={step.field}>
                      <label htmlFor={step.field} className="block">
                        <span className="block font-headline text-2xl md:text-3xl font-bold tracking-tight mb-3">{step.title}</span>
                        <span className="block text-sm text-on-surface-variant font-light leading-relaxed mb-7 max-w-md">{step.description}</span>
                      </label>

                      {step.multiline ? (
                        <textarea
                          ref={fieldRef}
                          id={step.field}
                          name={step.field}
                          value={form[step.field]}
                          onChange={handleChange}
                          className={`w-full min-h-36 bg-surface-container-low border rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40 outline-none resize-none ${fieldError ? 'border-error/50' : 'border-transparent'}`}
                          placeholder={step.placeholder}
                          rows={5}
                          required
                          aria-invalid={fieldError ? 'true' : undefined}
                          aria-describedby={fieldError ? `${step.field}-error` : undefined}
                        />
                      ) : (
                        <input
                          ref={fieldRef}
                          id={step.field}
                          name={step.field}
                          value={form[step.field]}
                          onChange={handleChange}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                              event.preventDefault()
                              advanceStep()
                            }
                          }}
                          className={`w-full bg-surface-container-low border rounded-2xl px-5 py-4 text-base focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40 outline-none ${fieldError ? 'border-error/50' : 'border-transparent'}`}
                          placeholder={step.placeholder}
                          type={step.type}
                          autoComplete={step.autoComplete}
                          required
                          aria-invalid={fieldError ? 'true' : undefined}
                          aria-describedby={fieldError ? `${step.field}-error` : undefined}
                        />
                      )}

                      <div className="min-h-7 pt-2">
                        {fieldError && <p id={`${step.field}-error`} className="text-xs text-error" role="alert">{fieldError}</p>}
                        {!fieldError && currentStep < inquirySteps.length - 1 && <p className="text-xs text-on-surface-variant/60">Press Enter to continue</p>}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-6 border-t border-outline-variant/40">
                      {currentStep > 0 && (
                        <button
                          type="button"
                          onClick={() => goToStep(currentStep - 1)}
                          className="px-5 py-4 text-on-surface font-semibold rounded-xl hover:bg-surface-container-low active:scale-[0.98] transition-all duration-200"
                        >
                          Back
                        </button>
                      )}
                      <button
                        type="submit"
                        disabled={submitStatus === 'submitting'}
                        className="ml-auto min-w-40 px-6 py-4 bg-primary text-on-primary font-bold rounded-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none inline-flex items-center justify-center gap-2"
                      >
                        {submitStatus === 'submitting'
                          ? 'Sending…'
                          : currentStep === inquirySteps.length - 1
                            ? 'Send inquiry'
                            : 'Continue'}
                        {submitStatus !== 'submitting' && <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_forward</span>}
                      </button>
                    </div>

                    {submitStatus === 'error' && (
                      <p className="text-sm text-error text-center mt-4" role="alert">
                        We couldn’t send your inquiry. Please email connect@workaidly.com instead.
                      </p>
                    )}
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="py-20 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 md:mb-12">
            <p className="text-xs font-label font-semibold tracking-[0.16em] uppercase text-primary mb-3">A few useful details</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface">Common questions</h2>
          </div>

          <div className="border-t border-outline-variant/70">
            {faqs.map(({ q, a }, index) => {
              const isOpen = openFaq === index

              return (
                <article key={q} className="border-b border-outline-variant/70">
                  <h3>
                    <button
                      id={`faq-button-${index}`}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="w-full py-6 md:py-7 flex items-center justify-between gap-6 text-left group"
                    >
                      <span className="font-headline text-lg md:text-xl font-semibold text-on-surface group-hover:text-primary transition-colors duration-200">{q}</span>
                      <span className={`relative w-9 h-9 shrink-0 rounded-full bg-surface-container-low flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-on-primary rotate-45' : 'text-primary group-hover:bg-primary/10'}`} aria-hidden="true">
                        <span className="absolute w-3.5 h-0.5 rounded-full bg-current" />
                        <span className="absolute w-0.5 h-3.5 rounded-full bg-current" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-6 md:pb-7 pr-12 text-on-surface-variant font-light leading-relaxed">{a}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
