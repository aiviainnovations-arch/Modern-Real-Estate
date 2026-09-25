import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BedDouble, Bath, Ruler, Building2, MapPin, ArrowLeft } from 'lucide-react'
import ContactForm from '../components/ContactForm.jsx'
import { getPropertyById } from '../data/properties.js'
import { handleImageError } from '../utils/imagePlaceholder.js'

export default function PropertyDetails() {
  const { id } = useParams()
  const property = getPropertyById(id)
  const [activeImage, setActiveImage] = useState(0)

  if (!property) {
    return (
      <div className="container-edit py-32 text-center">
        <h1 className="heading-serif text-3xl">Property not found</h1>
        <p className="mt-4 text-charcoal-soft">
          The property you're looking for may have been sold or removed.
        </p>
        <Link to="/properties" className="btn-primary mt-8 inline-flex">
          Back to Properties
        </Link>
      </div>
    )
  }

  const specs = [
    { icon: BedDouble, label: 'Bedrooms', value: property.bedrooms },
    { icon: Bath, label: 'Bathrooms', value: property.bathrooms },
    { icon: Ruler, label: 'Area', value: property.area },
    { icon: Building2, label: 'Type', value: property.type },
  ]

  return (
    <div className="pt-10 md:pt-14 pb-28 md:pb-36">
      <div className="container-edit mb-8">
        <Link to="/properties" className="inline-flex items-center gap-2 text-sm text-charcoal-soft hover:text-bronze transition-colors">
          <ArrowLeft size={16} /> Back to Properties
        </Link>
      </div>

      {/* Gallery */}
      <div className="container-edit">
        <div className="img-zoom h-[300px] sm:h-[420px] md:h-[560px] mb-3">
          <img
            src={property.images[activeImage]}
            alt={`${property.name} — view ${activeImage + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => handleImageError(e, property.name)}
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {property.images.map((img, i) => (
            <button
              type="button"
              key={img}
              onClick={() => setActiveImage(i)}
              className={`h-20 sm:h-28 overflow-hidden border-2 transition-colors ${
                activeImage === i ? 'border-bronze' : 'border-transparent'
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => handleImageError(e, property.name)}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="container-edit mt-14 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-14">
        <div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-8 border-b border-line">
            <div>
              <h1 className="heading-serif text-4xl md:text-5xl">{property.name}</h1>
              <p className="flex items-center gap-1.5 mt-3 text-charcoal-soft">
                <MapPin size={16} /> {property.locationArea}, {property.location}
              </p>
            </div>
            <p className="font-serif text-3xl text-bronze whitespace-nowrap">{property.price}</p>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-10 border-b border-line">
            {specs.map(({ icon: Icon, label, value }) => (
              <div key={label}>
                <Icon size={20} className="text-bronze mb-2.5" />
                <p className="text-lg text-charcoal">{value}</p>
                <p className="text-xs text-charcoal-soft mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="py-10 border-b border-line">
            <h2 className="heading-serif text-2xl mb-4">Overview</h2>
            <p className="text-charcoal-soft leading-relaxed">{property.description}</p>
          </div>

          {/* Highlights */}
          <div className="py-10 border-b border-line">
            <h2 className="heading-serif text-2xl mb-5">Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {property.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-charcoal-soft">
                  <span className="mt-2 w-1.5 h-1.5 bg-bronze shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery grid */}
          <div className="py-10 border-b border-line">
            <h2 className="heading-serif text-2xl mb-5">Gallery</h2>
            <div className="grid grid-cols-2 gap-3">
              {property.images.map((img) => (
                <div key={img} className="img-zoom h-40 sm:h-52">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                    onError={(e) => handleImageError(e, property.name)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="py-10">
            <h2 className="heading-serif text-2xl mb-4">Location</h2>
            <p className="text-charcoal-soft leading-relaxed mb-5">
              Located in {property.locationArea}, one of {property.location.split(',')[0]}'s
              most established residential neighbourhoods — close to schools,
              hospitals and everyday conveniences.
            </p>
            <div className="h-56 bg-sand border border-line flex items-center justify-center">
              <p className="flex items-center gap-2 text-charcoal-soft text-sm">
                <MapPin size={16} /> {property.locationArea}, {property.location}
              </p>
            </div>
          </div>
        </div>

        {/* Enquiry */}
        <aside className="lg:sticky lg:top-28 h-fit bg-white border border-line p-7 md:p-8">
          <h2 className="heading-serif text-2xl mb-2">Request Details</h2>
          <p className="text-sm text-charcoal-soft mb-6">
            Share your details and our team will reach out with more
            information and viewing availability.
          </p>
          <ContactForm variant="property" propertyName={property.name} submitLabel="Request Property Details" />
        </aside>
      </div>
    </div>
  )
}
