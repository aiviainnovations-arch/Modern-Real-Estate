const points = [
  {
    number: '01',
    title: 'Curated Properties',
    description:
      'Every listing is personally inspected before it reaches our collection — we represent a fraction of what we see.',
  },
  {
    number: '02',
    title: 'Trusted Expertise',
    description:
      'Two decades of local market knowledge, from title verification to negotiation and handover.',
  },
  {
    number: '03',
    title: 'Transparent Process',
    description:
      'Clear pricing, honest timelines and no surprises — from the first viewing to the final signature.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="container-edit">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
        {points.map((point) => (
          <div key={point.number} className="border-t border-line pt-8">
            <span className="font-serif text-3xl text-bronze">{point.number}</span>
            <h3 className="heading-serif text-2xl mt-5">{point.title}</h3>
            <p className="mt-4 text-charcoal-soft leading-relaxed">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
