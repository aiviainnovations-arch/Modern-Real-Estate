import { Link } from 'react-router-dom'
import { handleImageError } from '../utils/imagePlaceholder.js'

const values = [
  {
    title: 'Discretion',
    description:
      'Many of our transactions happen quietly, at the client\u2019s request. We treat every search as confidential by default.',
  },
  {
    title: 'Craft',
    description:
      'We look at construction quality, materials and design intent as closely as we look at location and price.',
  },
  {
    title: 'Long-term thinking',
    description:
      'We advise on properties the way we would if we were buying them ourselves — for the next decade, not the next sale.',
  },
]

const stats = [
  { value: '18', label: 'Years in practice' },
  { value: '640+', label: 'Homes placed' },
  { value: '8', label: 'Cities covered' },
]

const team = [
  {
    name: 'Rohan Mehta',
    role: 'Founder & Principal',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Ananya Desai',
    role: 'Head of Residential Sales',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Kunal Shah',
    role: 'Head of Projects & Development',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Priya Nair',
    role: 'Client Relations Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80&auto=format&fit=crop',
  },
]

export default function About() {
  return (
    <div className="pt-14 md:pt-20 pb-28 md:pb-36">
      {/* Hero statement */}
      <div className="container-edit mb-20 md:mb-28">
        <p className="eyebrow mb-5">About Luxe Estates</p>
        <h1 className="heading-serif text-4xl md:text-6xl leading-[1.1] max-w-3xl">
          We believe a home should be chosen as carefully as it is built.
        </h1>
      </div>

      {/* Story */}
      <section className="container-edit grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24 md:mb-32">
        <div className="img-zoom h-[320px] md:h-[460px] order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format&fit=crop"
            alt="Luxe Estates office building exterior"
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => handleImageError(e, 'Luxe Estates')}
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="eyebrow mb-4">Our Story</p>
          <h2 className="heading-serif text-3xl md:text-4xl leading-[1.15] mb-6">
            Started with a single listing in Alkapuri.
          </h2>
          <p className="text-charcoal-soft leading-relaxed mb-4">
            Luxe Estates began in 2008 with a single villa listing and a
            simple idea: represent fewer properties, but know each one
            thoroughly. What started as a two-person practice in Vadodara has
            grown into a small, senior team working across eight cities.
          </p>
          <p className="text-charcoal-soft leading-relaxed">
            We've kept the model deliberately narrow — no call centres, no
            volume targets. Every client works directly with someone who has
            walked the property themselves.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="container-edit mb-24 md:mb-32">
        <div className="bg-sand px-8 py-14 md:px-16 md:py-16 text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Our Mission</p>
          <p className="heading-serif text-2xl md:text-3xl leading-[1.4]">
            To help people find spaces that genuinely fit how they live —
            and to give sellers a process they can trust from the first
            conversation to the final handover.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="container-edit mb-24 md:mb-32">
        <p className="eyebrow mb-4">What We Value</p>
        <h2 className="heading-serif text-3xl md:text-4xl mb-12 max-w-lg">
          Three things we don't compromise on.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((v) => (
            <div key={v.title} className="border-t border-line pt-7">
              <h3 className="heading-serif text-2xl mb-3">{v.title}</h3>
              <p className="text-charcoal-soft leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="container-edit mb-24 md:mb-32">
        <div className="grid grid-cols-3 divide-x divide-line border-y border-line py-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4">
              <p className="font-serif text-4xl md:text-5xl text-bronze">{s.value}</p>
              <p className="mt-2 text-sm text-charcoal-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container-edit mb-24 md:mb-32">
        <p className="eyebrow mb-4">Our Team</p>
        <h2 className="heading-serif text-3xl md:text-4xl mb-12 max-w-lg">
          The people behind every search.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {team.map((member) => (
            <div key={member.name}>
              <div className="img-zoom h-52 sm:h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => handleImageError(e, member.name)}
                />
              </div>
              <h3 className="font-serif text-xl mt-4">{member.name}</h3>
              <p className="text-sm text-charcoal-soft mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-edit text-center">
        <h2 className="heading-serif text-3xl md:text-4xl max-w-xl mx-auto leading-[1.2]">
          Ready to start the conversation?
        </h2>
        <Link to="/contact" className="btn-primary mt-8 inline-flex">
          Get in Touch
        </Link>
      </section>
    </div>
  )
}
