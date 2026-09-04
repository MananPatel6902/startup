import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const team = [
  {
    name: 'Manan Patel',
    photo: '/team_profile_photos/Manan.jpeg',
    role: 'Co-Founder & Software Engineer',
    icon: 'terminal',
    color: 'bg-primary/10',
    iconColor: 'text-primary',
    bio: 'Manan is a co-founder of WorkAidly and a full-stack engineer focused on turning ideas into practical, dependable digital products. Alongside WorkAidly, he works as a Programmer at the INFLIBNET Centre, a Government of India institution.',
    skills: ['Full-Stack Development', 'Product Engineering', 'Technical Strategy'],
  },
  {
    name: 'Prakhyat Srivastava',
    photo: '/team_profile_photos/Prakhyat.jpeg',
    role: 'Co-Founder & Data Analyst',
    icon: 'analytics',
    color: 'bg-secondary/10',
    iconColor: 'text-secondary',
    bio: 'Prakhyat co-founded WorkAidly and brings a data-informed perspective to the products and systems we build. He works as a Data Analyst at Q-Line Biotech, combining analytical thinking with a strong understanding of software and business requirements.',
    skills: ['Data Analysis', 'Software Systems', 'Business Intelligence'],
  },
  {
    name: 'Kartikey Mishra',
    photo: '/team_profile_photos/Kartikey.jpeg',
    role: 'Full-Stack Engineer',
    icon: 'code_blocks',
    color: 'bg-tertiary/10',
    iconColor: 'text-tertiary',
    bio: 'Kartikey is a full-stack engineer who works across interfaces, application logic, and the systems that connect them. He also works at QuickSell, where he contributes to building and improving production-ready software experiences.',
    skills: ['Full-Stack Development', 'Frontend Engineering', 'Backend Systems'],
  },
  {
    name: 'Sarthak Seth',
    photo: '/team_profile_photos/Sarthak.jpeg',
    role: 'Frontend Developer',
    icon: 'web',
    color: 'bg-primary/10',
    iconColor: 'text-primary',
    bio: 'Sarthak works as a Frontend Developer at PriceLabs, building clear and reliable user-facing experiences for complex products. His experience strengthens WorkAidly’s approach to interface engineering, usability, and production-ready frontend delivery.',
    skills: ['Frontend Development', 'UI Engineering', 'Web Performance'],
  },
  {
    name: 'Ratnesh Patel',
    photo: '/team_profile_photos/Ratnesh.jpeg',
    role: 'Marketing & Client Relations Lead',
    icon: 'campaign',
    color: 'bg-tertiary/10',
    iconColor: 'text-tertiary',
    bio: 'Ratnesh leads marketing and client relationships at WorkAidly, drawing on his previous experience as a Product Manager at PhoneOn. He helps connect business requirements with clear product priorities and keeps communication aligned throughout an engagement.',
    skills: ['Client Relations', 'Product Management', 'Go-to-Market Strategy'],
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
    <div id="main-content" className="bg-background text-on-surface font-body">
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
            A focused team of engineers, analysts, product thinkers, and client partners united by one goal - delivering digital solutions that actually work.
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
          {team.map(({ name, photo, role, icon, color, iconColor, bio, skills }) => (
            <div
              key={name}
              className="p-8 bg-surface-container-lowest rounded-3xl group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Avatar */}
              <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6 overflow-hidden shrink-0`}>
                {photo ? (
                  <img
                    src={photo}
                    alt={name}
                    width="64"
                    height="64"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className={`material-symbols-outlined ${iconColor} text-3xl`}>{icon}</span>
                )}
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
              Our values aren't on a wall - they're in our work.
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
            Whether you have a project in mind or just want to explore possibilities - our team is ready to listen.
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
