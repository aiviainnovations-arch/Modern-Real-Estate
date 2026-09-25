import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard.jsx'
import PropertyFilters from '../components/PropertyFilters.jsx'
import { properties } from '../data/properties.js'

const emptyFilters = { location: '', type: '', bedrooms: '', price: '', sort: 'default' }

export default function Properties() {
  const [searchParams] = useSearchParams()

  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    type: searchParams.get('type') || '',
    bedrooms: '',
    price: searchParams.get('price') || '',
    sort: 'default',
  })

  const filtered = useMemo(() => {
    let result = properties.filter((p) => {
      if (filters.location && !p.location.includes(filters.location)) return false
      if (filters.type && p.type !== filters.type) return false
      if (filters.bedrooms) {
        const min = filters.bedrooms === '5+' ? 5 : Number(filters.bedrooms)
        if (filters.bedrooms === '5+' ? p.bedrooms < min : p.bedrooms !== min) return false
      }
      if (filters.price) {
        const [min, max] = filters.price.split('-').map(Number)
        if (p.priceValue < min || p.priceValue > max) return false
      }
      return true
    })

    switch (filters.sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.priceValue - b.priceValue)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.priceValue - a.priceValue)
        break
      case 'area-desc':
        result = [...result].sort((a, b) => b.areaValue - a.areaValue)
        break
      default:
        break
    }

    return result
  }, [filters])

  return (
    <div className="pt-14 md:pt-20 pb-28 md:pb-36">
      <div className="container-edit mb-12">
        <p className="eyebrow mb-4">Our Collection</p>
        <h1 className="heading-serif text-4xl md:text-5xl leading-[1.1] max-w-xl">
          Explore Properties
        </h1>
        <p className="mt-5 text-charcoal-soft max-w-lg leading-relaxed">
          Filter by location, type, budget and size to find a residence that
          fits the way you want to live.
        </p>
      </div>

      <div className="container-edit">
        <PropertyFilters
          filters={filters}
          onChange={setFilters}
          onReset={() => setFilters(emptyFilters)}
          resultCount={filtered.length}
        />

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-line">
            <p className="heading-serif text-2xl">No properties match those filters.</p>
            <p className="mt-3 text-charcoal-soft">
              Try widening your search, or reset filters to see the full collection.
            </p>
            <button
              type="button"
              onClick={() => setFilters(emptyFilters)}
              className="btn-outline mt-7 inline-flex"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
