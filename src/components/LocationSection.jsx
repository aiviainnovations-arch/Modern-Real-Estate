import { useState } from 'react'
import { Link } from 'react-router-dom'
import { handleImageError } from '../utils/imagePlaceholder.js'

const locations = [
  {
    name: 'Vadodara',
    count: '32 Properties',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format&fit=crop',
  },
  {
    name: 'Ahmedabad',
    count: '28 Properties',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80&auto=format&fit=crop',
  },
  {
    name: 'Surat',
    count: '19 Properties',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop',
  },
  {
    name: 'Gandhinagar',
    count: '15 Properties',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop',
  },
  {
    name: 'Mumbai',
    count: '26 Properties',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=80&auto=format&fit=crop',
  },
]

export default function LocationSection() {
  const [active, setActive] = useState(locations[0])

  return (
    <section className="container-edit">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="eyebrow mb-4">Where We Operate</p>
          <h2 className="heading-serif text-4xl md:text-5xl leading-[1.1] mb-10">
            Places we know well.
          </h2>

          <ul>
            {locations.map((loc) => (
              <li key={loc.name} className="border-t border-line last:border-b">
                <button
                  type="button"
                  onMouseEnter={() => setActive(loc)}
                  onFocus={() => setActive(loc)}
                  className={`w-full flex items-center justify-between py-5 text-left transition-colors duration-300 ${
                    active.name === loc.name ? 'text-bronze' : 'text-charcoal'
                  }`}
                >
                  <span className="font-serif text-2xl md:text-3xl">{loc.name}</span>
                  <span className="text-sm text-charcoal-soft">{loc.count}</span>
                </button>
              </li>
            ))}
          </ul>

          <Link to="/properties" className="link-underline mt-8 inline-flex">
            Browse all locations →
          </Link>
        </div>

        <div className="relative h-[340px] md:h-[460px] overflow-hidden">
          {locations.map((loc) => (
            <img
              key={loc.name}
              src={loc.image}
              alt={loc.name}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-smooth ${
                active.name === loc.name ? 'opacity-100' : 'opacity-0'
              }`}
              onError={(e) => handleImageError(e, loc.name)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
