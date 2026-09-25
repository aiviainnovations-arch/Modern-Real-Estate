import { Link } from 'react-router-dom'
import { BedDouble, Bath, Ruler } from 'lucide-react'
import { handleImageError } from '../utils/imagePlaceholder.js'
import Tilt3D from './Tilt3D.jsx'

export default function PropertyCard({ property, layout = 'grid' }) {
  const isList = layout === 'list'

  return (
    <Link
      to={`/properties/${property.id}`}
      className={`group block bg-white border border-line ${
        isList ? 'sm:flex sm:items-stretch' : ''
      }`}
    >
      <div className={`[perspective:1000px] ${isList ? 'sm:w-2/5' : ''}`}>
        <Tilt3D max={5} scale={1.015} className={`img-zoom relative ${isList ? 'h-64 sm:h-full' : 'h-72'}`}>
          <img
            src={property.images[0]}
            alt={`${property.name} in ${property.location}`}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => handleImageError(e, property.name)}
          />
          <span className="absolute top-4 left-4 bg-ivory/95 text-charcoal text-xs tracking-wide px-3 py-1.5">
            {property.status}
          </span>
        </Tilt3D>
      </div>

      <div className={`p-6 ${isList ? 'sm:w-3/5 flex flex-col' : ''}`}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-2xl text-charcoal">{property.name}</h3>
        </div>
        <p className="mt-1 text-sm text-charcoal-soft">{property.location}</p>
        <p className="mt-1 text-xs tracking-wide uppercase text-bronze">{property.type}</p>

        <div className="flex items-center gap-5 mt-5 text-sm text-charcoal-soft">
          <span className="flex items-center gap-1.5">
            <BedDouble size={16} /> {property.bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={16} /> {property.bathrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler size={16} /> {property.area}
          </span>
        </div>

        <div className="flex items-center justify-between mt-6 pt-5 border-t border-line">
          <span className="font-serif text-xl text-charcoal">{property.price}</span>
          <span className="link-underline">View Property →</span>
        </div>
      </div>
    </Link>
  )
}
