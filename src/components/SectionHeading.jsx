export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="heading-serif text-4xl md:text-5xl leading-[1.1]">{title}</h2>
      {description && (
        <p className="mt-5 text-charcoal-soft leading-relaxed">{description}</p>
      )}
    </div>
  )
}
