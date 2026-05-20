import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', subject: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission handler
  }

  return (
    <div className="bg-background text-on-surface font-body">
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
            Whether it's a new SaaS venture, a complex integration, or academic guidance — we're ready to execute.
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
                We respond to every inquiry within one business day. No generic templates — just a real conversation about your goals.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-surface/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-surface">mail</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-label tracking-widest text-surface-variant mb-1">Email us</p>
                    <p className="text-lg font-medium">hello@workaidly.com</p>
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
              <div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-surface-variant font-light text-sm leading-relaxed italic mb-4">
                  "WorkAidly didn't just deliver the product — they understood the problem. That's rare."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm text-inverse-primary">person</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Sarah K.</p>
                    <p className="text-xs text-surface-variant">Founder, EdTech Startup</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-surface rounded-3xl p-8 text-on-surface shadow-2xl">
              <h3 className="font-headline text-xl font-bold mb-8">Send an Inquiry</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-label uppercase tracking-widest mb-2 font-semibold">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40 outline-none"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-label uppercase tracking-widest mb-2 font-semibold">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40 outline-none"
                      placeholder="SaaS Product"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-label uppercase tracking-widest mb-2 font-semibold">Work Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40 outline-none"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-label uppercase tracking-widest mb-2 font-semibold">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40 outline-none resize-none"
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-12">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: 'How quickly can you start?', a: 'Most projects kick off within 1–2 weeks of initial alignment. We keep capacity available for ready-to-move clients.' },
              { q: 'Do you work with startups?', a: 'Absolutely. We work with founders at every stage — from pre-product ideation to scaling established platforms.' },
              { q: 'What is your pricing model?', a: "We offer both project-based and retainer engagements depending on scope. We'll propose the right model after discovery." },
              { q: 'Can you work with my existing team?', a: 'Yes. We integrate cleanly as an extension of your in-house team or operate fully independently — your call.' },
            ].map(({ q, a }) => (
              <div key={q} className="p-8 bg-surface-container-lowest rounded-3xl">
                <h3 className="font-headline text-lg font-bold text-on-surface mb-3">{q}</h3>
                <p className="text-on-surface-variant font-light text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
