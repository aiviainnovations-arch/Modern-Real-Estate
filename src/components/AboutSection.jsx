import { Link } from 'react-router-dom'
import { handleImageError } from '../utils/imagePlaceholder.js'

export default function AboutSection() {
  return (
    <section className="container-edit">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <p className="eyebrow mb-4">Our Practice</p>
          <h2 className="heading-serif text-4xl md:text-5xl leading-[1.12]">
            More than property.
            <br />
            It's where life takes shape.
          </h2>
          <p className="mt-6 text-charcoal-soft leading-relaxed max-w-md">
            For eighteen years, Luxe Estates has represented homes and
            developments we would happily live in ourselves. We work with a
            small number of clients at a time, so every search stays personal
            and every recommendation is one we'd stand behind.
          </p>
          <Link to="/about" className="link-underline mt-8 inline-flex">
            Discover Our Story →
          </Link>
        </div>

        <div className="img-zoom order-1 lg:order-2 h-[320px] md:h-[440px]">
          <img
            src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1400&q=80&auto=format&fit=crop"
            alt="A warmly lit, thoughtfully designed interior living space"
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => handleImageError(e, 'Luxe Estates')}
          />
        </div>
      </div>
    </section>
  )
}
