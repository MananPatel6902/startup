import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Founder & CEO',
    icon: 'person',
    color: 'bg-primary/10',
    iconColor: 'text-primary',
    bio: 'Full-stack engineer turned entrepreneur. Arjun founded WorkAidly to bridge the gap between ambitious ideas and reliable digital execution. He leads product strategy and client relationships.',
    skills: ['Product Strategy', 'Client Relations', 'Full-Stack Dev'],
  },
  {
    name: 'Priya Sharma',
    role: 'Lead Software Engineer',
    icon: 'code',
    color: 'bg-secondary/10',
    iconColor: 'text-secondary',
    bio: 'With 8+ years in enterprise software, Priya architechts the backbone of every platform we build. Her obsession with clean, scalable code is contagious across the team.',
    skills: ['Backend Systems', 'API Design', 'DevOps'],
  },
  {
    name: 'Zara Ahmed',
    role: 'UX & Design Lead',
    icon: 'palette',
    color: 'bg-tertiary/10',
    iconColor: 'text-tertiary',
    bio: 'Zara brings an editorial eye to every interface. Previously at leading design agencies, she ensures every pixel at WorkAidly serves a purpose — and looks exceptional doing it.',
    skills: ['UI/UX Design', 'Design Systems', 'User Research'],
  },
  {
    name: 'Marcus Chen',
    role: 'SaaS Architect',
    icon: 'cloud',
    color: 'bg-primary/10',
    iconColor: 'text-primary',
    bio: 'Marcus specialises in multi-tenant SaaS infrastructure. From authentication flows to billing systems, he engineers the invisible systems that keep platforms running at scale.',
    skills: ['SaaS Architecture', 'Cloud Infrastructure', 'Security'],
  },
  {
    name: 'Aisha Patel',
    role: 'Academic Support Lead',
    icon: 'school',
    color: 'bg-secondary/10',
    iconColor: 'text-secondary',
    bio: 'An MBA graduate and former educator, Aisha heads our specialized academic vertical. She connects complex technical concepts to real-world business problems with rare clarity.',
    skills: ['Research & Analysis', 'Mentoring', 'Business Strategy'],
  },
  {
    name: 'Liam Torres',
    role: 'Automation Engineer',
    icon: 'hub',
    color: 'bg-tertiary/10',
    iconColor: 'text-tertiary',
    bio: "Liam lives at the intersection of tools, APIs, and workflows. If there's a repetitive process in your business, he'll find a way to make it disappear — elegantly.",
    skills: ['Workflow Automation', 'API Integration', 'No-Code/Low-Code'],
  },
]

const values = [
  { icon: 'handshake', title: 'Ownership', desc: "We treat every project as if it's our own. No excuses, no handoffs without accountability." },
  { icon: 'psychology', title: 'Intellectual Honesty', desc: 'We tell clients what they need to hear, not what they want to hear. Truth builds better products.' },
  { icon: 'diversity_3', title: 'Radical Collaboration', desc: 'Diverse perspectives sharpen solutions. We actively build a team that thinks differently.' },
  { icon: 'bolt', title: 'Bias for Action', desc: 'We default to doing. A good solution shipped is better than a perfect one stuck in planning.' },
]

export default function Team() {
  return (
    <div className="bg-background text-on-surface font-body">
      <Nav />

      {/* Page Hero */}
      <section className="pt-40 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 text-primary text-xs font-label tracking-widest font-semibold mb-6">
            THE PEOPLE
          </span>
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface leading-[1.1] mb-4">
            The Minds Behind<br />
            <span className="text-primary italic font-medium">WorkAidly</span>
          </h1>
          <p className="text-on-surface-variant text-lg font-light max-w-2xl">
            A small, deliberate team of engineers, designers, and strategists united by one goal — delivering digital solutions that actually work.
          </p>
        </div>
      </section>

      {/* Thread separator */}
      <div className="px-8">
        <div className="max-w-7xl mx-auto thread-line" />
      </div>

      {/* Team Grid */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map(({ name, role, icon, color, iconColor, bio, skills }) => (
            <div
              key={name}
              className="p-8 bg-surface-container-lowest rounded-3xl group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Avatar */}
              <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6`}>
                <span className={`material-symbols-outlined ${iconColor} text-3xl`}>{icon}</span>
              </div>

              {/* Info */}
              <div className="mb-4">
                <h3 className="font-headline text-xl font-bold text-on-surface">{name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{role}</p>
              </div>

              <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-6 flex-1">{bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-surface-container-low text-on-surface-variant text-xs rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-8 bg-on-surface text-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-xl">
            <span className="text-secondary-fixed-dim font-label tracking-widest text-xs font-semibold uppercase mb-4 block">
              What Drives Us
            </span>
            <h2 className="font-headline text-4xl font-bold leading-tight">
              Our values aren't on a wall — they're in our work.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map(({ icon, title, desc }) => (
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

      {/* Join Us / CTA */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface leading-tight mb-6">
            Great work starts with the{' '}
            <span className="text-primary">right conversation</span>.
          </h2>
          <p className="text-on-surface-variant text-lg font-light mb-12 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to explore possibilities — our team is ready to listen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
            >
              Work With Us
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
